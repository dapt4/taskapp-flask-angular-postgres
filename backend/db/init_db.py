import psycopg2

#connect to the postgres db
conn = psycopg2.connect(
    host='localhost',
    database='taskapp_flask',
    user='postgres',
    password='19570744'
)

cur = conn.cursor()

cur.execute('DROP TABLE IF EXISTS task;')
cur.execute('''
    CREATE TABLE task (
    id SERIAL PRIMARY KEY,
    title varchar(150) NOT NULL,
    description text NOT NULL
    );
''')

conn.commit()

#close the connection
cur.close()
conn.close()
