# Welcome to the alloan.ai frontend intern challenge!

> This is an opening for the frontend engineer intern position at alloan.ai, a cutting-edge fintech startup building products for the asset-based securities market.  
> Ideally, you're comfortable with JS, TS and ReactJS, using React hooks as needed and Redux for state management.  
> For more information, check the [expansive Job Description on LinkedIn](https://www.linkedin.com/jobs/view/4137806064). 

## Goal
Build a responsive single-page frontend which shows dynamically updating stock graphs using the given API. 📈  
Should adhere to the requirements below but it needs only a few components. Use UI libraries of your choice!

## How do I submit?
- Fork this repo
- Implement the UI
- Add instructions to run the UI in this readme 👇🏽
- ~~???Profit???~~ Submit your resume on [our LinkedIn posting](https://www.linkedin.com/jobs/view/4137806064). We will contact you for the repo link!

## The challenge 🧑🏽‍💻
There are 2 APIs in this repo you can run locally (instructions below).  
1. `GET /api/stocks`: list of stocks with durations for which data is available 
2. `POST /api/stocks/:id`: graph data for a specific stock

The second API simulates real-life data systems where data processing happens over time in the backend - meaning, it may require _multiple_ requests from the frontend to gather complete information.   
Eg.
- Request 1: responds with `{0 entries}`
- Request 2 after a little while: responds with `{some entries}`
- Request 3 after a little more while: responds with `{some more entries}`
- Request n after a little more little while: responds with `{all entries}`

### What we want to see (mandatory)
- A dropdown where the user can select a stock
- A way to switch between durations for the selected stock
- A graph for the selected stock and duration (remember the second API returns data over time - this graph should be updated dynamically)
- Make it responsive and look good!

### Tech constraints (mandatory)
- Use Redux Toolkit for managing global state, thunk for API calls
- Don't drill props beyond level 2
- Use pre-built components and libraries (we use MUI and react-chartjs, but you are free to use any lib of your choice)

### Brownie points (optional),
- if you can show multiple graphs at the same time
- if you can host it and share a link
- if you can add login with a basic 2FA implementation (we use Firebase!)

## Running services
### Instructions to run the UI
1. cd frontend
2. npm install
3. npm run dev
4. select the stock from the dropdown
5. It automatically call the api for "1y" duration
6. The duration button are dynamic on the available duration, if duration is available, it highlight with color, else grey;
7. it automatically call the api till n(i am calling six time);
8. You can switch to new duration, it will fetch new data.

### Instructions to run the backend API
1. cd backend
2. npm install
3. npm run dev
