## Introduction

MediConnect+ is a comprehensive application that facilitates patient-doctor interactions by providing tools for appointment scheduling and access to health reports. The application features a login and signup process, a user-friendly home page, and efficient profile and appointment management, aiming to improve the healthcare experience for both patients and medical professionals.

## Features

* **User Authentication:** Secure login with role selection (Patient). 
* **Patient Signup:** New users can create accounts with necessary personal and medical information. 
* **Home Page:** Provides a navigation bar and an introduction to the website's purpose. 
* **Patient Profile Management:** Patients can view and manage their personal information and visit history, including prescriptions, lab reports, and payment details. 
* **Appointment Booking:** Patients can schedule appointments by selecting a date and time and providing their details. 
* **Appointment Management (Medical Team):**
    * View pending appointments (using the `getPendingAppointmentList` API). 
    * Accept or reject appointments. 
    * View scheduled appointments (using the `getAcceptedAppointmentList` API). 
* **Health Reports Management:** Users can access, upload, and view health-related data. 
* **Visit History:** Doctors can access patient's appointment history. Patients also have access to their visit histories.

## Technologies Used

* React Bootstrap 
* Material UI 
* Node.js with Express (for the server) 
* MongoDB 

## Getting Started

### Prerequisites

* Node.js
* MongoDB
* npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/roopaswi42/medi-connect-
    ```

2.  Install dependencies:

    ```bash
    npm install  # or yarn install
    ```

3.  Set up the MongoDB database (see [Database Setup](#database-setup)).
4.  Configure the database connection in the server-side code.
5.  Run the application:

    ```bash
    npm start # or yarn start
    ```

## Usage

### Patient

* **Signup/Login:** Create a new account or log in to access patient features. 
* **View Home Page:** Navigate to important information and available actions. 
* **Manage Profile:** Update personal information and view visit history.
* **Book Appointments:** Schedule appointments with healthcare professionals.

### Medical Team

* **Login:** Access the appointment management features. 
* **View Pending Appointments:** Review and manage appointment requests. 
* **View Scheduled Appointments:** See the list of accepted appointments. 

## Database Setup

* The application uses MongoDB to store data. 
* Set up a MongoDB database and update the connection URI in the server configuration.
* The database schema includes collections for users, appointments, and health reports. 

## API Endpoints

* `getPendingAppointmentList`: Retrieves a list of pending appointments. 
* `getAcceptedAppointmentList`: Retrieves a list of accepted appointments.
* Signup API:  Called on signing up, stores user details in MongoDB Atlas. 
* Other API endpoints are used for user authentication, profile management, and health report management. 

## Contributing

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Push your changes to your fork.
5.  Submit a pull request.
