"use client"

import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '@/components/Payment/CheckOutForm';

function Payment() {
   //const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext);  // Use carAmount from context
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any);

    // Ensure carAmount is defined and handle the default case
    const options = {
        mode: 'payment',
        amount: 50, // Amount in smallest currency unit (paise)
        currency: 'inr',
    };
    
    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckOutForm/>  
        </Elements>    
    );
}

export default Payment;