import React, { useState } from "react";
import BottomNavbar from "../../components/BottomNavbar";

const products = [
  {
    id: 1,
    name: "Netflix Premium",
    image: "https://vokasi.unair.ac.id/wp-content/uploads/2023/11/Netflix-A-Legal-Platform-Revolutionizing-Entertainment-varlie-zahrani.jpg",
    price: "Rp 13.000",
    oldPrice: "Rp 15.000",
    category: "Streaming",
    link: "/store/netflix",
    bestSeller: true
  },
  {
    id: 2,
    name: "Diamond ML",
    image: "https://garudavoucher.id/blog/wp-content/uploads/2024/08/dm-ml-1024x573.webp",
    price: "Rp 3.000",
    oldPrice: "Rp 5.000",
    category: "Top Up",
    link: "/store/diamond-ml",
    bestSeller: true
  },
  {
    id: 3,
    name: "Capcut Pro",
    image: "https://cdnpro.eraspace.com/media/mageplaza/blog/post/t/i/tips_menggunakan_capcut-primary.png",
    price: "Rp 6.000",
    oldPrice: "Rp 10.000",
    category: "Editing",
    link: "/store/capcut"
  },
  {
    id: 4,
    name: "Pulsa",
    image: "https://satmesin.com/wp-content/uploads/2023/04/pulsa.jpg",
    price: "Rp 4.000",
    oldPrice: "Rp 7.000",
    category: "Top Up",
    link: "/store/pulsa"
  },
  {
    id: 5,
    name: "Alight Motion",
    image: "https://play-lh.googleusercontent.com/OU0BlP8C9-V7ECl2crma7B48nzDbK7liSLjn0j_fpTlyWG6qyEE-mw_KFZ9aOXF0a3w",
    price: "Rp 7.000",
    oldPrice: "Rp 10.000",
    category: "Editing",
    link: "/store/alight-motion"
  },
  {
    id: 6,
    name: "Canva Pro",
    image: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxo4K81Ei7WzcnqEk8W.MgwbTd_YqcrKt3ED_2JioHRslZyvQSJ7Ptwb0.k9awp_ldXhvqCsS38auQNzE.3mKc9U-&format=source",
    price: "Rp 10.000",
    oldPrice: "Rp 12.000",
    category: "Design",
    link: "/store/canva"
  },
  {
    id: 7,
    name: "YouTube",
    image: "https://winpoin.com/wp-content/uploads/2013/09/logoyoutube.jpeg",
    price: "Rp 7.000",
    oldPrice: "Rp 10.000",
    category: "Streaming",
    link: "/store/youtube"
  },
  {
    id: 8,
    name: "Bstation",
    image: "https://play-lh.googleusercontent.com/G9s84Cm1TDnKDX2P8nipS_s60cuCnYtjBRRLespF8nivjXmbV9tF1fY37clZhXMLaA=w240-h480-rw",
    price: "Rp 8.000",
    oldPrice: "Rp 13.000",
    category: "Streaming",
    link: "/store/bstation"
  },
  {
    id: 9,
    name: "Viu",
    image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01ger3p0x0anaj5n5rz679r2fk.png",
    price: "Rp 6.000",
    oldPrice: "Rp 10.000",
    category: "Editing",
    link: "/store/viu"
  },
];

const categories = ["All", "Streaming", "Top Up", "Design", "Editing", "Tools"];

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <BottomNavbar/>
      <section className="max-w-4xl mx-auto px-5 pt-20 pb-20">
        <h2 className="text-2xl font-semibold text-center mb-5 text-gray-800">FaStore ID</h2>

        <div className="flex overflow-x-auto space-x-3 pt-2 pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              className={`inline-flex items-center px-4 py-1 rounded-lg transition whitespace-nowrap w-auto border
                ${selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white border border-gray-200 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md overflow-hidden"
            >
              {product.bestSeller && (
                <div className="absolute top-[5px] left-[-19px] bg-red-500 text-white text-xs font-bold px-6 py-1 transform -rotate-45">
                  Best
                </div>
              )}
              <a href={product.link} className="block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-[16px] font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-gray-600 text-[12px] mt-1">
                    <span className="text-black font-bold">{product.price}</span>
                    <span className="text-gray-400 line-through ml-2">{product.oldPrice}</span>
                  </p>
                  <button className="mt-3 w-full bg-black text-white py-2 text-[12px] rounded-md transition-all duration-300">
                    View Detail
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">Tidak ada produk dalam kategori ini.</p>
          </div>
        )}
      </section>
    </div>
  );
}