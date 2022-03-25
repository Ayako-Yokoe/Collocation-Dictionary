import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components'
import ClosableDrawer from './ClosableDrawer';


const Container = styled.div`
  height: auto;
  background-color: #000;
  color: #fff;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  margin: 3rem;
`
const Logo = styled.span``
const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const List = styled.ul`
  list-style: none;
`
const ListItem = styled.li`
  display: inline-block;
  padding: 2rem;
`

const HamburgerMenu = styled.div`
  /* visibility: hidden; */
  cursor: pointer;
`


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleDrawerToggle = useCallback((event, isOpen) => {
    if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')){
      return
    }
    setSidebarOpen(isOpen)
  }, [sidebarOpen])

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to='/' style={{ color: '#fff' }}>
            <Logo>LOGO</Logo>
          </Link>
        </Left>

        <Right>
          <List>
            <Link to='/' style={{ color: '#fff' }}>
              <ListItem>HOME</ListItem>
            </Link>
            {/* <ListItem onClick={handleModalOpen}>HOW-TO</ListItem> */}
            <Link to='/wordlist' style={{ color: '#fff' }}>
              <ListItem>PRACTICE</ListItem>
            </Link>
            <Link to='/quiz' style={{ color: '#fff' }}>
              <ListItem>QUIZ</ListItem>
            </Link>
            {/* <Link to='/login' style={{ color: '#fff' }}> */}
              <ListItem>LOGOUT</ListItem>
            {/* </Link> */}
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
