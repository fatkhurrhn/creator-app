import React from 'react';
import BottomNavbar from '../components/BottomNavbar';

export default function MobileWebsiteClone() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4 pb-16">
        <BottomNavbar/>
      {/* Header */}
      <div className="text-center mb-3">
        <h1 className="text-sm font-medium">Daily Motivation and Quotes</h1>
      </div>
      
      {/* Username with Verified Badge */}
      <div className="flex items-center justify-center mb-4">
        <h1 className="text-4xl font-bold">story.thur</h1>
        {/* <div className="ml-1 bg-blue-500 text-white rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div> */}
      </div>
      
      {/* Profile Image */}
      <div className="w-48 h-48 rounded-full overflow-hidden mb-5">
        <img 
          src="https://arabicvibes.vercel.app/ppp.jpg" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Bio */}
      <div className="text-center mb-6 text-sm px-4">
        <p>
          I am based in Depok City and started to 
          become a content creator since 2023 
          consistently creating content on social 
          media.
        </p>
      </div>
      
      {/* CTA Button */}
      <div className="w-full max-w-xs px-6">
        <button className="w-full bg-gray-100 hover:bg-gray-200 text-black font-medium py-3 px-4 rounded-lg text-sm">
          Info Paid Promote ✨
        </button>
      </div>
    </div>
  );
}