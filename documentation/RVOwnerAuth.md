# Auth - RV Owner User Accounts

All authentication endpoints are listed on this page. 

### Table Of Contents

* [Home](../README.md)
* [Register](#register)
* [Login](#login)

# Register

Creates a new user account if one does not already exists. Each username is unique and there can only be one account per username.
JWT token is created for authentication incase of redirect to restricted area such as a dashboard, profile, etc.

**URL:** `/api/rv/register`

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

**Data Example:** **All fields are required.**
```
{
    "username": "testyMcTesty",
    "password": "passWord1@3&8"
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

### OR

**Condition:**  If account already exists.

**Code:**  `400 BAD REQUEST`

**Content Example:**
```
{
    Error: "Missing required field."
}
```
## Notes

n/a


# Login

Logs in and authenticates user. JWT token is created for authentication incase of redirect to restricted area such as a dashboard, profile, etc. 

**URL:** `/api/rv/login`

**Method:** `POST`

**Auth required:** `None`

**Permissions required:** `None`

**URL Params:**  `n/a`

**Data Constraints:** 
Provide username and password to be authenticated. Password should be a string.  

```
{
    "username": "[string max: 255 char]",
    "password": "[string]",
}

```

**Data Example:** **All fields are required.**

```
{
    "username": "testyMcTesty",
    "password": "passWord1@3&8"
}
```

## Success Response

**Condition:**  If User account exists and everything is OK.

**Code:**  `200 Created`

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

**Condition:**  If account doesnt exists.

**Code:**  `403 Forbidden`

**Content Example:**

```
{
    Error: "There was a problem creating account."
}
```

### OR

**Condition:**  If required fields are missing, username or password spelling error, etc.

**Code:**  `400 BAD REQUEST`

**Content Example:**

```
{
    Error: "There was a problem logging in to account."
}
```

## Notes

n/a