# Coin Watch

A real-time cryptocurrency price dashboard built with Next.js/React.js, Redux, MongoDB and WebSocket.

## Table of Contents

- [Coin Watch](#coin-watch)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Setting Up the Backend Server](#setting-up-the-backend-server)
    - [Running the Project](#running-the-project)
  - [Contributing](#contributing)
  - [License](#license)

## Overview

This project is a real-time cryptocurrency price dashboard that displays the current prices of selected cryptocurrencies. The prices are fetched from a WebSocket server and displayed in a dynamic table. Users can select different cryptocurrencies from a dropdown to see their current prices.

## Features

- Real-time price updates via WebSocket
- Dynamic selection of cryptocurrencies
- Responsive design

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [MongoDB](https://www.mongodb.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- TypeScript

### Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/AprajitKatiyar/coin-watch.git
    ```


### Setting Up the Backend Server

Before running the project, ensure you have the Backend server running.

1. **Install Dependencies**

    ```sh
    cd backend
    npm install
    ```
   or if you use yarn

    ```sh
    yarn install
    ```
2. **Set up Environment Variables**

    ```sh
    cp .env.example .env
    ```
    Set the `LIVECOINWATCH_API_KEY` otained from [LiveCoinWatch](https://www.livecoinwatch.com/tools/api#try)

    Set the `MONGODB_URI`

    


### Running the Project

1. **Start the backend server**

    ```sh
    cd backend
    npm run dev
    ```
The backend server should be up and running.

2. **Start the frontend**

    ```sh
    cd frontend
    npm run dev
    ```

The frontend should be up and running.

    

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
