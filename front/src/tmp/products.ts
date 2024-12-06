interface IProduct {
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
  }
  
  const products: IProduct[] = [
    {
      name: "iPhone 11",
      price: 699,
      description:
        "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
      image:
        "https://dcdn.mitiendanube.com/stores/001/806/456/products/iphone_11_verde-92c4a4be9576480dda16284497336315-1024-1024.jpg",
      categoryId: 1,
      stock: 10,
    },
    {
      name: "MacBook Air",
      price: 999,
      description:
        "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
      image:
        "https://www.apple.com/newsroom/images/product/mac/standard/Apple-WWDC22-MacBook-Air-lp-220606.jpg.og.jpg?202410291951",
      categoryId: 2,
      stock: 10,
    },
    {
      name: "iPad Pro",
      price: 799,
      description:
        "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
      image:
        "https://ar.oneclickstore.com/wp-content/uploads/2021/11/iPad_Pro_Wi-Fi_11_in_Space_Gray_PDP_Image_Position-1b__en-US-800x800.jpg",
      categoryId: 3,
      stock: 10,
    },
    {
      name: "Apple Watch Series 6",
      price: 399,
      description:
        "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
      image:
        "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series-6-aluminum-red-case-altimeter_09152020_inline.jpg.large.jpg",
      categoryId: 4,
      stock: 10,
    },
    {
      name: "AirPods Pro",
      price: 249,
      description:
        "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
      image:
        "https://media.istockphoto.com/id/1208634599/es/foto/apple-airpods-pro-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=Dh-zQ0MdwbgfKSJ54Gk3h3uY_8RsmBeJSlNxyeLNCPg=",
      categoryId: 5,
      stock: 10,
    },
    {
      name: "HomePod mini",
      price: 99,
      description:
        "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
      image:
        "https://www.apple.com/newsroom/images/2024/07/apple-introduces-homepod-mini-in-midnight/tile/Apple-HomePod-mini-midnight-lp.jpg.news_app_ed.jpg",
      categoryId: 6,
      stock: 10,
    },
  ];

  export default products;