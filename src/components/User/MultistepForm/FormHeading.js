import React from "react";

function FormHeading({heading}) {
    return <div className="text-white flex flex-col font-serif font-bold">
        <span className="font-bold text-2xl">{heading}</span>
    </div>
}

export default FormHeading;