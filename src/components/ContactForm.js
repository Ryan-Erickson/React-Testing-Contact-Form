import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const [numClicks, setNumClicks] = useState(0);
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            name="firstName"
            placeholder="John"
            ref={register({ required: true, maxLength: 6 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error, First Name {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            placeholder="Doe"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error, Last Name {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" >Email*</label> 
          <input 
          name="email" 
          placeholder="johndoe@hotmail.com"
          ref={register({ required: true })} />
          {errors.email && (
            <p>Looks like there was an error, Email {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" ref={register({ required: false })} />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
