import React from 'react'
import { useNavigate } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import styled from 'styled-components'


const Container = styled.div``

const ClosableDrawer = (props) => {
    const navigate = useNavigate()

    const selectMenu = (event, path) => {
        navigate(path)
        props.onClose(event, false)
    }

    const menus = [
        {fnc: selectMenu, label: 'HOME', id: 'home', value: '/'},
        // {fnc: selectMenu, label: 'HOW-TO', id: 'how-to', value: '/'},
        {fnc: selectMenu, label: 'PRACTICE', id: 'practice', value: '/'},
        {fnc: selectMenu, label: 'QUIZ', id: 'quiz', value: '/'},
        {fnc: selectMenu, label: 'LOGOUT', id: 'logout', value: '/'},
    ]

  return (
    <Container>
        <Drawer
            variant='temporary'
            anchor={'right'}
            open={props.open}
            onClose={(event) => props.onClose(event, false)}
            ModalProps={{keepMonted: true}}
        >
        <div
            onClose={(event) => props.onClose(event, false)}
            onKeyDown={(event) => props.onClose(event, false)}
        >
        <List>
            {menus.map(menu => (
                <ListItem button key={menu.id} onClick={(e) => menu.fnc(e, menu.value)}>
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