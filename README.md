## Creator: Andile Jaden Mbele

# Rent A Room

I moved to Harare a few months ago and the one thing I struggled with was finding accommodation without having to be paying someone a lot of money just so they can give me contact details of someone who owns a house and is renting out rooms. I thought to myself why not create an application that allows users to list rooms that they have available for rent and also allows users to book rooms that are available on the platform. The application has two types of users: 1. Home owners 2. Renters

- Home owners have to have an account in order to list rooms/property on the platform. They can list as many rooms as they want. They can also delete rooms that they have listed. They can also view all the bookings that have been made for their rooms.

- Renters have to have an account in order to book rooms. They can only book rooms that have been listed by home owners. They can also cancel bookings that they have made. They can also view all the bookings that they have made. Potential renters however can also view all the rooms that are available on the platform without having to have an account.

## Description

Create an API that allows users to create an account, login, create a room, view rooms, view room details, book a room, view bookings, view booking details, cancel a booking, and delete a room. The API should be able to handle the following scenarios:

- A user should be able to create an account
- A user should be able to login
- A user should be able to create a room
- A user should be able to view rooms
- A user should be able to view room details
- A user should be able to book a room
- A user should be able to view bookings
- A user should be able to view booking details
- A user should be able to cancel a booking
- A user should be able to delete a room
- A user should not be able to book a room that is already booked
- A user should not be able to book a room that is not available
- A user should not be able to book a room that does not exist
- A user should not be able to cancel a booking that does not exist
- A user should not be able to delete a room that does not exist
- A user should not be able to view bookings that do not exist
- A user should not be able to view booking details that do not exist
- A user should not be able to view rooms that do not exist
- A user should not be able to view room details that do not exist
- A user should not be able to create a room that already exists
- A user should not be able to create a room with a negative price
- A user should not be able to create a room with a negative number of rooms
- A user should not be able to create a room with a negative number of beds
- A user should not be able to create a room with a negative number of bathrooms
- A user should not be able to create a room with a negative number of toilets

## Technologies Used

- NodeJS
- ExpressJS
- MongoDB
- Mongoose
- Mocha
- Chai
- Babel
- ESLint
- Airbnb Style Guide
- TravisCI
- Coveralls
- Heroku

## API Endpoints

| Endpoint             | Functionality    | HTTP Method | Access Control |
| -------------------- | ---------------- | ----------- | -------------- |
| /api/v1/auth/signup  | Register a user  | POST        | Public         |
| /api/v1/auth/login   | Login a user     | POST        | Public         |
| /api/v1/rooms        | Create a room    | POST        | Private        |
| /api/v1/rooms        | Get all rooms    | GET         | Public         |
| /api/v1/rooms/:id    | Get a room       | GET         | Public         |
| /api/v1/rooms/:id    | Update a room    | PUT         | Private        |
| /api/v1/rooms/:id    | Delete a room    | DELETE      | Private        |
| /api/v1/bookings     | Create a booking | POST        | Private        |
| /api/v1/bookings     | Get all bookings | GET         | Private        |
| /api/v1/bookings/:id | Get a booking    | GET         | Private        |
| /api/v1/bookings/:id | Update a booking | PUT         | Private        |
| /api/v1/bookings/:id | Delete a booking | DELETE      | Private        |

## API Endpoints Explained

### POST /api/v1/auth/signup

This endpoint allows a user to create an account. The user has to provide the following details:

- First name
- Last name
- Email
- Password
- National ID
- Phone number
- Address

### POST /api/v1/auth/login

This endpoint allows a user to login. The user has to provide the following details:

- Email
- Password

### POST /api/v1/rooms

This endpoint allows a user to create a room. The user has to provide the following details:

- Location
- Number of bedrooms and bathrooms
- Rent price
- Lease terms
- Amenities
- Description
- Image
- Contact information
- Availability

### GET /api/v1/rooms

This endpoint allows a user to view all the rooms that have been listed on the platform.

### GET /api/v1/rooms/:id

This endpoint allows a user to view the details of a room.

### PUT /api/v1/rooms/:id

This endpoint allows a user to update the details of a room.

### DELETE /api/v1/rooms/:id

This endpoint allows a user to delete a room.

### POST /api/v1/bookings

This endpoint allows a user to book a room. The user has to provide the following details:

- Room ID
- Check in date
- Check out date

### GET /api/v1/bookings

This endpoint allows a user to view all the bookings that they have made.

### GET /api/v1/bookings/:id

This endpoint allows a user to view the details of a booking.

### PUT /api/v1/bookings/:id

This endpoint allows a user to update the details of a booking.

### DELETE /api/v1/bookings/:id

This endpoint allows a user to cancel a booking.

## API Example Requests

### POST /api/v1/auth/signup

```javascript
{
    "firstName": "Andile",
    "lastName": "Mbele",
    "email": "andilembele@gmail",
    "password": "123456",
    "nationalId": "123456789",
    "phoneNumber": "123456789",
    "address": "1234 Main Street"
}
```

### POST /api/v1/auth/login

```javascript
{
    "email": "andilembele@gmail",
    "password": "123456"
}
```

### POST /api/v1/rooms

```javascript
{
    "location": "1234 Main Street",
    "numberOfBedrooms": 2,
    "numberOfBathrooms": 2,
    "rentPrice": 1000,
    "leaseTerms": "1 year",
    "amenities": "Wifi, TV, Kitchen",
    "description": "A nice room",
    "image": "https://www.google.com",
    "contactInformation": "123456789",
    "availability": "Available"
}
```

### GET /api/v1/rooms

```javascript
[
  {
    id: "5d6b5b0b0b0b0b0b0b0b0b0b",
    location: "1234 Main Street",
    numberOfBedrooms: 2,
    numberOfBathrooms: 2,
    rentPrice: 1000,
    leaseTerms: "1 year",
    amenities: "Wifi, TV, Kitchen",
    description: "A nice room",
    image: "https://www.google.com",
    contactInformation: "123456789",
    availability: "Available",
  },
  {
    id: "5d6b5b0b0b0b0b0b0b0b0b0b",
    location: "1234 Main Street",
    numberOfBedrooms: 2,
    numberOfBathrooms: 2,
    rentPrice: 1000,
    leaseTerms: "1 year",
    amenities: "Wifi, TV, Kitchen",
    description: "A nice room",
    image: "https://www.google.com",
    contactInformation: "123456789",
    availability: "Available",
  },
];
```

### GET /api/v1/rooms/:id

```javascript
{
    "id": "5d6b5b0b0b0b0b0b0b0b0b0b",
    "location": "1234 Main Street",
    "numberOfBedrooms": 2,
    "numberOfBathrooms": 2,
    "rentPrice": 1000,
    "leaseTerms": "1 year",
    "amenities": "Wifi, TV, Kitchen",
    "description": "A nice room",
    "image": "https://www.google.com",
    "contactInformation": "123456789",
    "availability": "Available"
}
```

### PUT /api/v1/rooms/:id

```javascript
{
    "location": "1234 Main Street",
    "numberOfBedrooms": 2,
    "numberOfBathrooms": 2,
    "rentPrice": 1000,
    "leaseTerms": "1 year",
    "amenities": "Wifi, TV, Kitchen",
    "description": "A nice room",
    "image": "https://www.google.com",
    "contactInformation": "123456789",
    "availability": "Available"
}
```

### DELETE /api/v1/rooms/:id

```javascript
{
    "id": "5d6b5b0b0b0b0b0b0b0b0b0b",
    "location": "1234 Main Street",
    "numberOfBedrooms": 2,
    "numberOfBathrooms": 2,
    "rentPrice": 1000,
    "leaseTerms": "1 year",
    "amenities": "Wifi, TV, Kitchen",
    "description": "A nice room",
    "image": "https://www.google.com",
    "contactInformation": "123456789",
    "availability": "Available"
}
```

### POST /api/v1/bookings

```javascript
{
    "roomId": "5d6b5b0b0b0b0b0b0b0b0b0b",
    "checkInDate": "2019-09-01",
    "checkOutDate": "2019-09-30"
}
```

### GET /api/v1/bookings

```javascript
[
  {
    id: "5d6b5b0b0b0b0b0b0b0b0b0b",
    roomId: "5d6b5b0b0b0b0b0b0b0b0b0b",
    checkInDate: "2019-09-01",
    checkOutDate: "2019-09-30",
  },
  {
    id: "5d6b5b0b0b0b0b0b0b0b0b0b",
    roomId: "5d6b5b0b0b0b0b0b0b0b0b0b",
    checkInDate: "2019-09-01",
    checkOutDate: "2019-09-30",
  },
];
```

### GET /api/v1/bookings/:id

```javascript
{
    "id": "5d6b5b0b0b0b0b0b0b0b0b0b",
    "roomId": "5d6b5b0b0b0b0b0b0b0b0b0b",
    "checkInDate": "2019-09-01",
    "checkOutDate": "2019-09-30"
}
```

### PUT /api/v1/bookings/:id

```javascript
{
    "roomId": "5d6b5b0b0b0b0b0b0b0b0b0b",
    "checkInDate": "2019-09-01",
    "checkOutDate": "2019-09-30"
}
```

### DELETE /api/v1/bookings/:id

```javascript
{
    "id": "5d6b5b0b0b0b0b0b0b0b0b0b",
    "roomId": "5d6b5b0b0b0b0b0b0b0b0b0b",
    "checkInDate": "2019-09-01",
    "checkOutDate": "2019-09-30"
}
```

### POST /api/v1/users

```javascript
{
    "firstName": "Andile",
    "lastName": "Mbele",
    "email": "andilembele@gmail.com",
    "password": "password"
}
```

### GET /api/v1/users

```javascript
[
  {
    id: "5d6b5b0b0b0b0b0b0b0b0b0b",
    firstName: "Andile",
    lastName: "Mbele",
    email: "andilembele@gmail.com",
  },
];
```

### GET /api/v1/users/:id

```javascript
{
    "id": "5d6b5b0b0b0b0b0b0b0b0b0b",
    "firstName": "Andile",
    "lastName": "Mbele",
    "email": "andilembele@gmail.com",
    "password": "password"
}
```

### PUT /api/v1/users/:id

```javascript
{
    "firstName": "Andile",
    "lastName": "Mbele",
    "email": "andilembele@gmail.com",
    "password": "password"
}
```

### DELETE /api/v1/users/:id

```javascript
{
    "id": "5d6b5b0b0b0b0b0b0b0b0b0b",
    "firstName": "Andile",
    "lastName": "Mbele",
    "email": "andilembele@gmail.com",
    "password": "password"
}
```

### POST /api/v1/users/login

```javascript
{
    "email": "andilemmbele@gmail.com",
    "password": "password"
}
```

### GET /api/v1/users/logout

```javascript
{
    "message": "You have successfully logged out"
}
```

### POST /api/v1/users/forgotPassword

```javascript
{
    "email": "andilembele@gmail.com"
}
```

### PATCH /api/v1/users/resetPassword/:token

```javascript
{
    "password": "password",
    "confirmPassword": "password"
}
```

### POST /api/v1/users/updateMyPassword

```javascript
{
    "currentPassword": "password",
    "password": "password",
    "confirmPassword": "password"
}
```

### GET /api/v1/users/me

```javascript
{
    "id": "5d6b5b0b0b0b0b0b0b0b0b0b",
    "firstName": "Andile",
    "lastName": "Mbele",
    "email": "andilembele@gmail.com",
    "password": "password"
}
```

### PATCH /api/v1/users/updateMe

```javascript
{
    "firstName": "Andile",
    "lastName": "Mbele",
    "email": "andilembele@gmail.com",
    "password": "password"
}
```

### DELETE /api/v1/users/deleteMe

```javascript
{
    "id": "5d6b5b0b0b0b0b0b0b0b0b0b",
    "firstName": "Andile",
    "lastName": "Mbele",
    "email": "andilembele@gmail.com",
    "password": "password"
}
```

## Author: Andile <!-- markdownlint-enable-file MD000 -->

## License: MIT
