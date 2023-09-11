import { OAuth2Client } from './lib/oidc-client/client.ts';

export const oAuth2Client = new OAuth2Client({
  server: window.config.server,
  clientId: window.config.clientId,
  tokenEndpoint: window.config.tokenEndpoint,
  authorizationEndpoint: window.config.authorizationEndpoint,
  logoutEndpoint: window.config.logoutEndpoint,
  redirectUri: window.config.redirectUri,
  postLogoutRedirectUri: window.config.postLogoutRedirectUri,
  scope: window.config.scope,
});