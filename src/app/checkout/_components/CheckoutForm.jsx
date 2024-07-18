
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import { CleareCart } from '../../../lib/features/CartSlice';
import LoaderPayment from './LoaderPayment'

const CheckoutForm = () => {
    // handle Send Data Strape
    const dispatch = useAppDispatch()
    const dataCart = useAppSelector((state) => state.cart)

    const handleCheckOutCart = async () => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    data: {
                        // user: user?.username,
                        // UserName: user?.fullName,
                        // Email: user?.emailAddresses[0]?.emailAddress,
                        products: dataCart?.cart,
                        boolean: false
                    }
                })
            }
            const response = await fetch(`http://localhost:1337/api/carts`, requestOptions);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! status: ${response.status}, message: ${JSON.stringify(errorData)}`);
            }


            const result = await response.json();
            console.log(result);

            dispatch(CleareCart())
        } catch (error) {
            console.error('Error adding data to cart:', error);
        }
        handleSubmit()
    }


    const searchparams = useSearchParams()
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState();
    const [loading, setLoading] = useState(false);



    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();


        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError) {
            handleError(submitError);
            return;
        }

        const handleError = (error) => {
            setLoading(false);
            setErrorMessage(error.message);
        }

        setLoading(true);

        handleCheckOutCart()

        const Res = await fetch('api/create-intent', {
            method: 'POST',
            body: JSON.stringify({
                amount: Number(searchparams.get('amount')),
            }),
        })

        const clientSecret = await Res.json()

        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            clientSecret,
            elements,
            confirmParams: {
                return_url: `${process.env.NEXT_PUBLIC_URL_SITE}/success`,
            },
        });

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.

        }

    };

    return (
        <>
            {loading ? <LoaderPayment /> : null}
            <form onSubmit={handleSubmit} className=' xl:w-[100%] m-auto h-screen flex justify-center items-center'>
                <div className="forms bg-[#eee] w-[50%]  p-10 rounded-md shadow-lg  flex flex-col justify-center">
                    <PaymentElement />
                    <button className=' bg-[#2563eb] py-5 text-white font-medium mt-10'>Submit</button>
                </div>
            </form >
        </>

    );
};

const SuspendedCheckoutForm = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CheckoutForm />
        </Suspense>
    );
};

export default SuspendedCheckoutForm;