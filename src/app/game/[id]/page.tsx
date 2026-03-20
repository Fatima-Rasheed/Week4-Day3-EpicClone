// app/game/[id]/page.tsx
'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useGameStore } from '../../../store/useGameStore';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/footer';
import Link from 'next/link';

export default function GameDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { games, setInitialGames } = useGameStore();

  // Make sure store is populated
  useEffect(() => {
    if (games.length === 0) setInitialGames();
  }, [games.length, setInitialGames]);

  // Find game by id from URL
  const game = games.find((g) => g.id === Number(params.id));

  // Calculate sale price
  const salePrice =
    game?.discount && game?.originalPrice
      ? Math.round(game.originalPrice * (1 - game.discount / 100))
      : game?.originalPrice;

  // While store is loading
  if (games.length === 0) {
    return (
      <main className="bg-[#121212] min-h-screen text-white flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading...</p>
      </main>
    );
  }

  // Game not found
  if (!game) {
    return (
      <main className="bg-[#121212] min-h-screen text-white flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold">Game Not Found</h1>
        <p className="text-gray-400">The game you're looking for doesn't exist.</p>
        <Link href="/">
          <button className="bg-white text-black font-bold px-8 py-3 rounded-lg text-sm uppercase hover:bg-gray-200 transition-all">
            Back to Store
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <Navbar />

      <div className="max-w-[992px] mx-auto px-6 py-10">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Store
        </button>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT — Game Image */}
          <div className="flex-[3] rounded-2xl overflow-hidden aspect-[16/9] bg-[#202020]">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT — Game Info */}
          <div className="flex-[2] flex flex-col gap-6">

            {/* Title & Category */}
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                {game.category}
              </p>
              <h1 className="text-3xl font-bold uppercase tracking-tight text-white">
                {game.title}
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {game.description}
            </p>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Pricing */}
            <div className="flex flex-col gap-2">
              {game.isFree ? (
                <span className="text-2xl font-bold text-white">Free</span>
              ) : game.discount ? (
                <div className="flex items-center gap-3">
                  <span className="bg-[#0078f2] text-white text-sm font-bold px-2 py-1 rounded">
                    -{game.discount}%
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    ₹{game.originalPrice?.toLocaleString()}
                  </span>
                  <span className="text-2xl font-bold text-white">
                    ₹{salePrice?.toLocaleString()}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-white">
                  ₹{game.originalPrice?.toLocaleString()}
                </span>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <button className="bg-[#0078f2] hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-lg text-sm uppercase tracking-wider transition-all active:scale-95 w-full">
                {game.isFree ? 'Get for Free' : game.freeUntil === 'coming soon' ? 'Pre-Purchase Now' : 'Buy Now'}
              </button>
              <button className="border border-white/20 hover:bg-white/5 text-white font-bold py-4 px-10 rounded-lg text-sm uppercase tracking-wider transition-all w-full">
                Add to Wishlist
              </button>
            </div>

            {/* Free Until Badge */}
            {game.freeUntil && game.freeUntil !== 'coming soon' && (
              <div className="bg-[#202020] rounded-xl p-4 border border-white/5">
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  🎁 {game.freeUntil}
                </p>
              </div>
            )}

          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}