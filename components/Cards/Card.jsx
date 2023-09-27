import React, { useState, useEffect } from 'react';
import Cards from '@/components/Cards/Cards'; 
import CardMobile from '@/components/Cards/CardMobile'; 

const CardWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    
    handleResize();

    
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <CardMobile /> : <Cards />} 
    </div>
  );
};

export default CardWrapper;
