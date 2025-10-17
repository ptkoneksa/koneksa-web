export enum TalentType {
  BRIDGE,
  TEAM,
}

export enum TalentContactType {
  EMAIL,
  WHATSAPP,
  TELEGRAM,
  INSTAGRAM,
}

export enum TalentSocialMediaType {
  INSTAGRAM,
  LINKEDIN,
  X,
  YOUTUBE,
  TIKTOK,
  FACEBOOK,
}

export interface Talent {
  id: string;
  connectId: string | null;
  type: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string | null;
  isActive: boolean;
  isPrivate: boolean;
  tags: string[];
  skills: string[];
  bridgeCount: number;
  createdAt: Date;
  updatedAt: Date;
  contacts: TalentContact[];
  socialMedias: TalentSocialMedia[];
  rateCards: TalentRateCard[];
}

export interface TalentContact {
  id: string;
  talentId: string;
  talent: Talent;
  type: string;
  value: string;
  isManager: boolean;
  name: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface TalentSocialMedia {
  id: string;
  talentId: string;
  talent: Talent;
  type: string;
  value: string;
  url: string | null;
  followers: number | null;
  isFollowersHidden: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TalentRateCard {
  id: string;
  talentId: string;
  talent: Talent;
  socialMediaId: string | null;
  socialMedia: TalentSocialMedia | null;
  rate: number;
  currency: string;
  isAvailable: boolean;
  title: string;
  description: string;
  benefits: string[];
}
