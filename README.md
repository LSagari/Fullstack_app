
## Problem

Your task is to create a full-stack application that can do the following:

- Allows admin to create and save employees and their metadata (name, designation, CTC, and email)
- Allows admin to create and save vendors and their metadata (name, email, upi)
- Allows admin to send an email to a list of vendors with a templated message (i.e. "Sending payments to vendor { name } at upi { upi }") and sends the email with the templated fields populated
- Allows admin to view all the emails that have been sent to vendors
- Allows admin to view all vendors and employees that he has created

You can make the following assumptions

- Email is a unique identifier for both vendors and employees
- Assume the data passed into the API endpoints will be valid (i.e. you don't need to check for bad request data)

The backend should persist the data (in-memory is sufficient). For sending email, you typically would rely on using a third-party email sending client such as sendgrid but used SMTP in the project. However, in this exercise, simply mock the email client on the backend and have it print out what the email will look like when someone makes an API request.

op:
![Screenshot 2024-07-13 185216](https://github.com/user-attachments/assets/71502239-ab85-462c-b71f-eec444a9dcc2)

Used Java with springboot as backend, React for the frontend and SMTP to send the mail, h2 db for testing.


