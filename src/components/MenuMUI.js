import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import ListIcon from '@material-ui/icons/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';

function MenuMUI(){
    const [anchorMenu, setMenuOpen] = useState(null);
    const handleMenu= ( event) => { setMenuOpen(event.currentTarget); }
    const handleClose= () => { setMenuOpen(null); }

    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={ handleMenu} color='inherit'><MenuIcon/></IconButton>
                    <Typography variant='h5' style= {{flexGrow:1, textAlign:'center'}}><Link to='/etusivu' style={{ textDecoration: 'none', color: "white" }} >Taloudenhallintasovellus</Link></Typography>
                </Toolbar>
            </AppBar>
            <MenuList>
            <Menu 
                anchorEl={ anchorMenu}
                anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                getContentAnchorEl={null}
                open={ Boolean(anchorMenu) }
                onClose={ handleClose}>
            <MenuItem component={ Link } to='/etusivu' onClick={ handleClose}>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary='Etusivu'/>
            </ MenuItem>
            <MenuItem component={ Link } to='/lisaa' onClick={ handleClose}>
                <ListItemIcon><CreateIcon/></ListItemIcon>
                <ListItemText primary='Lisää'/>
            </ MenuItem>
            <MenuItem component={ Link } to='/listaa' onClick={ handleClose}>
                <ListItemIcon><ListIcon/></ListItemIcon>
                <ListItemText primary='Listaa'/>
            </ MenuItem>
            </Menu>
            </MenuList>

        </div>
    );
}

export default MenuMUI;