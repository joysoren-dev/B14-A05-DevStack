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

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets me write HTML-like code inside JavaScript or TypeScript.

I use JSX in React because it makes it easier for me to understand and create the structure of my UI. I can also use JavaScript expressions directly inside JSX.

For example:

```tsx
<h1>Hello World</h1>