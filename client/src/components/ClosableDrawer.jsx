import React from 'react'
import { useNavigate } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import styled from 'styled-components'


const ClosableDrawer = (props) => {
    const navigate = useNavigate()

    const selectMenu = (event, path) => {
        navigate(path)
        props.onClose(event, false)
    }

    const menus = [
        {fnc: selectMenu, label: 'HOME', id: 'home', path: '/'},
        {fnc: selectMenu, label: 'SEARCH', id: 'search', path: '/search'},
        {fnc: selectMenu, label: 'PRACTICE', id: 'practice', path: '/wordlist'},
        {fnc: selectMenu, label: 'QUIZ', id: 'quiz', path: '/quiz'},
    ]
    
  return (
    <Container>
        <Drawer
            variant='temporary'
            anchor={'right'}
            open={props.open}
            onClose={(event) => props.onClose(event, false)}
            ModalProps={{keepMounted: true}}
        >
        <div
            onClose={(event) => props.onClose(event, false)}
            onKeyDown={(event) => props.onClose(event, false)}
        >
        <List>
            {menus.map(menu => (
                <ListItem button key={menu.id} onClick={(e) => menu.fnc(e, menu.path)}>
                    <ListItemText primary={menu.label}/>
                </ListItem>
            ))}
        </List>
        </div>
        </Drawer>
    </Container>
  )
}

export default ClosableDrawer


const Container = styled.div``