import { AppBar, Toolbar } from "@mui/material"
import { HideOnScroll } from "."

const Navbar = ({ children }) => {
  return (
    <HideOnScroll>
      <AppBar sx={{ zIndex: 999 }} position="sticky" color="default" elevation={0}>
        <Toolbar>
          {children}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
export default Navbar
