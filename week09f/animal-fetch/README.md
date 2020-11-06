# Client-side animal gallery
## Planning it out
1. Create a starter Express server.
    1. Copy the [hello-express](../_source/hello-express) into a new project
    2. Create a static gallery index.html in:
        ```
        /public/gallery/index.html
        ```
2. Create a JSON GET endpoint on server.js:

    ```
    GET /api/v0/gallery
    ```

    Using `app.get()` and `response.json(['one', 'two', 'three'])`.

3. Create a custom module to `require()` an array of Lorem Picsum animal IDs.
    1. Create `gallery.js` file in the project root.
    2. Copy the animals array into this file.
    3. Load the custom module into `server.js` using `require()`.
4. Return the animals array to the client using `response.json(animals)`.
5. Test everything using Postman.