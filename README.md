# Matkrasslig

Call a volunteer nearby if you need help with buying your groceries, or anything else.

## Features
 - No buttons required, just call the number: XXX-XXX XX XX
 - Allows you to feel good about yourself

## Installation
There are two parts to the project
 - Server -- handles the data and api calls
 - Client -- handles the userinterface

### Server
The server is (probably) written in python (`3.7.5`) and can be installed with (from the root directory)
```
cd server && python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt
```
If(when) you install new dependencies, add them with `pip freeze > requirements.txt` and make sure you are running in a virtual environment, otherwise **all** of your installed packages will be added to the release. If anything is missing the deployment will fail.

To run the api simply navigate to the `server` folder and do `flask run`, the server will be available on port 5000 by default.

### Client
To be determined, but I think that [create-react-app](https://github.com/facebook/create-react-app) is worth considering.

