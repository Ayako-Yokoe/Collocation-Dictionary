import React, { useCallback, useState } from "react"
import { Link } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import ClosableDrawer from "./ClosableDrawer"
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  List,
  ListItem,
  HamburgerMenu,
} from "./Navbar.styles"

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleDrawerToggle = useCallback((event, isOpen) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setSidebarOpen(isOpen)
  }, [])

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ color: "#fff" }}>
            <Logo>ABC</Logo>
          </Link>
        </Left>
        <Right>
          <List>
            <Link to="/" style={{ color: "#fff" }}>
              <ListItem>HOME</ListItem>
            </Link>

            <Link to="/wordlist" style={{ color: "#fff" }}>
              <ListItem>PRACTICE</ListItem>
            </Link>

            <Link to="/quiz" style={{ color: "#fff" }}>
              <ListItem>QUIZ</ListItem>
            </Link>
          </List>
          <HamburgerMenu onClick={(event) => handleDrawerToggle(event, true)}>
            <MenuIcon sx={{ fontSize: "2.8rem" }} />
          </HamburgerMenu>
        </Right>
      </Wrapper>
      <ClosableDrawer open={sidebarOpen} onClose={handleDrawerToggle} />
    </Container>
  )
}

export default Navbar
