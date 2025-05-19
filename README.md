## 1. Set up a React application using Vite

### npm create vite@latest clerk-react -- --template react-ts

### cd clerk-react

### npm install

## 2. Install @clerk/clerk-react

### npm install @clerk/clerk-react

## 3. Set your Clerk API keys

VITE_CLERK_PUBLISHABLE_KEY= jjjjjj

### tu archivo .env

VITE_CLERK_PUBLISHABLE_KEY=dfffffffff
VITE_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
VITE_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard

### Iniciar el programa:

npm run dev

### API REST BACKEDN CLERK USUARIOS:

Puedes hacer get, post, PUT, Delete en PostMan viendo estos recursos:

- Link : https://clerk.com/docs/reference/backend-api/tag/Users

- Link : En tu cuenta en tu proyecto, ve a la sección "Configure" , dentro de allí, ve a "API keys" , copia tu "Secret keys" que es diferente de "Public key".

  Por ejemplo, en Potsman:

  - GET https://api.clerk.com/v1/users
  - Authorization : Bear Token usa tu "Secret keys"
  - Content-Type :application/json
    Luego, obtenes el 200 ok .
