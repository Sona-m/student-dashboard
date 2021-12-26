import React from 'react';

import Card from '@mui/material/Card';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';


const ProfileButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    borderRadius: 10,
    textTransform: 'none',
    color: 'white',
    width: 210,
    '&:hover': {
      backgroundColor: orange[700],
    },
  }));


const BodyRight = () => {
    return(
        <div className="body_right" style={{width: "291px",padding: "23px"}}>
           <Card sx={{ maxWidth: 275,height: 244,borderRadius: 2,boxShadow: 0,padding: 2,display: 'flex',flexDirection: "column",justifyContent: 'space-evenly',boxSizing: 'border-box',marginBottom: '1rem',alignItems: 'center' }}>
           
           <Avatar
         alt="Remy Sharp"
         src="../../images/user_profile2.png"
         sx={{ width: 56, height: 56 }}
       />
       <Typography mb={0} variant="h6" gutterBottom component="div" fontSize="0.8vw" fontWeight="550">
               Prof. John
             </Typography>
             <Typography mt={-1.5} variant="subtitle1" gutterBottom component="div" fontSize="0.7vw" >
               Faculty Co-ordinator
             </Typography>
       
             <ProfileButton variant="contained">+91 9876543217</ProfileButton>
             <ProfileButton variant="contained">john@acharya.ac.in</ProfileButton>
            
          </Card>

          <Card sx={{ maxWidth: 275,height: 244,borderRadius: 2,boxShadow: 0,padding: 2,display: 'flex',flexDirection: "column",justifyContent: 'space-evenly',boxSizing: 'border-box',alignItems: 'center' }}>
           
    <Avatar
  alt="Remy Sharp"
  src="../../images/user_profile3.png"
  sx={{ width: 56, height: 56 }}
/>
<Typography mb={0} variant="h6" gutterBottom component="div" fontSize="0.8vw" fontWeight="550">
        Ms. Alison
      </Typography>
      <Typography mt={-1.5} variant="subtitle1" gutterBottom component="div" fontSize="0.7vw" >
        Student Co-ordinator
      </Typography>

      <ProfileButton variant="contained">+91 9876543217</ProfileButton>
      <ProfileButton variant="contained">alisonm.19.beis@acharya.ac.in</ProfileButton>
     
   </Card>

       
        </div>
    )
}


export default BodyRight