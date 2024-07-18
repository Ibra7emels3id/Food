'use client'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm'
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Page = () => {
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
// export default Page;

const SuspendedCheckoutPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Page />
        </Suspense>
    );
};

export default SuspendedCheckoutPage;
