import { OAuth2Client } from './lib/oidc-client/client.ts';

export const oAuth2Client = new OAuth2Client({
  server: 'https://api.asgardeo.io/',
  clientId: 'LI0qJFVEkn0BEPoWF344_DreCVAa',
  tokenEndpoint: '/t/teeorg/oauth2/token',
  authorizationEndpoint: '/t/teeorg/oauth2/authorize',
  logoutEndpoint: '/t/teeorg/oidc/logout',
  redirectUri: 'http://localhost:3000/auth/callback',
  postLogoutRedirectUri: 'http://localhost:3000'
});