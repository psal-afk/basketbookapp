import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-4zm3b0e0m8xx3gpo.ca.auth0.com';
const clientId = 'gcJu4ZYpwKpdCLYGD0FG7CjLKN4oIaxS';

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>
  </StrictMode>,
)
