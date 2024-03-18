// import { useDispatch, useSelector } from "react-redux";
// import { addCatergy } from "./Set";
// import swal from "sweetalert";
// import { Autocomplete, TextField } from "@mui/material";
// import { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";
// import service_city from "./service_city";

// export const AadCity = () => {
//     const city = "haifa"
//     const [cities, setCities] = useState([])
//     const dispatch = useDispatch();
//     useEffect(() => {
//         axios.get('https://api.foursquare.com/v3/autocomplete', {
//             params: {
//                 query: 'Jerusalem',
//             },
//             headers: {
//                 'Authorization': 'fsq30rNsSO/RDTY+uevVfikddXPhzsIDQEgoBd+ojHLlwcQ=',
//                 'accept': 'application/json',
//             },
//         })
//             .then(response => {
//                 setCities(response.data.results);
//                 console.log(response.data.results);
//             })
//             .catch(error => {
//                 setCities(["no results"]);
//                 console.error('Error fetching apartments:', error);
//             })
//     }, []);


//     /////Change---------------------------------------------------------------
//     const Change = (event) => {
//         debugger
//         if (!event.target[0].value) {
//             return false;
//         }
//         return true
//     }
//     // ---send-------------------------------------------------------------
//     const send = (event) => {
//         // event.preventDefault()
//         if (event) {
//             const categor = {
//                 name: event,
//             }
//             service_city.addCity()
//             swal("נוסף בהצלחה", "had master", "success")
//         }
//         else alert("הלו!! הכנס רמה! טמבל")
//     }
//     const search = () => {
//         console.log("df", cities)
//     }
//     return <>
//         <Autocomplete
//             disablePortal
//             id="combo-box-demo"
//             options={cities}
//             sx={{ width: 300 }}
//             renderInput={(params) => <TextField {...params} label="autoSelect" />}
//         />
//         {cities.length > 0 && cities.map((f, index) => (
//             <div key={index}>{f.text.primary}</div>
//         ))}
//         {cities.length == 0 && <div>טוען נתונים</div>}
//         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//         <div>{cities.length}</div>
//         <button onClick={() => search()}></button>
//     </>
// }

// import { useDispatch, useSelector } from "react-redux";
// import { addCatergy } from "./Set";
// import swal from "sweetalert";
// import { Autocomplete, TextField } from "@mui/material";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import service_city from "./service_city";

// export const AadCity = () => {
//     const [inputValue, setInputValue] = useState('');
//     const [cities, setCities] = useState([]);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const fetchCities = async () => {
//             try {
//                 const response = await axios.get(`https://api.foursquare.com/v3/autocomplete?query=${inputValue}`, {
//                     // params: {
//                     //     query: "haifa",
//                     // },
//                     headers: {
//                         'Authorization': 'fsq30rNsSO/RDTY+uevVfikddXPhzsIDQEgoBd+ojHLlwcQ=',
//                         'accept': 'application/json',
//                     },
//                 });

//                 setCities(response.data.results);
//                 console.log("cities",response.data.results,inputValue);
//             } catch (error) {
//                 setCities(["no results"]);
//                 console.error('Error fetching apartments:', error);
//             }
//         };

//         // Adding a debounce mechanism to wait for user to stop typing
//         const debounceTimeout = setTimeout(() => {
//             fetchCities();
//         }, 300); // Adjust the debounce timeout as needed (e.g., 300 milliseconds)
//         // Cleanup function to clear the timeout when component unmounts
//         return () => clearTimeout(debounceTimeout);
//     }, [inputValue]);

//     const handleInputChange = (event, value) => {
//         setInputValue(value);
//     };

//     // ---send-------------------------------------------------------------
//     const send = (event) => {
//         if (event) {
//             const categor = {
//                 name: event,
//             }
//             service_city.addCity();
//             swal("נוסף בהצלחה", "had master", "success");
//         } else {
//             alert("הלו!! הכנס רמה! טמבל");
//         }
//     };

//     const search = () => {
//         console.log("df", cities);
//     };

//     return (
//         <>
//             <Autocomplete
//                 disablePortal
//                 id="combo-box-demo"
//                 options={cities}
//                 sx={{ width: 300 }}
//                 renderInput={(params) => (
//                     <TextField
//                         {...params}
//                         label="autoSelect"
//                         onChange={handleInputChange}
//                     />
//                 )}
//             />
//             {/* {cities.length > 0 && cities.map((f) => (
//                 <div key={f.text.primary}>{f.text.primary}</div>
//             ))}
//             {cities.length === 0 && <div>טוען נתונים</div>}
//             <div>{cities.length}</div>
//             <button onClick={() => search()}></button> */}
//             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

//         </>
//     );
// };

import {  useSelector } from "react-redux";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import service_city from "./service_city";
import { Button } from "react-bootstrap";

export const AadCity = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedData, setSelectedData] = useState('');
  const CarrentUser = useSelector(x => x.currentUser);
  useEffect(() => {
    axios.get('https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&fields=%D7%A9%D7%9D_%D7%99%D7%A9%D7%95%D7%91')
      .then(response => {
        console.log(response.data.result.records);
        setCities(response.data.result.records);
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
      });
  }, []);
  const handleCityChange = (event, value) => {
    setSelectedCity(value);
    // setSelectedData(value);
    console.log(value);
    // const filteredData = cities.filter(city => city === value.value);
   
  };

  const handleSave = () => {
    service_city.addCity(selectedCity.label,CarrentUser.id)
    .then(
      console.log('seccjj')
    ).catch(
      console.log('err')
    )
    console.log(selectedCity);
  };
  return <>
    <div>
    <Autocomplete
  disablePortal
  id="city-autocomplete"
  options={cities.map(city => ({ label: city.שם_ישוב, value: city.שם_ישוב }))}
  // value={selectedCity}
  onChange={handleCityChange}
  renderInput={(params) => <TextField {...params} label="City" />}
/>
      <br />
      <Button variant="contained" onClick={handleSave}>Save</Button>
    </div>
  </>
}

