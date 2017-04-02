import os, random
from datetime import timedelta, datetime
from random import randint
import requests
from flask_restful import Resource
from flask import send_file
from settings import Settings


class NasaImage(Resource):
    def get(self):
        all_files_path = os.path.join(Settings['STATIC_FOLDER'], 'backgrounds', 'space')
        all_files = os.listdir(all_files_path)
        image_files = [i for i in all_files if i.endswith('.jpg')]
        random_im = random.choice(image_files)
        full_path = os.path.join(all_files_path,random_im)
        return send_file(full_path, mimetype='image/jpg', as_attachment=False)

    def random_date(self):
        start = datetime.strptime('1/1/1997', '%m/%d/%Y')
        end = datetime.now()
        return start + timedelta(seconds=randint(0, int((end - start).total_seconds())))
