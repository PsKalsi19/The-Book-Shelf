import React, { useState } from 'react';
import Loader from '../../loader/Loader';

const Range = ({value,dispatch,heading,max,step,dispatchType}) => {
    const [showLoader,setShowLoader]=useState(false)
    const handleSliderChange=(e)=>{
        dispatch({type:dispatchType,payload:Number(e.target.value)})
    }
 
    return (
        <fieldset className='pb-4 border-b border-gray-500'>
            <legend className="text-base text-gray-100">{heading}</legend>
            <input id="steps-range" 
            type="range" 
            min="0" 
            max={max}
            onMouseDown={()=>setShowLoader(true)}
            onMouseUp={()=>setShowLoader(false)}
            onChange={handleSliderChange}
            value={value} 
            step={step} 
            className="w-full h-2"/>
        </fieldset>
    );
};

export default Range;