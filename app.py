from flask import Flask, redirect
from flask_cors import CORS

import models
from resources.posts import posts_api

import config

app = Flask(__name__)
app.register_blueprint(posts_api)

CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/')
def posts():
    return redirect('api/v1/posts')


if __name__ == '__main__':
    models.initialize()
    app.run(debug=config.DEBUG, host=config.HOST, port=config.PORT)
