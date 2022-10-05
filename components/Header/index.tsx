import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';

export default function Header () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Image src="/logo-white-sawaup.svg" alt="Vercel Logo" width={145} height={36} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}