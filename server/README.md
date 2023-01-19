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

## Operating Logic

### Models
1. User: This model could contain information about the users of the API, such as their name, email address, and password.

2. Property: This model could contain information about the properties that are available for rent, such as their address, number of bedrooms, number of bathrooms, and rent amount.

3. RentalListing: This model could contain information about the available rental listings, such as the property they are associated with, the start and end date of the rental period, and the rent amount.

4. Review: This model could contain information about reviews of the properties, such as the property they are associated with, the user that wrote the review, and the content of the review.

5. Image: This model could contain information about images associated with the properties, such as the property they are associated with, the image URL, and the caption.

6. Booking: This model could contain information about bookings made by users, such as the user that made the booking, the rental listing that was booked, and the start and end date of the booking.

### Controllers
Controllers are responsible for handling incoming HTTP requests and returning appropriate responses. Here are some suggested controllers for a Node.js API that allows people to search for rooms or full houses for rent:

1. UserController: This controller could handle requests related to user authentication and registration, such as login and signup.

2. PropertyController: This controller could handle requests related to properties, such as listing properties, retrieving property details, and updating property information.

3. RentalListingController: This controller could handle requests related to rental listings, such as creating new listings, retrieving available listings, and updating existing listings.

4. ReviewController: This controller could handle requests related to reviews, such as creating new reviews, retrieving reviews for a specific property, and updating existing reviews.

4. ImageController: This controller could handle requests related to images, such as uploading new images, retrieving images for a specific property, and updating existing images.

5. BookingController: This controller could handle requests related to bookings, such as creating new bookings, retrieving booking information, and canceling existing bookings.

## Routes

Routes are responsible for mapping URLs to specific controllers and actions. Here are some suggested routes for a Node.js API that allows people to search for rooms or full houses for rent:

1. /users: This route could handle requests related to user authentication and registration, such as login and signup.

2. /properties: This route could handle requests related to properties, such as listing properties, retrieving property details, and updating property information.

3. /rental-listings: This route could handle requests related to rental listings, such as creating new listings, retrieving available listings, and updating existing listings.

4. /reviews: This route could handle requests related to reviews, such as creating new reviews, retrieving reviews for a specific property, and updating existing reviews.

5. /images: This route could handle requests related to images, such as uploading new images, retrieving images for a specific property, and updating existing images.

6. /bookings: This route could handle requests related to bookings, such as creating new bookings, retrieving booking information, and canceling existing bookings.

## Services

Services are responsible for encapsulating the business logic of your application. They are a great way to separate the application's concerns and make the code more maintainable and testable. Here are some suggested services for a Node.js API that allows people to search for rooms or full houses for rent:

1. AuthenticationService: This service could handle tasks related to user authentication, such as verifying user credentials and generating access tokens.

2. PropertyService: This service could handle tasks related to properties, such as creating new properties, retrieving property details, and updating property information.

3. RentalListingService: This service could handle tasks related to rental listings, such as creating new listings, retrieving available listings, and updating existing listings.

4. ReviewService: This service could handle tasks related to reviews, such as creating new reviews, retrieving reviews for a specific property, and updating existing reviews.

5. ImageService: This service could handle tasks related to images, such as uploading new images, retrieving images for a specific property, and updating existing images.

6. BookingService: This service could handle tasks related to bookings, such as creating new bookings, retrieving booking information, and canceling existing bookings.

## Utilities

Utils are helper functions that can be used throughout the application to perform common tasks, such as validation, error handling, and data formatting. Here are some examples of utility functions that could be used to build an API for searching for rooms or full houses for rent:

1. validateUserData: This function could validate the data sent in a user registration or update request, such as checking that all required fields are present and that the email address is in the correct format.

2. formatError: This function could format error messages in a consistent way for easier debugging and reporting.

3. handleMongooseValidationError: This function could handle validation errors thrown by Mongoose, such as converting them to a more user-friendly format.

4. calculateDistance: This function could calculate the distance between two GPS coordinates, which could be used to filter properties based on their proximity to a given location.

5. handleImageUpload: This function could handle image uploads, such as saving the image to a server and generating a URL to be saved in the database.

6. sendEmail: This function could handle sending emails, such as sending booking confirmation emails or password reset emails.

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
