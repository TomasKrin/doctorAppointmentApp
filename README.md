# doctorAppointmentApp

  This is an app built with the React library, where you can enter your name, last name, choose a date and time for a doctor's appointment. 
You can only register once a week, and appointments can only exist once at a time. All existing appointments are shown on the home screen 
in a scheduler-type calendar.

  Technologies used for this project:

    1.React (Front-End):
    
     1.1. Axios
     1.2. React-Query
     1.3. Material-UI (MUI)
     1.4. Formik
     1.5. Yup
     1.6. Moment.js
     1.7. React Full Calendar
     1.8. React Router DOM
     1.9. React Hot Toast
     1.10. React Loader Spinner
     
    2. Node (Back-End):
      
     2.1. Express
     2.2. Dotenv
     2.3. Moment.js
     2.4. Cors
     2.5. MongoDB
     2.6. Nodemon
     
    3. MongoDB (as the database)

    4. Yarn (as the package manager)

    5. Vite (as the build tool)

    6. VSCode (as the code editor)

  To install this project on your computer:

     1. You need to install Node.js and npm (they are both installed when you install Node.js). 
    Visit the Node.js website to download the LTS version: https://nodejs.org/en/download/
    After the installation completes, you can check if everything is installed correctly by typing "node -v" and "npm -v" in your terminal. 
    If the versions are shown, you're good to go. 
    
     2. To install Yarn, visit the following link for instructions: https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

  Next, you need to clone this project to your computer:
  
    1. Click this button: 
    <img width="74" alt="Screenshot_18" src="https://github.com/TomasKrin/doctorAppointmentApp/assets/113928717/41802a87-b013-49b8-9217-be2710c43788">
    2. Copy this URL: 
    <img width="295" alt="Screenshot_19" src="https://github.com/TomasKrin/doctorAppointmentApp/assets/113928717/bc809495-0f87-4323-878c-b972434a1149">
    3. Open your terminal (e.g., Git Bash).
    4. Navigate to the directory, where you want to clone the project.
    5. Type "git clone" followed by the URL you copied.
    6. Hit Enter to clone the project.
    7. Open the project folder with your code editor (e.g., VSCode).
    
  After cloning, use the integrated terminal in VSCode:

    1. The front-end code is located in the "client" folder, and the back-end code is located in the "server" folder.
    2. Open two integrated terminal tabs, one for the front-end and one for the back-end.
    3. In the first tab, navigate to the "client" folder, and in the second tab, navigate to the "server" folder.
    4. Type "yarn" in both terminal tabs and wait for all the dependencies to be installed.
    
  You will need to use a MongoDB database, so you must set up a MongoDB account:

    1. Follow the link to learn how to set up MongoDB: https://www.mongodb.com/basics/get-started.
    2. Install MongoDB Compass to create your database and collections.
    3. In this project, I named my database "DoctorAppointmentApp" and used one collection called "appointments." 
    You can name your database and collection however you like, but if you do, you will need to change the corresponding values in the "server" 
    folder's index.js file to connect to the database properly.
    4. The document structure inside your collection should look like this:

        "person": Name Lastname
        "date": Date of the appointment in "yyyy-MM-dd" format
        "start": Start time of the appointment in "HH:mm" format
        "end": The end time is automatically calculated in the frontend as one hour after the "start" time in "HH:mm" format.



  Set up the ".env" file to match the ".env.example" file, but with your own information filled in.

    Link to the MongoDB URI guide: https://www.mongodb.com/docs/manual/reference/connection-string/
    
  Use the command "yarn dev" in both terminal tabs to run the project on your computer.

  Here are a few screenshots of the project:
  
<img width="1120" alt="Screenshot_20" src="https://github.com/TomasKrin/doctorAppointmentApp/assets/113928717/3b2c0e70-46e4-486b-924e-012b58f47ea5">

<img width="1120" alt="Screenshot_17" src="https://github.com/TomasKrin/doctorAppointmentApp/assets/113928717/45a17981-7c62-47d7-84b7-2b3b3eea5ced">

Project demo: https://tomaskrin.github.io/doctorAppointmentApp/
