import { createContext, useState, useEffect } from "react";

export const MobileContext = createContext(null);

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.screen.width < 800) {
      setIsMobile(true);
    }
  }, []);
  return (
    <MobileContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </MobileContext.Provider>
  );
};
