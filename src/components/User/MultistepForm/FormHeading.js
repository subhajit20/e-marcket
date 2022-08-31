import React from "react";

function FormHeading({heading}) {
    return <div className="text-black flex flex-col font-serif font-bold relative bottom-[25px] my-14">
        <span className="font-bold text-2xl font-mono">{heading}</span>
    </div>
}

export default FormHeading;