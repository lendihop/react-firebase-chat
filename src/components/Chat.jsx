import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Chat = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');

    return (
        <Container>
            <Grid container
                  justifyContent="center"
                  alignItems="center"
                  style={{height: window.innerHeight - 50}}>
                <div
                    style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto'}}>

                </div>
                <Grid container
                      direction="column"
                      alignItems="flex-end"
                      gap={2} style={{width: '80%'}}>
                    <TextField fullWidth
                               maxRows={2}
                               variant="outlined"
                               value={value}
                               onChange={e => setValue(e.target.value)}/>
                    <Button>Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;
