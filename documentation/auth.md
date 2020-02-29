# Auth 

All authentication endpoints are listed on this page. 

### Table Of Conetents

* [Register](#register)
* [Login](#login)

# Create New User

Creates a new user account if one does not already exists. Each username is unique and there can only be one account per username.
JWT token is created for authentication incase of redirect to restricted area such as a dashboard, profile, etc.


**URL:** `/api/register`

**Method:** `POST`

**Auth required:** `None`

**Permissions required:** `None`

**URL Params:**  `n/a`

**Data Constraints:** 
Provide username and password to be created. Password should be a string.  

```
{
    "username": "[string max: 255 char]",
    "password": "[string]"
}

```

**Data Example: ** **_All fields are required._**
```
{
    "username": "testyMcTesty",
    "password": "passWord1@3&8"
}
```

## Success Response

**Condition:**  If no User account exists and everything is OK.

**Code:**  `201 Created`
# Login



