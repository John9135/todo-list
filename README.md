# Project todo list

<img src="img/programate-academy.png" alt="Logo Programate">

## Description

This project allows you to create a list with the pending activities to be done by adding them to a Mongo database.

## Funcionalidades

- Create list of activity
- Delete activity

## Used technology

- Do not give
- JavaScript
- Express
- ejs
- css
- dotenv
- mongoose

## Installation

1. Clone this repository to your local machine:

git clone git@github.com:John9135/todo-list.git


2. Navigate to the project directory:

cd all set

3. You or one of your colleagues must change the origin of the repository

git remote -v

git remote remove origin

git remote add origin <new_repository_url>

4. Now, your colleagues must clone your repository and you must give them permission to edit it

From the GitHub repository, go to "Settings" and then to the "Collaborators" section to add them. This is intended to allow them to make changes. Don't worry, we'll go through this process in class."

5. Install the necessary dependencies:

* init to create the configuration file
´´´npm init ´´´

* install express
´´´npm install express´´´

* install nodemon 
´´´npm install nodemon --develop´´´

* install body-parse
´´´npm install body-parse´´´

* install dotenv
´´´npm install dotenv´´´

* install ejs
´´´npm install ejs´´´

* install mongoose
´´´npm install mongoose´´´


6. create a mongodb account if you don't have one

* create a server by entering database and then create.

* Choose the free version that is in shared

* Select the server you want to use

* Select the server closest to your country

* Press create cluster

* press connect

* press MongoDB for VS Code

* Copy the route that is in option three

* Create file . env

* Write the MONGO_DB_URI = "copy mongo link"


## Use from web

1. 
Launch the app:
'''
node index.js
'''

2. Access the API documentation in your browser:

localhost:3000


3. Try adding and removing.

## Use from postman

1. Launch the app:
'''
node index.js
'''

2. Access postman
* create a new request
* change it to post type
* Enter the following path:´´´localhost:3000/api/todo/create´´´
* Write the following command in the Body:
´´´{
     "todoValue": "todo"
}´´´



## Contact

If you have any questions or suggestions or you want the workbook to develop this project, do not hesitate to contact me at (palacioalexander5@gmail.com).


