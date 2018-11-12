# The Pied Piper

This project is a server and API built with Node.js, Express.js, and Socket.IO frameworks and libraries. It is a simple server which has an API for modifying a file with JSON in it, representing a database.

## Setup

Make sure you have Node.js v10.13.0 and NPM v6.4.1 or higher installed on your computer. Clone this repository to your local computer, browse to the directory of the project in the terminal, and run ``npm install`` to install dependencies. Then do ``npm start`` to start the server on the local computer, with default port being 3000. To run tests, run ``npm test``.

## Endpoints

- "/update": When JSON is sent with a POST request, the "data.txt" file which has JSON will be updated to have the contents of the JSON payload that was sent. A Socket.IO event on the 'update' channel will communicate the contents of this payload if it's successfully added to the "data.txt" file.
- "/search": When plain text is sent with a POST request, the plain text will serve as a key to a key-value pair lookup for object properties in the "data.txt" file. It will attempt to search for the value corresponding to the key in the object, and if it exists, it will return the value in plain text. Otherwise it will return an error stating the key was not found.

## Structure

This project is split up into 3 main files: "server.js", "logic.js", and "data.txt". 

"server.js" serves as the base server, where a Socket.IO listener and main HTTP server is run from. The main post listeners are setup here as well. The body of the requests are sent to the corresponding functions to process them in the "logic.js" file. You can change the port from port 3000 to whatever else you like here.

"logic.js" is where the processing of the data is done. It has a direct reference to the "data.txt" file where our data is stored. Here we do the actual computation of the API endpoints, computing the KVP lookup and the updating of the JSON file. The Socket.IO client is also in here, which is called if we successfully update the JSON file.

Finally the "data.txt" file is where our data is stored, in JSON format. This acts as our "database" for this application, which the "logic.js" file directly interacts with.