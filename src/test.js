import React from 'react'

export default function Test(){
    const color1 = <p>Red</p>
    const color2 = <p>Green</p>
    const color3 = <p>Blue</p>

    let res = [color1,color2,color3];
    return(<div>
            {res}
            </div>);
    
}