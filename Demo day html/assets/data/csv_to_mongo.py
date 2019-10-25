import csv
import json
import pandas as pd
import sys, getopt, pprint
from pymongo import MongoClient
#CSV to JSON Conversion
csvfile = open('rookies-cleanest.csv', 'r')
reader = csv.DictReader( csvfile )
mongo_client=MongoClient('localhost', 27020) 
header= ["Player","POS","Height","Weight (LBS)","Team"]
db=mongo_client.rookiedatabase
coll = db.rookieDataBase
coll.create_index('Name',unique=True)
for each in reader:
    row={}
    for field in header:
        row[field]=each[field]
    coll.insert_one(row)
return db.rookieDataBase
