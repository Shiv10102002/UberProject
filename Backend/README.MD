# Backend API Documentation

## Users Related Endpoints

<details>
<summary>### POST /api/v1/users/register</summary>

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string representing a valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

#### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Example Response
Success (201 Created)
Status Code: 201
Response Body:

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Example Error Response
Validation Error (400 Bad Request)
Status Code: 400
Response Body:

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Internal Server Error (500 Internal Server Error)
Status Code: 500
Response Body:

```json
{
"message": "Internal Server Error"
}
```
</details>

<details>
<summary>### POST /api/v1/users/login</summary>

#### Description
This endpoint is used to log in an existing user.

#### Request Body
The request body should be a JSON object containing the following fields:
- `email`: A string representing a valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

#### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Example Response
Success (200 OK)
Status Code: 200
Response Body:

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```
The token will also be set in an HTTP-only cookie.

#### Example Error Response
Validation Error (400 Bad Request)
Status Code: 400
Response Body:

```json
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

Invalid Credentials (401 Unauthorized)
Status Code: 401
Response Body:

```json
{
  "message": "Invalid email or password"
}
```

### Internal Server Error (500 Internal Server Error)
Status Code: 500
Response Body:

```json
{
  "message": "Internal Server Error"
}
```
</details>

<details>
<summary>### GET /api/v1/users/profile</summary>

#### Description
This endpoint is used to get the profile of the authenticated user.

#### Request Headers
The request must include the following header:
- `Authorization`: A string containing the Bearer token (required)

#### Example Request
```http
GET /api/v1/users/profile HTTP/1.1
Host: example.com
Authorization: Bearer jwt_token_here
```

#### Example Response
Success (200 OK)
Status Code: 200
Response Body:

```json
{
  "_id": "user_id_here",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Example Error Response
Unauthorized (401 Unauthorized)
Status Code: 401
Response Body:

```json
{
  "message": "Unauthorized"
}
```

### Internal Server Error (500 Internal Server Error)
Status Code: 500
Response Body:

```json
{
  "message": "Internal Server Error"
}
```
</details>

<details>
<summary>### GET /api/v1/users/logout</summary>

#### Description
This endpoint is used to log out the authenticated user.

#### Request Headers
The request must include the following header:
- `Authorization`: A string containing the Bearer token (required)

#### Example Request
```http
GET /api/v1/users/logout HTTP/1.1
Host: example.com
Authorization: Bearer jwt_token_here
```

#### Example Response
Success (200 OK)
Status Code: 200
Response Body:

```json
{
  "message": "Logged out successfully"
}
```

#### Example Error Response
Unauthorized (401 Unauthorized)
Status Code: 401
Response Body:

```json
{
  "message": "Unauthorized"
}
```

### Internal Server Error (500 Internal Server Error)
Status Code: 500
Response Body:

```json
{
  "message": "Internal Server Error"
}
```
</details>

## Captain Related Endpoints

<details>
<summary>### POST /api/v1/captains/register</summary>

#### Description
This endpoint is used to register a new captain.

#### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: The first name of the captain, a string with a minimum length of 3 characters (required)
  - `lastname`: The last name of the captain, a string with a minimum length of 3 characters (optional)
- `email`: The email address of the captain, a string representing a valid email address (required)
- `password`: The password for the captain's account, a string with a minimum length of 6 characters (required)
- `vehicle`: An object containing information about the vehicle:
  - `color`: The color of the vehicle, a string with a minimum length of 3 characters (required)
  - `plate`: The plate number of the vehicle, a string with a minimum length of 3 characters (required)
  - `capacity`: The passenger capacity of the vehicle, an integer with a minimum value of 1 (required)
  - `vehicleType`: The type of the vehicle, a string that must be one of 'motorcycle', 'car', or 'auto' (required)

#### Example Request
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Example Response
Success (201 Created)
Status Code: 201
Response Body:

```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Example Error Response
Validation Error (400 Bad Request)
Status Code: 400
Response Body:

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

### Internal Server Error (500 Internal Server Error)
Status Code: 500
Response Body:

```json
{
  "message": "Internal Server Error"
}
```
</details>

<details>
<summary>### POST /api/v1/captains/login</summary>

#### Description
This endpoint is used to log in an existing captain.

#### Request Body
The request body should be a JSON object containing the following fields:
- `email`: The email address of the captain, a string representing a valid email address (required)
- `password`: The password for the captain's account, a string with a minimum length of 6 characters (required)

#### Example Request
```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

#### Example Response
Success (200 OK)
Status Code: 200
Response Body:

```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```
The token will also be set in an HTTP-only cookie.

#### Example Error Response
Validation Error (400 Bad Request)
Status Code: 400
Response Body:

```json
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

Invalid Credentials (401 Unauthorized)
Status Code: 401
Response Body:

```json
{
  "message": "Invalid email or password"
}
```

### Internal Server Error (500 Internal Server Error)
Status Code: 500
Response Body:

```json
{
  "message": "Internal Server Error"
}
```
</details>

<details>
<summary>### GET /api/v1/captains/profile</summary>

#### Description
This endpoint is used to get the profile of the authenticated captain.

#### Request Headers
The request must include the following header:
- `Authorization`: A string containing the Bearer token (required)

#### Example Request
```http
GET /api/v1/captains/profile HTTP/1.1
Host: example.com
Authorization: Bearer jwt_token_here
```

#### Example Response
Success (200 OK)
Status Code: 200
Response Body:

```json
{
  "_id": "captain_id_here",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Example Error Response
Unauthorized (401 Unauthorized)
Status Code: 401
Response Body:

```json
{
  "message": "Unauthorized"
}
```

### Internal Server Error (500 Internal Server Error)
Status Code: 500
Response Body:

```json
{
  "message": "Internal Server Error"
}
```
</details>

<details>
<summary>### GET /api/v1/captains/logout</summary>

#### Description
This endpoint is used to log out the authenticated captain.

#### Request Headers
The request may include the following header:
- `Authorization`: A string containing the Bearer token (required)
or include token inside cookie

#### Example Request
```http
GET /api/v1/captains/logout HTTP/1.1
Host: example.com
Authorization: Bearer jwt_token_here
```

#### Example Response
Success (200 OK)
Status Code: 200
Response Body:

```json
{
  "message": "Logged out successfully"
}
```

#### Example Error Response
Unauthorized (401 Unauthorized)
Status Code: 401
Response Body:

```json
{
  "message": "Unauthorized"
}
```

### Internal Server Error (500 Internal Server Error)
Status Code: 500
Response Body:

```json
{
  "message": "Internal Server Error"
}
```
</details>
