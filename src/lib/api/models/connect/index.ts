export interface ConnectUser {
  id: string;
  email: string;
  phone: string | null;
  username: string;
  fullName: string;
  bio: string | null;
  avatarUrl: string | null;
  globalRole: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isActive: boolean;
  lastLoginAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface AuthResponse {
  user: ConnectUser;
  accessToken: string;
  refreshToken: string;
}
