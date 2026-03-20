'use client';
import { useGameStore } from '../store/useGameStore';
import Link from 'next/link';

export default function Navbar() {
  const { searchGames } = useGameStore();

  return (
    <nav className="w-full font-poppins sticky top-0 z-[100] bg-epic-black">
      {/* TOP GLOBAL BAR (Matches Figma) */}
      <div className="bg-[#2A2A2A] h-14 flex items-center justify-between">
        
        {/* LEFT: Logo & Main Nav */}
        <div className="flex items-center gap-6 h-full px-4">
          <Link href="/" className="flex items-center">
            <img src="./images/logoo.png" alt="Logo" className="w-8 h-8 object-contain brightness-200" />
          </Link>
          
          <div className="flex gap-5 text-[12px] font-normal uppercase text-gray-400 h-full">
            <span className="text-white  flex items-center h-full px-1 cursor-pointer">
              STORE
            </span>
            <span className="hover:text-white transition-colors flex items-center h-full cursor-pointer">FAQ</span>
            <span className="hover:text-white transition-colors flex items-center h-full cursor-pointer">Help</span>
            <span className="hover:text-white transition-colors flex items-center h-full cursor-pointer">Unreal Engine</span>
          </div>
        </div>

        {/* RIGHT: Globe, Sign In, Download (Figma Alignment) */}
        <div className="flex items-center h-full">
          {/* Globe/Language Icon */}
          <div className="px-4 border-l border-white/10 h-full flex items-center hover:text-white text-gray-400 cursor-pointer transition-colors">
            <img src="/globe.svg" alt="Lang" className="w-5 h-5 opacity-70" />
          </div>

          {/* Sign In Section */}
          <div className="px-6 border-l border-white/10 h-full flex items-center gap-3 hover:text-white text-gray-400 cursor-pointer transition-colors">
            <img src="./images/Vector.png" alt="User" className="w-5 h-5 opacity-70" />
            <span className="text-[12px] uppercase font-normal tracking-widest">SIGN IN</span>
          </div>

          {/* Full Height Download Button */}
          <button className="bg-epic-blue hover:bg-blue-600 text-white px-8 h-full text-[12px] font-normal uppercase transition-all">
            DOWNLOAD
          </button>
        </div>
      </div>

      {/* SUB-NAV BAR (Search & Discover) */}
      <div className="bg-epic-black py-6 px-32 flex items-center gap-8 border-b border-white/5">
        <div className="relative max-w-[192px] w-full group">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input 
            type="text" 
            placeholder="Search Store" 
            onChange={(e) => searchGames(e.target.value)}
            className="bg-[#202020] w-full rounded-full py-2.5 pl-10 pr-4 text-[12px] text-white focus:outline-none border border-transparent focus:border-white/20 transition-all"
          />
        </div>

        <div className="flex gap-8 text-[12px] font-normal text-gray-400">
          <span className="text-white cursor-pointer">Discover</span>
          <span className="hover:text-white cursor-pointer transition-colors">Browse</span>
          <span className="hover:text-white cursor-pointer transition-colors">News</span>
        </div>
      </div>
    </nav>
  );
}