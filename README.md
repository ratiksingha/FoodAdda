# 🍽️ FoodAdda – Swiggy Data Served Fresh

**🔗 Live App:** [https://food-adda-delta.vercel.app/](https://food-adda-delta.vercel.app/)

FoodAdda is a React-based web app that lets users explore restaurants and menus from Swiggy — with a clean UI and smooth UX. It fetches real Swiggy data using a Node.js/Express proxy to avoid CORS issues. Fast, responsive, and to the point — just how we like our frontend.

---

## ✨ Features

- 📍 Real-time restaurant data based on latitude & longitude
- 🍽️ View full menus of restaurants
- ⚡ Fast UI powered by Tailwind CSS & Material UI components
- 🔁 Realtime data fetching via a backend proxy server
- 💻 Fully responsive and mobile-friendly

---

## 🛠 Tech Stack

| Layer      | Tech Used                                      |
|------------|-----------------------------------------------|
| Frontend   | React, Parcel, Tailwind CSS, Material UI        |
| Backend    | Node.js, Express.js, node-fetch               |
| Deployment | Vercel (frontend), Vercel Functions (backend) |

---

## 🔧 Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/ratiksingha/FoodAdda.git
cd FoodAdda
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

---

## 🌐 API Endpoints (Handled by Express)

- `/api/swiggy?lat=...&lng=...` – Get restaurant list
- `/api/menu?lat=...&lng=...&restaurantId=...` – Get menu for a restaurant

These are proxies for Swiggy's public endpoints to bypass CORS and rate limiting.  
Custom proxy source: [fa-proxy](https://github.com/ratiksingha/fa-proxy)

---

## 🧠 Inspiration

UI and UX designed from scratch, with references to modern food app patterns.

---

## 📦 Future Enhancements

- 🛒 Cart and Checkout functionality
- ❤️ Wishlist or Favorite system
- 🔐 User Auth (Google OAuth or Firebase)
- ⚙️ Filters for cuisines, ratings, delivery time, etc.

---

## 🙌 Author

Made with 🍕 and ☕ by [Ratik Singh](https://github.com/ratiksingha)

## Visitor
![Visitor Count](https://komarev.com/ghpvc/?username=ratiksingha&label=Profile+Views)

