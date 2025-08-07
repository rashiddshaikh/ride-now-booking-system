import {  Elements, useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import React from "react";

function CheckOutForm() {
    const stripe:any = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if(elements == null){
            return;
        }

        const {error: submitError} = await elements.submit();
        if(submitError){
            return;
        }
         //Create the PaymentIntent and obtain clientSecret 
    const res = await fetch("/api/create-intent", {
        method: "POST",
        body: JSON. stringify({
            amount: 58,
        }),
    });

    const secretKey = await res.json();
    //const {client_secret: clientSecret} = await res.json();
    console. log (secretKey);
    const { error } = await stripe.confirmPayment(
        {
            clientSecret: secretKey, 
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/",
            },
        }
    );
}   

    return (
        <div className='flex flex-col justify-center items-center w-full mt-6'>
        <form onSubmit={handleSubmit}
        className='max-w-md'>
            <PaymentElement />
            <button type="submit" 
            className='w-full bg-yellow-500 p-2 rounded-lg mt-2'
            disabled={!stripe || !elements}>
                Pay
            </button>
        </form>
        </div>
    );
}

export default CheckOutForm;
