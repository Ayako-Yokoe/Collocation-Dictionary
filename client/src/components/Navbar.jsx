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

  const handleDrawerToggle = useCallback(
    (event, isOpen) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return
      }
      setSidebarOpen(isOpen)
    },
    [sidebarOpen]
  )

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Link to="/" style={{ color: "#fff" }}>
              ABC
            </Link>
          </Logo>
        </Left>
        <Right>
          <List>
            <ListItem>
              <Link to="/" style={{ color: "#fff" }}>
                HOME
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/wordlist" style={{ color: "#fff" }}>
                PRACTICE
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/quiz" style={{ color: "#fff" }}>
                QUIZ
              </Link>
            </ListItem>
          </List>
          <HamburgerMenu onClick={(event) => handleDrawerToggle(event, true)}>
            <MenuIcon />
          </HamburgerMenu>
        </Right>
      </Wrapper>
      <ClosableDrawer open={sidebarOpen} onClose={handleDrawerToggle} />
    </Container>
  )
}

export default Navbar
