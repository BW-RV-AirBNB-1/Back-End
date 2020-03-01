# Listings 

All Listing endpoints for RV Owners & Land Owners. 

### Table Of Conetents

* [Home](../README.md)
* [Get All States](#show-all-states)


# States
States endpoints is a list of all 50 states with abbrevations. 

 When using with create listing drop down menus/forms, map through the states and use the states' id as the option value. 

The state's id value is used in the states_id column of the listings endpoint. [See Create Listings](./listings#create-listing)

## Show All States
Get a list of all states for location query.

**URL:** `/api/states`

**Method:** `GET`

**Auth required:** `YES`

**Permissions required:** `YES`

* Must be authenticated user

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

**Condition:**  If everything is OK.

**Code:**  `200 OK`

**Content Example:**
```
[
    {
        id: 1,
        state_name: Alabama,
        state_abbrv: AL
    },
    {
        id: 2,
        state_name: Alaska,
        state_abbrv: AK
    },
    {
        id: 3,
        state_name: Arizona,
        state_abbrv: AZ
    },
    {
        id: 4,
        state_name: Arkansas,
        state_abbrv: AR
    },
    .....
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