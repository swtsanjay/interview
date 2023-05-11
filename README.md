# Getting Started with this project

## Run below commands to init the project

### `npm install`
#

## Run below commands to run the project on local

### `npm run dev`
#

## Run below commands to run the project on server

**Note: First of all you will have to set `NODE_ENV` in .env file from `local` to `prod`**

### `npm start`

#

## .env File
For Databse connection, JWT Time duration you will have to change .env file

#


I am attaching  **Int.postman_collection.json** for postman collection. This postman collection has 5 APIs 

* Signup API (POST Request)
* Login API (POST Request)
* Update Profile API (PUT Request)
* Change Password API (PUT Request)
* Get Profile Details API (GET Request)

Once you successfully signedup, your account will be created and you can login.
Once you successfully Loggedin, you will get an access token in responce. To hit anther APIs you will have to pass the access token in header of every request
**(You can do it simply for all APIs by putting access token in bearer token in authorizarion tab of postman collection)**

#