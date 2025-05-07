# Crypto Prices App

This is a simple React application built using Vite and React Router. It allows users to view a list of cryptocurrencies and see realtime price data by selecting any coin from the list.

---

## Features

- React Router for client-side routing
- Navigation bar for easy page switching
- Currencies page that links to detailed coin price pages
- API integration with CoinAPI (rate-limited on free tier)
- Modular component and page structure

---

## Technologies Used

- React (via Vite)
- React Router DOM
- CoinAPI (for real-time price data)
- HTML / CSS

---

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/eramjabeen1/cryptoprices.git
cd cryptoprices

2. Install Dependencies
npm install

3. Start the Development Server
npm run dev
Visit http://localhost:5173 in your browser.


What I Learned
How to set up a React app with Vite
How to use BrowserRouter, Routes, and Link with React Router
How to use useParams to access dynamic route parameters
How to fetch data from an external API and display it conditionally
How to organize components and pages in a clean project structure

Known Issues
The API may return a 429 error (Too Many Requests) due to CoinAPI’s free tier limits. But can generate a new key at coinapi.io or switch to a free alternative.

License
This project was built as a lab assignment for educational purposes.