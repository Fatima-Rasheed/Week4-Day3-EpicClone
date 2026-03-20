'use client'; 
import { Game } from '../store/useGameStore';

export default function DescriptionRow({ games }: { games: Game[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 ">
      {games.map((game) => (
        <div 
          key={game.id} 
          // 1. Make the card a flex container that stretches to full height
          className="group cursor-pointer flex flex-col h-full "
        >
          {/* Image Section */}
          <div className="relative spect-[16/9] rounded-xl overflow-hidden mb-4 shadow-lg flex-shrink-0 ">
            <img 
              src={game.image} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              alt={game.title}
            />
          </div>

          {/* 2. Content Section - use flex-grow to push the price to the bottom */}
          <div className="flex flex-col flex-grow gap-1.5">
            <h4 className="font-normal text-white text-[14.4px] group-hover:text-gray-300 transition-colors uppercase">
              {game.title}
            </h4>
            
            {/* 3. Min-height ensures the box stays the same size even if text is short */}
            <p className="text-gray-400 font-medium leading-relaxed line-clamp-3 text-[12px] min-h-[4.5em]">
              {game.description}
            </p>

            {/* 4. mt-auto pushes the price to the very bottom of the card */}
            <div className="mt-auto">
              {game.originalPrice && (
                <p className="text-md text-white mt-1">
                  ₹{game.originalPrice.toLocaleString()}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}