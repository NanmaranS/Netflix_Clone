# 🎬 Netflix Clone – React App

A clean and responsive **Netflix UI clone** built using **React + Custom Hooks**.  
The project uses **OMDb API / Movie API** to fetch movies, shows, and trending content.

---

## 🚀 Features

### ✔ Fetch Movies & Shows  
Uses a custom hook (`useFetch`) to fetch movie data from API.

### ✔ Single Click → Play Trailer  
- When the user **single clicks** any movie card  
- A **random trailer** plays (YouTube embed / API logic)

### ✔ Double Click → Add to My List  
- If user **double clicks** any movie card  
- The movie will be **added to "My List"** page  
- Stored using React state or localStorage

### ✔ Responsive Netflix UI  
- Neat home page  
- Movies page  
- Series page  
- Newly Added section  
- My List page  
- Fully responsive

### ✔ No CRUD Operations  
Since this is a Netflix clone, you **only use:**
- **Read** (fetch data)  
- Add to list  
- Play trailer  

No create/update/delete forms like normal CRUD apps.

---

## 📂 Folder Structure

```
netflix-clone/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── Components/
│   │   ├── Header/
│   │   │   └── Header.jsx
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── Movies/
│   │   │   └── Movies.jsx
│   │   ├── Shows/
│   │   │   └── Shows.jsx
│   │   ├── NewAdded/
│   │   │   └── NewAdded.jsx
│   │   ├── MyList/
│   │   │   └── MyList.jsx
│   │   └── Card/
│   │       └── Card.jsx
│
│   ├── useFetchs.jsx/
│   │   └── useFetch.js
│
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── data.json   (optional for testing)
│
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

- **React + Vite**
- **React Hooks** (useState, useEffect)
- **Custom Hook** – `useFetch`
- **Bootstrap / CSS**
- **OMDb API or MovieDB API**
- **LocalStorage** (for My List)

---

## 📡 API Endpoints Examples

```
https://www.omdbapi.com/?apikey=YOUR_KEY&s=avengers
https://www.omdbapi.com/?apikey=YOUR_KEY&s=game&type=movie&page=1
https://www.omdbapi.com/?apikey=YOUR_KEY&s=marvel
```

---

## ▶ How It Works

### 🎥 1. Fetch Movie Data  
All pages (Home, Movies, Shows, New Added) fetch data using `useFetch`.

### 🎬 2. Play Trailer (Single Click)  
Single click → load trailer URL from JSON/YouTube API.

### ⭐ 3. Add to My List (Double Click)  
Double click → adds movie object to My List page.

---

## 🔧 Installation

```bash
npm install
npm run dev
```

---

## 🎯 Future Improvements

- Add Search Bar (search movies/products)  
- Add Pagination  
- Add User Auth (Firebase)  
- Add Trailer Popup Modal

---

## 💡 Why No CRUD?  
Netflix UI doesn’t need create/update/delete.  
We only **read data**, **play trailers**, and **add to list**.

---

## 📸 Screenshots (Optional)
Add your own UI screenshots here.

---

## 🙌 Author  
Developed by **Nanmaran** using React & Movie API.

