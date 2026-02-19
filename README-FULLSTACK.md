# 🚀 Yash Tripathi - Full-Stack Portfolio

A stunning, modern full-stack portfolio website with **amazing visual effects** and **FastAPI backend**.

## 📦 What's Included

### Frontend (React)
- ✨ Animated background with particles
- 💫 Spotlight effect following mouse
- 🌟 Glowing borders on project cards
- 📱 Fully responsive design
- 🎨 50+ Shadcn UI components
- 🎯 Multi-page routing

### Backend (FastAPI + MongoDB)
- 🔧 FastAPI REST API
- 💾 MongoDB integration
- 📊 CRUD operations
- 🔐 CORS enabled
- 📝 Pydantic models

## 🛠️ Tech Stack

**Frontend:**
- React 19
- React Router DOM
- Tailwind CSS
- Shadcn/ui
- Lucide Icons
- Canvas API for animations

**Backend:**
- FastAPI
- MongoDB (Motor async driver)
- Python 3.9+
- Pydantic
- Uvicorn

## 📥 Installation

### Prerequisites
- Node.js (v16+)
- Python (v3.9+)
- MongoDB (local or cloud)
- Yarn package manager

### Step 1: Extract Files
```bash
unzip yash-portfolio-fullstack.zip
cd yash-portfolio-fullstack
```

### Step 2: Setup Backend

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Setup MongoDB
# Option 1: Local MongoDB
# Install MongoDB from https://www.mongodb.com/try/download/community
# Start MongoDB service

# Option 2: MongoDB Atlas (Cloud)
# 1. Go to https://www.mongodb.com/cloud/atlas
# 2. Create free cluster
# 3. Get connection string

# Update .env file
# Edit backend/.env and set:
MONGO_URL=mongodb://localhost:27017/
DB_NAME=portfolio_db

# Start backend server
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Backend will run at: **http://localhost:8001**

### Step 3: Setup Frontend

```bash
# Open new terminal
cd frontend

# Install dependencies
yarn install

# The .env file is already configured
# It should have:
REACT_APP_BACKEND_URL=http://localhost:8001

# Start frontend server
yarn start
```

Frontend will run at: **http://localhost:3000**

## 🎯 Quick Start (Development)

### Terminal 1 - Backend
```bash
cd backend
source venv/bin/activate  # or venv\Scripts\activate on Windows
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Terminal 2 - Frontend
```bash
cd frontend
yarn start
```

### Terminal 3 - MongoDB (if running locally)
```bash
mongod
```

## 🌐 API Endpoints

### Health Check
```
GET http://localhost:8001/api/
Response: {"message": "Hello World"}
```

### Status Checks
```
POST http://localhost:8001/api/status
Body: {"client_name": "test"}
Response: Status check object with ID and timestamp

GET http://localhost:8001/api/status
Response: List of all status checks
```

## 📁 Project Structure

```
yash-portfolio-fullstack/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AnimatedBackground.jsx
│   │   │   ├── SpotlightEffect.jsx
│   │   │   ├── GlowingBorder.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Certificates.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ui/ (50+ components)
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── ProjectsPage.jsx
│   │   │   ├── SkillsPage.jsx
│   │   │   ├── EducationPage.jsx
│   │   │   ├── CertificatesPage.jsx
│   │   │   ├── ContactPage.jsx
│   │   │   └── DownloadPage.jsx
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env
│
└── backend/
    ├── server.py
    ├── requirements.txt
    └── .env
```

## 🎨 Customization

### Update Personal Information

**Frontend - Edit these files:**
- `frontend/src/components/About.jsx` - Bio and stats
- `frontend/src/components/Projects.jsx` - Your projects
- `frontend/src/components/Experience.jsx` - Work history
- `frontend/src/components/Skills.jsx` - Technical skills
- `frontend/src/components/Education.jsx` - Academic background
- `frontend/src/components/Certificates.jsx` - Certifications

### Update Colors

Edit `frontend/src/index.css`:
```css
:root {
  --bg-primary: #0a0a0a;
  --accent-primary: #38FF62;
  /* Change colors here */
}
```

### Add Backend Routes

Edit `backend/server.py` to add your own API endpoints.

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the frontend:**
```bash
cd frontend
yarn build
```

2. **Deploy build folder** to:
   - Vercel: `vercel deploy`
   - Netlify: Drag & drop `build` folder
   - GitHub Pages: Use `gh-pages` package

3. **Update environment variable:**
   - Set `REACT_APP_BACKEND_URL` to your backend URL

### Backend Deployment (Railway/Render/Heroku)

1. **Prepare for deployment:**
```bash
cd backend
```

2. **Deploy to:**
   - **Railway**: Connect GitHub repo
   - **Render**: Connect GitHub repo
   - **Heroku**: `heroku create` and `git push heroku main`

3. **Set environment variables:**
   - `MONGO_URL` - Your MongoDB connection string
   - `DB_NAME` - Database name

### MongoDB Setup (Production)

1. **MongoDB Atlas (Recommended):**
   - Free tier available
   - Create cluster at https://www.mongodb.com/cloud/atlas
   - Get connection string
   - Update `MONGO_URL` in backend `.env`

## 🐛 Troubleshooting

### Frontend Issues

**Port 3000 already in use:**
```bash
npx kill-port 3000
yarn start
```

**Dependencies issues:**
```bash
rm -rf node_modules yarn.lock
yarn install
```

### Backend Issues

**Module not found:**
```bash
pip install -r requirements.txt
```

**MongoDB connection error:**
- Check if MongoDB is running: `mongosh`
- Verify MONGO_URL in `.env`
- For Atlas, check IP whitelist

**Port 8001 already in use:**
```bash
# On Linux/Mac
lsof -ti:8001 | xargs kill -9

# On Windows
netstat -ano | findstr :8001
taskkill /PID <PID> /F
```

## 📝 Features

### Visual Effects
- Animated particle background
- Mouse-following spotlight
- Glowing button effects
- Smooth page transitions
- Hover animations

### Functionality
- Multi-page routing
- Contact form (mock - ready for backend integration)
- Responsive navigation
- Download page for source code
- Social media integration

### Backend Features
- REST API with FastAPI
- MongoDB integration
- CRUD operations
- CORS enabled for frontend
- Environment variables

## 🔗 Links

- **GitHub**: https://github.com/Yash-0810
- **LinkedIn**: https://www.linkedin.com/in/yash-tripathi-0b044b215/
- **Email**: yashtripahti2020w@gmail.com
- **Phone**: +91 809 329 4061

## 📄 License

Open source for personal use.

## 🙏 Credits

**Built by:** Yash Tripathi  
**Powered by:** Emergent AI

---

### 💡 Tips

1. **Development**: Run backend on 8001, frontend on 3000
2. **Environment**: Always use `.env` files for sensitive data
3. **MongoDB**: Use Atlas for production (free tier available)
4. **Deployment**: Deploy backend first, then update frontend env
5. **Custom Domain**: Point domain to frontend, use subdomain for backend

### 🎯 Next Steps

1. Add more backend endpoints for contact form
2. Integrate authentication if needed
3. Add database models for projects/blogs
4. Set up email service for contact form
5. Add analytics (Google Analytics/Plausible)
6. Set up CI/CD pipeline
7. Add SEO optimization

**Need help?** Reach out via email or LinkedIn!

---

**Made with ❤️ by Yash Tripathi using Emergent AI** 🚀
