# Welcome to RideStack fullstack project
## https://ride-stack.netlify.app/

Team Contract: https://docs.google.com/document/d/1bT2tpt3oG1CYDUQSzTMGMxoCUEYVljcu9Xkkv4Oq7Io/edit

Database Structure: https://dbdiagram.io/d/63f6b628296d97641d830ce0

This fullstack RideStack app consists of:

- an Express web server,
- a PostgreSQL database instance,
- and a React front-end

# Team members
Bobby Whitacre, Ana Tran, Zack Maric 

## Project Structure

```bash
├── .github/workflows
│   └── heroku-deploy.yaml
│  
├── api
│   ├── apiRouter.test.js
│   └── index.js
│
├── db
│   ├── models
│   │   ├── index.js
│   │   └── user.js
│   ├── client.js
│   ├── index.js
│   └── init_db.js
│
├── public
│   └── index.html
│
├── src
│   ├── axios-services
│   │   └── index.js
│   ├── components
│   │   ├── App.js
│   │   └── index.js
│   ├── style
│   │   ├── App.css
│   │   └── index.css
│   └── index.js
│
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
