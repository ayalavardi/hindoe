import React from 'react';
import { Home } from './Home';
import { Slider } from '@mui/base';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
const Appp = () => {
  const slideData = [
    {
      index: 0,
      headline: "New Fashion Apparel",
      button: "Shop now",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg"
    },
    {
      index: 1,
      headline: "In The Wilderness",
      button: "Book travel",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg"
    },
    {
      index: 2,
      headline: "For Your Current Mood",
      button: "Listen",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg"
    },
    {
      index: 3,
      headline: "Focus On The Writing",
      button: "Get Focused",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg"
    }
  ];

  return (
    <>
      <Home />
      <Slider heading="Example Slider" slides={slideData} />
    </>
  );
}

export default Appp;
