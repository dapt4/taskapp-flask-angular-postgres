from flask import Flask, jsonify, request
from db.connect_db import runCommand, connect
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#list tasks
@app.route("/", methods=['GET'])
def list():
    cmd = 'SELECT * FROM task;'
    tasks = runCommand(cmd)
    return jsonify(tasks)

#get a task
@app.route("/task/<int:id>", methods=['GET'])
def getTask(id):
    cmd = 'SELECT * FROM task WHERE id = %s'
    data = (id,)
    result = runCommand(cmd, data)
    return jsonify(result[0])

#new task
@app.route('/task', methods=['POST'])
def new():
    cmd = 'INSERT INTO task (title, description) VALUES (%s, %s) RETURNING *;'
    data = (request.json['title'], request.json['description'])
    result = runCommand(cmd, data)
    return jsonify(result)

#edit task
@app.route('/task/<int:id>', methods=['PUT'])
def edit(id):
    cmd = 'UPDATE task SET title = %s, description = %s WHERE id = %s RETURNING *'
    data = (request.json['title'], request.json['description'], id)
    result = runCommand(cmd, data)
    return jsonify(result)

#delete a task
@app.route('/task/<int:id>', methods=['DELETE'])
def delete(id):
    cmd = 'DELETE FROM task WHERE id = %s RETURNING *'
    data = (id,)
    result = runCommand(cmd, data)
    return result
