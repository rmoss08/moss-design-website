import { Fragment, useContext } from 'react';
import { NavContext } from '../store/nav-context';
import HorizontalNav from './layout/Nav/HorizontalNav';
import VerticalNav from './layout/Nav/VerticalNav';

const Header = () => {
    const navCtx = useContext(NavContext);
    const showVerticalNav = navCtx.isVerticalNavShown;
    console.log(showVerticalNav);

    return (
    <Fragment>
      {!showVerticalNav && <HorizontalNav />}
      {showVerticalNav && <VerticalNav />}
    </Fragment>
  );
};

export default Header;
