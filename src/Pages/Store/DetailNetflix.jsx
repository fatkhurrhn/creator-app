import React, { useState } from "react";
import Navbar from "../../components/BottomNavbar";

const pricelist = [
  {
    category: "1 profil 1 user harian",
    options: [
      { duration: "1h", price: "7.000" },
      { duration: "3h", price: "9.000" },
      { duration: "7h", price: "14.000" }
    ]
  },
  {
    category: "1 profil 1 user bulanan",
    options: [
      { duration: "1b", price: "25.000" },
      { duration: "2b", price: "43.000" },
      { duration: "3b", price: "63.000" }
    ]
  },
  {
    category: "1 profil 2 user",
    options: [
      { duration: "5h", price: "9.000" },
      { duration: "7h", price: "11.000" },
      { duration: "1b", price: "16.000" },
      { duration: "2b", price: "25.000" },
      { duration: "3b", price: "35.000" }
    ]
  },
  {
    category: "Semi Private",
    options: [
      { duration: "1b", price: "29.000" },
      { duration: "2b", price: "51.000" },
      { duration: "3b", price: "75.000" }
    ]
  },
  {
    category: "Private",
    options: [
      { duration: "1m", price: "35.000" },
      { duration: "1b", price: "105.000" }
    ]
  }    
];

export default function Page() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (category, duration, price) => {
    setSelected(`${category} - ${duration} : ${price}`);
  };

  const handleOrder = () => {
    if (!selected) return;
    const phone = "6285179917416";
    const message = `Order Apk Netflix ${selected}\n\nApa ada stok kak?`;
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="font-sans bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-[110px]">
        <Navbar/>
        
        <div className="text-center flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 pt-10">Netflix Pricelist</h1>
          <p className='pb-2'>murah kok, di gasskeeeunnlah kuyy</p>
          <hr className="border-gray-200" />
        </div>

         {pricelist.map((item, index) => (
                    <div key={index} className="mb-6">
                        <h2 className="text-lg text-black font-semibold mb-2">{item.category}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                            {item.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSelect(item.category, option.duration, option.price)}
                                    className={`p-3 rounded-md border border-blue-300 text-black transition ${selected === `${item.category} - ${option.duration} : ${option.price}` ? 'bg-blue-900 text-white' : ''}`}
                                >
                                    {option.duration} → Rp {option.price}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
        
        {selected && (
          <button
            onClick={handleOrder}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-8 py-2 rounded-xl shadow-lg hover:bg-green-600 transition-colors flex items-center"
          >
            <i className="ri-whatsapp-line mr-2"></i>
            Order Now
          </button>
        )}
      </main>
    </div>
  );
}