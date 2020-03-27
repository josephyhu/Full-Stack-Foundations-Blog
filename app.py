from flask import Flask
from flask_cors import CORS

import models
from resources.posts import posts_api

import config

app = Flask(__name__)
app.register_blueprint(posts_api)

CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/')
def hello_world():
    return 'Hello world'


if __name__ == '__main__':
    models.initialize()
    app.run(debug=config.DEBUG, host=config.HOST, port=config.PORT)
