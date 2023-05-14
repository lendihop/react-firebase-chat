import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import Avatar from "@mui/material/Avatar";

const Chat = () => {
    const {auth, db} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');

    const [messages, loading] = useCollectionData(
        collection(db, "messages")
    );

    const sendMessage = async () => {
        try {
            const docRef = await addDoc(
                collection(db, "messages"), {
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    text: value,
                    createdAt: serverTimestamp()
                });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        setValue('');
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid container
                  justifyContent="center"
                  alignItems="center"
                  style={{height: window.innerHeight - 50}}>
                <div
                    style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto'}}>
                    {messages.map(message =>
                        <div key={message.createdAt} style={{
                            margin: 10,
                            border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                            marginLeft: user.uid === message.uid ? 'auto' : 10,
                            width: 'fit-content',
                            padding: 5
                        }}>
                            <Grid container alignItems="center" gap={1}>
                                <Avatar src={message.photoURL}/>
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}
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
                    <Button onClick={sendMessage}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;
