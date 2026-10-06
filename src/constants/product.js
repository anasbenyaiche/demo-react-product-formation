const img = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;

// image de secours si l'URL ne charge pas
export const FALLBACK_IMAGE = "https://picsum.photos/seed/product/600/450";

export const PRODUCTS = [
  {
    id: 1,
    name: "Casque Audio",
    price: 129,
    category: "Audio",
    rating: 4.5,
    image: img("photo-1505740420928-5e560c06d30e"),
  },
  {
    id: 2,
    name: "Montre Classique",
    price: 199,
    category: "Accessoires",
    rating: 4.8,
    image: img("photo-1523275335684-37898b6baf30"),
  },
  {
    id: 3,
    name: "Appareil Photo",
    price: 89,
    category: "Photo",
    rating: 4.2,
    image: img("photo-1526170375885-4d8ecf77b99f"),
  },
  {
    id: 4,
    name: "Baskets Running",
    price: 110,
    category: "Mode",
    rating: 4.6,
    image: img("photo-1542291026-7eec264c27ff"),
  },
  {
    id: 5,
    name: "Lunettes de Soleil",
    price: 75,
    category: "Accessoires",
    rating: 4.1,
    image: img("photo-1572635196237-14b3f281503f"),
  },
  {
    id: 6,
    name: "Sac à Dos",
    price: 65,
    category: "Voyage",
    rating: 4.4,
    image: img("photo-1553062407-98eeb64c6a62"),
  },
];
