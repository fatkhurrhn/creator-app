import React from "react";
import BottomNavbar from "../components/BottomNavbar";

export default function PaidPromote() {
  return (
    <div className="font-sans bg-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-[100px]">
        <section className="max-w-4xl mx-auto px-4 pt-1">
        <div className="text-center flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 pt-10">PAID PROMOTE RATE</h1>
          <p className='pb-2'>Sederhana, tapi bermakna. Sekarang bisa jadi tempat promosi kamu juga!</p>
          <hr className="border-gray-200" />
        </div>

          {/* Pricing Sections */}
          <div className="space-y-8">
            {/* 1. Feed Post */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-600">📌</span>
                <h2 className="text-lg font-bold text-gray-800">1. Feed Post</h2>
              </div>
              
              {/* Mobile Cards */}
              <div className="sm:hidden space-y-0">
                <ServiceCard 
                  title="1x Feed Post (Tayang 3–5 hari)"
                  price="Rp85.000 – 150.000"
                  desc="Caption disesuaikan, max 2 revisi"
                />
                <ServiceCard 
                  title="Feed + Story (3–5 hari)"
                  price="Rp120.000 – 200.000"
                  desc="Jangkauan lebih luas"
                />
                <ServiceCard 
                  title="Paket Mingguan (2 Feed + 3 Story)"
                  price="Rp300.000 – 400.000"
                  desc="Untuk campaign rutin"
                />
                <ServiceCard 
                  title="Permanen di Feed"
                  price="+Rp50.000 – 75.000"
                  desc="Optional, kalau mau tetap tayang"
                  addon
                />
                <ServiceCard 
                  title="Add-on (Desain + Caption Dibuatkan)"
                  price="+Rp25.000"
                  desc="Kalau kamu bantu buat kontennya"
                  addon
                />
              </div>
              
              {/* Desktop Table */}
              <div className="hidden sm:block">
                <ServiceTable 
                  headers={["Layanan", "Harga", "Keterangan"]}
                  items={[
                    ["1x Feed Post (Tayang 3–5 hari)", "Rp85.000 – 150.000", "Caption disesuaikan, max 2 revisi"],
                    ["Feed + Story (3–5 hari)", "Rp120.000 – 200.000", "Jangkauan lebih luas"],
                    ["Paket Mingguan (2 Feed + 3 Story)", "Rp300.000 – 400.000", "Untuk campaign rutin"],
                    ["Permanen di Feed", "+Rp50.000 – 75.000", "Optional, kalau mau tetap tayang"],
                    ["Add-on (Desain + Caption Dibuatkan)", "+Rp25.000", "Kalau kamu bantu buat kontennya"]
                  ]}
                />
              </div>
            </div>

            {/* 2. Story Only */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-purple-600">📌</span>
                <h2 className="text-lg font-bold text-gray-800">2. Story Only</h2>
              </div>
              
              <div className="sm:hidden space-y-0">
                <ServiceCard 
                  title="1x Story (2 slide)"
                  price="Rp50.000 – 75.000"
                  desc="Tayang 24 jam, bisa link bio"
                  color="purple"
                />
                <ServiceCard 
                  title="Repost Reels ke Story"
                  price="+Rp25.000"
                  desc="Optional add-on"
                  color="purple"
                  addon
                />
                <ServiceCard 
                  title="Add link di bio (24 jam)"
                  price="+Rp15.000"
                  desc="Jika ingin penambahan link promo"
                  color="purple"
                  addon
                />
              </div>
              
              <div className="hidden sm:block">
                <ServiceTable 
                  headers={["Layanan", "Harga", "Keterangan"]}
                  items={[
                    ["1x Story (2 slide)", "Rp50.000 – 75.000", "Tayang 24 jam, bisa link bio"],
                    ["Repost Reels ke Story", "+Rp25.000", "Optional add-on"],
                    ["Add link di bio (24 jam)", "+Rp15.000", "Jika ingin penambahan link promo"]
                  ]}
                  color="purple"
                />
              </div>
            </div>

            {/* 3. Reels Promote */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-600">📌</span>
                <h2 className="text-lg font-bold text-gray-800">3. Reels Promote</h2>
              </div>
              
              <div className="sm:hidden space-y-0">
                <ServiceCard 
                  title="Reels (dari klien, tayang 5–7 hari)"
                  price="Rp150.000 – 200.000"
                  desc="Caption bisa diedit"
                  color="green"
                />
                <ServiceCard 
                  title="Reels (dibantu edit, tayang 5–7 hari)"
                  price="Rp200.000 – 300.000"
                  desc="Termasuk bantu edit desain/video"
                  color="green"
                />
                <ServiceCard 
                  title="Reels + Story (Reels 5–7 hari)"
                  price="Rp225.000 – 350.000"
                  desc="Boosted exposure"
                  color="green"
                />
                <ServiceCard 
                  title="Paket Reels 2x / Minggu"
                  price="Rp350.000 – 500.000"
                  desc="Campaign berkala"
                  color="green"
                />
                <ServiceCard 
                  title="Permanen di Reels"
                  price="+Rp50.000 – 100.000"
                  desc="Jika ingin tayang selamanya"
                  color="green"
                  addon
                />
              </div>
              
              <div className="hidden sm:block">
                <ServiceTable 
                  headers={["Layanan", "Harga", "Keterangan"]}
                  items={[
                    ["Reels (dari klien, tayang 5–7 hari)", "Rp150.000 – 200.000", "Caption bisa diedit"],
                    ["Reels (dibantu edit, tayang 5–7 hari)", "Rp200.000 – 300.000", "Termasuk bantu edit desain/video"],
                    ["Reels + Story (Reels 5–7 hari)", "Rp225.000 – 350.000", "Boosted exposure"],
                    ["Paket Reels 2x / Minggu", "Rp350.000 – 500.000", "Campaign berkala"],
                    ["Permanen di Reels", "+Rp50.000 – 100.000", "Jika ingin tayang selamanya"]
                  ]}
                  color="green"
                />
              </div>
            </div>

            {/* Notes Section */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-yellow-600">📎</span>
                <h3 className="font-bold text-gray-800">Catatan Tambahan</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base pl-5">
                <li className="list-disc">Pembayaran via e-wallet / bank transfer</li>
                <li className="list-disc">Konten promosi akan diarsipkan setelah durasi kecuali diminta permanen</li>
                <li className="list-disc">Tidak menerima produk melanggar hukum (judi, SARA, dll)</li>
                <li className="list-disc">Waktu tayang disesuaikan dengan prime time akun</li>
                <li className="list-disc">Performa konten tidak dijamin viral, namun diposting secara optimal</li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8">
              <a href="wa.me/6282285512813" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-md transition duration-200 text-sm sm:text-base">
                Pesan Sekarang via WhatsApp
              </a>
              <p className="text-gray-500 text-xs mt-4">📩 Akan diarahkan ke whatsapp admin</p>
            </div>
          </div>
        </section>
        <BottomNavbar/>
      </main>
    </div>
  );
}

// Component for Mobile Cards
function ServiceCard({ title, price, desc, color = "blue", addon = false }) {
  const colorClasses = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    green: "text-green-600"
  };
  
  return (
    <div className={`p-4 ${addon ? "bg-gray-50 rounded-lg" : "border-b border-gray-100 pb-4"}`}>
      <h3 className="font-medium text-gray-800 text-sm sm:text-base">{title}</h3>
      <p className={`${colorClasses[color]} font-semibold mt-1 text-sm sm:text-base`}>{price}</p>
      <p className="text-gray-600 text-xs mt-1 sm:text-sm">{desc}</p>
    </div>
  );
}

// Component for Desktop Tables
function ServiceTable({ headers, items, color = "blue" }) {
  const colorClasses = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    green: "text-green-600"
  };
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-gray-200">
            {headers.map((header, index) => (
              <th key={index} className="pb-2 font-medium text-gray-700 text-sm sm:text-base">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <tr key={index}>
              <td className="py-3 font-medium text-gray-800 text-sm sm:text-base">{item[0]}</td>
              <td className={`py-3 ${colorClasses[color]} font-semibold text-sm sm:text-base`}>{item[1]}</td>
              <td className="py-3 text-gray-600 text-sm sm:text-base">{item[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}