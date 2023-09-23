import "./Section03.css";
import React, { useState, useEffect } from "react";
import New from '../images/New-Product.png'
import {Link} from 'react-router-dom'
import Arrow from '../images/Arrow 2.png'
import arrow from '../images/Arrow 1.png'

function Section03() {
    const url = "https://fakestoreapi.com/products";
    const [data, setData] = useState([]);

const fetchInfo = () => {
    return fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
    }


useEffect(() => {
    fetchInfo();
}, []);

return (
    <>

    <div className="Section03">
    <div className="Section03-Container">
        <div className="Section03-top">
                <img src={New} alt="" className="New"></img>
            <div className="Section03-top-right">
                <Link to='/'> <img src={arrow} alt=""></img></Link>&nbsp;&nbsp;
                <Link to='/'><img src={Arrow} alt=""></img> </Link>
            </div>
        </div>
        <div className="Section03-bottom">
            <div className="Section03-bottom-left">
                <Link to='/' className="link">Apparel</Link> <br/><br/>
                <Link to='/' className="link">Accessories</Link><br/><br/>
                <Link to='/' className="link">Best Sellers</Link><br/><br/>
                <Link to='/' className="link">50% off</Link><br/><br/>
            </div>
            <div className="Section03-bottom-right">
            {data.map((dataObj, index) => {
        return (
            <div>
            <div className=" product">
                    <div className="col product01">
                    <div className="card h-100">
                    <img src={dataObj.image} className="card-img-top" alt="..." style={{width:'150px',height:'150px'}}/>
                    <div className="card-body">
                    <h5 className="card-title">{dataObj.title}</h5>
                    </div>
                    <div className="card-footer">
                    <b className="text-body-secondary"> Price: ${dataObj.price}</b>
                    </div>
                </div>
                </div>
                </div>
            </div>
        );
        })}
    </div>
        </div>
    </div>
    </div>
    </>
);
}

export default Section03;