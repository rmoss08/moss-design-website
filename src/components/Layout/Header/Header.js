import { Fragment, useContext } from 'react';
import { HeaderContext } from '../../../store/header-context';
import Nav from './Nav';
import SideDrawer from './SideDrawer';

const Header = () => {
    const headerCtx = useContext(HeaderContext);
    const showSideDrawer = headerCtx.isSideDrawerShown;

    return (
    <Fragment>
      <Nav />
      <SideDrawer />
    </Fragment>
  );
};

export default Header;
