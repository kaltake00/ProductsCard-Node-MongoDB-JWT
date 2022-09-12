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


Description | Path | Body Required | Body Optional | Headers | Method |
------------ | ------------- | --------------- | --------------- | --------------- | --------------- |
Sign Up | /api/auth/signup | email: String, password: String | none | none | `POST` |
Sign In | /api/auth/signin | email: String, Password: String | none | none | `POST` |
Change Password | /api/user/changepassword | "password" : String | None | x-access-token | `PUT` | 
Creating list | /api/products/create | listName: String | products : Array with object | x-access-token | `POST` |
Updating list | /api/products/update | products : Array with objects | listName: String | x-access-token | `PUT` |
Deleting list item | /api/products/deleteitem/`ItemName` | None | None | x-access-token | `DELETE` |
Deleting List | /api/products/delete | None | None | x-access-token | `DELETE` |
Get all products | /api/products/ | None | None | x-access-token | `GET` |

## Examples
```
#Sign UP pass email and password on body of req.:
{   
    "email": "myemail@mail.com",
    "password":"mypassword" 
}
```


