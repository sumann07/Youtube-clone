import React from 'react';
import {Stack} from '@mui/material';
import {Link} from "react-router-dom"
import { logo } from '../utils/constant';
import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack direction="row" alignItems="center" p={1} sx={{position:'sticky', 
    background:'#000', top:'0', justifyContent:'space-between'}} >
     <Link to="/" style={{display:'flex', alignItems:'center'}}>
      <img src={logo} alt="logo" height={55}/><span style={{color:'#fff',fontWeight:'bold',fontSize:'25px'}}>YouTube</span>
     </Link>
     <SearchBar />
    </Stack>
  )


export default Navbar