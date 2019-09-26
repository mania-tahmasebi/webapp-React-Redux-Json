# mock user data stays at public/users.json

# Run application
npm install
npm start

# How i implemented it
- Top navigation bar is implemented with React Router
- The fetching Restful JSON using axios library
- The result fetched is dispatched and stored in Redux store under the key user.list
- The form for editing user information uses Redux Form, after user information is submitted, the updated details is
dispatched and updated to global store user.list. With the feature of Redux, changes will be automatically reflected on screen.

