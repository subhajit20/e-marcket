import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ScreenLoader() {
    return (
        <div className="flex justify-center h-screen w-full justify-items-center">
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    )
}

export default ScreenLoader;