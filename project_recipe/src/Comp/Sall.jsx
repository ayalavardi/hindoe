import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import service_apartment from './service_apartment'
import '../Style/sall.css'
import Payment from './Payment'

export const Sall = () => {
    let param = useParams()
    let id = param.id
    let [img, setImg] = useState()
    const [apartment, setApartment] = useState({})
    const [bool, setbool] = useState(false)

    // const deleteApar = (id) => {
    //     alert(id + "you realy????")
    //     axios.delete(`http://localhost:3001/apartment/${id}`, { headers: { 'authorization': localStorage.getItem('token') } })
    //         .then(response => {
    //             console.log(`clone :${id}`, response);
    //         })
    //         .catch(error => {
    //             console.log('Error clone:', error,);
    //         });
    // }
    // let nav = useNavigate()

    // const updata = (id) => {
    //     nav(`/AddApartment/${id}`)
    // }
    useEffect(() => {
        service_apartment.getApartmentByID(id)
            .then(response => {
                console.log(response)
                setApartment(response);
                // setbool(true)
                setImg(`http://localhost:3001/${response.image}`)
            })
            .catch(error => {
                console.log('Error fetching categories', error);
            });
    }, []);
    return <>
        <div>{apartment!=null &&apartment!=undefined&& <div className="apartment-details-page">
            <div className="apartment-details">
                <h2 className="apartment-title">{apartment.name}</h2>
                <div className="apartment-info">
                    <p className="apartment-description">{apartment.description}</p>
                    {apartment.categoryCode!=null&&<p className="apartment-category">Category: {apartment.categoryCode.name}</p>}
                    {apartment.cityCode!=null&&<p className="apartment-city">City: {apartment.cityCode.name}</p>}
                    <p className="apartment-address">Address: {apartment.address}</p>
                    <p className="apartment-beds">Number of Beds: {apartment.numOfBeds}</p>
                   { apartment.additives!=null&&<p className="apartment-additives">Additives: {apartment.additives.join(', ')}</p>}
                    <p className="apartment-price">Price: {apartment.price}$</p>
                    {apartment.advertiserCode!=null&&<p className="apartment-advertiser">Advertiser Email: <a href={`mailto:${apartment.advertiserCode.email}`}>{apartment.advertiserCode.email}</a></p>}
                    {localStorage.getItem('token') && <button
                    // onClick={() => deleteApar(apartment._id)}
                    >Delete Apartment</button>}
                    {localStorage.getItem('token') && <button
                    // onClick={() => updata(apartment._id)}
                    >Update Apartment</button>}
                </div>
                <img src={img} alt="Apartment" className="apartment-image" />
            </div>
        </div>}
        </div>
        <Payment></Payment>

    </>
}
