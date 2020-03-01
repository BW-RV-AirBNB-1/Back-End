# Auth

All authentication endpoints are listed on this page. 

### Table Of Conetents

* [Register](#register)
* [Login](#login)

# Create New User Account

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
    "password": "[string]",
    "role": "[string]"
}

```

**Data Example:** **All fields are required.**
```
{
    "username": "testyMcTesty",
    "password": "passWord1@3&8",
    "role": "rvowner/landowner"
}
```

## Success Response

**Condition:**  If no User account exists and everything is OK.

**Code:**  `201 Created`

**Content Example:**
```
{
  id: 1,
  username: 'TestyMcTesty',
  role: rvowner,
  token: 'eyJhbGciOiJIUzI1NiIs.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF.SflKxwRJSMeKKF2QT4fw'
}
```
## Error Response

**Condition:**  If account already exists.

**Code:**  `403 Forbidden`

**Content Example:**
```
{
    Error: "There was a problem creating account."
}
```

## OR

**Condition:**  If account already exists.

**Code:**  `400 BAD REQUEST`

**Content Example:**
```
{
    Error: "Missing required field."
}
```


# Login



