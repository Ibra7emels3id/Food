'use client'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm'
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const page = () => {
    const searchparams = useSearchParams()

    const options = {
        mode: 'payment',
        currency: 'usd',
        amount: Number(searchparams.get('amount')),
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
    );
}

const SuspendedCheckoutPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <page />
        </Suspense>
    );
};

export default SuspendedCheckoutPage;
