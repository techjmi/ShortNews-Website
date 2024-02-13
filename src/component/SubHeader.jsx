import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import '../App.css';
const StyledApp= styled(AppBar)({
    width:"80%",
    margin:"5rem auto 1rem auto",
    backgroundColor:"red",
    color:"white",
    height:"54px",
    
})
const Typo= styled(Typography)({
    margin:"1rem"
})
const ImageStyle=styled("img")({
    height:"2.5rem"
})
const BoxStyled= styled(Box)({
    display:"flex",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center"
})
const Boximg= styled(Box)({
    position:"relative",
    float:"right",
    left:"20rem",
    
})
const SubHeader = () => {
    const url="https://assets.inshorts.com/website_assets/images/playstore.png"
    const url2="https://assets.inshorts.com/website_assets/images/appstore.png"
  return (
    <>
    <StyledApp position='static' className='subheader'>
        <Toolbar>
            <BoxStyled>
            <Typo>For Best Exprience Use Our Inshort mobile App</Typo>
        <Boximg>
            <ImageStyle src={url} alt='xyz' />
            <ImageStyle src={url2} alt='xyz' />
        </Boximg>
            </BoxStyled>
      
        </Toolbar>
      
    </StyledApp>
    </>
  )
}

export default SubHeader
