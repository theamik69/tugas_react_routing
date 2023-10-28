import React, { createContext, useContext, useState } from "react";

const BadgeContext = createContext();

export function useBadgeContext() {
  return useContext(BadgeContext);
}

export function BadgeProvider({ children }) {
  const [showBadge, setShowBadge] = useState(true);

  const hideBadge = () => {
    setShowBadge(false);
  };

  const showBadgeAgain = () => {
    setShowBadge(true);
  };

  return (
    <BadgeContext.Provider value={{ showBadge, hideBadge, showBadgeAgain }}>
      {children}
    </BadgeContext.Provider>
  );
}