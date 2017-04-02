import os, random
from flask_restful import Resource
from flask import send_file
from settings import Settings


class RandomImage(Resource):
    def get(self):
        all_files_path = os.path.join(Settings['STATIC_FOLDER'], 'backgrounds', 'glitch')
        all_files =os.listdir(all_files_path)
        image_files = [i for i in all_files if i.endswith('.gif')]
        random_im = random.choice(image_files)
        full_path = os.path.join(all_files_path, random_im)
        return send_file(full_path, mimetype='image/gif', as_attachment=False)
