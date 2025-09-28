# Express Server App

This project is an Express server application that serves mock data. It is structured to demonstrate the use of TypeScript with Express, including routing and data handling.

## Project Structure

```
express-server-app
├── src
│   ├── app.ts               # Entry point of the application
│   ├── data
│   │   └── mockData.ts      # Contains static mock data
│   ├── controllers
│   │   └── dataController.ts # Handles data retrieval
│   ├── routes
│   │   └── dataRoutes.ts     # Sets up application routes
│   └── types
│       └── index.ts          # Type definitions
├── package.json              # NPM package configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/express-server-app.git
   ```

2. Navigate to the project directory:
   ```
   cd express-server-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run the following command:
```
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

- `GET /data` - Retrieves the mock data.

## Mock Data Structure

Each entry in the mock data includes the following fields:
- `name`: The name of the individual.
- `email`: The email address of the individual.
- `position`: The job position of the individual.
- `status`: The employment status (e.g., active, inactive).
- `experienceYears`: The number of years of experience.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.