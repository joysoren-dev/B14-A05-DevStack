# 🧱 Dev Stack Builder

A modern and responsive React website where users can explore different web development technologies and build their own technology stack.

The project provides technology cards with useful information such as category, difficulty level, rating, description, and badges. Users can add technologies to their personal stack, remove individual items, or clear the complete stack.

## 🔗 Live Site

[Visit Dev Stack Builder](https://b14-a05-dev-stack-five.vercel.app)

## 📂 GitHub Repository

[View the GitHub Repository](https://github.com/joysoren-dev/B14-A05-DevStack)

---

## 🛠️ Technologies Used

- React.js
- TypeScript
- Vite
- CSS
- React-Toastify
- JSON
- Git & GitHub
- Vercel

---

## ✨ Features

### 1. Explore Technologies

Users can explore different development technologies through responsive technology cards. Each card contains the technology name, icon, description, category, difficulty level, rating, and badge.

### 2. Build Your Own Stack

Users can add technologies to the "Your Stack" section and create their own development stack. A technology cannot be added more than once.

### 3. Responsive Design

The website is fully responsive and works across desktop, tablet, and mobile devices. The navigation bar and technology layout adjust according to the screen size.

### 4. Stack Management

Users can remove individual technologies from their stack or use the "Remove All" button to clear the complete stack.

### 5. Toast Notifications

React-Toastify is used to show notifications when a technology is added, a duplicate technology is attempted, an item is removed, or the complete stack is cleared.

### 6. Loading State

A loading state is displayed while the technology data is being loaded from the JSON file.

---

# 📋 Project Overview

Dev Stack Builder is designed to help developers explore different technologies and select the tools they want to include in their development stack.

The technology information is stored separately in a JSON file and loaded into the React application instead of hardcoding the technology array inside a component.

The project also includes a responsive navbar, hero section, technology cards, personal stack sidebar, and footer.

---

# ⚛️ React Questions & Answers

## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets me write HTML-like code inside JavaScript or TypeScript. I use JSX in React because it makes my UI structure easier to write and understand.

### 2. What is the difference between props and state?

Props are data that I pass from a parent component to a child component. Props are read-only.

State is data that I manage inside a component, and I can update it when needed. When state changes, React updates the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook lets me create and manage state inside a React component.

In this project, I used `useState` to manage the technologies selected by the user in the "Your Stack" section. When I add or remove a technology, I update the state and React updates the UI.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook lets me perform side effects in a React component.

In this project, I used `useEffect` to load the technology data from the JSON file when the component loads. I needed it because the technology data is stored separately in a JSON file instead of being hardcoded inside the component.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

Every item in a `.map()` list needs a unique `key` so React can identify each item correctly.

It helps React understand which item was added, removed, or changed and update the UI efficiently.

In this project, I used the unique technology `id` as the `key`, for example: `key={technology.id}`.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI depending on a condition.

In this project, I used conditional rendering in the "Your Stack" section. When there are no technologies in the stack, I show an empty message.

For example: `{stack.length === 0 && <p>Your stack is empty.</p>}`

Here, the message is shown only when the stack is empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

I can pass data from a parent component to a child component using props.

If the child needs to send something back to the parent, I can pass a function from the parent as a prop. The child can then call that function when an action happens.

For example, the parent can pass `technology={technology}` and `onAdd={handleAdd}` to the child component.

Here, the parent sends the technology data and the `handleAdd` function to the child. When the child calls `onAdd`, the parent can receive the data and update its state.