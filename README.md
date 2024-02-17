# Requirements Gathering Form for Clients

This project aims to provide a platform for clients to describe their needs by filling out a requirements gathering form. The form includes various fields related to the project details, such as project name, type, user profiles, budget, reference websites, company logo, technologies preferences, timeline, etc.

## Features

- Allows clients to input project details through a user-friendly form.
- Validates input fields to ensure all required information is provided.
- Submits the gathered information to a server for storage and further processing.

## Technologies Used

- React.js for frontend development.
- Node.js for backend server.
- MongoDB for database storage.

## Setup Instructions

1. Clone the repository:

2. Install dependencies for both frontend and backend:

3. Set up MongoDB:

   - Install MongoDB on your system if not already installed.
   - Start the MongoDB service.

4. Configure backend:

   - Create a `.env` file in the `backend` directory.
   - Add MongoDB connection URI in the `.env` file:


5. Start the backend server:


6. Start the frontend development server:


7. Access the application in your browser at `http://localhost:3000`.

## Usage

- Clients can access the form and fill in the required details.
- Upon submission, the data is sent to the backend server for storage and processing.



