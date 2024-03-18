import { useSelector } from "react-redux"
import { Aadcategor } from "./Aadcategor"
import { Aadlevel } from "./Aadlevel"
import { Aadrecip } from "./Aadrecip"
import '../Style/staylregister.css'
import service_apartment from "./service_apartment"
import { useEffect, useState } from "react"
import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import { Link } from 'react-router-dom';

import InfoIcon from '@mui/icons-material/Info';

export const Galery = () => {
   debugger
   const [apartments,setApartments]=useState([])
   useEffect(() => {
      // getallApartments();
      service_apartment.getApartments()
         .then(response => {
            setApartments(response.apartment);
            console.log(response);
         })
         .catch(error => {
            console.error('Error fetching apartments:', error);
         });
   }, []);
   const image = 'http://localhost:3001/'
   return <>

<ImageList sx={{ width: 1500, height: 500 }} cols={4} gap={16}>
      {apartments.map((item) => (
        <ImageListItem key={item.image}component={Link} to={`/Sall/${item._id}/`}sx={{ textDecoration: 'none' }}>
      
          <img
            srcSet={`${image+item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${image+item.image}?w=248&fit=crop&auto=format`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={<span>City: {item.cityCode.name}</span>}
            position="below"
            sx={{
               textAlign: 'center',
               color: 'black'
             }}
            actionIcon={
              <IconButton sx={{ color: 'rgba(100, 100, 100, 0.54)' }}>
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    
      {/* <div className="wraped">
         {apartments&&apartments.map((r) => <img src={image+r.image}></img>)}
      </div> */}
   </>
}