export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  image: string;
  color: string;
  sizes: string[];
  slogan: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "onm-001",
    name: "T-shirt « Depuis Toujours »",
    slug: "tshirt-depuis-toujours",
    description:
      "Le premier statement. « ON NOUS MENT — DEPUIS TOUJOURS » imprimé en blanc sur coton noir. Un classique intemporel pour ceux qui refusent la version officielle.",
    price: 39,
    category: "T-shirts",
    image: "/images/tshirt-depuis-toujours.jpg",
    color: "Noir",
    sizes: ["S", "M", "L", "XL", "XXL"],
    slogan: "On nous ment depuis toujours",
    featured: true,
  },
  {
    id: "onm-002",
    name: "T-shirt « Éteins La Télé »",
    slug: "tshirt-eteins-la-tele",
    description:
      "« Éteins la télé, allume ton cerveau ». Un rappel brut et direct. T-shirt noir coupe classique.",
    price: 37,
    category: "T-shirts",
    image: "/images/tshirt-eteins-tele.jpg",
    color: "Noir",
    sizes: ["S", "M", "L", "XL", "XXL"],
    slogan: "Éteins la télé, allume ton cerveau",
    featured: true,
  },
  {
    id: "onm-003",
    name: "Hoodie « Classifié »",
    slug: "hoodie-classifie",
    description:
      "Hoodie noir avec le slogan « [ Information classifiée ] » au dos en large tampon rouge. Devant sobre : petit logo ONM poitrine.",
    price: 69,
    category: "Hoodies",
    image: "/images/hoodie-classifie.jpg",
    color: "Noir",
    sizes: ["S", "M", "L", "XL", "XXL"],
    slogan: "[ Information classifiée ]",
    featured: true,
  },
  {
    id: "onm-004",
    name: "T-shirt « Consomme Obéis Oublie »",
    slug: "tshirt-consomme-obeis",
    description:
      "La trinité du système en trois mots : « Consomme. Obéis. Oublie. » Noir sur noir, discret jusqu'à ce qu'on s'approche.",
    price: 37,
    category: "T-shirts",
    image: "/images/tshirt-consomme.jpg",
    color: "Noir",
    sizes: ["S", "M", "L", "XL", "XXL"],
    slogan: "Consomme. Obéis. Oublie.",
    featured: false,
  },
  {
    id: "onm-005",
    name: "Hoodie « Vérité »",
    slug: "hoodie-verite",
    description:
      "« La vérité n'est plus un droit, c'est une contrebande. » Hoodie épais, parfait pour les nuits de rébellion silencieuse.",
    price: 72,
    category: "Hoodies",
    image: "/images/hoodie-verite.jpg",
    color: "Noir",
    sizes: ["S", "M", "L", "XL", "XXL"],
    slogan: "La vérité n'est plus un droit, c'est une contrebande",
    featured: false,
  },
  {
    id: "onm-006",
    name: "Casquette « Censuré »",
    slug: "casquette-censure",
    description:
      "Casquette noire avec barre de censure rouge brodée sur le devant. Logo ONM discret sur le côté.",
    price: 32,
    category: "Accessoires",
    image: "/images/casquette-censure.jpg",
    color: "Noir",
    sizes: ["Taille unique"],
    slogan: "▌▌▌▌▌▌▌▌▌▌",
    featured: true,
  },
  {
    id: "onm-007",
    name: "T-shirt « Métro Boulot Mensonges »",
    slug: "tshirt-metro-boulot",
    description:
      "Détournement cynique du fameux triptyque. « Métro. Boulot. Mensonges. » En typographie serrée, comme un aveu.",
    price: 37,
    category: "T-shirts",
    image: "/images/tshirt-metro.jpg",
    color: "Noir",
    sizes: ["S", "M", "L", "XL", "XXL"],
    slogan: "Métro. Boulot. Mensonges.",
    featured: false,
  },
  {
    id: "onm-008",
    name: "T-shirt « Ministère de la Vérité »",
    slug: "tshirt-ministere-verite",
    description:
      "« Approuvé par le Ministère de la Vérité ». Faux tampon officiel façon document administratif. Ironie Orwellienne.",
    price: 39,
    category: "T-shirts",
    image: "/images/tshirt-ministere.jpg",
    color: "Noir",
    sizes: ["S", "M", "L", "XL", "XXL"],
    slogan: "Approuvé par le Ministère de la Vérité",
    featured: true,
  },
  {
    id: "onm-009",
    name: "T-shirt « Ne Pas Avoir Peur »",
    slug: "tshirt-ne-pas-avoir-peur",
    description:
      "« Le premier geste de rébellion, c'est de ne pas avoir peur. » Un manifeste à porter sur soi.",
    price: 37,
    category: "T-shirts",
    image: "/images/tshirt-peur.jpg",
    color: "Noir",
    sizes: ["S", "M", "L", "XL", "XXL"],
    slogan: "Le premier geste de rébellion, c'est de ne pas avoir peur",
    featured: false,
  },
  {
    id: "onm-010",
    name: "Tote Bag « Plainte »",
    slug: "tote-plainte",
    description:
      "Tote bag noir. Texte : « Déposer une plainte : ouvrir les yeux suffit ». Sac épais, bandoulière longue.",
    price: 28,
    category: "Accessoires",
    image: "/images/tote-plainte.jpg",
    color: "Noir",
    sizes: ["Taille unique"],
    slogan: "Déposer une plainte : ouvrir les yeux suffit",
    featured: false,
  },
];

export const categories = [...new Set(products.map((p) => p.category))];
