import React,{useContext,useState,useCallback} from "react";
import Form1 from "./MultistepForm/Form1";
import Form2 from "./MultistepForm/Form2";
import Form3 from "./MultistepForm/Form3";
import {Fade} from 'react-awesome-reveal';
import FormHeading from './MultistepForm/FormHeading'
import {useMultistepFormContext} from '../../FormReducer/MultistepFormReducer';
import useSignupHook from "../../hooks/useSignupHook";
import SuccessMessage from "./MultistepForm/SuccessMessage";

export const ErrorContext = React.createContext();

let formErrors;
function RegistrationForm(){
    const {mystate,dispatcher} = useContext(useMultistepFormContext);
    const [page,setPage] = useState(0);
    const {username,firstname,lastname,u_email,phonenumber,password,middlename,confirmpassword} = mystate;
    const FormHead = ['Signup','Personal Info','Password'];
    const {CallSignup,flag} = useSignupHook();

    const GoNext = useCallback(()=>{
            setPage((prev)=> prev+1);
    },[])
    
    const GoBack = useCallback(()=>{
            setPage((prev)=> prev-1);
    },[])

    /**
     * 
     * @returns {username,fisrtname,lastname,password,phonenumber,email} handleOnSubmit
     */
    
    const SubmitTheRegistrationForm = useCallback(()=>{
        async function handleOnSubmit(){
            // e.preventDefault();
            const {errors} = await CallSignup({...mystate});
            formErrors = errors;
         }
         handleOnSubmit();
    },[CallSignup,mystate])

    function PopulateForm(){
        if(page === 0){
            return <Form1 firstname={firstname} middlename={middlename} lastname={lastname}
                    handleChange={(e)=> dispatcher({type:"HANDLE INPUT",field:e.target.name,payload:e.target.value})}
            />;
        }
        else if(page === 1){
            return <Form2  username={username} u_email={u_email}
                    handleOnChange={(e)=> dispatcher({type:"HANDLE INPUT",field:e.target.name,payload:e.target.value})}/>;
        }else if(page === 2){
            return <Form3 password={password} confirmpassword={confirmpassword} phonenumber={phonenumber}
                    handleOnSubmit={(e)=> dispatcher({type:"HANDLE INPUT",field:e.target.name,payload:e.target.value})}/>;
        }
    }



    return <ErrorContext.Provider value={{errors:formErrors}}>
                <div className="bg-[#F6F6F6] h-[40rem] flex flex-col justify-center items-center">
                {flag ? <SuccessMessage/> : "Failedddd"}
                        <Fade direction="down">
                            <FormHeading heading={FormHead[page]}/>
                        </Fade>
                        <Fade direction="left" >
                            <form method="POST">
                                
                                {PopulateForm()}
                            </form>
                        </Fade>
                        <Fade direction="up">
                            <div className="flex mt-1 sm:mt-3 absolute top-9 right-[-110px]">
                                <button className="px-4 sm:px-8 py-2 m-1 bg-amber-300 text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-base sm:text-lg" disabled={page === 0} onClick={GoBack}>Back</button>
                                <button className={`px-4 sm:px-8 py-2 m-1 bg-amber-300 text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-base sm:text-lg ${page === FormHead.length -1 ? "hidden" : "visible "}`} onClick={GoNext} disabled={page === FormHead.length-1}>Next</button>
                                <button className={`px-4 sm:px-8 py-2 m-1 bg-amber-300 text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-base sm:text-lg ${page === FormHead.length -1 ? "visible" : "hidden "}`} type="submit"  onClick={SubmitTheRegistrationForm}>Submit</button>
                        </div>
                        </Fade>
                    </div>
    </ErrorContext.Provider>
               
}

export default RegistrationForm;