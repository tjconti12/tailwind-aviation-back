# Tailwind Aviation Backend

The backend API and database for Tailwind Aviation. Includes a REST api for handling user authentication and the events on the scheduler.

## Models

### User    

| Key       | Type   | Required | Unique |
|-----------|--------|----------|--------|
| username  | string | true     | true   |
| password  | string | true     | false  |
| firstName | string | true     | false  |
| lastName  | string | true     | false  |    


### Event   

| Key        | Type   | Required | Unique |
|------------|--------|----------|--------|
| id         | number | true     | true   |
| group      | number | true     | false  |
| title      | string | true     | false  |
| start_time | number | true     | false  |
| end_time   | number | true     | false  |
| username   | string | false    | false  |     


## Routes

   

### Register/Login   

| Path              | Method | Description                      | Body                                             | Response                            |
|-------------------|--------|----------------------------------|--------------------------------------------------|-------------------------------------|
| /account/register | POST   | Post new user to the database    | Requires username, password, first and last name | Auth token, username and first name |
| /account/login    | POST   | Verifies user exists in database | Requires username and password                   | Auth token, username and first name |


### Events   

| Path                   | Method | Description                              | Body                                  | Response               |
|------------------------|--------|------------------------------------------|---------------------------------------|------------------------|
| /events                | GET    | Get all events in database               | None                                  | Array of event objects |
| /events/byPlane/:group | GET    | Get all events for a specific plane      | None. Plane is passed in as parameter | Array of event objects |
| /events                | POST   | Creates new event. Requires auth token   | Event object                          | Created event object   |
| /events/:id            | GET    | Get a single event by id                 | None. id is passed in as parameter    | Event object           |
| /events/ByTitle/:title | GET    | Get event by title (users first name)    | None. Title is passed in as parameter | Event object           |
| /events/:id            | PUT    | Update event by _id                      | Updated event object                  | Updated event object   |
| /events/ByTitle/:title | PUT    | Update event by title (users first name) | Updated event object                  | Updated event object   |
| /events/:id            | DELETE | Delete event by id                       | None. id is passed in as parameter    | Deleted event object   |
| /events/ByTitle/:title | DELETE | Delete event by title (users first name) | None. Title is passed in as parameter | Deleted event object   |   

* Note that there is an id and an _id key for the event object. The id is used in the front end for the scheduler and _id is used by mongodb

## Tech/framework used
1. Nodejs
2. Express
3. MongoDB
4. Mongoose
5. bcryptjs
6. cors
7. dotenv
8. jsonwebtoken   


## License
&copy; tjconti12

