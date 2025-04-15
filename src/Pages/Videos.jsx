import React, { useState } from "react";
import Navbar from "../components/BottomNavbar";
import DarkVibes from "../assets/mentahan-video/dark-vibes1.mp4";
import Landscape from "../assets/mentahan-video/pemandangan1.mp4";
import Sky from "../assets/mentahan-video/sky1.mp4";
import Sky2 from "../assets/mentahan-video/sky2.mp4";

export default function Page() {
  const videoCategories = [
    { id: 1, src: DarkVibes, category: "Dark Vibes" },
    { id: 2, src: Sky2, category: "Sky" },
    { id: 3, src: Landscape, category: "Natural" },
    { id: 4, src: Sky, category: "Sky" },
  ];

  const categories = ["All", "Natural", "Dark Vibes", "Sky", "Miaww", "Nailong", "Aesthetic"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos =
    selectedCategory === "All"
      ? videoCategories
      : videoCategories.filter((video) => video.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 pb-[90px]">
      <Navbar />
      <section className="max-w-4xl mx-auto px-5 pt-8">
        <div className="text-center flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 pt-10">Ini assets yang aku pake</h1>
          <p className='pb-1'>Ambil aja kalo kamu butuh 😉</p>
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

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-3">
          {filteredVideos.map((video) => (
            <div key={video.id} className="relative flex flex-col items-center gap-2 w-full">
              <div className="relative w-full max-w-xs">
                <video
                  controls
                  className="w-full h-auto rounded-lg shadow-md border border-gray-200"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <span className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.category}
                </span>
              </div>

              <a
                href={video.src}
                download
                className="w-full px-4 py-2 bg-black text-white rounded-[6px] transition text-center shadow-sm"
              >
                Download video
              </a>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">Tidak ada video dalam kategori ini.</p>
          </div>
        )}
      </section>
    </div>
  );
}