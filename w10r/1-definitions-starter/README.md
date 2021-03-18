# Refactoring a local module for Mongoose and Atlas
1. Create a `mongoose` model based on our data.
    - `npm install mongoose`
    - add `.env` file with connection string.
2. Copy `_connection.js` from `hello-atlas`.
3. Load connection into our route.
4. Refactor `route.get('/api/v0/definitions')` using `Model.find()`.
5. Refactor `route.get('/api/v0/definitions/:slug')` using `Model.findOne()`.