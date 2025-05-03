# 📬 Postman Clone - Reusable and Configurable HTTP client component

## 🧩 Project Overview

This project is a **React-based clone of Postman**, designed as a **reusable and configurable HTTP client component**.  
It was developed as part of the *Web Application 2* course at SUPSI during the academic year 2024–2025.

The main goal is to offer a highly customizable component that can be embedded in other React applications, enabling developers to manage and execute HTTP requests similarly to Postman, while offering flexibility in layout, configuration, and event handling.

---

## 🧱 Architecture and Technologies

- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS + DaisyUI
- **Data Fetching & Caching:** React Query
- **Architecture:** Provider-based context architecture with custom hooks
- **Reusability:** Designed as a modular and embeddable `<HttpClient />` component

---

## ⚙️ Features

- 🔄 **Send any HTTP request** (GET, POST, PUT, DELETE...) with custom headers and body
- 📚 **Manage collections** of requests grouped by category
- 🔍 **Search** collections and requests (client-side filter)
- 💾 **Import and export** collections to and from file
- 📬 **View HTTP response** with type-sensitive preview (HTML, JSON, images)
- 🧩 **React component configurability**:
  - Source URL of the backend
  - Toggle search and collections visibility
  - Custom function for `onResponseMessageClick`

---

## 💡 Example Usage

```tsx
<HttpClient 
  url='https://supsi-ticket.cloudns.org/supsi-http/bff/' 
  search={false} 
  collections={true} 
  onResponseMessageClick={(response) => alert(response.statusCode)} 
/>
```

This allows developers to embed the component and handle specific behaviors such as clicking on a response message.

---

## 🔗 Backend API

The component interacts with a remote backend at:

[https://supsi-ticket.cloudns.org/supsi-http-client/swagger-ui.html](https://supsi-ticket.cloudns.org/supsi-http-client/swagger-ui.html)

> All requests require an `apiKey` parameter (e.g., `?apiKey=marroffino`).

Example endpoints:

- List collections:
  ```
  GET /bff/collections?apiKey=your_key
  ```
- Send request, update, delete:
  ```
  POST /bff/collections/{id}/requests
  PUT /bff/requests/{id}
  DELETE /bff/requests/{id}
  ```

---

## 🖼️ Demo

A static demo page (`index.html`) is available, showcasing:
- Multiple component instances with different configurations
- Real-time interaction with backend
- UI responsiveness and response previews

---

## 📦 Project Setup

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
```

---

## ✅ Project Status

✔️ Completed in April 2025  
🔒 No further development planned

---

## 👥 Authors

**Antonio Marroffino**
- [GitHub](https://github.com/antoniomarroffino)
- [LinkedIn](https://www.linkedin.com/in/antonio-marroffino)  
**Luca Fantò**

---

## 📜 License

This project was developed for educational purposes as part of the Bachelor's degree in Computer Engineering at SUPSI.
