# PERSONAL NOTES MANAGER

![notes-personal2](https://github.com/user-attachments/assets/193fb17c-0731-4946-a19d-c5ecaba5de73)



### Set Up Instructions
+ npx create-react-app notes
+  cd notes
+ Download dependencies by running npm install
+ Start up the app using npm start
  - Runs the app in the development mode.\
  -  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
    The page will reload when you make changes.\
    You may also see any lint errors in the console.
+ Initialize a React app for the frontend.
+ Create an Express app for the backend.
+  database: MongoDB

### BACKEND
Backend:
ApiUrl: https://personal-notes-backend-s7wn.onrender.com/notes

+ Create RESTful APIs for:
+ Adding a new note (POST /notes).
+ Fetching all notes (GET /notes with optional query parameters for filtering).
+ Updating a note by id (PUT /notes/:id).
+ Deleting a note by id (DELETE /notes/:id).
+ Handle database operations for MongoDB or SQLite.
+ Use validation libraries like Joi or custom validation middleware.

### Completion Instructions

  Functionality to be added. 
  Validation:
  + Notes must have a title and description (both required).
  + Category should be one of the predefined options (Work, Personal, Others).
  + Sorting: Notes should be sorted by the latest created_at.
  + Filtering:
  + Allow filtering by category or searching by title.
  + Error handling:
  + Proper messages for invalid requests (e.g., "Note not found", "Invalid title").
  + Bonus (Optional):
    + Add a toggle feature to mark notes as Completed/Not Completed.



### Styling: 
   1. Basic styling using plain CSS
   2. Ensure responsiveness. 

 ### Implementation Files
   + src/components/NoteForm/index.js
   + src/components/NoteForm/index.css
   + src/components/NoteList/index.js
   + src/components/SearchBar/index.css
   + src/components/SearchBar/index.css
   + src/app.js


