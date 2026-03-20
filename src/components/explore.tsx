'use client';

export default function ExploreCatalog() {
  return (
    <section className="w-full py-20 px-4 md:px-2 flex items-center justify-center font-sans">
      <div className="w-full flex flex-col md:flex-row items-center gap-12">

        {/* Left: Single Image */}
        <div className="flex-1">
          <img
            src="/images/explore.jpg"
            alt="Explore Catalog"
            className="w-full h-[240px] object-cover rounded-2xl"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-[22.4px] font-medium text-white mb-6 leading-tight tracking-tight">
            Explore our Catalog
          </h2>
          <p className="text-[#8B8E93] text-sm font-normal leading-relaxed max-w-sm">
            Browse by genre, features, price, and more to find your next favorite game.
          </p>
        </div>

      </div>
    </section>
  );
}