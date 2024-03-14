import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet, Router, useNavigate } from 'react-router-dom';
import meat from '../Pic/6.jpg'
import RecipeCard from './Cardrecip';
import service_apartment from './service_apartment';
import service_catgory from './service_catgory';
import service_advertiser from './service_advertiser';
import service_city from './service_city';

export const ApartmentsList = () => {

  const [listapartment, setListapartment] = useState([])
  const [listCatgory, setListCatgory] = useState([])
  const [listCity, setListCity] = useState([])
  const [listAdvertiser, setListAdvertiser] = useState([])
  const [apartments, setApartments] = useState([]);
  const [Sort, setSort] = React.useState([])


  const City = e => {
    setListapartment(apartments);
    setSort(listapartment.filter(a => a.cityCode._id == e.target.value))
  }

  const Catigory = e => {
    setListapartment(apartments);
    setSort(listapartment.filter(a => a.categoryCode._id == e.target.value))
  }

  const Beds = e => {
    setListapartment(apartments);
    setSort(listapartment.filter(a => a.numOfBeds >= e.target.value))
  }

  const Price = e => {
    setListapartment(apartments);
    setSort(listapartment.filter(a => a.price >= e.target.value))
  }

  const Advertiser = e => {
    setListapartment(apartments);
    setSort(listapartment.filter(a => a.advertiserCode._id >= e.target.value))
  }
  useEffect(() => {
    // getallApartments();
    service_apartment.getApartments()
      .then(response => {
        setApartments(response.apartment);
        setListapartment(response.apartment);
        setSort(response.apartment)
        console.log("response.apart--", response.apartment);

      })
      .catch(error => {
        console.error('Error fetching apartments:', error);
      });
    service_catgory.getCategory()
      .then(response => {
        console.log("response.Category--", response);
        setListCatgory(response);
      })
      .catch(error => {
        console.log('Error fetching categories', error);
      });
    service_advertiser.getAllAdvertisers()
      .then(response => {
        console.log("response.advertiser--", response.advertiser);
        setListAdvertiser(response.advertiser);
      })
      .catch(error => {
        console.log('Error fetching advertiser', error);
      });
    service_city.getCity()
      .then(response => {
        console.log("response.city--", response);
        setListCity(response);
      })
      .catch(error => {
        console.log('Error fetching cities', error);
      });
  }, []);

  return (
    <div>
      <h2>Apartments List</h2>
      {localStorage.getItem('token') && <div className="Filter" >
        {/* <button onClick={() => addApartment()}>add apartment</button> */}
        <select name='categoryCode' onChange={Advertiser} >
          <option value="" hidden >Choose Advertiser</option>
          {listAdvertiser.map((c, index) => <option key={index} value={c._id}>{c.name}</option>)}
        </select>
        <select name='categoryCode' onChange={Catigory} >
          <option value="" hidden >Choose category</option>
          {listCatgory.map((c, index) => <option key={index} value={c._id}>{c.name}</option>)}
        </select>
        <select name='cityCode' onChange={City} >
          <option value="" hidden >Choose city</option>
          {listCity && listCity.map((c, index) => <option key={index} value={c._id}>{c.name}</option>)}
        </select>
        <input input type='number' placeholder='Input Min Number of Beds' onChange={Beds} />
        <input input type='number' placeholder='Input Min Number of Price' onChange={Price} />
      </div>}
      {Sort.length > 0 && Sort.map(i => <RecipeCard dataAA={i._id} dataA={i.name} dataB={i.description} dataC={i.categoryCode.name} dataD={i.cityCode.name} dataE={i.image} dataF={i.numOfBeds} dataG={i.additives} dataH={i.price} dataI={i.advertiserCode.email}></RecipeCard>)}
      {Sort.length == 0 && <p>no results</p>}
    </div>
  );
}

export default ApartmentsList;