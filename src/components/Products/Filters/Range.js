import React from 'react';

const Range = ({value,dispatch,heading,max,step}) => {
    return (
        <fieldset className='pb-4 border-b border-gray-500'>
            <legend className="text-base text-gray-100">{heading}</legend>
            <input id="steps-range" 
            type="range" 
            min="0" 
            max={max}
            onChange={dispatch}
            value={value} 
            step={step} 
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"/>
        </fieldset>
    );
};

export default Range;