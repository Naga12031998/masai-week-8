from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

import csv
import json

@app.route('/addedfood')
def see_added_food():
    arr = []
    with open('data/addfood.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for line in reader:
            arr.append(line)
    return json.dumps(arr)

# def write_csv(arr):
#     with open('data/addfood.csv', 'w') as csvfile:
#         fieldnames = ['name', 'food', 'price']
#         writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
#         writer.writeheader()
#         for line in arr:
#             writer.writerow(line)

@app.route('/create', methods = ['POST'])
def home():
    name = request.json['name']
    food = request.json['food']
    price = int(request.json['price'])
    with open('data/addfood.csv' , 'a') as csvfile:
        fieldnames = ['name', 'food', 'price']
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        # writer.writeheader()
        writer.writerow({'name' : name, 'food' : food, 'price' : price})
    return json.dumps({'Status' : 'Your food has been added successfully'})

@app.route('/eatnow')
def eatnow():
    arr = []
    with open('data/eatnow.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for line in reader:
            arr.append(line)
    return json.dumps({'data':arr})

@app.route('/eatlater')
def eatlater():
    arr = []
    with open('data/eatlater.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for line in reader:
            arr.append(line)
    return json.dumps({'data':arr})