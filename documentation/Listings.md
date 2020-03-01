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
        id: 1,
        state_id: 1,
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet blandit est, sagittis 
        eleifend augue luctus vitae. Cras vehicula justo enim, sit amet blandit urna suscipit sit amet.',
        price_per_day: 24.99,
        photo_url: 'https://unsplash.com/photos/-Avc2AiE1_Q',
        landowner_id: 2
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
Listing endpoints that only RV Owner users have access to.  RV Owner is a user account that has is_land_owner = 0 (false).

## Show All Listings
See all listings.

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
        id: 1,
        state_id: 1,
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet blandit est, sagittis 
        eleifend augue luctus vitae. Cras vehicula justo enim, sit amet blandit urna suscipit sit amet.',
        price_per_day: 24.99,
        photo_url: 'https://unsplash.com/photos/-Avc2AiE1_Q',
        landowner_id: 2
    },
    {
        id: 2,
        state_id: 23,
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet blandit est, sagittis 
        eleifend augue luctus vitae. Cras vehicula justo enim, sit amet blandit urna suscipit sit amet.',
        price_per_day: 54.99,
        photo_url: 'https://unsplash.com/photos/-Avc2AiE1_Q',
        landowner_id: 1
    },
    {
        id: 3,
        state_id: 13,
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet blandit est, sagittis 
        eleifend augue luctus vitae. Cras vehicula justo enim, sit amet blandit urna suscipit sit amet.',
        price_per_day: 19.99,
        photo_url: 'https://unsplash.com/photos/-Avc2AiE1_Q',
        landowner_id: 1
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
Land Owner is a user account that has is_land_owner = 1 (true).

**URL:** `/api/listings/landowner/:landowner_id`

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
        id: 2,
        landowner_id: 1,
        state_id: 23,
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet blandit est, sagittis 
        eleifend augue luctus vitae. Cras vehicula justo enim, sit amet blandit urna suscipit sit amet.',
        price_per_day: 54.99,
        photo_url: 'https://unsplash.com/photos/-Avc2AiE1_Q',    
    },
    {
        id: 3,
        landowner_id: 1,
        state_id: 13,
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet blandit est, sagittis 
        eleifend augue luctus vitae. Cras vehicula justo enim, sit amet blandit urna suscipit sit amet.',
        price_per_day: 19.99,
        photo_url: 'https://unsplash.com/photos/-Avc2AiE1_Q',
    },
    ...
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
Land Owner can create a new listing. State_id comes from state table which should pass the value from form. See [States endpoint](./states.md#show-all-states) for more implementation info. 

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
{
    "state_id": 34,
    "landowner_id": 3,
    "title": "Rent This Land Here.",
    "description": "34 x 45 lot, free cable, free wifi, sewer accees.",
    "price_per_day": 53.99,
    "photo_url": "https://unsplash.com/photos/-Avc2AiE1_Q ",
    "longitude": "40.7128 N",
    "latitude": "74.0060 W"
}
```

## Success Response

**Condition:**  If land owner ID is correct and everything is OK.

**Code:**  `201 CREATED`

**Content Example:**
```
[
    {
        "state_id": 34,
        "landowner_id": 3,
        "title": "Rent This Land Here.",
        "description": "34 x 45 lot, free cable, free wifi, sewer accees.",
        "price_per_day": 53.99,
        "photo_url": "https://unsplash.com/photos/-Avc2AiE1_Q ",
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
Land Owner can update a listing. Return all data values that exist to their properties and only change the ones that need updating. 
Failure to return the data values will either give it a null value or return an error.

**URL:** `/api/listings/:listing_id`

**Method:** `POST`

**Auth required:** `YES`

**Permissions required:** `YES`

* Land Owners Only

**URL Params:**  `:listing_id =  listing.id`

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
{
    "state_id": 34,
    "landowner_id": 3,
    "title": "Rent This Land Here.",
    "description": "34 x 45 lot, free cable, free wifi, sewer accees.",
    "price_per_day": 53.99,
    "photo_url": "https://unsplash.com/photos/-Avc2AiE1_Q ",
    "longitude": "40.7128 N",
    "latitude": "74.0060 W"
}
```

## Success Response

**Condition:**  If land owner ID is correct and everything is OK.

**Code:**  `201 CREATED`

**Content Example:**
```
[
    {
        "state_id": 34,
        "landowner_id": 3,
        "title": "Rent This Land Here.",
        "description": "34 x 45 lot, free cable, free wifi, sewer accees.",
        "price_per_day": 53.99,
        "photo_url": "https://unsplash.com/photos/-Avc2AiE1_Q ",
        "longitude": "40.7128 N",
        "latitude": "74.0060 W"
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
        message: "Listing Deleted"
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