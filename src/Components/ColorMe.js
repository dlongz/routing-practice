import React from 'react';

const ColorMe = (props) => {

    const { word, txtcolor, bgcolor } = props

    if(isNaN(word)){
        return (  
            <h1 style={{color: txtcolor, backgroundColor: bgcolor}}>
                {word}
            </h1>
        );
    } else {
        return(

            <h1>{word} as a Number</h1>
        )
    }
}

export default ColorMe;