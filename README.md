# Pilotage Service Data Query Interface

## Introduction
This web application is a data query interface for the Pilotage Service. It is built using React, TypeScript, and Vite. The application is designed to be a simple and user-friendly interface for querying data from the Pilotage API.

## Setup
1. Clone the repository
```bash
git clone https://github.com/samuelmui8/pilotage-service-data-interface.git
```
2. Install dependencies
```bash
cd frontend
npm install
```
3. Start the development server
```bash
npm run dev
```
4. Open the application in your browser at `http://localhost:5173/`

## Design Decisions
- Assumption: The date of the arrival, pilot board time, start time, end time will be the same as the service request date. Hence, I only display the time for each column in the table, so that drivers can easily see the time of each event.
- Split pilotage data into multiple tables based on their trip so that drivers can easily find the data they need, with the latest trip displayed at the top.
- Display only the top row of each table as this will be updated with the latest data. We do not need the previous rows as they contain repeated outdated data. The snapshot time is displayed at the bottom of each table to indicate when the data was last updated.
