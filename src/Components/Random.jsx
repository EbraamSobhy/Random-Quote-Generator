import React, { useState } from "react";
import './Random.css';
import refresh from '../Components/refresh.png';
import tech from '../Components/tech.jpeg';

function Random(){

    let quotes = [];
    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    const [quote,setQuote] = useState({
        text: "Programming can change your way of thinking",
        author: "Ebraam Sobhy",
    });
    loadQuotes();
    return(
        <div className="container">
            <div className="quote">{quote.text}</div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author"><b>{quote.author}</b></div>
                <span className="span"></span>
                <div className="icons">
                    <img src={refresh} onClick={()=>{random()}} alt="" />
                    <img src={tech} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Random;

