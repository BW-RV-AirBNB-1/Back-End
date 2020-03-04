# States

States endpoints is a list of all 50 states with abbrevations.

When using with create listing drop down menus/forms, map through the states and use the states' id as the option value.

The state's id value is used in the states_id column of the listings endpoint. [See Create Listings](./listings#create-listing)

## Table Of Conetents

* [Home](../README.md)
* [Get All States](#show-all-states)
* [Get State By ID](#get-state-by-id)
* [Get Listings By State](#get-listings-by-state)

## Show All States

Get a list of all states for location query.

---

**URL:** `/api/states`

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
        "id": 1,
        "state_name": "Alabama",
        "state_abbreviation": "AL"
    },
    {
        "id": 2,
        "state_name": "Alaska",
        "state_abbreviation": "AK"
    },
    {
        "id": 3,
        "state_name": "Arizona",
        "state_abbreviation": "AZ"
    },
    {
        "id": 4,
        "state_name": "Arkansas",
        "state_abbreviation": "AR"
    },
    {
        "id": 5,
        "state_name": "California",
        "state_abbreviation": "CA"
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

## Notes

n/a

[Back To Top](#states)

## Get State By ID

Get an individual state by ID.

---

**URL:** `/api/states/:state_id`

**Method:** `GET`

**Auth required:** `YES`

**Permissions required:** `YES`

* Must be authenticated user

**URL Params:**  `state_id = state.id`

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
        "id": 1,
        "state_name": "Alabama",
        "state_abbreviation": "AL"
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
    Error: 'State by that ID does not exist.'
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

## Notes

n/a

[Back To Top](#states)

## Get Listings By State

Query all listings by state.

---

**URL:** `/api/states/location/:state_id`

**Method:** `GET`

**Auth required:** `YES`

**Permissions required:** `YES`

* Must be authenticated user

**URL Params:**  `state_id = state.id`

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
        "listing_id": 3,
        "owner_name": "johnnyDoeDoe",
        "title": "test title 3",
        "description": "this is a test description for 3",
        "price_per_day": "99.99",
        "photo_url": "https://unsplash.com/photos/-Avc2AiE1_Q",
        "longitude": null,
        "latitude": null,
        "state_name": "Michigan",
        "state_abbreviation": "MI"
    },
    {
        "listing_id": 2,
        "owner_name": "userMcUser",
        "title": "test title 2",
        "description": "this is a test description for 2",
        "price_per_day": "55.99",
        "photo_url": "https://unsplash.com/photos/-Avc2AiE1_Q",
        "longitude": null,
        "latitude": null,
        "state_name": "Michigan",
        "state_abbreviation": "MI"
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
    Error: 'State by that ID does not exist.'
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

## Notes

n/a

[Back To Top](#states)