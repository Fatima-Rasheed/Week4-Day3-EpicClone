'use client';
import { useEffect } from 'react';
import { useGameStore } from '../store/useGameStore';
import Navbar from '../components/Navbar';
import GameRow from '../components/GameRow';
import DescriptionRow from '../components/DescriptionRaw';
import HeroSlider from '../components/HeroSlider';
import FreeGamesSection from '../components/FreeList';
import GameLists from '../components/GameListBox';
import ExploreCatalog from '../components/explore';
import Footer from '../components/footer';
export default function Home() {
  const { 
    heroGames, 
    discountedGames, 
    featuredRow, 
    filteredGames, 
    setInitialGames,
    
    freeGames, // 2. Match the name used in your useGameStore.ts
    games 
  } = useGameStore();

  useEffect(() => {
    setInitialGames();
  }, [setInitialGames]);

  const showSearchResults = filteredGames.length !== games.length;

  return (
    <main className="bg-epic-black text-white min-h-screen">
      <Navbar />
      <div className="max-w-[1240px] mx-auto px-6 py-10">
        
        {showSearchResults ? (
          /* --- SEARCH RESULTS VIEW --- */
          <section>
            <h2 className="text-2xl font-bold mb-8">Search Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {filteredGames.map(game => (
                <div key={game.id} className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
                    <img src={game.image} className="w-full h-full object-cover" alt={game.title} />
                  </div>
                  <h3 className="text-sm font-bold">{game.title}</h3>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setInitialGames()} 
              className="mt-8 text-epic-blue text-sm font-bold uppercase"
            >
              Clear Search
            </button>
          </section>
        ) : (
          /* --- NORMAL HOME VIEW --- */
          <>
            <HeroSlider games={heroGames} />
            <GameRow title="Games on sale" games={discountedGames} />
            <DescriptionRow games={featuredRow} />
            
            {/* 3. Use the Component and pass the data array */}
            <FreeGamesSection games={freeGames} />
            <GameLists />
           <DescriptionRow games={featuredRow} />

            <GameRow title="Game With Achievements" games={discountedGames



            } />
            <ExploreCatalog />
          </>
        )}
      </div>
      <Footer />
    </main>
  );
}