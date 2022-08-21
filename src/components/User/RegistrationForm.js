import React,{useContext,useState} from "react";
import Form1 from "./MultistepForm/Form1";
import Form2 from "./MultistepForm/Form2";
import {Fade} from 'react-awesome-reveal';
import FormHeading from './MultistepForm/FormHeading'
import {useMultistepFormContext} from '../../FormReducer/MultistepFormReducer';


function RegistrationForm(){
    const {mystate,dispatcher} = useContext(useMultistepFormContext);
    const [page,setPage] = useState(0);
    const HeadingOf = ['Your Name','Personal Info','Password','Others'];

    function NextForm(){
        setPage((prev)=>{
            return prev+1
        });
    }
    function BackForm(){
        setPage((prev)=>{
            return prev-1
        });
    }
    function PopulateForm(){
        if(page === 0){
            return <Form1 firstname={mystate.firstname} middlename={mystate.middlename} lastname={mystate.lastname}
                    handleChange={(e)=> dispatcher({type:"HANDLE INPUT",field:e.target.name,payload:e.target.value})}
            />;
        }else if(page === 1){
            return <Form2 username={mystate.username} u_email={mystate.u_email}
                    handleOnChange={(e)=> dispatcher({type:"HANDLE INPUT",field:e.target.name,payload:e.target.value})}/>;
        }
    }
    return <div className="bg-[#42032C] h-[40rem] flex flex-col justify-center items-center">
                <Fade direction="down">
                    <FormHeading heading={HeadingOf[page]}/>
                </Fade>
                <Fade direction="left">
                    <form method="Post">
                        {PopulateForm()}
                    </form>
                </Fade>
                <Fade direction="up">

                    <div className="flex">
                    <button className="px-8 py-2 m-1 bg-amber-300 text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-lg" disabled={page === 0} onClick={BackForm}>Back</button>
                    <button className={`px-8 py-2 m-1 bg-amber-300 text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-lg ${page === HeadingOf.length -1 ? "hidden" : "visible "}`} onClick={NextForm} disabled={page === HeadingOf.length-1}>Next</button>
                    <button className={`px-8 py-2 m-1 bg-amber-300 text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-lg ${page === HeadingOf.length -1 ? "visible" : "hidden "}`} >Submit</button>
                </div>
                </Fade>
            </div>
               
}

export default RegistrationForm;