import React from 'react';

interface CircleButtonProps {
  label: string;
  colorClass: string;
  href: string;
}

const CircleButton: React.FC<CircleButtonProps> = ({ label, colorClass, href }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    try {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        // Calculate position manually to ensure fixed header doesn't cover content
        // This is more reliable than scrollIntoView or CSS scroll-padding in some contexts
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL hash without jumping
        window.history.pushState(null, '', href);
      } else {
        // Fallback if element not found
        window.location.href = href;
      }
    } catch (error) {
      console.warn("Scroll failed:", error);
      window.location.href = href;
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${colorClass} w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer z-10`}
    >
      <span className="text-gray-900 font-bold text-sm md:text-base group-hover:text-black select-none">
        {label}
      </span>
    </a>
  );
};

export default CircleButton;