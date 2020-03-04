# Reservations

Reservations endpoints to query reservations in relation to users & listings.

## Table Of Conetents

* [Home](../README.md)
* [GET All Reservations](#show-all-reservations)
* [GET Reservation BY ID](#get-by-reservation-id)
* [GET Reservations For A Listing](#get-reservations-for-a-listing)
* [GET Reservations By Owner ID](#get-reservations-by-owner-id)
* [POST Reservation To Listing](#post-reservation-to-listing)
* [UPDATE Reservation](#update-reservation)
* [DELET Reservation](#delete-reservation)

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

**URL:** `/api/registrations/:registration_id`

**Method:** `GET`

**Auth required:** `YES`

**Permissions required:** `YES`

* Must be authenticated user

**URL Params:**  `registration_id = registrations.id`

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

**Data Constraints:** `None`

```.javascript
{
    "user_id": "[integer, not nullable]",
    "listings_id": [integer, not nullable]",
    "is_reserved": "[boolean not nullable]",
    "date_from": "[text 255 char, not nullable]",
    "date_to": "[text 255 char, not nullable]",
}
```

**Data Example:** `None`

**Date_From & Date_To can accept values from calendar frameworks**

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
