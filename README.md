[![Build Status](https://travis-ci.org/kingisaac95/docmanager.svg?branch=staging)](https://travis-ci.org/kingisaac95/docmanager)
[![Code Climate](https://codeclimate.com/github/andela-korjiewuru/docmanager/badges/gpa.svg)](https://codeclimate.com/github/andela-korjiewuru/docmanager)
[![Coverage Status](https://coveralls.io/repos/github/kingisaac95/docmanager/badge.svg?branch=staging)](https://coveralls.io/github/kingisaac95/docmanager?branch=staging)

# DocManager

<img width="1225" alt="screen shot 2017-06-04 at 11 31 20 pm" src="https://cloud.githubusercontent.com/assets/26261917/26765914/3fd6dbbc-497e-11e7-9e9d-f01ca60b2fa0.png">

<img width="1212" alt="screen shot 2017-06-06 at 3 25 19 pm" src="https://cloud.githubusercontent.com/assets/26261917/26834143/6dbeae84-4acc-11e7-8730-d94ffc197364.png">


Docmanager is a fullstack application (API endpoints and user interface) that allows users to create and manage documents. It also comes with API endpoints for creating and managing users.

View the app live [here](https://dmsdoctor.herokuapp.com/)

# API Summary

#### Note

All requests must be prefixed with **api/v1**
For full API documentation, visit [our docs](https://docmanager-docs.herokuapp.com/)

## Users

EndPoint | Functionality
-------- | -------------
POST /users/login | Logs in a user.
POST /users/logout | Logs out a user.
POST /users/ | Creates a new user.
GET /users/ | Find matching instances of user.
GET /users/?limit={integer}&offset={integer} | Pagination for users.
GET /users/<id> | Find user.
PUT /users/<id> | Update user attributes.
DELETE /users/<id> | Delete user.
GET /search/users/?q={} | Search for a user.

## Documents

EndPoint | Functionality
-------- | -------------
POST /documents/ | Creates a new document instance.
GET /documents/ | Find matching instances of document.
GET /documents/?limit={integer}&offset={integer} | Pagination for docs.
GET /documents/<id> | Find document.
PUT /documents/<id> | Update document attributes.
DELETE /documents/<id> | Delete document.
GET /users/<id>/documents | Find all documents belonging to the user.
GET /search/documents/?q={doctitle} | Search for a doc.

## Roles

EndPoint | Functionality
-------- | -------------
POST /roles/ | Creates a new role instance.
GET /roles/ | Find matching instances of role.
PUT /roles/:id | Update role attributes.
DELETE /roles/:id | Delete role.

# Getting Started

#### Via Cloning The Repository:

```
# Get the app locally
git clone https://github.com/kingisaac95/docmanager.git

# Change directory
cd docmanager

# Create .env file in the root directory
touch .env

# Copy .env.example to .env
cp .env.example .env

# Change the secrete key to a key of your choice
SECRETE_KEY=YOUR_SECRETE_HERE

# Create a database (with postgresql)
# And update configuration file at src/server/config/config.json with database credentials

# Install Package dependencies
npm install

# Run your migrations
npm run migrate

# Run the application
npm star

# Run test migrations
npm run migrate:test

# Run test
npm run test

# Run end to end test
npm run e2e
```

# Issues?
Submit your issue [here](https://github.com/kingisaac95/docmanager/issues/new)

# How can I thank you?

Why not star the github repo? The attention would be appreciated! How about sharing the link for this repository on Twitter?

Don't forget to [follow me on twitter!](https://twitter.com/kingisaac95)

Thanks! Orjiewuru Kingdom.

License

The MIT License (MIT). Please see [License File](/LICENSE) for more information.
