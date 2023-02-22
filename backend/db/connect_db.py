import psycopg2
import os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '../.env')
load_dotenv(dotenv_path)

def connect():
    return psycopg2.connect(
        host=os.environ.get('ENV_host'),
        database=os.environ.get('ENV_database'),
        user=os.environ.get('ENV_user'),
        password=os.environ.get('ENV_password')
    )

def runCommand(cmd, *args):
    conn = connect()
    cur = conn.cursor()
    if not args:
        cur.execute(cmd)
    else:
        for arg in args:
            cur.execute(cmd, arg)
    conn.commit()
    result = cur.fetchall()
    response = convertResult(result)
    cur.close()
    conn.close()
    return response

def convertResult(data):
    result = [];
    for row in data:
        result.append({"id": row[0], "title":row[1], "description": row[2]})
    return result
