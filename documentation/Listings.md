# Listings 

All Listing endpoints for RV Owners & Land Owners. 

### Table Of Conetents

* [Home](../README.md)
* [All Users](#all-users)
* [RV Owners](#rv-owners)
  * [Show All Listings](#show-all-listings)
  * [Show Listing By ID](#show-listing-by-id)
* [Land Owners](#land-owners)

# All Users
Listing Endpoints that both RV & Land Owners have access to.
# RV Owners
Listing endpoints that only RV Owner users have access to.

### Show All Listings


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

**Condition:**  If user is restricted from viewing content (Land Owners cannot view all listings).

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


## Show Listing By ID

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

**Condition:**  If user is restricted from viewing content (Land Owners cannot view all listings).

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


# Land Owners



[Back To Top](#listings)