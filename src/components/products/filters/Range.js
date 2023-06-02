import React from 'react';

const Range = ({value,dispatch,heading,max,step,dispatchType}) => {
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
            onChange={handleSliderChange}
            value={value} 
            step={step} 
            className="w-full h-2"/>
        </fieldset>
    );
};

export default Range;