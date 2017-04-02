from flask import Flask
from flask_restful import Api
from random_image import RandomImage
from nasa_image import NasaImage
from dweet import Dweet

app = Flask(__name__)
api = Api(app)
api.add_resource(RandomImage, '/api/v1/glitch')
api.add_resource(NasaImage, '/api/v1/space')
api.add_resource(Dweet, '/api/v1/dweets')

if __name__ == '__main__':
    app.run(debug=True, port=4201)
