scenario:
 as a merchant, I receive a transaction every day from clients where each transaction contains 
 { 
     amount:[number]
     merchantId:[mongoId]
     currency:[USD,EGP,EUR]
     operation:[pay,refund]
 }
 notify merchant at the end of the day with a report :
 the mail report should include details about pay and refund transactions in table
 with different currencies over day
 
 requirements:
     1- Mongodb model and integrate with mongoatlas.
     2- CRUD Endpoints for transactions and consume these endpoints in angular project.
     3- Send daily mail at the end of the day with the attached schema.

 notes:
     1- Push your code on source control.
     2- Deploy it on any free cloud provider like (i.e., heroku).
     3- Dockerize your code.
     4- Apply solid and Rest principles.
     5- Using functional programming is preferable.
     6- Document your code in postman or swagger.