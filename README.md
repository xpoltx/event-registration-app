# Event Registration App

## Overview

This application allows users to register for events and view registered participants. It provides both server-side and client-side functionality.

## How to Run the Application

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB database running locally or on a remote server.

### Installation Steps

1. **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd event-registration-app
    ```

2. **Install all dependencies:**
    ```sh
    cd server
    npm install
    ```

3. **Add environment variables:**

    Create a `.env` file in the `server` directory with the following content:
    ```
    DATABASE="mongodb+srv://xcvcqwedf:pfOxdMBs2iQMUlAB@practice.vx3pv5n.mongodb.net/test-task-events?retryWrites=true&w=majority"
    PORT=3000
    ```

4. **Run the application:**

    For production mode:
    ```sh
    npm run build && npm run start
    ```

    For development mode:
    ```sh
    npm run start:dev
    ```

5. **Open the client:**

    Open `index.html` in your web browser to start using the application.

## Contact

If you need any help or have questions, feel free to contact me on Telegram:
[Telegram Contact](https://t.me/osssore)

## Hosting

I can create a tunnel from localhost to the network using ngrok. Contact me on Telegram for more details.
