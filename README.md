# Personal Portfolio Website

A professional portfolio website built with React, showcasing personal projects and skills with a modern design.  Deployed on GitHub Pages and using Firebase for data storage.

## Features

-   🎨 Modern, responsive design with Tailwind CSS and Shadcn UI.
-   ⚡ Fast, static frontend built with React and Vite.
-   📱 Mobile-first approach.
-   🎭 Smooth page transitions with Framer Motion.
-   📝 Contact form with validation (data stored in Firestore).
-   🖼️ Project showcase with detailed views.
-   🔥 Data persistence using Firebase's Firestore.

## Tech Stack

-   **Frontend**: React.js, Tailwind CSS, Shadcn UI, Framer Motion, Vite
-   **Database**: Firebase (Firestore)
-   **Type Safety**: TypeScript
-   **Routing**: Wouter
-   **Form Handling**: React Hook Form with Zod validation
-   **Data Fetching**:  `fetch` API (directly interacting with Firestore)

## Getting Started (Development)

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sane-RK9/about_me.git  # Replace with YOUR repository URL
    cd about_me
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Firebase Configuration:**

    *   Create a Firebase project in the Firebase console ([https://console.firebase.google.com/](https://console.firebase.google.com/)).
    *   Add a web app to your Firebase project.
    *   Enable Firestore in your Firebase project.
    *   Create a file named `client/src/lib/firebase.ts` (or `.js`) and add your Firebase configuration:

        ```typescript
        // client/src/lib/firebase.ts
        import { initializeApp } from "firebase/app";
        import { getFirestore } from "firebase/firestore";

        const firebaseConfig = {
          apiKey: "YOUR_API_KEY", // Replace with your actual API key
          authDomain: "your-project-id.firebaseapp.com", // Replace
          projectId: "your-project-id", // Replace
          storageBucket: "your-project-id.appspot.com", // Replace
          messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Replace
          appId: "YOUR_APP_ID" // Replace
        };

        const app = initializeApp(firebaseConfig);
        export const db = getFirestore(app);
        ```

    *   **Replace the placeholder values** with your actual Firebase configuration.  *(For a production deployment, consider using environment variables instead of hardcoding these values, but for initial development, this is acceptable within a private repository. Remember to set up Firestore security rules!)*

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5000` 

## Project Structure
```
├── client/ # Frontend React application
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Page components
│ │ ├── hooks/ # Custom React hooks
│ │ └── lib/ # Utility functions (including firebase.ts)
└── shared/ # Shared types and schemas
```

## Deployment (GitHub Pages)

This project is deployed using GitHub Pages. Here's a summary of the deployment process:

1.  **Build the project:**

    ```bash
    npm run build
    ```

2.  **Move Output:** Move the *contents* of the `dist` folder to the *root* of your project directory.  This is crucial for GitHub Pages. You can do this manually or use a command like:

    ```bash
    # macOS/Linux
    mv dist/* .
    rm -rf dist  # Optional: Remove the now-empty dist folder

    # Windows (PowerShell)
    Move-Item -Path dist\* -Destination . -Force
    Remove-Item dist -Recurse -Force  # Optional
    ```

3.  **.nojekyll file:** Create an empty filed named `.nojekyll` at the root.
4.  **Commit and Push:** Commit your changes and push to the `main` (or `master`) branch of your GitHub repository.
5.  **GitHub Pages Settings:** Configure GitHub Pages in your repository settings:
    *   Source: Deploy from a branch
    *   Branch: `main` (or `master`)
    *   Folder: `/ (root)`

