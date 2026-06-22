export type ModalType =
  | 'none'
  | 'share'
  | 'privacy'
  | 'terms';

export interface CreatorProfile {
  handle: string;
  name: string;
  avatar: string;
  bio: string;
  socials: {
    instagram?: string;
    youtube?: string;
    tiktok?: string;
  };
}

export interface ProductItem {
  id: string;
  title: string;
  desc: string;
  badge: string;
  image: string;
  url: string;
}
