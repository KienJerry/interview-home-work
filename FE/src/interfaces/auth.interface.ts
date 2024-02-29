export interface Res {
  message: string;
  statusCode: number;
  success: boolean;
}

export interface ReqCreateAccount {
  email: string;
  password: string;
  fullName: string;
}

export interface ResCreateAccount extends Res {
  data: { id: string };
}

export interface ReqLogin {
  userName: string;
  password: string;
  firebaseToken: string;
  rememberAccount: boolean;
}

export interface ResLoginData {
  userId: string;
  token: string;
  expiredAt: string;
}

export interface ResLogin extends Res {
  data: ResLoginData;
}

export interface ReqLoginSocial {
  accesssToken: string;
  uid: string;
  typeLogin: number;
  firebaseToken: string;
  email: any;
}

export interface ResUserGooggle {
  accesssToken: string;
  uid: string;
}

export interface ReqForgotPassword {
  email: string;
}

export interface ResForgotPassword extends Res {
  data: { code: string };
}

export interface ReqResetPassword {
  email: string;
  newPassword: string;
  code: string;
}

export interface ResResetPassword extends Res {}

// User

export interface ResGetUserProfileData {
  id: string;
  photoUrl: string;
  name: string;
  typeAccount: number;
  email: string;
  activedDate: string;
  startedDate: string;
  expiredDate: string;
  totalDays: number;
  numberOfDayConsecutive: number;
  totalVocabulary: number;
  isSetAudio: boolean;
  isActive: boolean;
  subscriptionName: string;
}

export interface ResGetUserProfile extends Res {
  data: ResGetUserProfileData;
}
