import React, { useEffect, useState } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';

import {api} from '../../api/quote.js';
import './Quote.css'


const getQuote = async() =>{
    try {
        const { data } = await api.get()
        return data
    } catch (error) {
        console.log(error)
    }
}

const Qoute = () => {
    const getData = getQuote()
    const [quote, setQuote] = useState({})
    const [style, setStyle] = useState({})
    const [color, setColor] = useState("")
    const handleClick = () =>{
        getData.then(function(result){
            setQuote(result[0])
        });
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        setColor(`rgb(${x},${y},${z})`)
        setStyle({color: color, backgroundColor: color, transition: "background 1s ease"})
    }
    useEffect(() => {
        getData.then(function(result){
            setQuote(result[0])
        })
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        setColor(`rgb(${x},${y},${z})`)
        setStyle({color: color, backgroundColor: color, transition: "background 1s ease"})
    }, [])
    // console.log(quote)
  return (
    <div className='container' style={style}>
    <div id='quote-box' >
    <p id='text' style={{color: color}}>
    {quote.quote && <>{quote.quote}</>}
    </p>
    <p id='author'>
    {quote.quote && <>{quote.author}</>}
    </p>
    <a id="tweet-quote" target="_top" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}><TwitterIcon/></a>
    <button id="new-quote" style={{backgroundColor: color }} onClick={handleClick}>Get Quote</button>
    </div>
    </div>
  )
}

export default Qoute
