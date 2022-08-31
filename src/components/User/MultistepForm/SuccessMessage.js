import React,{useContext,useEffect} from 'react'
import { ErrorContext } from "../RegistrationForm";
import useFormError from "../../../hooks/useFormError";
import {Fade} from 'react-awesome-reveal'

function SuccessMessage({errorMessage}) {

    const {errors} = useContext(ErrorContext);
    const {success,showErrors} = useFormError();
    
    useEffect(()=>{
        showErrors(errors);

        return ()=>{
            showErrors()
        }
    },[errors])
  return (
    <Fade direction='right'>
        <div className='relative my-10 text-green-700'>
            <span className='font-bold text-4xl'>Congrats! 🥳 {success === null ? "" : success}</span>
        </div>
    </Fade>
  )
}

export default SuccessMessage