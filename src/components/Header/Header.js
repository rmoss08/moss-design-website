import { Fragment, useContext } from 'react';
import { NavContext } from '../../store/nav-context';
import HorizontalNav from './HorizontalNav';
import VerticalNav from './VerticalNav';

const Header = () => {
    const navCtx = useContext(NavContext);
    const showVerticalNav = navCtx.isVerticalNavShown;

    return (
    <Fragment>
      {!showVerticalNav && <HorizontalNav />}
      {showVerticalNav && <VerticalNav />}
    </Fragment>
  );
};

export default Header;
