import React, { useState } from 'react';

export const HeaderContext = React.createContext({
  isNavTransparent: true,
  isNavSticky: false,
  isNavLocked: false,
  isSideDrawerShown: false,
  initHeader: () => {},
  addNavTransparency: () => {},
  removeNavTransparency: () => {},
  addNavSticky: () => {},
  removeNavSticky: () => {},
  unlockNav: () => {},
  lockNav: () => {},
  toggleSideDrawer: () => {},
});

export const HeaderContextProvider = (props) => {
  const [isNavTransparent, setIsNavTransparent] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [isNavLocked, setIsNavLocked] = useState(false);
  const [isSideDrawerShown, setIsSideDrawerShown] = useState(false);

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
    setIsSideDrawerShown(sidedrawer);
    console.table({
      isNavTransparent,
      isNavSticky,
      isNavLocked,
      isSideDrawerShown,
    });
  };

  const addNavTransparency = () => {
    setIsNavTransparent(true);
  };

  const removeNavTransparency = () => {
    setIsNavTransparent(false);
  };

  const addNavSticky = () => {
    setIsNavSticky(true);
  };

  const removeNavSticky = () => {
    setIsNavSticky(false);
  };

  const unlockNav = () => {
    setIsNavLocked(false);
  };

  const lockNav = () => {
    setIsNavLocked(true);
  };

  const toggleSideDrawer = () => {
    setIsSideDrawerShown((prevState) => {
      return !prevState;
    });
  };

  const contextValue = {
    isNavTransparent: isNavTransparent,
    isNavSticky: isNavSticky,
    isNavLocked: isNavLocked,
    isSideDrawerShown: isSideDrawerShown,
    initHeader,
    addNavTransparency,
    removeNavTransparency,
    addNavSticky,
    removeNavSticky,
    unlockNav,
    lockNav,
    toggleSideDrawer,
  };

  return (
    <HeaderContext.Provider value={contextValue}>
      {props.children}
    </HeaderContext.Provider>
  );
};
