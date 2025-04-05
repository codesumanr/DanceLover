# DanceLover
DanceLover is a web application designed to help users discover nearby dance studios using Google Maps and watch curated dance videos via the YouTube API. Built with Node.js, Express.js, MongoDB, and Pug.

## Features
-   *Find Nearby Studios*: Enter your location to search for dance studios, displayed visually on an interactive Google Map.
-   *View Dance Videos*: Watch a curated feed of dance videos (currently configured for Punjabi Folk dance like Gidda/Bhangra) fetched from the YouTube API, with pagination.
-   *Contact Form*: Submit inquiries through a contact form, with data stored in MongoDB.
-   *Responsive Design*: The website layout adapts to various screen sizes (desktops, tablets, mobiles).


## Installation
1.  Clone the repository:
    git clone <your-repository-url>
    cd DanceLover
2.  Install dependencies:
    bash
    npm install (Or npm i)

3.  Create Environment File:
    Create a .env file in the root directory (DanceLover/) and add your environment variables (see below).

4.  Run for Development:
    This command uses nodemon to automatically restart the server on file changes.
    bash
    npm run dev
 # Environment Variables
Create a .env file in the root of your project and add the following variables, replacing the placeholder values with your actual credentials:

# Google API Keys (Ensure the key(s) have necessary APIs enabled and restricted)
YOUTUBE_API_KEY=your_youtube_api_key
GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# MongoDB Connection String
MONGODB_URI=your_mongodb_connection_string_here

# Port for the server to run on
PORT=3032 # Or 3000, or your preferred port

## How to Use **
1.  Visit the Home Page:
    - Open your browser and navigate  http://localhost:PORT (replace PORT with the value set in your .env file, e.g., http://localhost:3032).
    -The home page provides an introduction and access to the main features.
2.  Find Nearby Studios:
    - Use the search input field (likely on the home page or a map page) to enter a city, address, or general location.
    - Click the associated "Search" or "Find Studios" button.
    - An interactive Google Map will display markers representing dance studios found near the location you entered.
3. Explore Dance Videos:
    - Navigate to the "Videos" section using the site menu.
    - Browse the feed of curated dance videos (currently focused on Punjabi Folk styles like Gidda/Bhangra).
    - Use the "Next" and "Previous" pagination links (if available) to load more videos.
    - Click on a video thumbnail or title to watch it directly on the page.
4.  Learn More About Us:
    Visit the "About" page to read about the purpose and features of the DanceLover website.
5.  Contact Us:
    - Go to the "Contact" page.
    - Fill out and submit the form to send a message or inquiry. Your submission will be stored in the MongoDB database.
## API Information

YouTube Data API v3:Used for fetching the curated dance videos (based on channel ID or search query) displayed in the Videos section. Learn more at [Google YouTube API Docs](https://developers.google.com/youtube/v3).
Google Maps Platform: Powers the "Find Nearby Studios" feature. Uses the Maps JavaScript API to display the map, the Places API to find studios based on location searches, and potentially the Geocoding API to understand location inputs. Learn more at [Google Maps Platform Docs](https://developers.google.com/maps/documentation).
