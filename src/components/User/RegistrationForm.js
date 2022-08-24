import React,{useContext,useState} from "react";
import Form1 from "./MultistepForm/Form1";
import Form2 from "./MultistepForm/Form2";
import Form3 from "./MultistepForm/Form3";
import {Fade} from 'react-awesome-reveal';
import FormHeading from './MultistepForm/FormHeading'
import {useMultistepFormContext} from '../../FormReducer/MultistepFormReducer';
import useSignupHook from "../../hooks/useSignupHook";


function RegistrationForm(){
    const {mystate,dispatcher} = useContext(useMultistepFormContext);
    const [page,setPage] = useState(0);
    const {username,firstname,lastname,u_email,phonenumber,password,middlename,confirmpassword} = mystate;
    const FormHead = ['Signup','Personal Info','Password'];
    const {CallSignup} = useSignupHook();

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

    /**
     * 
     * @returns {username,fisrtname,lastname,password,phonenumber,email} handleOnSubmit
     */
    function handleOnSubmit(e){
        e.preventDefault();
        CallSignup({...mystate});
    }

    function PopulateForm(){
        if(page === 0){
            return <Form1 firstname={firstname} middlename={middlename} lastname={lastname}
                    handleChange={(e)=> dispatcher({type:"HANDLE INPUT",field:e.target.name,payload:e.target.value})}
            />;
        }else if(page === 1){
            return <Form2 username={username} u_email={u_email}
                    handleOnChange={(e)=> dispatcher({type:"HANDLE INPUT",field:e.target.name,payload:e.target.value})}/>;
        }else if(page === 2){
            return <Form3 password={password} confirmpassword={confirmpassword} phonenumber={phonenumber}
                    handleOnSubmit={(e)=> dispatcher({type:"HANDLE INPUT",field:e.target.name,payload:e.target.value})}/>;
        }
    }


    return <div className="bg-[#42032C] h-[40rem] flex flex-col justify-center items-center">
                <Fade direction="down">
                    <FormHeading heading={FormHead[page]}/>
                </Fade>
                <Fade direction="left" >
                    <form method="POST" action="https://e-marcket-backend-api.herokuapp.com/u1/signup">
                        {PopulateForm()}
                    </form>
                </Fade>
                <Fade direction="up">
                    <div className="flex mt-1 sm:mt-3">
                    <button className="px-4 sm:px-8 py-2 m-1 bg-amber-300 text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-base sm:text-lg" disabled={page === 0} onClick={BackForm}>Back</button>
                    <button className={`px-4 sm:px-8 py-2 m-1 bg-amber-300 text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-base sm:text-lg ${page === FormHead.length -1 ? "hidden" : "visible "}`} onClick={NextForm} disabled={page === FormHead.length-1}>Next</button>
                    <button className={`px-4 sm:px-8 py-2 m-1 bg-amber-300 text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-base sm:text-lg ${page === FormHead.length -1 ? "visible" : "hidden "}`} type="submit" onClick={handleOnSubmit}>Submit</button>
                </div>
                </Fade>
            </div>
               
}

export default RegistrationForm;