[![Build Status](https://travis-ci.org/kingisaac95/docmanager.svg?branch=staging)](https://travis-ci.org/kingisaac95/docmanager)
[![Code Climate](https://codeclimate.com/github/andela-korjiewuru/docmanager/badges/gpa.svg)](https://codeclimate.com/github/andela-korjiewuru/docmanager)
[![Coverage Status](https://coveralls.io/repos/github/kingisaac95/docmanager/badge.svg?branch=staging)](https://coveralls.io/github/kingisaac95/docmanager?branch=staging)

# DocManager

<img width="1225" alt="screen shot 2017-06-04 at 11 31 20 pm" src="https://cloud.githubusercontent.com/assets/26261917/26765914/3fd6dbbc-497e-11e7-9e9d-f01ca60b2fa0.png">

<img width="1204" alt="screen shot 2017-06-04 at 11 34 53 pm" src="https://cloud.githubusercontent.com/assets/26261917/26765931/76fc5ff4-497e-11e7-8d8e-3557de7de0b5.png">


Docmanager is a fullstack application (API endpoints and user interface) that allows users to create and manage documents. It also comes with API endpoints for creating and managing users.

View the app live [here](https://dmsdoctor.herokuapp.com/)
For the API documentation, visit [our docs](https://docmanager-docs.herokuapp.com/)

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
