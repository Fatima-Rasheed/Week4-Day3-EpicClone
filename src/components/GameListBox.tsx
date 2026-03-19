import GameListColumn from './GameListColumn';
import { useGameStore } from '../store/useGameStore';

export default function GameLists() {
  // Grab the different data arrays we made earlier
  const { bestSellers, topSellers, topUpcoming } = useGameStore();

  return (
    // Responsive flex container: stacks columns on mobile (flex-col), 
    // spreads them out on desktop (md:flex-row)
    <section className="flex flex-col md:flex-row gap-10 md:gap-6 justify-between mb-24 pt-10 border-t border-white/5">
      
      {/* Column 1: Reuse GameListColumn with discountList data */}
      <GameListColumn 
        title="Top Sellers" 
        games={topSellers} 
      />

      {/* Column 2: Reuse with heroList data */}
      <GameListColumn 
        title="Best Seller" 
        games={bestSellers} 
      />

      {/* Column 3: Reuse with featuredList data (the three wide cards) */}
      <GameListColumn 
        title="Top Upcoming game" 
        games={topUpcoming} 
      />
      
    </section>
  );
}