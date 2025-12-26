
import React from 'react';

interface AdUnitProps {
  src: string;
  width: number;
  height: number;
  scale?: number;
}

export const AdUnit: React.FC<AdUnitProps> = ({ src, width, height, scale = 1 }) => {
  return (
    <div 
      className="flex justify-center items-center overflow-hidden"
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
