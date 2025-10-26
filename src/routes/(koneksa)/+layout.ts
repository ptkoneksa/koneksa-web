export const load = async ({ url }) => {
  const productAndServices = [
    {
      name: "Konvy",
      description: "A bridge that connects you with our talents.",
      category: "Digital Creative",
      image: "/logo/konvy_logo_brand.png",
      link: "/konvy",
      target: "_self",
    },
    {
      name: "Tipspace",
      description:
        "Beri dukungan, bangun koneksi di Tipspace. Tempat untuk berbagi dukungan, kontribusi, dan apresiasi pada kreator favorit Anda.",
      category: "Entertainment",
      image: "/logo/tipspace_logo.png",
      link: "https://tipspace.org",
      target: "_blank",
    },
    {
      name: "Kopi Koneksa",
      description:
        "Sebagai wadah untuk saling terhubung dan berbagi cerita. Kami percaya, setiap cangkir kopi punya cerita, dan kami tak sabar untuk mendengar cerita kamu bersama teman, pasangan, atau keluarga di Kopi Koneksa. Mari kita nikmati perjalanan rasa kopi ini bersama-sama. Sampai jumpa di outlet kami!",
      category: "Food & Beverage",
      image: "/logo/kopi_koneksa_logotype.png",
      link: "https://kopi.koneksa.id",
      target: "_blank",
    },
    {
      name: "GSalt",
      description:
        "Global Koneksa Loyalty Token (GSalt) is a loyalty token that can be used to redeem rewards and discounts at Koneksa.",
      category: "Finance",
      image: "/logo/gsalt_coin_logo.png",
      link: "https://koneksa.id/gsalt",
      target: "_blank",
    },
    {
      name: "Blockstuff",
      description:
        "Blockstuff is a marketplace platform for buying Minecraft server items.",
      category: "E-Commerce",
      image: "/logo/blockstuff_logotype.png",
      link: "https://bstuff.top",
      target: "_blank",
    },
  ];

  return {
    url,
    productAndServices,
  };
};
