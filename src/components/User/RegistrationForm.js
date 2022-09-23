import React,{useContext,useState,useCallback} from "react";
import Form1 from "./MultistepForm/Form1";
import Form2 from "./MultistepForm/Form2";
import Form3 from "./MultistepForm/Form3";
import {Fade} from 'react-awesome-reveal';
import FormHeading from './MultistepForm/FormHeading'
import {useMultistepFormContext} from '../../FormReducer/MultistepFormReducer';
import useSignupHook from "../../hooks/useSignupHook";

export const ErrorContext = React.createContext();

// let formErrors;
function RegistrationForm(){
    window.document.title=`Buy Karo - Registration`;
    const {mystate,dispatcher} = useContext(useMultistepFormContext);
    const [page,setPage] = useState(0);
    const [formErrors,setFormErrors] = useState();
    const {username,firstname,lastname,u_email,phonenumber,password,middlename,confirmpassword} = mystate;
    const FormHead = ['Signup','Personal Info','Password'];
    const {CallSignup,flag,msg} = useSignupHook();

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
            setFormErrors(errors)

            setTimeout(()=>{
                setFormErrors()
            },4000)
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
                <div className="bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 h-screen">
                <div className=" h-[30rem] flex flex-col justify-center items-center">
                {flag === true ? <Fade direction="left"><p className="text-green-600 font-bold text-sm sm:text-2xl">{msg}</p></Fade> : 
                    <Fade direction="right"><p className="text-red-600 font-bold text-sm sm:text-2xl">{msg}</p></Fade>
                }
                        <Fade direction="down">
                            <FormHeading heading={FormHead[page]}/>
                        </Fade>
                        <Fade direction="left" >
                            <form method="POST">
                                
                                {PopulateForm()}
                            </form>
                        </Fade>
                        <Fade direction="up">
                            <div className=" flex mt-1 sm:mt-3 absolute right-[-90px] sm:right-[-110px] top-[100px] sm:top-[50px]">
                                <button className=" shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 sm:px-8 py-2 m-1 bg-[#FCF8E8] text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-base sm:text-lg" disabled={page === 0} onClick={GoBack}>Back</button>
                                <button className={`shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 sm:px-8 py-2 m-1 bg-[#F9F2ED] text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-base sm:text-lg ${page === FormHead.length -1 ? "hidden" : "visible "}`} onClick={GoNext} disabled={page === FormHead.length-1}>Next</button>
                                <button className={`shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 sm:px-8 py-2 m-1 bg-amber-300 text-black rounded-md transition-all duration-300 hover:bg-orange-600 hover:text-white font-sans font-bold text-base sm:text-lg ${page === FormHead.length -1 ? "visible" : "hidden "}`} type="submit"  onClick={SubmitTheRegistrationForm}>Submit</button>
                        </div>
                        </Fade>
                    </div>
                </div>
    </ErrorContext.Provider>
               
}

export default RegistrationForm;