import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import styled from 'styled-components'
import ClosableDrawer from './ClosableDrawer'
import responsive from '../responsive'


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
          <Logo>
            <Link to='/' style={{ color: '#fff' }}>ABC</Link>
          </Logo>
        </Left>
        <Right>
          <List>
            <ListItem>
              <Link to='/' style={{ color: '#fff' }}>HOME</Link>
            </ListItem>
            <ListItem>
              <Link to='/wordlist' style={{ color: '#fff' }}>PRACTICE</Link>
            </ListItem>
            <ListItem>
              <Link to='/quiz' style={{ color: '#fff' }}>QUIZ</Link>
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

const Container = styled.div`
  height: auto;
  color: #fff;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  margin: 1rem;
  @media only screen and ${responsive.device.s}{
    margin: 2rem;
  }
`
const Logo = styled.span``

const Right = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const List = styled.ul`
  list-style: none;
`
const ListItem = styled.li`
  display: none;

  @media only screen and ${responsive.device.m}{
    list-style: none;
    display: inline-block;
    padding: 2rem 1rem;
    font-size: 0.9rem;
    color: #fff;
    font-weight: 700;
    letter-spacing: 2px;
    transition: 0.5s ease;

    &:hover {
        cursor: pointer;
        color: gray;
    }

  @media only screen and ${responsive.device.l}{
    font-size: 1.2rem;
  }
  @media only screen and ${responsive.device.xl}{
    font-size: 1.4rem;
  }
}
`
const HamburgerMenu = styled.div`
  visibility: visible;
    margin: 1rem;
    display: block;
    cursor: pointer;

    @media only screen and ${responsive.device.m}{
        visibility: hidden;
    }
`