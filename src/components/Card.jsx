import React from "react";

function Card(props){
    return(
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <img className="circle-img" src={props.imgURL} alt="image1"/>
            </div>
            <hr className="card-top-horizontal-one"/>
            <hr className="card-top-horizontal-two"/>
            <div className="bottom">
                <div className="card-info">
                    <p className="info-phone" >{props.phone}</p>
                    <br/>
                    <p className="info-email">{props.email}</p>
                    <br/>
                    <p className="info-address">{props.address}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;