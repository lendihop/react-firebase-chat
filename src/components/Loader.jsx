import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Loader = () => {
    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                justifyContent="center"
                alignItems="center">
                <Grid
                    container
                    alignItems="center"
                    direction="column">
                    <Box p={5}>
                        <div className="lds-facebook">
                            <div/><div/><div/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;
