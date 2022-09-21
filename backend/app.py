from random import randint
from flask import Flask
from flask_cors import CORS

import time

app = Flask(__name__)
CORS(app)

DATA = [
    {"id": 1, "name": "job-1", "salary": 1000, "counter": 0},
    {"id": 2, "name": "job-2", "salary": 1500, "counter": 7},
    {"id": 3, "name": "job-3", "salary": 2000, "counter": 3},
    {"id": 4, "name": "job-4", "salary": 2500, "counter": 2},
    {"id": 5, "name": "job-5", "salary": 3000, "counter": 5},
    {"id": 6, "name": "job-6", "salary": 3500, "counter": 1},
    {"id": 7, "name": "job-7", "salary": 4000, "counter": 2},
    {"id": 8, "name": "job-8", "salary": 4500, "counter": 1},
    {"id": 9, "name": "job-9", "salary": 5000, "counter": 8}]
DELAY = 0.3


@ app.route("/")
def hello_world():
    time.sleep(DELAY)
    return "Hello"


@ app.route("/jobs")
def posts():
    time.sleep(DELAY)
    return DATA


@app.route('/job/<int:job_id>')
def show_job(job_id):
    time.sleep(DELAY)
    for job in DATA:
        if job.get('id') == job_id:
            return job
    return {}, 404


if __name__ == "__main__":
    app.run(debug=True, port=5000)
