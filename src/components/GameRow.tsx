'use client'; 
import { Game, useGameStore } from '../store/useGameStore'; 

export default function GameRow({ title, games }: { title: string, games: Game[] }) {
  const { setSelectedHero } = useGameStore();

  return (
    <section className="mb-12">
      <h2 className="text-xl font-normal mb-6 flex items-center gap-2 text-white">
        {title} <span className="text-xs opacity-50">›</span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {games.map((game) => {
          const salePrice = game.discount && game.originalPrice 
            ? Math.round(game.originalPrice * (1 - game.discount / 100)) 
            : game.originalPrice;

          return (
            <div 
              key={game.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedHero(game)}
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-[#202020]">
                <img 
                  src={game.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={game.title} 
                />
              </div>
              
             
              <h3 className="text-base font-normal truncate text-white">{game.title}</h3>
              
              <div className="flex items-center gap-2 mt-1 text-base">
                {game.discount && (
                  <>
                    <span className="bg-epic-blue text-white text-[12px] font-semibold px-1.5 py-0.5 rounded-sm">
                      -{game.discount}%
                    </span>
                    {/* THE CUT MARK (Original Price) */}
                    <span className="text-gray-500 line-through text-xs text-[12px]">
                      ₹{game.originalPrice?.toLocaleString()}
                    </span>
                  </>
                )}
                
                {/* THE FINAL PRICE */}
                <span className="text-sm text-white font-medium text-[12px]">
                  {game.isFree ? "Free" : `₹${salePrice?.toLocaleString()}`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}