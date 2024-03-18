import { useDispatch, useSelector } from "react-redux";
import { addCatergy } from "./Set";
import swal from "sweetalert";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import service_city from "./service_city";
import { Button } from "react-bootstrap";

export const Intersting = (props) => {
    const [items, setItems] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedData, setSelectedData] = useState('');
    const [boll, setbool] = useState(false);

    const CarrentUser = useSelector(x => x.currentUser);

    let city=props.city
    useEffect(() => {
        axios.get('https://data.gov.il/api/3/action/datastore_search?resource_id=85e40960-5426-4f4c-874f-2d1ec1b94609&fields=%D7%A9%D7%9D%20%D7%97%D7%9C%D7%A6%20%D7%91%D7%A2%D7%91%D7%A8%D7%99%D7%AA,%D7%9B%D7%AA%D7%95%D7%91%D7%AA%20-%20%D7%99%D7%A9%D7%95%D7%91,%D7%9B%D7%AA%D7%95%D7%91%D7%AA%20-%20%D7%A8%D7%97%D7%95%D7%91')
            .then(response => {
                console.log("cd",city.name);
                setItems(response.data.result.records);
                console.log(response.data.result.records);
                const filteredItems = response.data.result.records.filter(c => c['כתובת - ישוב'] === city.name);
                console.log(filteredItems);
                setItems(filteredItems)
                console.log(items);
                setbool(true)
            })
            .catch(error => {
                console.log("vewfvev");
                console.error('Error fetching cities:', error);
            });
    }, []);
    const handleCityChange = (event, value) => {
        // debugger
        setSelectedCity(value);
        // setSelectedData(value);
        console.log(value);
        // const filteredData = cities.filter(city => city === value.value);

    };

    const handleSave = () => {
        service_city.addCity(selectedCity.label, CarrentUser.id)
            .then(
                console.log('seccjj')
            ).catch(
                console.log('err')
            )
        console.log(selectedCity);
    };
    return <>
        <div className="apartment-payment-container else">
            <div className="total">מה עוד באיזור</div>
            <div className="divider"></div>
            {items && items.map((it) => (
                <div className="apartment-payment-container small">
                    <div className="total">{it['שם חלצ בעברית']}</div>
                    <div className="divider" />
                    <div className="check-in">{it['כתובת - ישוב']}</div>
                    <div className="check-in">{it['כתובת - רחוב']}</div>
                    {/* <div className="check-out">תאריך צ'ק-אוט: 5/20/2024</div> */}
                </div>
            ))}
        </div>

     
    </>
}

