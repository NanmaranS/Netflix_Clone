# 📺 Netflix Clone – React + JSON Server

A clean Netflix-style UI clone built with React, Axios, and JSON Server.
Supports Create + Read operations only (no update/delete).
Movies are fetched from an external API, and double-click adds items to My List through JSON Server.

### 🚀 Features

### 🎬 Fetch Movies from API
- Uses OMDB API (or any API you choose)
- Custom useFetchs.jsx hook for data loading
- Renders multiple rows like Netflix UI

### 🖱️ Double Click = Add to My List
- Double-click on a movie card → Added to /cart in JSON server
- Structure stored as:
{
  "id": "movieID",
  "Poster": "posterURL"
}

### ▶️ Single Click = Open Trailer Page
- Movie clicked once → redirects to /videos/{index}
- Trailer details loaded from JSON or API

### 🎨 Clean Netflix-style UI
- Hover animations
- Dark theme
- Responsive grid
- Global CSS + component CSS organized neatly

### 🗂️ JSON Server
- JSON server runs on:
http://localhost:5000/home
http://localhost:5000/cart

### 📂 Folder Structure

NETFLIX/
│
├── db/
│   └── Db.json
├── public/
│   └── (public assets)
├── src/
│   ├── assets/
│   │   └── (images/videos)
│   ├── Header/
│   │   └── Header.jsx
│   ├── Pages/
│   │   ├── New_Popular.jsx
│   │   ├── Shows.jsx
│   │   ├── Movies.jsx
│   │   └── Cart.jsx
│   ├── useFetchs.jsx/
│   │   └── useFetchs.jsx
│   ├── App.jsx
│   ├── Body.jsx
│   ├── index.css
│   ├── main.jsx
│   └── Videos.jsx
├── README.md
├── package.json
└── vite.config.js

### 🖼️ Screenshots

(Home Screen)
![<img width="1920" height="1020" alt="home_n" src="https://github.com/user-attachments/assets/fb2a786f-7279-48fa-845e-1aadd535bc87" />
]()

(Shows Page)
![<img width="1920" height="1020" alt="shows_n" src="https://github.com/user-attachments/assets/22f523ac-4457-4a94-8673-54b70fa3cdf5" />
]()

(My List / Cart Page)
![<img width="1920" height="1020" alt="list_n" src="https://github.com/user-attachments/assets/62926ad8-7ad0-41ce-96f2-43c5e7509bf3" />
])

(Trailer Page)
![<img width="1920" height="1020" alt="video_n" src="https://github.com/user-attachments/assets/bb78d0db-4bd8-4eeb-8443-5cb7bb1dadcb" />
]()


### 🛠️ Installation & Setup

1. Install packages
npm install

2. Start JSON Server
npx json-server --watch db/Db.json --port 5000

Endpoints become:
/home
/cart

3. Start React App
npm run dev

### 🔐 API Used
Example API call:
https://www.omdbapi.com/?apikey=YOUR_KEY&s=game&type=movie&page=7

### 📌 Future Improvements
- Add a search feature to find movies and shows by title using API results
- Add authentication (Firebase)
- Save trailers in database
- Add update/delete in cart
- Create Genres page
- Add loading skeleton

### ❤️ Thanks for Visiting!
This project is made for learning and portfolio purposes.
Clone, fork, and explore the code!
