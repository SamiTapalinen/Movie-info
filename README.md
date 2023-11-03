## Movie-info App

### Purpose
This app can be used to fetch some basic information about movies / series / episodes and games found through omdbapi.com API.

### Functionality
The app has a search input, which requires at least 3 characters before the search button is enabled. This is to ensure
that no empty or redundant searches are performed to the API.

The search results are cached to phone's local storage to further reduce API calls with the same search query.
The cache is cleared when application closes to prevent stale data from local storage.

All the found search results are listed under the search input. By clicking a listed result, a new screen will open up
containing more information about the selected title.

NOTE: The API uses pagination and returns only the first 10 results. As the API has limited usage per day, I wanted to stick with 1 page
request, which is enough to test the application's functionality.

### Setup
No setup is needed. The API key is included in the code already. The other option would have been to include it in this README
file which means it would have been visible anyway, so no point to make things harder for the code tester. Just pull the repository
and run the commands `npm install` and `npx expo start`.