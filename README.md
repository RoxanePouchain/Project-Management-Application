<!-- PROJECT SHIELDS -->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="./Logo Polar Fox Games.png" alt="Logo" width="80" height="80">

  <h3 align="center">Project Management Application</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#api-doc">API Doc</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

![Interface Screenshot][interface-screenshot]

As part of a study project, we were asked to create a complete application, connecting a backend to a frontend.

It is a project management application that allows users to create, manage and track the progress of different projects and related tasks. The application includes a user interface that communicates with a backend via a REST API. The backend stores data in a relational database.

### Built With

Front-end languages and tools

* [![Vue][Vue.js]][Vue-url]
* [![HTML][Html.dev]][Html-url]
* [![CSS][CSS.dev]][CSS-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

Back-end languages and tools

* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![Sequelize][Sequelize.js]][Sequelize-url]
* [![MySQL][MySql]][MySQL-url]


## Getting Started

### Prerequisites

You should first install Node Package Manager on your device
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is how you can import the project and configure it._

1. Clone the repo
   ```sh
   git clone https://github.com/RoxanePouchain/Project-Management-Application.git
   ```
2. Install NPM packages for both back-end and front-end parts
   ```sh
   npm install
   ```

3. Install Nodemon for the API, which will enables to automatically restarting the node application when file changes in the directory are detected

   ```sh
   npm install -g nodemon
   ```

For the back-end (API) part, you should have those packages installed in you node_module folder :
```json
  "dependencies": {
    "bcrypt": "^5.1.1",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mysql2": "^3.9.1",
    "sequelize": "^6.36.0"
  }
```
For the front-end part, you should have those packages installed in you node_module folder :

```json
  "dependencies": {
    "axios": "^1.6.7",
    "bootstrap": "^5.3.2",
    "pinia": "^2.1.7",
    "vue": "^3.4.15",
    "vue-router": "^4.2.5"
  }
```
_The dependencies can be found in the `package.json` file_.


4. Link your database to the API in the file `config/db.js`
```js
const sequelize = new Sequelize("your_bdd", "root", "password", {
    host: "localhost",
    dialect: "mysql",
});
```

5. Run the API
```sh
npm start
```

6. Run the front-end interface
```sh
npm run dev
```

7. Compile and Minify front-end for Production
```sh
npm run build
```


## API Doc

Wrote with apiary.io 
[APIDoc](https://projectmanagementapi4.docs.apiary.io/)

FORMAT: 1A  
HOST: https://localhost:3000/api


## Authentication Collection [/auth]

### Create a new user (signup) [POST/auth/signup]

+ Request (application/json)

        ``{
            "lastname": "Doe",
            "firstname": "Jane",
            "username": "JDoe",
            "password": "azerty"
        }``

+ Response 201 (application/json)

        {
            "message": "User added !"
        }


### Log In [POST/auth/login]

+ Request (application/json)

        {
            "username": "JDoe",
            "password": "azerty"
        }

+ Response 200

        {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwNzQ3NzI5NCwiZXhwIjoxNzA3NTYzNjk0fQ.jyWoa2eP0ieyimvGV81BpNz1lS8LC1D4b0KdFM8HMXk"
        }


## Project Collection [/project]

For each new request, open the Auth category and add your user token in the bearer field.

### Create a new project [POST/project/create]

+ Request (application/json)

        {
            "project_name": "My first project",
            "project_description": "Something new to do"
        }

+ Response 201 (application/json)

        {
          "projectId": 1,
          "project_name": "My first project",
          "project_description": "Something new to do",
          "user_Id": 1,
          "updatedAt": "2024-02-09T11:17:09.383Z",
          "createdAt": "2024-02-09T11:17:09.383Z"
        }

### Get all projects [GET/project/]

+ Response 200

        [
          {
            "projectId": 1,
            "project_name": "My first project",
            "project_description": "Something new to do",
            "user_Id": 1,
            "createdAt": "2024-02-09T11:17:09.000Z",
            "updatedAt": "2024-02-09T11:17:09.000Z"
          },
          {
            "projectId": 2,
            "project_name": "My second project",
            "project_description": "Something else to do",
            "user_Id": 1,
            "createdAt": "2024-02-09T11:26:55.000Z",
            "updatedAt": "2024-02-09T11:26:55.000Z"
          }
        ]

### Update project by id [PUT/project/create/2]

+ Request (application/json)

        {
            "project_name": "My second project",
            "project_description": "New description"
        }

+ Response 200 (application/json)

        {
          "projectId": 2,
          "project_name": "My second project",
          "project_description": "New description",
          "user_Id": 1,
          "createdAt": "2024-02-09T11:26:55.000Z",
          "updatedAt": "2024-02-09T11:28:10.000Z"
        }

### Delete project by id [DELETE/project/delete/1]

+ Response 201 (application/json)

        {
          "message": "Project deleted"
        }


## Task Collection [/task]

For each new request, open the Auth category and add your user token in the bearer field.

### Create a new task [POST/task/create/2]

+ Request (application/json)

        {
            "task_title": "First task",
            "task_description": "First task description",
            "priority": "urgent"
        }

+ Response 201 (application/json)

        {
          "message": "Task created"
        }

### Get all tasks [GET/task/2]
Get all tasks related to project_Id 2

+ Response 200

        [
          {
            "taskId": 1,
            "task_title": "First task",
            "task_description": "First task description",
            "priority": "urgent",
            "deadline": null,
            "project_Id": 2,
            "createdAt": "2024-02-09T11:35:49.000Z",
            "updatedAt": "2024-02-09T11:41:16.000Z"
          },
          {
            "taskId": 2,
            "task_title": "Second task",
            "task_description": "Second task description",
            "priority": "urgent",
            "deadline": null,
            "project_Id": 2,
            "createdAt": "2024-02-09T11:42:49.000Z",
            "updatedAt": "2024-02-09T11:42:49.000Z"
          }
        ]

### Update task by id [PUT/task/update/2/1]
Update task 1 related to project_Id 2

+ Request (application/json)

        {
            "priority": "none"
        }

+ Response 200 (application/json)

        {
          "taskId": 1,
          "task_title": "First task",
          "task_description": "First task description",
          "priority": "none",
          "deadline": null,
          "project_Id": 2,
          "createdAt": "2024-02-09T11:35:49.000Z",
          "updatedAt": "2024-02-09T11:41:16.000Z"
        }

### Delete project by id [DELETE/task/delete/2/2]
Delete task 2 related to project_Id 2

+ Response 201 (application/json)

        {
          "message": "Task deleted"
        }

<!-- ROADMAP -->
## Roadmap

- [x] Conception
  - [x] UML Diagram (Use Case, Class Diagram)
  - [x] Logical Data Model (LDM)
- [x] Create SQL database (MySQL Workbench)
- [x] API development
  - [x] Authentication Model
  - [x] Authentication Controller
  - [x] Authentication Routes
  - [x] Project Model
  - [x] Project Controller
  - [x] Project Routes
  - [x] Task Model
  - [x] Task Controller
  - [x] Task Routes
- [ ] Frontend interface
  - [x] Authentication Service
  - [x] SignUp and Login View
  - [ ] Project Store (create, get, update and delete projects and tasks)
  - [ ] Project & task Views


## Contact

Project Link: [https://github.com/RoxanePouchain/Project-Management-Application.git](https://github.com/RoxanePouchain/Project-Management-Application.git)





<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/p-roxane/
[interface-screenshot]: ./Documentation%20projet/Auth-view.png
<!-- front-end links -->
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Html.dev]:   https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[Html-url]: https://developer.mozilla.org/fr/docs/Web/HTML
[CSS.dev]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/fr/docs/Web/CSS
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
<!-- back-end links -->
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Express.js]:  https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/fr/
[Sequelize.js]: https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue
[Sequelize-url]: https://sequelize.org/
[MySql]: https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com/fr/
