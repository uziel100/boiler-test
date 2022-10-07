import DrawerNav from './DrawerNav'
import Navbar from './Navbar'
import NavbarLogo from './NavbarLogo'
import NavbarSearch from './NavbarSearch'

const NavbarApp = Object.assign(Navbar, {
  Logo: NavbarLogo,
  Drawer: DrawerNav,
  Search: NavbarSearch
})

export { NavbarApp, Navbar }
