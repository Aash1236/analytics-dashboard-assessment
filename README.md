# MapUp - EV Analytics Dashboard

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Building the Application](#building-the-application)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Description

MapUp is an analytics dashboard for analyzing Electric Vehicle (EV) population data. It provides visualizations and insights into key metrics, allowing users to make informed decisions based on the data presented.

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Router
- Vitest

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```bash
# Create a new Vite project with React template
npm create vite@latest analytics-dashboard-assessment -- --template react
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install other dependencies
npm install axios react-router-dom vitest @testing-library/react @testing-library/jest-dom

# start server
npm run dev

# Tests
npm test
    #output
    DEV  v2.1.3 C:/Users/ACER/Desktop/MapUp/analytics-dashboard-assessment


    ✓ src/main.test.jsx (1)
    ✓ src/main.test.jsx (1)
    ✓ renders App without crashing

    Test Files  1 passed (1)
        Tests  1 passed (1)
    Start at  11:17:04
    Duration  2.76s (transform 153ms, setup 0ms, collect 1.07s, tests 49ms, environment 776ms, prepare 540ms)


    PASS  Waiting for file changes...
        press h to show help, press q to quit


# Build
npm run build
```

## Deployed Link

- [EV Analytics Dashboard](https://evanalyticsdashboard.netlify.app)
