
import React, { useState, useEffect } from 'react';
import { AdUnit } from './components/AdUnit';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="gradient-bg h-screen w-full flex flex-col items-center justify-between text-white overflow-hidden p-4 relative">
      {/* Top Banner Ad (300x50) */}
      <div className="w-full flex justify-center pt-2 z-10">
        <AdUnit 
          src="https://refbanners.com/I?tag=d_5069249m_16785c_&site=5069249&ad=16785" 
          width={300} 
          height={50} 
        />
      </div>

      {/* Main Content Area */}
      <main className={`flex-1 flex flex-col items-center justify-center space-y-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Headline */}
        <div className="text-center space-y-2 px-2">
          <h1 className="text-4xl md:text-5xl font-black text-blue-400 drop-shadow-lg leading-tight">
            مكافأة تصل إلى <span className="text-yellow-400">200$</span>
          </h1>
          <p className="text-lg md:text-xl font-bold text-gray-200">
            سجل الآن في <span className="text-blue-500">1xBet</span> المغرب واستلم مكافأتك!
          </p>
        </div>

        {/* Medium Rectangle Ad (300x250) or Large Mobile Ad (320x480) */}
        {/* Given "No Scroll" on mobile, we'll display the 300x250 to ensure fit, or use the 320x480 if screen height allows. 
            We prioritize the 320x480 as it's the most immersive for a landing page. */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl border border-blue-900/50">
             <AdUnit 
                src="https://refbanners.com/I?tag=d_5069249m_16797c_&site=5069249&ad=16797" 
                width={320} 
                height={480} 
                scale={0.8} // Scale down slightly to fit small devices without scrolling
             />
          </div>
        </div>

        {/* Call To Action Button (Fallback/Extra) */}
        <a 
          href="https://refbanners.com/I?tag=d_5069249m_16797c_&site=5069249&ad=16797"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-pulse-slow w-full max-w-xs py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-black text-2xl rounded-full text-center shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all transform hover:scale-105 active:scale-95"
        >
          سجل واحصل على البونص
        </a>
      </main>

      {/* Footer Info */}
      <footer className="w-full text-center pb-4 z-10">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest opacity-60">
          1xBet Morocco &copy; 2024 | عرض حصري للمستخدمين الجدد
        </p>
      </footer>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default App;
