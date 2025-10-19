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

export enum TeamType {
  CONTRACT,
  FULLTIME,
  PARTTIME,
  FREELANCE,
  INTERNSHIP,
  VOLUNTEER,
  OTHER,
}

export enum Gender {
  MALE,
  FEMALE,
}

export enum Religion {
  ISLAM,
  KRISTEN,
  KONGHUCU,
  HINDU,
  BUDDHA,
  OTHER,
}

export interface Talent {
  id: string;
  connectId: string | null;
  type: TalentType;
  name: string;
  slug: string;
  description: string;
  imageUrl: string | null;
  gender: Gender | null;
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
  type: TalentContactType;
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
  type: TalentSocialMediaType;
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

export interface Team {
  id: string;
  type: TeamType;
  name: string;
  slug: string;
  description: string;
  imageUrl: string | null;
  gender: Gender | null;
  religion: Religion | null;
  isActive: boolean;
  isPrivate: boolean;
  department: string | null;
  position: string | null;
  location: string | null;
  currency: string;
  salary: number | null;
  joinedAt: Date;
  leftAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
