import React, { useState } from 'react';

export const NavContext = React.createContext({
  isTransparent: true,
  isSticky: false,
  addTransparency: () => {},
  removeTransparency: () => {},
  addSticky: () => {},
  removeSticky: () => {},
});

export const NavContextProvider = (props) => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  const addTransparency = () => {
    setIsTransparent(true);
  };

  const removeTransparency = () => {
    setIsTransparent(false);
  };

  const addSticky = () => {
    setIsSticky(true);
  };

  const removeSticky = () => {
    setIsSticky(false);
  };

  const contextValue = {
    isTransparent: isTransparent,
    isSticky: isSticky,
    addTransparency,
    removeTransparency,
    addSticky,
    removeSticky,
  };

  return (
    <NavContext.Provider value={contextValue}>
      {props.children}
    </NavContext.Provider>
  );
};
