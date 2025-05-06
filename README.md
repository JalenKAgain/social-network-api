# Social Network API

## Description
A robust and scalable **RESTful API** designed for a social networking platform where users can:
- Create and manage user profiles
- Post thoughts and respond to others
- React to posts with likes or other emojis
- Maintain a friend list and view social interactions

Built using **Node.js**, **Express.js**, and **MongoDB** (via **Mongoose**), this API showcases backend CRUD functionality, data validation, and NoSQL relationship management.

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling tool

  ## Features

-  **User Management**: Create, update, delete users; add/remove friends.
- **Thoughts**: Post, edit, and delete thoughts.
-  **Reactions**: Add or remove reactions to thoughts.

  ## Testing

| Method | Endpoint                               | Description   |
| ------ | -------------------------------------- | ------------- |
| GET    | `/api/users`                           | Get all users |
| GET    | `/api/users/:id`                       | Get one user  |
| POST   | `/api/users`                           | Create a user |
| PUT    | `/api/users/:id`                       | Update user   |
| DELETE | `/api/users/:id`                       | Delete user   |
| POST   | `/api/users/:userId/friends/:friendId` | Add friend    |
| DELETE | `/api/users/:userId/friends/:friendId` | Remove friend |

| Method | Endpoint                                         | Description      |
| ------ | ------------------------------------------------ | ---------------- |
| GET    | `/api/thoughts`                                  | Get all thoughts |
| GET    | `/api/thoughts/:id`                              | Get one thought  |
| POST   | `/api/thoughts`                                  | Create a thought |
| PUT    | `/api/thoughts/:id`                              | Update a thought |
| DELETE | `/api/thoughts/:id`                              | Delete a thought |
| POST   | `/api/thoughts/:thoughtId/reactions`             | Add reaction     |
| DELETE | `/api/thoughts/:thoughtId/reactions/:reactionId` | Remove reaction  |

## Future Improvements
* Authentication (JWT)

* Frontend SPA (React)

* Pagination and filtering

* Like/share metrics

## Contributions
Highly recommened please and thank you.

## Questions
Contact me @ jacjalen16@gmail.com

---

