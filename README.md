## PollingPoint

> Empowering citizens with easy access to election information, candidate positions, and civic participation resources.

**Live Demo:** [Coming Soon]  
**Portfolio Project** | Built with React, TypeScript, and Node.js

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

PollingPoint is a nonpartisan civic engagement platform designed to help voters make informed decisions. Built as a full-stack web application, it provides easy access to:

- **Election Information** - Upcoming federal elections, dates, and deadlines
- **Candidate Profiles** - Compare candidates side-by-side with their positions and voting records
- **Polling Locations** - Find your nearest polling place with hours and accessibility info
- **Voter Registration** - Check registration status and deadlines

**Target Users:**
- First-time voters (18-25)
- Busy professionals seeking quick election info
- Anyone overwhelmed by civic information

**Mission:** Know who's on your ballot in under 2 minutes.

---

## ✨ Features

### Current Features (MVP)
- ✅ Responsive homepage with hero section and feature cards
- ✅ Sticky navigation with dropdown menus
- ✅ Modern UI with Tailwind CSS
- ✅ Component-based architecture with React
- ✅ TypeScript for type safety
- ✅ React Router for seamless navigation

### Coming Soon (Phase 2)
- 🔜 Address-based election lookup (Google Civic Information API)
- 🔜 Interactive polling location map
- 🔜 Candidate comparison tool
- 🔜 Voter registration status checker
- 🔜 Email/SMS election reminders

### Future Enhancements (Phase 3)
- 🚀 Mobile app (React Native)
- 🚀 Bill tracking ("What's my alderman voting on?")
- 🚀 Sample ballot viewer
- 🚀 Multilingual support

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **PostgreSQL** - Database
- **Prisma** - ORM
- **Redis** - Caching layer

### External APIs
- **Google Civic Information API** - Election and polling data
- **ProPublica Congress API** - Federal legislator voting records
- **OpenStates API** - State legislature data (future)

### Hosting & Deployment
- **Frontend:** Vercel (planned)
- **Backend:** Railway/Render (planned)
- **Database:** Supabase (planned)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

Check your versions:
```bash
node --version  # Should be v18.x or higher
npm --version   # Should be v9.x or higher
```

---

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vwartemb/PollingPointWebsite.git
   cd PollingPointWebsite
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies** (when available)
   ```bash
   cd ../backend
   npm install
   ```

---

### Environment Variables

#### Frontend Setup

Create a `.env` file in the `frontend` directory:

```bash
cd frontend
touch .env
```

Add the following variables (get API keys from the respective services):

```env
# Google Civic Information API
VITE_GOOGLE_CIVIC_API_KEY=your_google_civic_api_key_here

# ProPublica Congress API
VITE_PROPUBLICA_API_KEY=your_propublica_api_key_here
```

**Getting API Keys:**

1. **Google Civic Information API:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable "Google Civic Information API"
   - Create credentials (API Key)
   - Copy the key to your `.env` file

2. **ProPublica Congress API:**
   - Visit [ProPublica API](https://www.propublica.org/datastore/api/propublica-congress-api)
   - Request an API key (free)
   - Copy the key to your `.env` file

#### Backend Setup 

Create a `.env` file in the `backend` directory:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/pollingpoint

# API Keys
GOOGLE_CIVIC_API_KEY=your_key_here
PROPUBLICA_API_KEY=your_key_here

# Server Configuration
PORT=3001
NODE_ENV=development

# Redis (optional for caching)
REDIS_URL=redis://localhost:6379
```

---

### Running the Application

#### Development Mode

**Frontend:**
```bash
cd frontend
npm run dev
```

The app will be available at `http://localhost:5173`

**Backend (when available):**
```bash
cd backend
npm run dev
```

The API will run at `http://localhost:3001`

#### Production Build

**Frontend:**
```bash
cd frontend
npm run build
npm run preview  # Preview production build locally
```

**Backend:**
```bash
cd backend
npm run build
npm start
```

---

## 📁 Project Structure

```
PollingPointWebsite/
├── frontend/                   # React frontend application
│   ├── public/
│   │   └── images/            # Static images
│   │       ├── hero-background.jpg
│   │       ├── empower-1.jpg
│   │       ├── empower-2.jpg
│   │       └── empower-3.jpg
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   │   ├── layout/       # Navigation, Footer, Layout
│   │   │   ├── home/         # Homepage sections
│   │   │   ├── elections/    # Election-related components
│   │   │   ├── candidates/   # Candidate components
│   │   │   └── common/       # Shared UI components
│   │   ├── pages/            # Page components
│   │   │   ├── HomePage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── ElectionsPage.tsx
│   │   │   └── FAQPage.tsx
│   │   ├── services/         # API integration
│   │   ├── hooks/            # Custom React hooks
│   │   ├── types/            # TypeScript type definitions
│   │   ├── utils/            # Helper functions
│   │   ├── App.tsx           # Main app component
│   │   └── main.tsx          # Entry point
│   ├── .env                  # Environment variables (not committed)
│   ├── .env.example          # Template for env variables
│   ├── tailwind.config.js    # Tailwind configuration
│   ├── vite.config.ts        # Vite configuration
│   └── package.json
│
├── backend/                   # Node.js backend (coming soon)
│   ├── src/
│   │   ├── routes/           # API routes
│   │   ├── controllers/      # Route controllers
│   │   ├── services/         # Business logic
│   │   ├── models/           # Database models
│   │   └── middleware/       # Express middleware
│   ├── .env                  # Backend env variables
│   └── package.json
│
├── .gitignore
├── README.md
└── Requirements Doc PollingPoint.docx
```

---

## 🔌 API Integration

### Google Civic Information API

**Endpoints Used:**
- `GET /voterinfo` - Election info and polling locations by address
- `GET /elections` - List of available elections

**Example Request:**
```javascript
const response = await fetch(
  `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${API_KEY}&address=${address}`
);
```

### ProPublica Congress API

**Endpoints Used:**
- `GET /members` - Congressional member information
- `GET /members/{id}/votes` - Voting records
- `GET /bills` - Bill information

**Example Request:**
```javascript
const response = await fetch(
  'https://api.propublica.org/congress/v1/members',
  {
    headers: {
      'X-API-Key': PROPUBLICA_API_KEY
    }
  }
);
```

---

## 🗺️ Roadmap

### Phase 1: MVP (Weeks 1-6) ✅
- [x] Project setup and architecture
- [x] Responsive homepage with sections
- [x] Navigation with dropdown menus
- [x] Component structure
- [x] Tailwind CSS integration
- [ ] API integration (Google Civic, ProPublica)
- [ ] Address search functionality
- [ ] Basic dashboard

### Phase 2: Core Features (Weeks 7-12)
- [ ] Interactive polling location map
- [ ] Candidate comparison tool
- [ ] Voter registration checker
- [ ] Email/SMS reminders
- [ ] User authentication (optional)
- [ ] Backend API deployment

### Phase 3: Enhancements (Future)
- [ ] Mobile app (React Native)
- [ ] Bill tracking feature
- [ ] Sample ballot viewer
- [ ] Social sharing features
- [ ] Multilingual support
- [ ] Accessibility improvements (WCAG 2.1 AA)

---



## 📸 Screenshots

### Homepage
![Homepage](screenshots/homepage.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Candidate Comparison
![Candidates](screenshots/candidates.png)

*Screenshots coming soon*

---

## 🧪 Testing 

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Run all tests with coverage
npm run test:coverage
```

---



## 👤 Contact

**Vanessa Wartemberg**

- GitHub: [@vwartemb](https://github.com/vwartemb)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Portfolio: [Your Portfolio](https://yourportfolio.com)
- Email: your.email@example.com

---

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ Full-stack application architecture
- ✅ RESTful API integration
- ✅ TypeScript and type safety
- ✅ React best practices (hooks, component composition)
- ✅ Responsive design with Tailwind CSS
- ✅ Git version control and collaboration
- ✅ API security and environment variables
- ✅ Modern development tools (Vite, ESLint)

---

**Built with ❤️ for civic engagement and democracy**

*PollingPoint - Know your candidates, own your vote*
