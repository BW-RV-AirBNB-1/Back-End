# Auth User Accounts

All authentication endpoints are listed on this page.

## Table Of Contents

* [Home](../README.md)
* [POST Register](#post-register)
* [POST Login](#post-login)

## POST Register

Creates a new user account if one does not already exists.

Each username is unique and there can only be one account per username.

JWT token is created for authentication incase of redirect to restricted area such as a dashboard, profile, etc.

---

**URL:** `/api/register`

**Method:** `POST`

**Auth required:** `None`

**Permissions required:** `None`

**URL Params:**  `n/a`

**Data Constraints:**

* Username, password, and is_land_owner  are required.
* Password should be a string.
* Username must be a minimum of 5 characters or validation will fail.**
* Password must be a minimum of 6 characters or validation will fail.**

```.javascript
{
    "username": "[string max: 255 char]",
    "password": "[string]",
    "is_land_owner": [boolean]
}

```

**Data Example:** **All fields are required.**

```.javascript
{
    "username": "testyMcTesty",
    "password": "passWord1@3&8",
    "is_land_owner": false
}
```

## Success Response

**Condition:**  If no User account exists and everything is OK.

**Code:**  `201 Created`

**Content Example:**

```.javascript
{
    "user": [
        {
            "id": 1,
            "username": "testyMcTesty",
            "is_land_owner": true
        }
    ],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODMxNzgwNzAsImV4cCI6MTU4MzI2NDQ3MH0.muXW_eKn6iZ80UqbwiROH48dQ611fhIDCQvm8Hu-2EE"
}
```

## Error Response

**Condition:**  If account already exists.

**Code:**  `403 Forbidden`

**Content Example:**

```.javascript
{
    Error: "There was a problem creating account."
}
```

### OR

**Condition:**  If account already exists.

**Code:**  `400 BAD REQUEST`

**Content Example:**

```.javascript
{
    Error: "Missing required field."
}
```

[Back To Top](#auth-user-accounts)

## POST Login

Logs in and authenticates user.

JWT token is created for authentication incase of redirect to restricted area such as a dashboard, profile, etc.

---

**URL:** `/api/login`

**Method:** `POST`

**Auth required:** `None`

**Permissions required:** `None`

**URL Params:**  `n/a`

**Data Constraints:**
Provide username and password to be authenticated. Password should be a string.  

```.javascript
{
    "username": "[string max: 255 char]",
    "password": "[string]",
}

```

**Data Example:** **All fields are required.**

```.javascript
{
    "username": "testyMcTesty",
    "password": "passWord1@3&8"
}
```

## Success Response

**Condition:**  If User account exists and everything is OK.

**Code:**  `200 OK`

**Content Example:**

```.javascript
{
    "user": {
        "id": 1,
        "username": "johnDoeham",
        "password": "$2a$14$2pwrpq1pB2PWDPDRlyMDs.ExLBjHB3XQJmdcJ07dTPUBF4u5jWlji",
        "is_land_owner": true
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODMxODUyMjUsImV4cCI6MTU4MzI3MTYyNX0.bN4MtBAcKAMc9QZkGSPzZwmXix_KxZKEe9QqUghycR4"
}
```

## Error Response

**Condition:**  If account doesnt exists.

**Code:**  `403 Forbidden`

**Content Example:**

```.javascript
{
    Error: "There was a problem creating account."
}
```

### OR

**Condition:**  If required fields are missing, username or password spelling error, etc.

**Code:**  `400 BAD REQUEST`

**Content Example:**

```.javascript
{
    Error: "There was a problem logging in to account."
}
```

[Back To Top](#auth-user-accounts)
