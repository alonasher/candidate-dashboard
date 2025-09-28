# Candidate Dashboard

This project is a candidate dashboard application built with React, TypeScript, and Material-UI (MUI). It fetches candidate data from a REST API and displays it in a user-friendly interface.

## Features

- Fetches candidate data from the API at `http://localhost:5000/api/candidates`
- Displays a list of candidates with their details
- Built using React functional components
- TypeScript for type safety
- Material-UI for styling and components

## Project Structure

```
candidate-dashboard-app
├── src
│   ├── components
│   │   └── CandidateList.tsx  # Component to display the list of candidates
│   ├── api
│   │   └── candidates.ts        # API calls to fetch candidate data
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Entry point of the application
│   └── types
│       └── Candidate.ts         # TypeScript interface for candidate data
├── public
│   └── index.html               # Main HTML file
├── package.json                  # NPM configuration file
├── tsconfig.json                # TypeScript configuration file
├── vite.config.ts               # Vite configuration file
└── README.md                    # Project documentation
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd candidate-dashboard-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## API

The application fetches candidate data from the following endpoint:
```
GET http://localhost:5000/api/candidates
```

## License

This project is licensed under the MIT License.