import React, {useContext} from 'react';
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);


    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justifyContent="flex-end">
                    {user
                    ? <Button color="secondary" variant="contained" onClick={() => auth.signOut()}>Log out</Button>
                    : <NavLink to={LOGIN_ROUTE}><Button color="secondary" variant="contained">Log in</Button></NavLink>}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
