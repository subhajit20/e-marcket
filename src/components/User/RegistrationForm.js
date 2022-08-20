import React from "react";
import Form1 from "./MultistepForm/Form1";
// import Form2 from "./MultistepForm/Form2";
import {Fade} from 'react-awesome-reveal';
import FormHeading from './MultistepForm/FormHeading'
import MultistepFormContext from '../../FormReducer/MultistepFormReducer';

function RegistrationForm(){
    return  <MultistepFormContext><div className="bg-[#42032C] h-screen flex flex-col justify-center items-center">
                <Fade direction="down">
                <FormHeading/>
                </Fade>
                <Fade direction="left">
                    <Form1 />
                </Fade>
                {/* <Form2/> */}
                <Fade direction="up">

                    <div className="flex">
                    <button className="px-8 py-2 m-1 bg-amber-300 text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-lg">Back</button>
                    <button className="px-8 py-2 m-1 bg-amber-300 text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-lg">Next</button>
                    <button className="px-8 py-2 m-1 bg-amber-300 text-black rounded-md hidden transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-lg">Submit</button>
                </div>
                </Fade>
            </div>
            </MultistepFormContext>
               
}

export default RegistrationForm;