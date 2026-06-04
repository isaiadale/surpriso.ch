import sourShockImage from "@/assets/sour-shock-box.png";
import soulSaverImage from "@/assets/soul-saver-box.png";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  image: string;
}

export interface CartItem {
  productId: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  image: string;
  quantity: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "surpriso-sour-shock",
    title: "Surpriso Sour Shock",
    description:
      "Die Surpriso Sour Shock bietet eine aufregende Kombination aus sauren Naschereien, witzigen Kleinigkeiten und originellen Gadgets.",
    price: { amount: "35.00", currencyCode: "CHF" },
    image: sourShockImage,
  },
  {
    id: "surpriso-soul-saver",
    title: "Surpriso Soul Saver",
    description:
      "Die Soul Saver bietet eine wohltuende Auswahl aus gesunden Leckereien, nährstoffreichen Snacks und entspannenden Gadgets.",
    price: { amount: "35.00", currencyCode: "CHF" },
    image: soulSaverImage,
  },
];
