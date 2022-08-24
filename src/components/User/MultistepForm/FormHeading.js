import React from "react";

function FormHeading({heading}) {
    return <div className="text-white flex flex-col font-serif font-bold relative bottom-[25px]">
        <span className="font-bold text-2xl font-mono">{heading}</span>
    </div>
}

export default FormHeading;