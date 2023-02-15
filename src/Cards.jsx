import React from 'react'
import './index.css'

function Card(props){
    console.log(props);
    return (
        <>
        <div className='cards'>
            <div className='card'>
                <img src={props.imgsrc} alt='myPic' className='card_img'/>
                <div className='card_info'>
                    <span className='card_category'>A NETFLIX SERIES</span>
                    <div className='card_title'>{props.name}</div>
                    <a href={props.link} target='_blank'>
                    <button>Watch now</button></a>
                </div>
            </div>
        </div>
        </>
    )
   
    }
    export default Card