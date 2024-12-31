import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://www.apple.com/v/iphone-11/a/images/meta/og__f2j3dwkzna2u.png",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://www.apple.com/v/macbook-air/a/images/meta/og__d5k62k8b4qka.png",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://www.apple.com/v/ipad-pro/a/images/meta/og__d8m6x7smkntm.png",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://www.apple.com/v/apple-watch-series-6/a/images/meta/og__c1zv8c8n7q06.png",
    categoryId: 9,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://www.apple.com/v/airpods-pro/a/images/meta/og__c1zv8c8n7q06.png",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://www.apple.com/v/homepod-mini/a/images/meta/og__d5k62k8b4qka.png",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "Galaxy A16 5G Blue Black",
    price: 550,
    description:
      "The Galaxy A16 5Gs 6.7 display gives you more room for fun. Immerse yourself in your favorite content with the vibrant colors and lifelike",
    image:
      "https://samsungar.vtexassets.com/arquivos/ids/198069-1200-auto?width=1200&height=auto&aspect=true",
    categoryId: 1,
    stock: 10
  },
  {
    name: "Galaxy S24 FE Graphite 256GB",
    price: 500,
    description:
      "Meet the Galaxy S24 FE with Galaxy AI, where every photo unleashes your boundless creativity. Immerse yourself in the full Galaxy AI experience and unleash countless ways to explore your imagination. Capture, surround, touch... discover why its worth it.",
    image:
      "https://samsungar.vtexassets.com/arquivos/ids/197598-1200-auto?width=1200&height=auto&aspect=true",
    categoryId: 1,
    stock: 10
  },
  {
    name: "27 Odyssey OLED G6 G60SD QHD 360Hz Gaming Monitor",
    price: 250,
    description:
      "Glare Free technology significantly reduces glare from external light sources, so the perfect black and color experience of the OLED display is presented without distractions. With a screen that is 54% less bright than conventional anti-reflective film, you can see the full environments of the game and defeat enemies.",
    image:
      "https://samsungar.vtexassets.com/arquivos/ids/196478-1200-auto?width=1200&height=auto&aspect=true",
    categoryId: 7,
    stock: 10
  },
  {
    name: "Galaxy Tab S10+ Graphite 256GB",
    price: 400,
    description:
      "Take notes in your meetings while you're in them – simply record the meeting and then transcribe the audio to text. Galaxy AI can then format and summarize those notes so that taking notes is a snap.",
    image:
      "https://samsungar.vtexassets.com/arquivos/ids/198145-1200-auto?width=1200&height=auto&aspect=true",
    categoryId: 3,
    stock: 10
  },
  {
    name: "Galaxy Fit3 Dark Gray",
    price: 210,
    description:
      "Up to 13 days of charging time. It sits lightly on your wrist and records over 100 workouts and daily activities, including sleep. It lets you play music, check calls and send messages right from your wrist – stay empowered, connected and on track with Galaxy Fit3.",
    image:
      "https://samsungar.vtexassets.com/arquivos/ids/193962-1200-auto?width=1200&height=auto&aspect=true",
    categoryId: 9,
    stock: 10
  },
  {
    name: "Galaxy Buds3 Pro White",
    price: 440,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    image:
      "https://samsungar.vtexassets.com/arquivos/ids/197129-1200-auto?width=1200&height=auto&aspect=true",
    categoryId: 4,
    stock: 10
  }
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
