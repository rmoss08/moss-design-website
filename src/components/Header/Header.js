import { Fragment, useContext } from 'react';
import { NavContext } from '../../store/nav-context';
import HorizontalNav from './NavBar';
import VerticalNav from './SideDrawer';

const Header = () => {
    const navCtx = useContext(NavContext);
    const showSideDrawer = navCtx.isSideDrawerShown;

    return (
    <Fragment>
      {!showSideDrawer && <HorizontalNav />}
      {showSideDrawer && <VerticalNav />}
    </Fragment>
  );
};

export default Header;
