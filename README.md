# HOSPITAL API
----------------------------
## Summary
- This enitire app is used for checking patients during covid 19 and keeping track of their records
- The doctor maintains a database for the patient base don their phone numbers and generated reports for them with their health status and date on which check up was done.
- Wheneve the patient revisits, the same database can be accessed and next update can be added.
- The Doctor can view the patient history and also filter the patients based on their health status.
  
## Prerequisites
- Node js : 
  - Runtime env for Javascript
  - the backend is built with node js
- Express : 
  -  back end web application framework for building RESTful APIs with Node.js
- MongoDB:
  - NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
- Mongoose:
  -It is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js
- Nodemon:
  -It will monitor for any changes in your source and automatically restart your server
- Postman:
  - API platform for developers
  - easily test our api for correctness
- Passport:
  - used jwt pasoprt for login verification
  - create protected routes

## List of APIs
- localhost:8000/doctor/register : register a doctor
- localhost:8000/doctor/login : login a doctor with JWT verification
- localhost:8000/patients/register : register patient with phone numbers
- localhost:8000/patients/:id/create_report : create report for a patient
- localhost:8000/patients/:id/all_reports : check all the reports of a patient
- localhost:8000/reports/:status : check a particular status patients

## Models 
- Doctor
  - name
  - password
  
- Patient
  - name
  - phone number
  - reports
    - status
    - date
  - doctor name

