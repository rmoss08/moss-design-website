import { Fragment, useContext } from 'react';
import { NavContext } from '../../store/nav-context';
import NavBar from './NavBar';
import SideDrawer from './SideDrawer';

const Header = () => {
    const navCtx = useContext(NavContext);
    const showSideDrawer = navCtx.isSideDrawerShown;

    return (
    <Fragment>
      {!showSideDrawer && <NavBar />}
      {showSideDrawer && <SideDrawer />}
    </Fragment>
  );
};

export default Header;
