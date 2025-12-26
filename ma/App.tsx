
import React, { useState, useEffect } from 'react';

interface AdUnitProps {
  src: string;
  width: number;
  height: number;
  scale?: number;
}

const AdUnit: React.FC<AdUnitProps> = ({ src, width, height, scale = 1 }) => {
  return (
    <div 
      className="flex justify-center items-center overflow-hidden rounded-lg"
      style={{
        width: width * scale,
        height: height * scale,
      }}
    >
      <iframe 
        scrolling="no" 
        frameBorder="0" 
        style={{
          padding: '0px',
          margin: '0px',
          border: '0px',
          borderStyle: 'none',
          width: `${width}px`,
          height: `${height}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }} 
        width={width} 
        height={height} 
        src={src} 
      />
    </div>
  );
};

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="gradient-bg h-full w-full flex flex-col items-center justify-between text-white overflow-hidden p-4 relative">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-yellow-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Top Banner Ad */}
      <div className="w-full flex justify-center pt-2 z-10 shrink-0">
        <AdUnit 
          src="https://refbanners.com/I?tag=d_5069249m_16785c_&site=5069249&ad=16785" 
          width={300} 
          height={50} 
        />
      </div>

      {/* Main Content */}
      <main className={`flex-1 flex flex-col items-center justify-center space-y-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} w-full max-w-md`}>
        
        <div className="text-center space-y-1">
          <h1 className="text-4xl font-black text-blue-400 drop-shadow-md leading-tight">
            مكافأة حتى <span className="text-yellow-400">200$</span>
          </h1>
          <p className="text-lg font-bold text-gray-300">
            سجل الآن واستفد من العرض!
          </p>
        </div>

        {/* Central Ad (320x480) - Scaled to fit mobile screens */}
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl border border-blue-900/30">
             <AdUnit 
                src="https://refbanners.com/I?tag=d_5069249m_16797c_&site=5069249&ad=16797" 
                width={320} 
                height={480} 
                scale={0.7} 
             />
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full px-4 shrink-0">
          <a 
            href="https://refbanners.com/I?tag=d_5069249m_16797c_&site=5069249&ad=16797"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-black text-xl rounded-2xl text-center shadow-lg shadow-yellow-500/20 active:scale-95 transition-all"
          >
            سجل الآن مجاناً
          </a>
        </div>
      </main>

      {/* Small Footer */}
      <footer className="w-full text-center pb-2 z-10 shrink-0">
        <p className="text-[9px] text-gray-500 uppercase tracking-widest">
          1xBet Morocco &bull; العرض محدود
        </p>
      </footer>
    </div>
  );
};

export default App;
