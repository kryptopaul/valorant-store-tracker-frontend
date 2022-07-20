import React from "react";
import './WeaponItems.css'


export default function WeaponItems(props) {

    return (
        <div className="weaponItems">
            
            <div className="weaponObject">
                <div className="imageContainer">
                    <img className="skinImage" src={props.array[0].image} alt="skin"/>
                </div>
                <div className="textInfo">
                <h3>{props.array[0].name}</h3>
                <h4>{props.array[0].price} VP</h4>
                </div>
            </div>
            <div className="weaponObject">
            <div className="imageContainer">
                <img className="skinImage" src={props.array[1].image} alt="skin"/>
            </div>
            <div className="textInfo">
                <h3>{props.array[1].name}</h3>
                <h4>{props.array[1].price} VP</h4>
            </div>
            </div>
            <div className="weaponObject">
            <div className="imageContainer">
                <img className="skinImage" src={props.array[2].image} alt="skin"/>
            </div>
            <div className="textInfo">
                <h3>{props.array[2].name}</h3>
                <h4>{props.array[2].price} VP</h4>
            </div>
            </div>
            <div className="weaponObject">
            <div className="imageContainer">
                <img className="skinImage" src={props.array[3].image} alt="skin"/>
            </div>
            <div className="textInfo">
                <h3>{props.array[3].name}</h3>
                <h4>{props.array[3].price} VP</h4>
            </div>
                </div>
            </div>
    
    );
}