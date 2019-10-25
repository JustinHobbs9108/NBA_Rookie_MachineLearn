from flask_pymongo import PyMongo
import flask 
import os 
import sys
import math
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect
)
import json
from bson import json_util
from bson.json_util import dumps

app = Flask(__name__)
app.config ['MONGO_URI'] = 'mongodb://localhost:27017/RookieDataBase'
mongo = PyMongo(app)

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/rookie')
def getRookieData():
    data = mongo.db.rookieDataBase.find()
    datalist=[]
    for item in data:
        item.pop("_id")
        datalist.append(item)
    return jsonify(datalist)

    
if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)



