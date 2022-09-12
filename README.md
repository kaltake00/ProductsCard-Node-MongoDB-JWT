# Products List App
This is a RESTful backend app based on Node.js, Express.js, MongoDB, Mongoose and JWT for authorization.

# Features
- User authentication (Registration and Login)
- Ecrypting user password
- Change user password
- Create products list / Delete products list 
- Get Products report (Showing All products in list)
- Removing products list
- Modifying products list name and products in it. 
- Removing products from list.
- JWT Authorization, make requests with a token after login with `x-access-token` header with value `token` where `token` will be returned in Sign in response


# For Project Setup.
- clone repository.
- install docker.
- In terminal type `docker compose up`
- Open browser and go to url `localhost:8080`

# APIs

* Sign up *
- http://localhost:8080/api/auth/signup
* Requirements: 
    - email: String
    - password: string

*** Log In ***
- http://localhost:8080/api/auth/signup
* Requirements: 
    - email: String
    - password: string

