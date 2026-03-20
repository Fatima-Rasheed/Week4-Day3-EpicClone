'use client';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Game, useGameStore } from '../store/useGameStore';
import Link from 'next/link';

export default function HeroSlider({ games }: { games: Game[] }) {
  const { setSelectedHero } = useGameStore();

  if (!games || games.length === 0) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-12 items-stretch">

      {/* LEFT — Swiper Main Banner */}
      <div className="flex-[4] rounded-3xl overflow-hidden border border-white/5">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          onSlideChange={(swiper) => setSelectedHero(games[swiper.realIndex])}
          className="w-full h-full"
        >
          {games.map((game) => (
            <SwiperSlide key={game.id}>
              <div className="relative aspect-[16/9] w-full">
                
                {/* Game Image */}
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay + Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-end">
                  <h2 className="text-white text-3xl md:text-4xl font-bold mb-2 uppercase tracking-tighter">
                    {game.title}
                  </h2>

                  <p className="text-sm text-gray-200 mb-6 max-w-[480px] leading-relaxed">
                    {game.description}
                  </p>

                  <Link href={`/game/${game.id}`}>
                    <button className="bg-white text-black font-bold py-3.5 px-10 rounded-lg w-fit text-[8.8px] uppercase hover:bg-gray-200 transition-all active:scale-95 shadow-lg">
                      {game.isFree
                        ? 'Play for Free'
                        : game.freeUntil === 'coming soon'
                        ? 'Pre-Purchase Now'
                        : `Buy Now - ₹${game.originalPrice?.toLocaleString()}`}
                    </button>
                  </Link>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* RIGHT — Thumbnail List */}
      <div className="flex flex-col gap-2 flex-1 lg:max-w-[200px]">
        {games.map((game, index) => (
          <div
            key={game.id}
            onClick={() => setSelectedHero(game)}
            className="flex-1 flex items-center gap-3 p-3 rounded-2xl cursor-pointer hover:bg-white/5 transition-all duration-300 overflow-hidden"
          >
            <img
              src={game.image}
              className="w-20 h-24 object-cover rounded-md shadow-md opacity-70 hover:opacity-100 transition-opacity"
              alt={game.title}
            />
            <span className="text-[10.4px] font-medium text-gray-400 hover:text-white transition-colors leading-tight">
              {game.title}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}