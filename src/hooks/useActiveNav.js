// // hooks/useActiveNav.js
// import { useState, useEffect } from "react";

// export const useActiveNav = (navIds) => {
//   const [activeNav, setActiveNav] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       let cur = "";
//       navIds.forEach((id) => {
//         const el = document.getElementById(id);
//         if (el && window.scrollY >= el.offsetTop - 120) cur = id;
//       });
//       setActiveNav(cur);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [navIds]);

//   return activeNav;
// };

// hooks/useActiveNav.js
import { useState, useEffect } from 'react';

export const NAV_LINKS = ['hero', 'about', 'journey', 'skills', 'projects', 'contact'];

export function useActiveNav() {
  const [activeNav, setActiveNav] = useState("");
  
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      NAV_LINKS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActiveNav(current);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return { activeNav, setActiveNav, NAV_LINKS };
}