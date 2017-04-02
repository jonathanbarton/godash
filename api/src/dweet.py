import dweepy
from flask_restful import Resource

class Dweet(Resource):
    def get(self):
        things = ['mhe_dev_thing1','mhe_dev_thing2','mhe_dev_thing3','mhe_dev_thing4','mhe_dev_thing5','mhe_dev_thing6']
        dweet = dweepy.get_dweets_for('mhe-dev-thing1')
        return dweet
