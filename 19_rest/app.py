# Team Monday - Ishita Gupta, Liam Kronman
# SoftDev
# K19 -- A RESTful Journey Skyward/Use urllib to request and recieve data from a restful api
# 2021-4-5

from flask import Flask, render_template
import urllib
import json
app = Flask(__name__) 

@app.route("/") 
def main():
    # open the file containing the api key
    with open('key_nasa.txt', 'r') as files:
        key = files.read()
    # append api key to rest of the url
    url = "https://api.nasa.gov/planetary/apod?api_key=" + key
    # send http request to the domain and save response
    with urllib.request.urlopen(url) as response:
        # convert response from http request to bytes
        resp = response.read()
        # convert bytes to python dictionary 
        resp = json.loads(resp)
    return render_template('main.html', resp = resp)

app.run()