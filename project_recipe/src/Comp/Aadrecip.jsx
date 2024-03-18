import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Container, Form } from "react-bootstrap";
import { Addrecipe, addIngridToRecip } from "./Set";
import service_catgory from "./service_catgory";
import service_city from "./service_city";
import axios from "axios";
// const fetchData = async () => {
//     try {
//       const result = await axios.get('https://example.com/api/data');
//       return result.data; // או כל נתונים אחרים שאתה רוצה להציג
//     } catch (error) {
//       console.error('Error fetching data', error);
//       // טפל בשגיאה
//       throw error;
//     }
//   };

//   const MyComponent = () => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);


export const Aadrecip = async () => {
    debugger
    const CarrentUser = useSelector(x => x.currentUser);
    const codeuser = CarrentUser.id
    const [Categories, setCategories] = useState([]);
    const [Cities, setCities] = useState([]);
    const [categor, setCatego] = useState()
    const [city, setCity] = useState()
    const [description, setDescription] = useState()
    const [level, setLavel] = useState()
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [additions, setAdditions] = useState([]);
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    const [beds, setBeds] = useState(null);
    const [price, setPrice] = useState(null);
    const [address, setAddress] = useState(null);
    const dispatch = useDispatch();
    const nav = useNavigate()
    // const fetchDataAndSetState = async () => {
    //     try {
    //         const resultCategories = await service_catgory.getCategory();
    //         setCategories(resultCategories);

    //         const resultCities = await service_city.getCity();
    //         setCities(resultCities);
    //     } catch (error) {
    //         console.error('Error fetching data', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchDataAndSetState();
    // }, []);

    if (!Categories) {
        debugger
        return <div>Loading Categories...</div>;
    }
    if (!Cities) {
        return <div>Loading Cities...</div>;
    }

    // const cuc = users.filter(u => u.mail == cuser.mail)
   
    const handleOptionChange = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    }
    /////Change---------------------------------------------------------------
    const Change = () => {
        if (!categor || !level || !selectedOptions || !additions || !image || !name) {
            return false;
        }
        return true
    }
    /////addingread---------------------------------------------------------------
    // const addingread = (i, index, recipid, id) => {
    //     const ingreadstorecipe = {
    //         code: id + 1 + index,
    //         recipid: recipid + 1,
    //         Ingredid: selectedOptions[index].Ingredid,
    //         codeuser: cuc[0].id
    //     }
    //     dispatch(addIngridToRecip(ingreadstorecipe))
    // }

    /////send---------------------------------------------------------------
    const send = (event) => {
        debugger
        event.preventDefault()
        // const recipid = recipies[recipies.length - 1].recipid
        if (Change()) {
            const recip = {
                name: name,
                recippic: URL.createObjectURL(image),
                // instraction: instrac,
                codeuser: codeuser,
                codeCateg: categor,
                level: level
            }

            dispatch(Addrecipe(recip))
            // selectedOptions.map((l, index) => addingread(l, index, recipid, id))

            swal("המתכון", "נוסף בהצלחה י'שף", "success")
        }
        else alert("הלו מלא את כל השדות טמבל")
    }

    return <>

        <form className='apartment' onSubmit={(e) => send(e)}>
            {/* ----name------------------------------ */}
            <label htmlFor={'name'}>recip name:</label>
            <input id={'name'} placeholder={'input name recip'} onChange={(e) => setName(e.target.value)}></input>
            {/* ----description------------------------------ */}
            <label htmlFor={'description'}>description:</label>
            <input id={'name'} placeholder={'input description'} onChange={(e) => setDescription(e.target.value)}></input>
            {/* ----address------------------------------ */}
            <label htmlFor={'address'}>recip name:</label>
            <input id={'name'} placeholder={'input address'} onChange={(e) => setAddress(e.target.value)}></input>
            {/* ----price------------------------------ */}
            <label htmlFor={'price'}>recip name:</label>
            <input type="number" id={'name'} placeholder={'input price'} onChange={(e) => setPrice(e.target.value)}></input>
            {/* ----numOfBeds------------------------------ */}
            <label htmlFor={'numOfBeds'}>recip name:</label>
            <input type="number" id={'name'} placeholder={'input num of beds'} onChange={(e) => setBeds(e.target.value)}></input>
            {/* ---additives---------------------------------------- */}
            <label htmlFor="additives"> instrac:</label>
            <p>Separate additions with commas</p>
            <br></br>
            <textarea rows="4" cols="38" className="instrac" id="instrac" onBlur={(e) => {
                // let additions = e.target.value.split(',')
                setAdditions( e.target.value.split(','))
            }} />

            {/* ---pic---------------------------------------- */}
            <Container className="App">
                <Form>
                    <Form.Group controlId="formImage">
                        <Form.Label>בחר תמונה</Form.Label>
                        <Form.Control type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                    </Form.Group>
                </Form>
                <div className="image-preview">

                    {image && <img src={URL.createObjectURL(image)} alt="תמונה" width={250} />}
                </div>
            </Container>
            <br></br>
            <label htmlFor={'name'}>recip name:</label>
            <br></br>

            <input type={'submit'} value={'send'} className="btns"></input>
            <br></br>
        </form>
    </>
}