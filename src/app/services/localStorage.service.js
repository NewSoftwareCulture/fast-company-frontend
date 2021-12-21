const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";

export function setTokens({ refreshToken, idToken, expiresIn = 3600 }) {
  const expiresDate = Date.now() + expiresIn * 1000;
  localStorage.setItem(TOKEN_KEY, idToken);
  localStorage.setItem(REFRESH_KEY, refreshToken);
  localStorage.setItem(EXPIRES_KEY, expiresDate);
}

export function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY);
}

export function getExpiresDateToken() {
  return localStorage.getItem(EXPIRES_KEY);
}

export const localStorageService = {
  setTokens,
  getAccessToken,
  getRefreshToken,
  getExpiresDateToken
};

export default localStorageService;