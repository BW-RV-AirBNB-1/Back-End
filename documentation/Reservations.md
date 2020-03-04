# Reservations

Reservations endpoints to query reservations in relation to users & listings.

## Table Of Conetents

* [Home](../README.md)
* [GET All Reservations](#show-all-reservations)
* [GET Reservation By ID](#get-by-reservation-id)
* [GET Reservations By Listing ID](#get-reservations-by-listing-id)
* [GET Reservations By Owner (User) ID](#get-reservations-by-owner-id)
* [POST Reservation To Listing](#post-reservation-to-listing)
* [UPDATE Reservation](#update-reservation)
* [DELETE Reservation](#delete-reservation)

## GET All Reservations

Get a list of all reservations.

---

**URL:** `/api/reservations`

**Method:** `GET`

**Auth required:** `YES`

**Permissions required:** `YES`

* Must be authenticated user

**URL Params:**  `None`

**Data Constraints:** `None`

```.javascript
{}
```

**Data Example:** `None`

```{.javascript}
{}
```

## Success Response

**Condition:**  If everything is OK.

**Code:**  `200 OK`

**Content Example:**

```.javascript

[
     {
        "reservation_id": 1,
        "listing_id": 2,
        "reservation_name": "testyMcTesty",
        "state": "Michigan",
        "title": "test title 2",
        "description": "this is a test description for 2",
        "reserved": true,
        "reserved_from": "March 3, 2020",
        "reserved_to": "March 7, 2020"
    },
    {
        "reservation_id": 2,
        "listing_id": 2,
        "reservation_name": "userMcUser",
        "state": "Michigan",
        "title": "test title 2",
        "description": "this is a test description for 2",
        "reserved": true,
        "reserved_from": "March 23, 2020",
        "reserved_to": "March 31, 2020"
    },
    {
        "reservation_id": 3,
        "listing_id": 3,
        "reservation_name": "johnnyDoeDoe",
        "state": "Michigan",
        "title": "test title 3",
        "description": "this is a test description for 3",
        "reserved": true,
        "reserved_from": "March 3, 2020",
        "reserved_to": "March 7, 2020"
    },
    .....
]
```

## Error Response

**Condition:**  If user is restricted from viewing content.

**Code:**  `403 Forbidden`

**Content Example:**

```.javascript
{
    Error: 'Logged in user has no access.'
}
```

### OR

**Condition:**  If there is an issue retrieving data.

**Code:**  `500 INTERNAL SERVER ERROR`

**Content Example:**

```.javascript
{
    Error: "There was a server error."
}
```

[Back To Top](#reservations)

## GET By Reservation ID

Get an individual reservation by ID.

---

**URL:** `/api/reservations/:reservations_id`

**Method:** `GET`

**Auth required:** `YES`

**Permissions required:** `YES`

* Must be authenticated user

**URL Params:**  `reservations_id = reservations.id`

**Data Constraints:** `None`

```.javascript
{}
```

**Data Example:** `None`

```.javascript
{}
```

## Success Response

**Condition:**  If everything is OK.

**Code:**  `200 OK`

**Content Example:**

```.javascript

[
    {
        "reservation_id": 2,
        "listing_id": 2,
        "reservation_name": "userMcUser",
        "state": "Michigan",
        "title": "test title 2",
        "description": "this is a test description for 2",
        "reserved": true,
        "reserved_from": "March 23, 2020",
        "reserved_to": "March 31, 2020"
    }
]
```

## Error Response

**Condition:**  If user is restricted from viewing content.

**Code:**  `403 Forbidden`

**Content Example:**

```.javascript
{
    Error: 'Logged in user has no access.'
}
```

### OR

**Condition:**  If reservation does not exists.

**Code:**  `404 NOT FOUND`

**Content Example:**

```.javascript
{
    Error: 'Reservation by that ID does not exist.'
}
```

### OR

**Condition:**  If there is an issue retrieving data.

**Code:**  `500 INTERNAL SERVER ERROR`

**Content Example:**

```.javascript
{
    Error: "There was a server error."
}
```

[Back To Top](#reservations)

## GET Reservations By Listing ID

Get an individual reservation by ID.

---

**URL:** `/api/reservations/listing/:listing_id`

**Method:** `GET`

**Auth required:** `YES`

**Permissions required:** `YES`

* Must be authenticated user

**URL Params:**  `listings_id = listings.id`

**Data Constraints:** `None`

```.javascript
{}
```

**Data Example:** `None`

```.javascript
{}
```

## Success Response

**Condition:**  If everything is OK.

**Code:**  `200 OK`

**Content Example:**

```.javascript

[
     {
        "reservation_id": 1,
        "listing_id": 2,
        "reservation_name": "testyMcTesty",
        "state": "Michigan",
        "title": "test title 2",
        "description": "this is a test description for 2",
        "reserved": true,
        "reserved_from": "March 3, 2020",
        "reserved_to": "March 7, 2020"
    },
    {
        "reservation_id": 2,
        "listing_id": 2,
        "reservation_name": "userMcUser",
        "state": "Michigan",
        "title": "test title 2",
        "description": "this is a test description for 2",
        "reserved": true,
        "reserved_from": "March 23, 2020",
        "reserved_to": "March 31, 2020"
    },
    {
        "reservation_id": 5,
        "listing_id": 2,
        "reservation_name": "testyMcTesty",
        "state": "Michigan",
        "title": "test title 2",
        "description": "this is a test description for 2",
        "reserved": true,
        "reserved_from": "April 1, 2020",
        "reserved_to": "April 10, 2020"
    },
]
```

## Error Response

**Condition:**  If user is restricted from viewing content.

**Code:**  `403 Forbidden`

**Content Example:**

```.javascript
{
    Error: 'Logged in user has no access.'
}
```

### OR

**Condition:**  If reservation does not exists.

**Code:**  `404 NOT FOUND`

**Content Example:**

```.javascript
{
    Error: 'Reservations with that Listing ID does not exist.'
}
```

### OR

**Condition:**  If there is an issue retrieving data.

**Code:**  `500 INTERNAL SERVER ERROR`

**Content Example:**

```.javascript
{
    Error: "There was a server error."
}
```

[Back To Top](#reservations)

## GET Reservations By Owner ID

Get all reservations associated with Owner/User ID.

---

**URL:** `/api/reservations/owner/:user_id`

**Method:** `GET`

**Auth required:** `YES`

**Permissions required:** `YES`

* Must be authenticated user

**URL Params:**  `user_id = user.id`

**Data Constraints:** `None`

```.javascript
{}
```

**Data Example:** `None`

```.javascript
{}
```

## Success Response

**Condition:**  If everything is OK.

**Code:**  `200 OK`

**Content Example:**

```.javascript
[
    {
        "reservation_id": 1,
        "listing_id": 2,
        "reservation_name": "testyMcTesty",
        "state": "Michigan",
        "title": "test title 2",
        "description": "this is a test description for 2",
        "reserved": true,
        "reserved_from": "March 3, 2020",
        "reserved_to": "March 7, 2020"
    },
    {
        "reservation_id": 2,
        "listing_id": 2,
        "reservation_name": "userMcUser",
        "state": "Michigan",
        "title": "test title 2",
        "description": "this is a test description for 2",
        "reserved": true,
        "reserved_from": "March 23, 2020",
        "reserved_to": "March 31, 2020"
    },
    {
        "reservation_id": 6,
        "listing_id": 2,
        "reservation_name": "userMcUser",
        "state": "Michigan",
        "title": "test title 2",
        "description": "this is a test description for 2",
        "reserved": true,
        "reserved_from": "April 15, 2020",
        "reserved_to": "April 20, 2020"
    },
]
```

## Error Response

**Condition:**  If user is restricted from viewing content.

**Code:**  `403 Forbidden`

**Content Example:**

```.javascript
{
    Error: 'Logged in user has no access.'
}
```

### OR

**Condition:**  If state does not exists.

**Code:**  `404 NOT FOUND`

**Content Example:**

```.javascript
{
    Error: 'Reservation by that ID does not exist.'
}
```

### OR

**Condition:**  If there is an issue retrieving data.

**Code:**  `500 INTERNAL SERVER ERROR`

**Content Example:**

```.javascript
{
    Error: "There was a server error."
}
```

[Back To Top](#reservations)

## POST Reservation To Listing

Add a reservation to a listing.

---

**URL:** `/api/reservations/`

**Method:** `POST`

**Auth required:** `YES`

**Permissions required:** `YES`

* Must be authenticated user

**URL Params:**  `None`

**Data Constraints:** 

```.javascript
{
    "user_id": "[integer, not nullable]",
    "listings_id": [integer, not nullable]",
    "is_reserved": "[boolean not nullable]",
    "date_from": "[text 255 char, not nullable]",
    "date_to": "[text 255 char, not nullable]",
}
```

**Data Example:** 

Date_From & Date_To can accept values from calendar frameworks

```.javascript
{
     "user_id": 2,
    "listings_id": 4,
    "is_reserved": true,
    "date_from": "March 4, 2020",
    "date_to": "March 23, 2020",
}
```

## Success Response

**Condition:**  If everything is OK.

**Code:**  `200 OK`

**Content Example:**

```.javascript
[
    {
        "reservations_id": 10,
        "is_reserved": true,
        "date_from": "March 4, 2020",
        "date_to": "March 23, 2020"
    }
]
```

## Error Response

**Condition:**  If user is restricted from viewing content.

**Code:**  `403 Forbidden`

**Content Example:**

```.javascript
{
    Error: 'Logged in user has no access.'
}
```

### OR

**Condition:**  If there is an issue retrieving data.

**Code:**  `500 INTERNAL SERVER ERROR`

**Content Example:**

```.javascript
{
    Error: "There was a server error."
}
```

[Back To Top](#reservations)

## UPDATE Reservation

Update/PUT reservation connected to a listing.

Use only the data properties you wish to update.  

For example, if you only wish to update the date_from, and date_to.

Those would be the only data properties you would return to the database.

---

**URL:** `/api/reservations/"reservation_id`

**Method:** `PUT`

**Auth required:** `YES`

**Permissions required:** `YES`

* Must be authenticated user

**URL Params:**  `:reservation_id = reservations.id`

**Data Constraints:** 

```.javascript
{
    "user_id": "[integer, not nullable]",
    "listings_id": [integer, not nullable]",
    "is_reserved": "[boolean not nullable]",
    "date_from": "[text 255 char, not nullable]",
    "date_to": "[text 255 char, not nullable]",
}
```

**Data Example:** 

Date_From & Date_To can accept values from calendar frameworks

```.javascript
{
    "date_from": "March 4, 2020",
    "date_to": "March 23, 2020",
}
```

## Success Response

**Condition:**  If everything is OK.

**Code:**  `200 OK`

**Content Example:**

```.javascript
[
    {
        "date_from": "March 31, 2020",
        "date_to": "April 4, 2020",
    }
]
```

## Error Response

**Condition:**  If user is restricted from viewing content.

**Code:**  `403 Forbidden`

**Content Example:**

```.javascript
{
    Error: 'Logged in user has no access.'
}
```

### OR

**Condition:**  If reservation does not exists.

**Code:**  `404 NOT FOUND`

**Content Example:**

```.javascript
{
    Error: 'Reservation by that ID does not exist.'
}
```

### OR

**Condition:**  If there is an issue retrieving data.

**Code:**  `500 INTERNAL SERVER ERROR`

**Content Example:**

```.javascript
{
    Error: "There was a server error."
}
```

[Back To Top](#reservations)

## DELETE Reservation

Delete reservation connected to a listing.

---

**URL:** `/api/reservations/"reservation_id`

**Method:** `PUT`

**Auth required:** `YES`

**Permissions required:** `YES`

* Must be authenticated user

**URL Params:**  `:reservation_id = reservations.id`

**Data Constraints:** `None`

```.javascript
{}
```

**Data Example:** `None`


```.javascript
{}
```

## Success Response

**Condition:**  If everything is OK.

**Code:**  `200 OK`

**Content Example:**

```.javascript
[
    {message: `Reservation ID: 1 deleted.`}
]
```

## Error Response

**Condition:**  If user is restricted from viewing content.

**Code:**  `403 Forbidden`

**Content Example:**

```.javascript
{
    Error: 'Logged in user has no access.'
}
```

### OR

**Condition:**  If reservation does not exists.

**Code:**  `404 NOT FOUND`

**Content Example:**

```.javascript
{
    Error: 'Reservation by that ID does not exist.'
}
```

### OR

**Condition:**  If there is an issue retrieving data.

**Code:**  `500 INTERNAL SERVER ERROR`

**Content Example:**

```.javascript
{
    Error: "There was a server error."
}
```

[Back To Top](#reservations)
