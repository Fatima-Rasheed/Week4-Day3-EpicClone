export default function Footer() {
  const footerLinks = [
    { title: "Resource", items: ["Creator Support", "Published On Epic", "Profession", "Company"] },
    { title: "Fan Work Policy", items: ["User Exp Service", "User Licence"] },
    { title: "Online Service", items: ["Online Service", "Community", "Epic Newsroom"] },
    { title: "Battle Breakers", items: ["Fortnite", "Infinity Blade"] },
    { title: "Robo Recall", items: ["Shadow Complex", "Unreal Tournament"] },
  ];

  return (
    <footer className="bg-[#202020] pt-16 pb-8 px-4 border-t border-white/5 relative">
      <div className="max-w-full mx-auto">

        {/* Scroll to Top Button — top right */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute top-4 right-4 w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          ˄
        </button>

        {/* Social Icons */}
        <div className="flex gap-4 mb-8">
          <img src="/images/facebook.png" className="w-6 h-6 cursor-pointer" alt="fb" />
          <img src="/images/twitter.png" className="w-7 h-6 cursor-pointer" alt="tw" />
          <img src="/images/youtube.png" className="w-7 h-6 cursor-pointer" alt="yt" />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 mb-16 w-fit">
          {footerLinks.map((col) => (
            <div key={col.title} className="pr-12">
              <h3 className="text-[#E7E7E7] text-[10.4px] uppercase mb-4 tracking-widest">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.items.map(item => (
                  <li key={item} className="text-white text-[12px] hover:text-[#0078f2] cursor-pointer transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="border-t border-white/5 pt-4">
          <p className="mb-8 max-w-5xl text-[12px] text-[#E7E7E7] leading-loose">
            © 2022, Epic Games, Inc. All rights reserved. Epic, Epic Games, Epic Games logo, Fortnite, Fortnite logo, Unreal, Unreal Engine, Unreal Engine logo, Unreal Tournament ) and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brand or product names are trademarks of their respective owners. Transactions outside the United States are handled through Epic Games International, S.à r.l..
          </p>

          {/* Bottom row — links left, Epic logo right */}
          <div className="flex items-center justify-between pt-5 mb-6">
            <div className="flex gap-6 uppercase tracking-wider text-[12px] text-[#E7E7E7]">
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Store Refund Policy</span>
            </div>

            {/* Bottom right — Epic logo icon */}
            <img
              src="/images/logoo.png"
              alt="Epic Games"
              className="w-6 h-6 object-contain opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            />
          </div>
        </div>

      </div>
    </footer>
  );
}