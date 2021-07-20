# back-end-stuff
back-end for experimenting web development

Language: JavaScript

DB: MongoDB

As specified, an HTTP Server that can store [POST], update [PUT, PATCH], and retrieve [GET] information about the VIPs. Bear in mind I only use postman to check these POST, PUT, and GET methods. Also, I'm still unable to figure out how to store the photo with url. This code will catch any redundancy and inconsistency though.

How to use?
System must already installs Node Package Manager (NPM).
1. User download this repo and extract on their device
2. User navigate to this repo folder with their preferred IDE
3. Every dependencies is specified in package.json and also needs to be installed via "npm install x", where x is the dependencies specified in said file.
4. User starts the npm server via their terminal IDE/OS terminal/cmd, be in mind the url of this web server is http://localhost:5000
5. To start inputing vip data, user must login as an admin first, if it's first time run then user must register an admin account
6. Navigate to http://localhost:5000/api/user/register via postman (preferably) then input data like this: https://ibb.co/47cVxhj then press send
7. Now you can login with the email and password specified from registration, navigate to http://localhost:5000/api/user/login then input data like this: https://ibb.co/sPfhM0K to login, the postman will give you a token that you need to copy
8. On the postman, click the header tab and on KEY input, type in 'auth-token' and paste your copied token in the VALUE input, this image might be a good reference: https://ibb.co/WDT68GD
9. Now user is able to input vip data, navigate to http://localhost:5000/api/user/vip-input to start adding data, the format is like this: https://ibb.co/7j8H2SX
10. User may also edit vip data with PUT method, to any parameter of the schema

Limitation(s):
1. As I've said, unable to receive url link for photo, nor the image file
2. Postman doesn't automatically save your login token, so you need to add it manually
