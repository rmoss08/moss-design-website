import React, { useState } from 'react';

export const HeaderContext = React.createContext({
  isNavTransparent: true,
  isNavSticky: false,
  isNavLocked: false,
  isMenuShown: false,
  initHeader: () => {},
  addNavTransparency: () => {},
  removeNavTransparency: () => {},
  addNavSticky: () => {},
  removeNavSticky: () => {},
  unlockNav: () => {},
  lockNav: () => {},
  toggleMenu: () => {},
});

export const HeaderContextProvider = (props) => {
  const [isNavTransparent, setIsNavTransparent] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [isNavLocked, setIsNavLocked] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);

  const initHeader = (
    {
      transparency = false,
      sticky = false,
      lock = false,
      sidedrawer = false,
    }
  ) => {
    console.log(lock);
    setIsNavTransparent(transparency);
    setIsNavSticky(sticky);
    setIsNavLocked(lock);
    setIsMenuShown(sidedrawer);
    console.table({
      isNavTransparent,
      isNavSticky,
      isNavLocked,
      isMenuShown,
    });
  };

  const addNavTransparency = () => {
    if (!isMenuShown){
      setIsNavTransparent(true);
    }
  };

  const removeNavTransparency = () => {
    setIsNavTransparent(false);
  };

  const addNavSticky = () => {
    setIsNavSticky(true);
  };

  const removeNavSticky = () => {
    if (!isMenuShown){
      setIsNavSticky(false);
    }
  };

  const unlockNav = () => {
    setIsNavLocked(false);
  };

  const lockNav = () => {
    setIsNavLocked(true);
  };

  const toggleMenu = () => {
    setIsMenuShown((prevState) => {
      return !prevState;
    });
  };

  const contextValue = {
    isNavTransparent: isNavTransparent,
    isNavSticky: isNavSticky,
    isNavLocked: isNavLocked,
    isMenuShown: isMenuShown,
    initHeader,
    addNavTransparency,
    removeNavTransparency,
    addNavSticky,
    removeNavSticky,
    unlockNav,
    lockNav,
    toggleMenu,
  };

  return (
    <HeaderContext.Provider value={contextValue}>
      {props.children}
    </HeaderContext.Provider>
  );
};
