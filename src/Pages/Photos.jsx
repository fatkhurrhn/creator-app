import React, { useState } from "react";
import Navbar from "../components/BottomNavbar";

export default function PhotoGallery() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const photoCategories = [
    { id: 1, src: "https://i.pinimg.com/474x/5b/81/d7/5b81d756d1702e41d8b255a8cf859b81.jpg", category: "Nature" },
    { id: 2, src: "https://i.pinimg.com/474x/c9/50/7e/c9507e636a2d3f89ae65e29a18daa9b2.jpg", category: "City" },
    { id: 3, src: "https://i.pinimg.com/474x/40/88/ae/4088ae1e6eca657eaa6b5bf9452b22c4.jpg", category: "Space" },
    { id: 4, src: "https://i.pinimg.com/474x/a3/72/a9/a372a92b2b782719f47e1cd6c563166a.jpg", category: "Ocean" },
    { id: 5, src: "https://i.pinimg.com/474x/56/02/3f/56023fe679a839346840878760136b65.jpg", category: "Nature" },
  ];

  const categories = ["All", "Nature", "City", "Space", "Ocean"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPhotos =
    selectedCategory === "All"
      ? photoCategories
      : photoCategories.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 pb-[90px]">
      <Navbar />
      <section className="max-w-4xl mx-auto px-5 pt-8">
        <div className="text-center flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 pt-10">ini assets yang aku pake</h1>
          <p className='pb-1 text-gray-600'>Ambil aja kalo kamu butuh 😉</p>
          <hr className="border-gray-200" />
        </div>

        <div className="flex overflow-x-auto space-x-3 pt-2 pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              className={`inline-flex items-center px-4 py-1 rounded-lg transition border whitespace-nowrap w-auto
                ${selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-2 pt-3">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="mb-2 break-inside-avoid flex flex-col items-center">
              <div className="relative w-full">
                <img
                  src={photo.src}
                  alt={photo.category}
                  className="w-full rounded-lg shadow-md border border-gray-200"
                />
                <span className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">Tidak ada foto dalam kategori ini.</p>
          </div>
        )}

        {/* Floating Button */}
        <button 
                className="fixed bottom-[70px] right-5 bg-black bg-opacity-70 border border-[#252529] hover:bg-[#1f1f24] text-white px-3 py-1 text-sm rounded-md shadow-lg"
                onClick={() => setIsPopupOpen(true)}
            >
                <i class="ri-download-2-line"></i>
            </button>

        {/* Popup */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 z-50">
            <div className="bg-white border border-gray-200 p-6 rounded-lg max-w-sm text-center shadow-xl">
              <p className="mb-6 leading-relaxed text-gray-700">
                Untuk mendownload foto, tahan beberapa detik pada gambar yang ingin disimpan. Setelah itu, pilih opsi "Simpan Gambar", maka gambar akan tersimpan di gallery mu.
              </p>
              <button 
                className="bg-black hover:bg-blue-600 text-white px-4 py-2 w-full rounded-md"
                onClick={() => setIsPopupOpen(false)}
              >
                Siap, Mengerti
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}