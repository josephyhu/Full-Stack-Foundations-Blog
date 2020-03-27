import datetime

from peewee import *

DATABASE = SqliteDatabase('blog.db')


class Post(Model):
    title = CharField(max_length=255)
    timestamp = DateTimeField(default=datetime.datetime.now)
    content = TextField()

    class Meta:
        database = DATABASE


def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Post], safe=True)
    DATABASE.close()
