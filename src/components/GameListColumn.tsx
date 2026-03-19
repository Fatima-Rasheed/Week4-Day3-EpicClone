'use client'; // Required for Zustand
import { Game, useGameStore } from '../store/useGameStore';

interface ColumnProps {
  title: string;
  games: Game[];
}

export default function GameListColumn({ title, games }: ColumnProps) {
  // 1. Get the setter from the global store
  const { setSelectedHero } = useGameStore();

  return (
    <div className="flex-1 w-full max-w-[400px]">
      {/* Column Header */}
      <div className="flex justify-between items-center mb-6 pb-3 border-b border-white/5">
        <h2 className="text-lg font-normal text-white tracking-tight">{title}</h2>
        <button className="text-[14px] font-normal  border border-white px-3 py-1.5 px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors text-white">
          View More
        </button>
      </div>

      {/* Column Content - Vertical Items */}
      <div className="flex flex-col gap-3">
        {games.slice(0, 5).map((game) => (
          <div 
            key={game.id} 
            onClick={() => setSelectedHero(game)}
            className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group"
          >
            {/* Small Thumbnail Image */}
            <div className="w-12 h-16 rounded-md overflow-hidden flex-shrink-0 bg-black shadow-md border border-white/5">
              <img 
                src={game.image} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                alt={game.title} 
              />
            </div>
            
            <div className="flex flex-col gap-1 overflow-hidden">
              <h3 className="text-base font-normal text-white truncate group-hover:text-epic-blue transition-colors">
                {game.title}
              </h3>
              <p className="text-[15px] font-medium text-white">
                {game.isFree ? "Free" : `₹${game.originalPrice?.toLocaleString() || '2,499'}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}