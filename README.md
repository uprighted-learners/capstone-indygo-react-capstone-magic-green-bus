###Frontend###
Go to frontend in terminal and install all the packages using "npm i".
To build production project in same terminal type "npm build".
Now reference the .env template section.

###Env Template###
In the "backend" directory , create a file called ".env". The file should contain the following: 

PORT = (THIS CAN BE ANY NUMBER ABOVE 5000)
SALT = A WHOLE NUMBER BETWEEN 8 AND 10 (THIS IS THE WAY TO ENCRYPT THE PASSWORD)
MONGO_URI = This is the connection string to connect the Mongo Atlas Cluster (that you must set up)
JWT_SECRET = Any string of characters (this is the key to decrypt passwords)

In the "frontend" directory. create a file called ".env". The file should contain the following:

REACT_APP_API_URL = A string that contains the "localhost" and the "PORT number" seperated by a colon (this line is only used for local work)

###Backend###
In the terminal, go to "backend" directory and install all the packages using "npm i"
To launch project, in same terminal type "npm run dev".
If succesful, terminal will state "Connected to port {PORT}" and "MongoDB connected".The {PORT} will be the port you declared in your backend ".env" file.  

If everything is a success then open your browser and navigate to "http://localhost:{PORT}". The {PORT} will be the port you declared in your backend ".env" file.

Congratulations! The IndyGo capstone project should now be running locally

If you have any questions or need any support please reach out to: @ivapbj @RyanF8 @alexaubinpng @qlansb
