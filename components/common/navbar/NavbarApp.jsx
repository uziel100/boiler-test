import DrawerNav from './DrawerNav'
import MenuAccount from './MenuAccount'
import Navbar from './Navbar'
import NavbarLogo from './NavbarLogo'
import NavbarSearch from './NavbarSearch'

const NavbarApp = Object.assign(Navbar, {
  Logo: NavbarLogo,
  Drawer: DrawerNav,
  Search: NavbarSearch,
  MenuAccount
})

export { NavbarApp, Navbar }
