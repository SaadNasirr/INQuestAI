AI Interview Question Generator
This is a web-based AI-powered application that generates smart, customized interview questions based on the selected job role. Built using HTML, CSS, and JavaScript, the app utilizes OpenAI's GPT API through a secure serverless Vercel function to generate dynamic, context-aware questions in real-time.

Features
Dropdown menu with multiple job roles (e.g., Frontend Developer, Data Scientist, UI/UX Designer, DevOps Engineer, etc.)
Real-time question generation using OpenAI API
Clean, responsive UI with modern styling
Secure API calls handled via Vercel serverless functions
Easy to deploy and extend with new job roles

How It Works
User selects a job role from the dropdown.
App sends a request to a Vercel serverless function.
The serverless function uses the OpenAI API to generate interview questions.
Questions are returned and displayed on the frontend.

Tech Stack
Frontend: HTML, CSS, JavaScript (Vanilla)
Backend: Vercel Serverless Functions (Node.js)

AI: OpenAI GPT-4 API

How to Use
Clone or download this repository.
Deploy the /api/generate.js file as a serverless function on Vercel.
Add your OpenAI API key to the Vercel environment variables as OPENAI_API_KEY.
Open index.html in a browser or deploy to a static host.
Start generating interview questions by selecting job roles.

Folder Structure
/index.html
/style.css
/script.js
/api/generate.js

Deployment
Frontend: Can be hosted on Vercel, GitHub Pages, or Netlify.
Backend (API): Must be deployed on Vercel for secure OpenAI API access.

Credits
Developed as a final project for the AI-Enhanced Web Development module by Saad Nasir.

