#taskapp-flask-angular-postgres

![image](https://user-images.githubusercontent.com/67972962/220691097-99d94cc4-6c64-4a1a-ab7a-18437fa7a9b6.png)

first create your virtualenv

`$ cd backend`

`$ python3 -m venv venv`

activate venv

`$ source venv/bin/activate`

then install requirements

`$ pip install -r requirements.txt`

install postgresql, login and create the database

`CREATE DATABASE <yourDBname>;`

create a .env file in the root folder

`$ touch .env`

and add your postgresql credentials and the app SECRET_KEY to .env file

>ENV_SECRET_KEY="{add a secret key like bhajfbkjhawbdkjhabdjh}"\
ENV_NAME='{yourDBname}'\
ENV_HOST='{your host or localhost}'\
ENV_PORT='{your db port or 5432}'\
ENV_USER='{your db user}'\
ENV_PASSWORD='{your db password}'

finally the project run with: 

`$ flask --app app run`

open your browser or your REST Client in: 

###get all tasks
`GET http://localhost:5000`\
###get a task
`GET http://localhost:5000/task/5`\
###create a new task
`POST http://localhost:5000/task`\
###edit a task
`PUT http://localhost:5000/task/6`\
###delete a task
`DELETE http://localhost:5000/task/7`

active the frontend with:

`cd ../frontend`\
`ng serve`

open the browser in:

`localhost:4200`
