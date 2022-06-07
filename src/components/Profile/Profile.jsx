import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Typography, Button, Box} from '@mui/material'
import { ExitToApp } from '@mui/icons-material';

import { userSelector } from '../../features/auth';

const favoriteMovies = []

const logout = () => {
  localStorage.clear()
  window.location.href = '/'
}
const Profile = () => {

  const { user } = useSelector(userSelector);
  return (
    <Box>
      
        <Box display='flex' justifyContent= 'space-between'>
          <Typography  gutterBottom variant='h4'>{user.username} Profile</Typography>
            <Button color="inherit" onClick={logout}>Logout &nbsp;<ExitToApp/>
            </Button>
        </Box>
        {!favoriteMovies.length 
        ? <Typography variant='h6'>No favorite movies</Typography>:
          <Box>
          Favorite Movies
          </Box>}
        </Box>
  
   
  )
}

export default Profile