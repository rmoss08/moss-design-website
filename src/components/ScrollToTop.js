import { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    let newPath = true;
    window.scrollTo(0, 0);

    return () => {
      newPath = false;
    };
  }, [pathname]);

  return <Fragment>{props.children}</Fragment>;
};

export default ScrollToTop;
