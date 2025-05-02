![image](https://github.com/user-attachments/assets/99b2b857-759e-475c-af82-7efcac222bfe)

![image](https://github.com/user-attachments/assets/b11b6398-beb0-434f-9131-b718b46f3522)

![image](https://github.com/user-attachments/assets/cef14b31-d1fb-4278-9916-077e5f38988e)



# My Movie App

you can watch the demo at: https://learn-react-in-one-project-xi.vercel.app/


A React-based web application to search and view popular movies. This app allows users to search movies by name, view popular movies, and explore different genres.

## Features

- Search movies by name
- Display popular movies
- View movies by genre
- Responsive design for mobile and desktop
- User-friendly movie card layout
- Pagination support for browsing through multiple pages of movies

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: CSS
- **Backend**: [Movie Database API](https://www.themoviedb.org/)
- **State Management**: React `useState`, `useEffect`
- **Authentication**: Google OAuth (for future implementation)

## Setup

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher) or Yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/hackerbaria/Learn-React-In-One-Project.git
   cd Learn-React-In-One-Project

2. Install dependencies

    ```bash
   npm install

3. Set up environment variables (for example, API key for Movie Database API)

    Create a .env file in the root of the project.
    Add your environment variables in the format:


        REACT_APP_API_KEY=your-api-key-here
4. Start the development server

     ```bash
   npm run dev

The app will be running at http://localhost:3000.

Features
Search Bar: Allows users to search for movies by title.

Movie List: Displays a grid of movie cards with details like title, poster, and overview.

Pagination: Allows browsing through different pages of results.

Genre Page: Users can explore movies from different genres.

Running Tests
Currently, no automated tests are included in this project, but you can run it locally to see the app in action.

Deployment
You can deploy this app using platforms such as Vercel, Netlify, or any platform that supports React-based projects.

Push the repository to GitHub (or your preferred Git platform).

Link your repository to your chosen deployment platform (e.g., Vercel, Netlify).

The app will automatically deploy.

Future Improvements
Implement user authentication using Google OAuth.

Add movie recommendations and favorites functionality.

Enhance error handling and loading states.

Add unit and integration tests for key components.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
The Movie Database API for providing movie data.

Icons used in this project are from Font Awesome.

