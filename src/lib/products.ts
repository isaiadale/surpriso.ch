import sweetFunImage from "@/assets/sweet-fun-box.png";
import goodieFunImage from "@/assets/goodie-fun-box.png";

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
    id: "sweet-fun-box",
    title: "Sweet Fun Box",
    description:
      "Eine süsse Überraschungsbox gefüllt mit handverlesenen Schweizer Leckereien. Jede Box enthält einen Sticker und eine persönliche Karte.",
    price: { amount: "49.00", currencyCode: "CHF" },
    image: sweetFunImage,
  },
  {
    id: "goodie-fun-box",
    title: "Goodie Fun Box",
    description:
      "Die Goodie Fun Box begeistert mit einer bunten Mischung aus Snacks, Süssigkeiten und kleinen Überraschungen. Inklusive Sticker und Karte.",
    price: { amount: "59.00", currencyCode: "CHF" },
    image: goodieFunImage,
  },
];
