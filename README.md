# backend

 GET /
 ---------
 ---
 A link to the API can be found at [this link](https://airbnb-bw-backend.herokuapp.com/ "API Homepage") 

API URL is:

 https://airbnb-bw-backend.herokuapp.com/


 You should get a message that looks like this:

 ![API-UP](documentation/api-up.png "api up")


 ----------------------

 Endpoints
 ---------
 ---


 | Login    |   Register    | Users |
 |----------------|:------------------:|-----:|
 | _api/auth/login_ | _api/auth/register_ | _api/users_ |
---


## Login
---
To log in use the following steps in order:

__NOTE:__ You can NOT login a user without registering a user first. This is only true for the initial login / registration of a new user. Existing users can login. Failing to do so may or may not result in an error.

1. To Login you will need to send a request to the API with the login data.
   * The data should be _JSON_ data with the following shape:

    ```
            "username" : "MyUsername",
            "Pasword": "MyPassword"
    ```
    * Once you successfully login you should recieve a JSON response with the following data: 
        ``` 
        {
        "message": "Welcome to our API",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6IkNocmlzdG9waGVyIiwiaWF0IjoxNjAwNzIwNzMwLCJleHAiOjE2MDA3MjQzMzB9.__SevXXb6OXZO_TXfhLe88_cgppEGhgG_Ag5Vw28qsw" 
        }
        ```
        _NOTE_: The token will be different everytime you login, you won't need the token and this is returned solely for backend development purposes



2. Once logged in you can access the _Users_ endpoint the _Users_ endpoint will provide a list of all registered users:

    _NOTE:_ Accessing a list of all users is only available for users who have admin access.

    * The shape of the user data that is returned from _/api/users_ is:
    
    ```
    [
        {
            "id": 1,
            "username": "Chris"
        },
        {
            "id": 3,
            "username": "Christopher"
        }
    ]
    ```

