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


 | Login    |   Register    | Users | Listings |
 |----------------|:------------------:|:---------------:|-------------------:|
 | _api/auth/login_ | _api/auth/register_ | _api/users_ | _api/listings_ |
---

## Register
---
1. To register a user you will need to send data to _api/auth/register_ endpoint:
   * The shape of the user data should have the following shape:
    ```json
        {
          username: "Chris",
          password: "12345",
          first_name: "Christopher",
          last_name: "Harwell",
          address: "1234 Main St, Somewhere, OH, 12345",
          age: 26,
          birthday: "10 - 14 - 1994",
          country: "USA"
        }
    ```
2. Once a new user registered the API will return JSON data with the following shape:
   ```json
        {
        "data": {
            "id": 3,
            "username": "Christopher",
            "password": "$2a$08$xQn32X30yBUqvdZKF3k3S.EZCSRy9MVN1hkhBQvxO3xbDCjMmJgMC"
            }
        }
    ```
---
## Login
---
To log in use the following steps in order:

__NOTE:__ You can NOT login a user without registering a user first. This is only true for the initial login / registration of a new user. Existing users can login. Failing to do so may or may not result in an error.

1. To Login you will need to send a request to the API with the login data.
   * The data should be _JSON_ data with the following shape:

    ```json
            "username" : "MyUsername",
            "Pasword": "MyPassword"
    ```
    * Once you successfully login you should recieve a JSON response with the following data: 
        ```json 
        {
        "message": "Welcome to our API",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6IkNocmlzdG9waGVyIiwiaWF0IjoxNjAwNzIwNzMwLCJleHAiOjE2MDA3MjQzMzB9.__SevXXb6OXZO_TXfhLe88_cgppEGhgG_Ag5Vw28qsw" 
        }
        ```
        _NOTE_: The token will be different everytime you login, you won't need the token and this is returned solely for backend development purposes



2. Once logged in you can access the _Users_ endpoint the _Users_ endpoint will provide a list of all registered users:

    _NOTE:_ Accessing a list of all users is only available for users who have admin access.

    * The shape of the user data that is returned from _/api/users_ is:
    
    ```json
    [
        {
            "username": "Chris",
            "first_name": "Christopher",
            "last_name": "Harwell",
            "address": "1234 Main St, Somewhere, OH, 12345",
            "age": 26,
            "birthday": "10 - 14 - 1994",
            "country": "USA"
        },
        {
            "username": "rjarrell",
            "first_name": "Roger",
            "last_name": "Jarrell",
            "address": "1234 Main St, Somewhere, OH, 12345",
            "age": 26,
            "birthday": "10 - 14 - 1994",
            "country": "USA"
        }
    ]
    ```
-----
## Listings
---

Once a new user is registered or a existing user logs in, they will have the ability to view listings

 ## GET /
 ----
 returns listings
 - the data returned will look like:
```json
[
    {
        "id": 2,
        "userId": 1,
        "name": "Chris",
        "room_type": "large",
        "minimum_nights": 3,
        "maximum_nights": 6,
        "location": "Japan",
        "price": 255.99,
        "accomodates": 3,
        "bathrooms": 2,
        "bedrooms": 2,
        "beds": 3,
        "guests_included": 2
    },
    {
        "id": 4,
        "userId": 1,
        "name": "Chris",
        "room_type": "large",
        "minimum_nights": 3,
        "maximum_nights": 6,
        "location": "Japan",
        "price": 255.99,
        "accomodates": 3,
        "bathrooms": 2,
        "bedrooms": 2,
        "beds": 3,
        "guests_included": 2
    },
    {
        "id": 5,
        "userId": 1,
        "name": "Chris",
        "room_type": "large",
        "minimum_nights": 3,
        "maximum_nights": 6,
        "location": "Japan",
        "price": 255.99,
        "accomodates": 3,
        "bathrooms": 2,
        "bedrooms": 2,
        "beds": 3,
        "guests_included": 2
    },
    {
        "id": 6,
        "userId": 1,
        "name": "Chris",
        "room_type": "large",
        "minimum_nights": 3,
        "maximum_nights": 6,
        "location": "Japan",
        "price": 255.99,
        "accomodates": 3,
        "bathrooms": 2,
        "bedrooms": 2,
        "beds": 3,
        "guests_included": 2
    }
]
```

 ## GET /:id
 ----
 returns a listing with the given id
 - the data returned will look like:
  ```json
  [
    {
        "id": 4,
        "userId": 1,
        "name": "Chris",
        "room_type": "large",
        "minimum_nights": 3,
        "maximum_nights": 6,
        "location": "Japan",
        "price": 255.99,
        "accomodates": 3,
        "bathrooms": 2,
        "bedrooms": 2,
        "beds": 3,
        "guests_included": 2
    }
]
  ```

 ## POST /
 --- 
 Adds a new listing
 - the Data returned will look like:
 ```json 
 {
  "userId":1,
  "name":"Chris",
  "room_type":"large",
  "location":"Japan",
  "price":255.99,
  "accomodates":3,
  "bathrooms":2,
  "bedrooms":2,
  "beds":3,
  "guests_included":2,
  "minimum_nights":3,
  "maximum_nights":6
}
```
## PUT /:id
---

Updates an existing listing:
- The data returned looks like:
```json 
    [
        {
            "id": 1,
            "userId": 1,
            "name": "Chris",
            "room_type": "xlarge",
            "minimum_nights": 3,
            "maximum_nights": 6,
            "location": "Japan",
            "price": 255.99,
            "accomodates": 3,
            "bathrooms": 2,
            "bedrooms": 2,
            "beds": 3,
            "guests_included": 2
        }
    ]
```

## DELETE /:id
---
Removes an existing listing
- Once an item is deleted the following response will be returned:
```json 
  {
    "removed": [
        {
            "id": 1,
            "userId": 1,
            "name": "Chris",
            "room_type": "xlarge",
            "minimum_nights": 3,
            "maximum_nights": 6,
            "location": "Japan",
            "price": 255.99,
            "accomodates": 3,
            "bathrooms": 2,
            "bedrooms": 2,
            "beds": 3,
            "guests_included": 2
        }
    ]
}
```


