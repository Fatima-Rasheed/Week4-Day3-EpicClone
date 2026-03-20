import { Game } from '../store/useGameStore';

export default function FreeGames({ games }: { games: Game[] }) {
  if (!games || games.length === 0) return null;

  return (
    <section className="bg-[#2A2A2A]/40 rounded-xl p-8 mb-16 border border-white/5">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          {/* --- INSERT YOUR ICON HERE --- */}
          <div className="w-6 h-6 flex items-center justify-center">
             <img src="./images/bag.png"></img>
          </div>
          
          <h2 className="text-xl font-normal text-white">Free Games</h2>
        </div>
        
        <button className="border border-white hover:bg-white/10 px-4 py-1.5 rounded-md text-[12.8px] font-normal  transition-colors text-white">
          view More
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {games.map((game) => (
          <div key={game.id} className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 shadow-xl bg-black">
              <img 
                src={game.image} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={game.title} 
              />
            </div>

            {/* 2. Game Title */}
            <h3 className="text-base font-normal mb-1 text-white group-hover:text-epic-blue transition-colors">
              {game.title}
            </h3>

            {/* 3. Date Subtext */}
            <p className="text-[12px] text-gray-400 font-normal uppercase tracking-tight mt-6">
              {game.freeUntil || "Free Now - Jul 25"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}