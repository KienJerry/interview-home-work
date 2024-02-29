export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "helloworld.com";
export const API_ENDPOINT =
  process.env.NEXT_PUBLIC_API_ENDPOINT ||
  "https://best-english-staging-api.fer.aegona.work/api/v1/FrontOffice";
export const VER = process.env.NEXT_PUBLIC_VER || "0.0.0";

export const RES_MESS = {
  EMAIL_NOT_FOUND: "EMAIL_NOT_FOUND",
  SUCCESSFULL: "SUCCESSFULL",
  USER_EXISTED: "USER_EXISTED",
  LOGIN_ERROR: "LOGIN_ERROR",
  INVALID_CODE: "INVALID_CODE",
  UNAUTHORRIZED: "Unauthorized",
  RESEND_AFTER_SIXTY_SECONDS: "RESEND_AFTER_SIXTY_SECONDS",
};

export const STORAGE_KEY = {
  ACCOUNT: "account",
  USERINFO: "FCMService",
  SOCIAL: "social",
};

export const COOKIE_KEY = {
  ACCESS_TOKEN: "accessToken",
};

export const LOGINSOCIAL_TYPE = {
  GOOGLE: 2,
  FACEBOOK: 3,
  APPLE: 4,
};
