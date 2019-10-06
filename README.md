##### PROJECT NOTES #####

Look up Transfer List at https://material-ui.com/components/transfer-list/ 
to use in genre selector feature.

# Project Name

Movie Sagas Weekend

## Project Description

1. Home Page
- [x] This should display all of the movies in the movie database. When a movie poster is clicked, a user should be brought to the `/details` view.

2. Details Page

- [x] This will show all details **including genres**, for the selected movie.
- [x] `Back to List` button, which should bring the user to the Home Page
- [x] `Edit` button, which should bring the user to the Edit Page

3. Edit Page

This should show:
- [x] an input field (for changing the movie title), for the selected movie.
- [x] a textarea (for changing the movie description)

The details page should have the buttons:
- [x] `Cancel` button, which should bring the user to the Details Page
- [x] `Save` button, which should update the title and description in the database and bring the user to the Details Page

4. Stretch Goals

- [x] Display the current values in the input (title) and textarea (description) on the Edit Page
- [x] Display all genres on movie list page. Research [array_agg](https://stackoverflow.com/questions/43458174/how-to-save-and-return-javascript-object-with-subarray-in-normalized-sql) to make this possible.
- [ ] Move sagas and reducers out of your `index.js` and into separate files (ideally in `src/redux/reducers` and `src/redux/sagas` folders).
- [x] Allow the user to refresh the details or edit page. The url for the details page would be something like `/details/1` for movie with id of `1`. Research [react router params](https://reacttraining.com/react-router/web/example/url-params).
- [ ] Allow the user to add a genre to a movie.
- [ ] Allow the user to remove a genre from a movie.
- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
- [ ] Create an `Admin` page. Add a link from the `Home` page to the `Admin` page. The page should initially display a login form (an input for username and an input for password). When the user enters the correct username (`camera`) and password (`action`), the page should display a form to add genres to the database, and a list of all of the genres with an `x` to remove them from the database. Note: This isn't actually secure, but it's pretty fun, and really good practice.

### Instructions

1. Database Setup

- Create a database named saga_movies_weekend.
- Run the queries from database.sql on the saga_movies_weekend database.
- You will need to create the junction table between the movies and genres tables!

2. Install Dependencies

- npm install.
- npm run server.
- npm run client.