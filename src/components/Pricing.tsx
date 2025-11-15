import React, { useState } from 'react';

import { supabase } from "./supabaseClient"


const Pricing = () => {
  const [email, setEmail] = useState("");
  const [requestState, setRequestState] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function submitEmail(userEmail: string) {
    if (requestState === "loading") return
    const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    setErrorMessage("");
    setRequestState("");
    if (regex.test(userEmail)) {
      setRequestState("loading");     // Start spinner / disable button
      setErrorMessage("");

      const { error } = await supabase
        .from('email_signups')
        .insert({ userEmail })

      if (error) {
        setRequestState("error")
        setErrorMessage(error.message)
      } else {
        setRequestState("success")
      }   
    }else{
      setErrorMessage("Invalid email");
    }
  }

  function handleTextChange(text: string) {
    setEmail(text);
    if (requestState === "loading") return

    setErrorMessage("");
    setRequestState(""); 
  }

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          Sign Up
        </h1>
        <div className="flex flex-col justify-center items-center">
          <form className="w-1/2 rounded-xl overflow-hidden">
            <input onChange={(e) => handleTextChange(e.target.value)} className="w-full rounded-xl border px-3 py-2 text-black" />
          </form>
          <a onClick={() => submitEmail(email)}
            className={`w-1/8 flex items-center justify-center m-5 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
          >
            {requestState === 'loading' ? 'Submitting...' : 'Submit'}
          </a>
  
          {requestState === 'success' && (
            <p className="text-green-500">Thank you! Your email has been submitted.</p>
          )}

          {errorMessage.length !== 0 && (
            <p className="text-red-500">Oops! {errorMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
