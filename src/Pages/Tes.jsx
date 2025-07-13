import React, { useState, useRef } from "react";
import BottomNavbar from "../components/BottomNavbar";

export default function RemoveBG() {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        setProcessedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        setProcessedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemoveBackground = async () => {
    if (!image) return;
    
    setIsProcessing(true);
    
    try {
      // Ubah base64 image ke Blob
      const base64Response = await fetch(image);
      const blob = await base64Response.blob();
      
      // Buat FormData untuk mengirim ke API
      const formData = new FormData();
      formData.append('image_file', blob);
      
      // API Call ke remove.bg
      // Ganti 'YOUR_API_KEY' dengan API key dari remove.bg
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': 'KdCiiBPWWG8tvbHUYQx1SkLY',
        },
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('API call failed');
      }
      
      // Ambil hasil gambar dan ubah ke base64
      const buffer = await response.arrayBuffer();
      const base64Flag = 'data:image/png;base64,';
      const imageStr = arrayBufferToBase64(buffer);
      
      setProcessedImage(base64Flag + imageStr);
    } catch (error) {
      console.error('Error removing background:', error);
      alert('waduuh gagal nih bosss. Silakan coba lagi gih');
      
      // Untuk demo, jika gagal tetap tampilkan gambar asli
      setProcessedImage(image);
    } finally {
      setIsProcessing(false);
    }
  };
  
  // Fungsi untuk mengubah ArrayBuffer ke base64
  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const handleReset = () => {
    setImage(null);
    setProcessedImage(null);
  };

  const handleDownload = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'removed-background.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="font-sans bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">Remove Background Free</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 pb-[100px]">
        {/* Upload Section */}
        {!image && (
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <div className="mb-4">
                <i className="ri-upload-cloud-line text-4xl text-blue-500"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tarik & Letakkan Gambar</h3>
              <p className="text-sm text-gray-500 mb-4">atau</p>
              <button
                onClick={() => fileInputRef.current.click()}
                className="px-5 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Gass Pilih File
              </button>
              <p className="mt-4 text-xs text-gray-500">JPG, PNG, WEBP maks 5MB</p>
            </div>
          </div>
        )}

        {/* Image Processing Section */}
        {image && (
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Remove Background</h2>
              <button
                onClick={handleReset}
                className="text-gray-500 hover:text-red-500 flex items-center"
              >
                <i className="ri-delete-bin-line mr-1"></i>
                Reset
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Original Image */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Gambar Asli</p>
                <div className="bg-gray-100 rounded-lg overflow-hidden h-64 flex items-center justify-center">
                  <img 
                    src={image} 
                    alt="Original" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Processed Image */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Tanpa Background</p>
                <div className="bg-gray-100 rounded-lg overflow-hidden h-64 flex items-center justify-center">
                  {processedImage ? (
                    <img 
                      src={processedImage} 
                      alt="Processed" 
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <div className="text-center p-4 flex flex-col items-center justify-center h-full">
                      {isProcessing ? (
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <div>
                          <i className="ri-magic-line text-4xl text-blue-500 mb-2"></i>
                          <p className="text-gray-600">Klik tombol di bawah untuk menghapus background</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2 justify-center">
              {!processedImage && !isProcessing && (
                <button
                  onClick={handleRemoveBackground}
                  className="px-5 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors flex items-center"
                >
                  <i className="ri-magic-line mr-2"></i>
                  Hapus Background
                </button>
              )}

              {processedImage && (
                <button
                  onClick={handleDownload}
                  className="px-5 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors flex items-center"
                >
                  <i className="ri-download-line mr-2"></i>
                  Download
                </button>
              )}
            </div>
          </div>
        )}

        {/* <BottomNavbar /> */}
      </main>
    </div>
  );
}