# MobileZone

A full-stack mobile marketplace / service platform (React + Vite frontend & Node.js backend) — designed to let users buy, sell, and manage mobile devices and related services.  

---

## 📁 Project Structure

```
MobileZone/
├── backend/          # Node.js / Express (or your chosen backend)
├── public/           # public assets for frontend
├── src/              # React frontend code
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Features

- User authentication (email/password + Google OAuth)  
- JWT / access‑refresh token flow  
- User profile updates (speciality, timezone, etc.)  
- Timezone & country selection (UAE, Canada, USA, etc.)  
- Role-based access control (only user or admin can modify their data)  
- Account deletion with safety confirmations  
- Secure protected API routes  
- Responsive UI with React + Vite  

---

## 🛠️ Technologies Used

| Layer | Stack / Libraries |
|-------|-------------------|
| Frontend | React, Vite, Zustand (or your state manager), Axios, Tailwind CSS (or any CSS framework) |
| Backend | Node.js, Express (or your chosen framework), JWT, Firebase Admin (for Google token verification) |
| Data storage | (Your DB: e.g. MongoDB, Postgres, etc.) |
| Deployment / Hosting | (Your choices, e.g. Heroku, AWS, Vercel) |

---

## ⚙️ Setup & Installation

### 1. Clone the repo

```bash
git clone https://github.com/paramveer7267/MobileZone.git
cd MobileZone
```

### 2. Backend setup

```bash
cd backend
npm install
# Create a .env file with:
#   JWT_SECRET, DATABASE_URL, FIREBASE_CONFIG, etc.
npm run dev   # or start command
```

### 3. Frontend setup

```bash
cd ../
npm install
# If the backend runs on a different port, adjust Axios baseURL
npm run dev
```

The frontend will typically run on `http://localhost:5173`, and the backend on e.g. `http://localhost:5000`.

---

## 🔐 Authentication Flow

1. User logs in via Google / email.
2. Frontend gets Firebase ID token (for Google) or credentials.
3. Backend verifies / exchanges it for its own JWT + refresh token.
4. Frontend stores `accessToken` (in memory or state) + `refreshToken` (in cookie or storage).
5. Protected API routes require `Authorization: Bearer <accessToken>`.
6. Token refresh is handled automatically before expiry.

---

## 🧩 Example Usage

```js
// loginWithGoogle (frontend)
const result = await signInWithPopup(auth, googleProvider);
const idToken = await result.user.getIdToken();

const response = await api.post("/auth/google", { idToken });
// response.data.data = { authResponse, userDetail }

const { authResponse, userDetail } = response.data.data;
// Then optionally update user record with JWT in header

setUser({ userDetail });
setAccessToken(authResponse.accessToken);
store refreshToken in cookie/session
```

---

## 🚨 Troubleshooting & Common Errors

| Error | Possible Cause | How to Resolve |
|-------|----------------|-----------------|
| `403 Forbidden` on delete/update API | Token invalid or ID mismatch | Ensure the JWT’s user ID matches the route param, or route allows admin |
| `TypeError: object is not iterable` | Destructuring array on an object | Use `{ authResponse, userDetail } = data` not `[ … ]` |
| API calls hitting wrong port (e.g. `5173`) | Axios baseURL misconfigured | Set backend server’s baseURL in Axios config |
| Missing or expired tokens | Token not stored or refresh failed | Add logic to refresh access tokens before expiry |

---

## 📜 API Endpoints (Sample)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/google` | Sign in using Google — returns JWT + user detail |
| PUT / POST | `/user/update/:id` | Update user profile fields |
| DELETE | `/user/delete/:id` | Delete user account (self or admin) |
| GET | `/user/profile/:id` | Fetch user profile |

---

## 📂 Environment Variables (backend)

Here’s a sample `.env` template:

```env
PORT=5000
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
FIREBASE_PROJECT_ID=...
FIREBASE_PRIVATE_KEY=...
FIREBASE_CLIENT_EMAIL=...
DATABASE_URL=...
```

Make sure to configure Firebase (for Google sign-in) properly in both frontend and backend.

---

## 🤝 Contributing

1. Fork the repo  
2. Create a feature branch (`git checkout -b my-feature`)  
3. Commit your changes (`git commit -am "Add new feature"`)  
4. Push to your branch (`git push origin my-feature`)  
5. Open a Pull Request  

Please follow coding standards (linting, formatting, commenting) and test your changes.

---

## 📝 License

This project is open-sourced under the **MIT License**.

---

## 🙏 Acknowledgments & Thanks

- Firebase for Google authentication  
- JWT for token-based security  
- React, Vite, Axios for frontend stack  
- Inspiration from modern full-stack apps  
