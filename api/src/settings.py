import os
from dotenv import load_dotenv

if(os.path.exists('.env')):
    dotenv_path = os.path.join('.env')
    load_dotenv(dotenv_path)

Settings = {
    'STATIC_FOLDER': os.environ.get('STATIC_FOLDER'),
    'NASA_API_KEY': os.environ.get('NASA_API_KEY')
}
