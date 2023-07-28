# Mid Term Gigih 3.0 - Tokopedia Play Clone

## How to Install This Project
1. Clone this repository first
```
$ git clone https://github.com/expressjs/expressjs.com.git
```
2. Install the depedency for install the node_modules
```
$ npm install
```
3. Run the server
```
$ npm run dev
```
4. Now you can access this API

## Database Structure

This project using [MongoDB](https://mongodb.com) as a Database so in other words , we use NoSQL and the structure gonna be collections and documents.

### Products Collection

| Field Name  | Type | Description |
| ------------- |:-------------:|
|_id | ObjectID |
| title      | String     |
| url      | String     |
| price      | Number     |
|createdAt| Date |
|updatedAt| Date |

### Videos Collection

| Field Name  | Type |
| ------------- |:-------------:|
|_id | ObjectID |
| title      | String     |
| urlThumbnail      | String     |
|createdAt| Date |
|updatedAt| Date |

### Comments Collection

| Field Name  | Type |
| ------------- |:-------------:|
|_id | ObjectID |
| username      | String     |
| comment      | String     |
|createdAt| Date |
|updatedAt| Date |

## API Structure

### Base URL 
```
http://localhost:3000/api/
```
### Endpoints

### 1. Products

**Description**: Endpoints for managing products.

| Endpoint                     | Method | Request Body                     | Response Body                         |
|------------------------------|--------|----------------------------------|---------------------------------------|
| `/products`                     | GET    | -                                | Array of product objects.                |
| `/products/:id`                 | GET    | -                                | User object.                          |
| `/products`                     | POST   | Product object with title, url, price | Product object with ID.                  |
| `/products/:id`                 | PUT    | Product object with updated fields. | Product object with updated fields.       |
| `/products/:id`                 | DELETE | - | - |

### 2. Videos

**Description**: Endpoints for managing videos.

| Endpoint                     | Method | Request Body                     | Response Body                         |
|------------------------------|--------|----------------------------------|---------------------------------------|
| `/videos`                     | GET    | -                                | Array of video objects.                |
| `/videos/:id`                 | GET    | -                                | Video object.                          |
| `/videos`                     | POST   | Product object with title, urlThumbnail | Video object with ID.                  |
| `/videos/:id`                 | PUT    | Video object with updated fields. | Video object with updated fields.       |
| `/videos/:id`                 | DELETE | - | - |

### 3. Comments

**Description**: Endpoints for managing comments.

| Endpoint                     | Method | Request Body                     | Response Body                         |
|------------------------------|--------|----------------------------------|---------------------------------------|
| `/comments`                     | GET    | -                                | Array of comment objects.                |
| `/comments/:id`                 | GET    | -                                | Comment object.                          |
| `/comments`                     | POST   | Product object with title, urlThumbnail | Comment object with ID.                  |
| `/comments/:id`                 | PUT    | Comment object with updated fields. | Comment object with updated fields.       |
| `/comments/:id`                 | DELETE | - | - |
