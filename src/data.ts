import { CreatorProfile, ProductItem } from './types';
import norvineSerumImg from './assets/images/norvine_serum_detail_1782119828655.jpg';

export const CREATOR_PROFILE: CreatorProfile = {
  handle: '@k.aditya11',
  name: 'Bebas Botak',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJuoMvLT_KfQQh6jFnapKM8Uu9oNSgjYNAyNbNPRj65mnTHlbwFkon2XAIbTz7JB7uMrh4_um23Io90ZY75V6dlo1uqq-HX0uN8RVaDjKHhY7FAT8yHJcIpgBXR6GSYvCfESF5fh1rgD40m_vpHcD1iuLiyI9IlmO6xVgGyd7hSjRd3M1B9nQXJaRPgbYGN8euDZuIqM71kzmlkmY7-AXlEbaXhW1-10rs9_hB_W5_pcAb1TGrsaa3-mqMYmz8ssf90uXSSKHxsmE',
  bio: 'Dapatkan produk penumbuh rambut & brewok premium original terpilih untuk mengatasi kebotakan serta menumbuhkan brewok lebat maksimal.',
  socials: {
    instagram: 'https://instagram.com/k.aditya11',
    tiktok: 'https://tiktok.com/@k.aditya11'
  }
};

export const PRODUCTS: ProductItem[] = [
  { 
    id: 'norvine-minoxidil', 
    title: 'Norvine Minoxidil 5%', 
    desc: 'Serum Penumbuh Rambut & Brewok Premium Original berkualitas tinggi. Mempercepat sirkulasi darah & memperkuat folikel rambut.', 
    badge: 'Original Serum',
    image: norvineSerumImg,
    url: 'https://bebasbotak.form.id/norvine-minoxidil' 
  }
];
