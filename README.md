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

` Sign up `
- /api/auth/signup
* Required: 
    - email: String
    - password: string

` Sign in `
- /api/auth/signup
* Required: 
    - email: String
    - password: string
<hr></hr>
` Creating products list `
- /api/products/create
* Required:
    - listName : String
    `Example: "listName" : "Updated list name"`
* Optional:
    - products : Array with Objects 
        - name: String
        - quantity: String
    `Example: "products":[{"name":"Apple","quantity":"12"}, {"name":"Cherry","quantity":"6"}]`
<hr></hr>
`Updating Products list` - You can change list name by parameter `listName` or products in list by parameter `products`.
Note: If product does not exists in list. It will be added automatically.
- /api/products/update
* Required:
    - products : Array with Objects 
        - name: String
        - quantity: String
    `Example: "products":[{"name":"Apple","quantity":"12"}, {"name":"Cherry","quantity":"6"}]`
* Optional:
    - listName: String


Description | Path | Requirements | Optional
------------ | ------------- | --------------- | --------- |
Sign Up | /api/auth/signup | email: String, password: String | none
Content in the first column | Content in the second column