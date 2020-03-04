# States

States endpoints is a list of all 50 states with abbrevations.

When using with create listing drop down menus/forms, map through the states and use the states' id as the option value.

The state's id value is used in the states_id column of the listings endpoint. [See Create Listings](./listings#create-listing)

## Table Of Conetents

* [Home](../README.md)
* [Table of States](#table-of-states)
* [Get All States](#show-all-states)
* [Get State By ID](#get-state-by-id)
* [Get Listings By State](#get-listings-by-state)

## Table of States

| ID   | State Name | State Abbr. |
| :--- | :--------- | :-----------|
|  1   | Alabama    | AL          |
|  2   | Alaska     | AK          |
|  3   | Arizona    | AZ          |
|  4   | Arkansas   | AR          |
|  5   | California | CA          |
|  6   | Colorado   | CO          |
|  7   | Connecticut| CT          |
|  8   | Delaware   | DE          |
|  9   | Disrtrict Of Columbia    | DC         |
|  10  | Florida    | FL          |
|  11  | Georgia    | GA          |
|  12  | Hawaii     | HI          |
|  13  | Idaho      | ID          |
|  14  | Illinois   | IL          |
|  15  | Indiana    | IN          |
|  16  | Iowa       | IA          |
|  17  | Kansas     | KS          |
|  18  | Kentucky   | KY          |
|  19  | Louisiana    | LA        |
|  20  | Maine      | ME          |
|  21  | Maryland   | MD          |
|  22  | Massachusetts    | MA    |
|  23  | Michigan   | MI          |
|  24  | Minnesota  | MN          |
|  25  | Mississippi| MS          |
|  26  | Missouri   | MO          |
|  27  | Montana    | MT          |
|  28  | Nebraska   | NE          |
|  29  | Nevada     | NV          |
|  30  | New Hampshire  | NH      |
|  31  | New Jersey | NJ          |
|  32  | New Mexico | NM          |
|  33  | New York   | NY          |
|  34  | North Carolina| NC       |
|  35  | North Dakota | ND        |
|  36  | Ohio       | OH          |
|  37  | Oklahoma   | OK          |
|  38  | Oregon     | OR          |
|  39  | Pennsylvania | PA        |
|  40  | Rhode Island | RI        |
|  41  | South Carolina | SC      |
|  42  | South Dakota| SD         |
|  43  | Tennessee  | TN          |
|  44  | Texas      | TX          |
|  45  | Utah       | UT          |
|  46  | Vermont    | VT          |
|  47  | Virginia   | VA          |
|  48  | Washington | WA          |
|  49  | West Virginia | WV       |
|  50  | Wisconsin  | WI          |
|  51  | Wyoming    | WY          |

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

[Back To Top](#states)
