# Candidate Dashboard

This project is a candidate dashboard application built with React, TypeScript, and Material-UI (MUI). It fetches candidate data from a REST API and displays it in a user-friendly interface. Filtering and table display are included, and the codebase is organized for scalability and testability.

## Features

- Fetches candidate data from the API at `http://localhost:5000/api/candidates`
- Displays a list of candidates with their details
- Filter candidates by name, position, status, and experience years
- Reset filters to show all candidates
- Built using React functional components
- TypeScript for type safety
- Material-UI for styling and components
- Utility functions separated for filtering logic
- Unit tests for filtering and dashboard logic using Vitest and Testing Library

## Project Structure

```
candidate-dashboard
├── src
│   ├── components
│   │   ├── CandidateDashboard.tsx   # Main dashboard component
│   │   ├── CandidateTable.tsx       # Table display for candidates
│   │   └── CandidateFilters.tsx     # Filter controls
│   ├── api
│   │   └── candidates.ts            # API calls to fetch candidate data
│   ├── utils
│   │   ├── filterCandidates.ts      # Filtering logic
│   │   └── filterCandidates.test.ts # Unit tests for filtering
│   ├── types
│   │   ├── Candidate.ts             # Candidate type definition
│   │   └── Filter.ts                # Filter type definition
│   ├── App.tsx                      # Main application component
│   ├── main.tsx                     # Entry point of the application
├── public
│   └── index.html                   # Main HTML file
├── package.json                     # NPM configuration file
├── tsconfig.json                    # TypeScript configuration file
├── vite.config.ts                   # Vite configuration file
└── README.md                        # Project documentation
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/alonasher/candidate-dashboard.git
   ```

2. Navigate to the server directory and install dependencies:
   ```
   cd candidate-dashboard/server
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

4. Open a new terminal, navigate to the client directory and install dependencies:
   ```
   cd ../client
   npm install
   ```

5. Start the client development server:
   ```
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000` to

## Running Tests

Unit tests are written using Vitest and Testing Library.  
To run tests:
```
npm run test
```

## API

The application fetches candidate data from the following endpoint:
```
GET http://localhost:5000/api/candidates
```

## License

This project is licensed under
