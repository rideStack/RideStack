# Welcome to RideStack fullstack project
## Deployed project website: https://ride-stack.netlify.app

Team Contract: https://docs.google.com/document/d/1bT2tpt3oG1CYDUQSzTMGMxoCUEYVljcu9Xkkv4Oq7Io/edit

Database Structure: https://dbdiagram.io/d/63f6b628296d97641d830ce0

This fullstack RideStack app consists of:

- Express web server,
- PostgreSQL database instance,
- Tailwind css,
- React front-end.

# Team members
Bobby Whitacre, Ana Tran, Zeljko Maric 

## Project Structure

```bash
├── .github/workflows
│   └── heroku-deploy.yaml
│   └── validate-pull-request.yaml
│  
├── api
│   ├── apiRouter.test.js
│   └── cars.js
│   └── cart.js
│   └── favorite.js
│   └── index.js
│   └── make.js
│   └── models.js
│   └── photos.js
│   └── selectedCars.js
│   └── type.js
│   └── users.js
│   └── utils.js
│
├── db
│   └── cars.js
│   └── cart.js
│   └── client.js
│   └── favorite.js
│   └── index.js
│   └── make.js
│   └── models.js
│   └── photos.js
│   └── seedData.js
│   └── selectedCars.js
│   └── type.js
│   └── users.js
│
├── public
│   └── index.html
│
├── ridestack
│   ├── public
│   │   └── favicon.ico
│   │   └── index.html
│   │   └── manifest.json
│   ├── src
│   │   └── App.css
│   │   └── App.js
│   │   └── App.test.js
│   │   └── index.css
│   │   └── index.js
│   │   └── reportWebVitals.js
│   │   └── setupTests.js
│
├── src
│   ├── api
│   │   └── index.js
│   ├── components
│   │   ├── Account.jsx
│   │   └── Admin.jsx
│   │   └── App.jsx
│   │   └── Car_details.jsx
│   │   └── Cars.jsx
│   │   └── Cart.jsx
│   │   └── Footer.jsx
│   │   └── Home.jsx
│   │   └── index.jsx
│   │   └── Login.jsx
│   │   └── Navbar.jsx
│   │   └── NotFound.jsx
│   │   └── Register.jsx
│   ├── style
│   │   ├── App.css
│   │   └── index.css
│   └── index.js
│
├── .env
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
