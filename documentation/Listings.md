# Listings 

All Listing endpoints for RV Owners & Land Owners. 

### Table Of Conetents

* [Home](../README.md)
* [All Users](#all-users)
  * [Show Listing By ID](#show-listing-by-id)
* [RV Owners](#rv-owners)
  * [Show All Listings](#show-all-listings)
* [Land Owners](#land-owners)
  * [Show All Land Owner Listings](#show-all-land-owner-listings)
  * [Create Listing](#create-listing)
  * [Update Listing](#update-listing)
  * [Delete Listing](#delete-listing)

# All Users

Listing Endpoints that both RV & Land Owners have access to.


## Show Listing By ID

See an individual lising by its' ID.

---

**URL:** `/api/listings/:listing_id`

**Method:** `GET`

**Auth required:** `YES`

**Permissions required:** `YES`

* Must be authenticated user

**URL Params:**  `:listing_id =  listing.id`

**Data Constraints:** `None`
 

```
{}
```

**Data Example:** `None`
```
{}
```

## Success Response

**Condition:**  If listing exists and everything is OK.

**Code:**  `200 OK`

**Content Example:**
```
[
    {
        "id": 1,
        "title": "test title 1",
        "description": "this is a test description for 1",
        "price_per_day": "24.99",
        "photo_url": "https://unsplash.com/photos/-Avc2AiE1_Q",
        "latitude": null,
        "longitude": null,
        "owner": "testyMcTesty",
        "land_owner": true,
        "state": "Utah",
        "state_abbrv": "UT"
    }
]
```
## Error Response

**Condition:**  If user is restricted from viewing content.

**Code:**  `403 Forbidden`

**Content Example:**
```
{
    Error: 'Logged in user has no access.'
}
```

### OR

**Condition:**  If listing does not exists.

**Code:**  `404 NOT FOUND`

**Content Example:**
```
{
    Error: 'Listing by that ID does not exist.'
}
```

### OR

**Condition:**  If there is an issue retrieving data.

**Code:**  `500 INTERNAL SERVER ERROR`

**Content Example:**
```
{
    Error: "There was a server error."
}
```

## Notes

n/a

[Back To Top](#listings)

# RV Owners

Listing endpoints that only RV Owner users have access to.  RV Owner is a user account that has is_land_owner = false.


## Show All Listings

See all listings.

---

**URL:** `/api/listings`

**Method:** `GET`

**Auth required:** `YES`

**Permissions required:** `YES`

* RV User Only

**URL Params:**  `None`

**Data Constraints:** `None`
 

```
{}
```

**Data Example:** `None`
```
{}
```

## Success Response

**Condition:**  If at least one listing exists and everything is OK.

**Code:**  `200 OK`

**Content Example:**
```
[
     {
        "id": 1,
        "title": "test title 1",
        "description": "this is a test description for 1",
        "price_per_day": "24.99",
        "photo_url": "https://unsplash.com/photos/-Avc2AiE1_Q",
        "latitude": null,
        "longitude": null,
        "owner": "testyMcTesty",
        "land_owner": true,
        "state": "Utah",
        "state_abbrv": "UT"
    },
    {
        "id": 2,
        "title": "test title 2",
        "description": "this is a test description for 2",
        "price_per_day": "55.99",
        "photo_url": "https://unsplash.com/photos/-Avc2AiE1_Q",
        "latitude": null,
        "longitude": null,
        "owner": "userMcUser",
        "land_owner": false,
        "state": "Florida",
        "state_abbrv": "FL"
    },
    {
        "id": 3,
        "title": "test title 3",
        "description": "this is a test description for 3",
        "price_per_day": "99.99",
        "photo_url": "https://unsplash.com/photos/-Avc2AiE1_Q",
        "latitude": null,
        "longitude": null,
        "owner": "johnnyDoeDoe",
        "land_owner": false,
        "state": "Michigan",
        "state_abbrv": "MI"
    },
    ...
]
```
## Error Response

**Condition:**  If is_land_owner = true, user is restricted from viewing content (Land Owners cannot view all listings).

**Code:**  `403 Forbidden`

**Content Example:**
```
{
    Error: 'Logged in user has no access.'
}
```

### OR

**Condition:**  If there is an issue retrieving data.

**Code:**  `500 INTERNAL SERVER ERROR`

**Content Example:**
```
{
    Error: "There was a server error."
}
```

## Notes

n/a

[Back To Top](#listings)

# Land Owners

## Show All Land Owner Listings

Uses land owner id to query database and retrieve all listings associated with land owner account. 

Land Owner is a user account that has is_land_owner = true.

---

**URL:** `/api/listings/owner/:landowner_id`

**Method:** `GET`

**Auth required:** `YES`

**Permissions required:** `YES`

* Land Owners Only

**URL Params:**  `:landowner_id = landowner.id`

**Data Constraints:** `None`
 

```
{}
```

**Data Example:** `None`
```
{}
```

## Success Response

**Condition:**  If land owner ID is correct and everything is OK.

**Code:**  `200 OK`

**Content Example:**
```
[
    {
        "id": 4,
        "title": "test title 4",
        "description": "this is a test description for 4",
        "price_per_day": "25.99",
        "photo_url": "https://unsplash.com/photos/-Avc2AiE1_Q",
        "latitude": null,
        "longitude": null,
        "owner": "testyMcTesty",
        "land_owner": true,
        "state": "North Carolina",
        "state_abbrv": "NC"
    },
    {
        "id": 1,
        "title": "test title 1",
        "description": "this is a test description for 1",
        "price_per_day": "24.99",
        "photo_url": "https://unsplash.com/photos/-Avc2AiE1_Q",
        "latitude": null,
        "longitude": null,
        "owner": "testyMcTesty",
        "land_owner": true,
        "state": "Utah",
        "state_abbrv": "UT"
    },
    ....
]
```
## Error Response

**Condition:**  If is_land_owner = false, user is restricted from viewing content (Only land owner with correct id can view).

**Code:**  `403 Forbidden`

**Content Example:**
```
{
    Error: 'Logged in user has no access.'
}
```

### OR

**Condition:**  If there is an issue retrieving data.

**Code:**  `500 INTERNAL SERVER ERROR`

**Content Example:**
```
{
    Error: "There was a server error."
}
```

## Notes

n/a

[Back To Top](#listings)

## Create Listing

Land Owner can create a new listing. 

State_id comes from state table which should pass the value from form. 

See [States endpoint](./States.md#show-all-states) for more implementation info. 

Land Owner is a user account that has is_land_owner = true.

---

**URL:** `/api/listings`

**Method:** `POST`

**Auth required:** `YES`

**Permissions required:** `YES`

* Land Owners Only

**URL Params:**  `None`

**Data Constraints:** 

**Required Fields:** state_id, landowner_id, title, description, price_per_day

```
{
    "state_id": "[integer, not nullable]",
    "landowner_id": [integer, not nullable]",
    "title": "[string max: 255 char not nullable]",
    "description": "[text max: 500char, not nullable]",
    "price_per_day": "[float (decimal), not nullable]",
    "photo_url": "[text, nullable] ",
    "longitude": "[text, nullable]",
    "latitude": "[text, nullable]"
}
```

**Data Example:** 
```
[
    {
        "id": 5,
        "title": "title example 5",
        "description": "title desc example 5",
        "price_per_day": "58.00",
        "user_id": 2,
        "state_id": 25,
        "photo_url": "asdasasasd",
        "longitude": null,
        "latitude": null
    }
]
```

## Success Response

**Condition:**  If land owner ID is correct and everything is OK.

**Code:**  `201 CREATED`

**Content Example:**
```
[
    {
        "id": 6,
        "title": "title example 6",
        "description": "title desc example 6",
        "price_per_day": "58.00",
        "user_id": 2,
        "state_id": 25,
        "photo_url": "asdasasasd",
        "longitude": "40.7128 N",
        "latitude": "74.0060 W"
    }
]
```
## Error Response

**Condition:**  If is_land_owner = false, user is restricted from creating a listing. (Only land owner can create a listing).

**Code:**  `403 Forbidden`

**Content Example:**
```
{
    Error: 'Logged in user has no access.'
}
```

### OR

**Condition:**  If there is an issue retrieving data.

**Code:**  `500 INTERNAL SERVER ERROR`

**Content Example:**
```
{
    Error: "There was a server error."
}
```

## Notes

n/a

[Back To Top](#listings)

## Update Listing

Land Owner can update a listing. 

Use only the data properties you wish to update.  For example, if you only wish to update the title, and state. Those would be the only
data properties you would return to the database.


Land Owner is a user account that has is_land_owner = true.

---

**URL:** `/api/listings/:listing_id`

**Method:** `PUT`

**Auth required:** `YES`

**Permissions required:** `YES`

* Land Owners Only

**URL Params:**  `:listing_id =  listing.id`

**Data Constraints:** 


```
{
    "state_id": "[integer, not nullable]",
    "landowner_id": [integer, not nullable]",
    "title": "[string max: 255 char not nullable]",
    "description": "[text max: 500char, not nullable]",
    "price_per_day": "[float (decimal), not nullable]",
    "photo_url": "[text, nullable] ",
    "longitude": "[text, nullable]",
    "latitude": "[text, nullable]"
}
```

**Data Example:** 


**ORIGINAL LISTING**

```
[
    {
        "id": 1,
        "title": "no longer a test title",
        "description": "this is a test description for 1",
        "price_per_day": "24.99",
        "photo_url": "https://unsplash.com/photos/-Avc2AiE1_Q",
        "latitude": null,
        "longitude": null,
        "owner": "testyMcTesty",
        "land_owner": true,
        "state": "Massachusetts",
        "state_abbrv": "MA"
    }
]
```


**If I wanted to update the fields state_id and title, this would be my request.**

```
{
    "state_id": 34,
    "title": "Rent This Land Here.",
}
```

## Success Response

**Condition:**  If land owner ID is correct and everything is OK.

**Code:**  `201 CREATED`

**Content Example:**
```
[
    {
        "id": 1,
        "title": "Rent This Land Here",
        "description": "this is a test description for 1",
        "price_per_day": "24.99",
        "photo_url": "https://unsplash.com/photos/-Avc2AiE1_Q",
        "latitude": null,
        "longitude": null,
        "owner": "testyMcTesty",
        "land_owner": true,
        "state": "Massachusetts",
        "state_abbrv": "MA"
    }
]
```
## Error Response

**Condition:**  If is_land_owner = false, user is restricted from creating a listing. (Only land owner can update a listing).

**Code:**  `403 Forbidden`

**Content Example:**
```
{
    Error: 'Logged in user has no access.'
}
```
### OR

**Condition:**  If a required field does not recieve data or data value = null.

**Code:**  `400 BAD REQUEST`

**Content Example:**
```
{
    Error: "Missing Required Field."
}
```

### OR

**Condition:**  If listing doesn't exist.

**Code:**  `404 LISTING DOESNT EXIST`

**Content Example:**
```
{
    Error: "Listing Does Not Exist."
}
```

### OR

**Condition:**  If there is an issue retrieving data.

**Code:**  `500 INTERNAL SERVER ERROR`

**Content Example:**
```
{
    Error: "There was a server error."
}
```

## Notes

n/a

[Back To Top](#listings)

## Delete Listing

Land Owner can delete a listing. 

Land Owner is a user account that has is_land_owner = 1 (true).

---

**URL:** `/api/listings/:listing_id`

**Method:** `DELETE`

**Auth required:** `YES`

**Permissions required:** `YES`

* Land Owners Only

**URL Params:**  `:listing_id =  listing.id`

**Data Constraints:** `None`
```
{}
```

**Data Example:** `None`
```
{}
```

## Success Response

**Condition:**  If listing ID is correct and everything is OK.

**Code:**  `200 OK`

**Content Example:**
```
[
    {
        message: "Listing ID: 'listing_id' Deleted"
    }
]
```
## Error Response

**Condition:**  If is_land_owner = false, user is restricted from creating a listing. (Only land owner can delete a listing).

**Code:**  `403 Forbidden`

**Content Example:**
```
{
    Error: 'Logged in user has no access.'
}
```

### OR

**Condition:**  If listing doesn't exist.

**Code:**  `404 LISTING DOESNT EXIST`

**Content Example:**
```
{
    Error: "Listing Does Not Exist."
}
```

### OR

**Condition:**  If there is an issue retrieving data.

**Code:**  `500 INTERNAL SERVER ERROR`

**Content Example:**
```
{
    Error: "There was a server error."
}
```

## Notes

n/a

[Back To Top](#listings)