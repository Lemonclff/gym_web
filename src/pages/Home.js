import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import Excercises from '../components/Excercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';

const Home = () => {
  return (
    <Box>
        <HeroBanner />
        <SearchExercise/>
        <Excercises/>
    </Box>
  )
}

export default Home