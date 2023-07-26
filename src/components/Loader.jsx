import React from 'react';
import {CircularProgress} from "@mui/material";

const Loader = () => {
    return (
        <div
            className='container'
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <CircularProgress />
        </div>
    );
};

export default Loader;