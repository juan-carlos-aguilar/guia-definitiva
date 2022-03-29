import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function About() {
    const [message, setMessage] = useState('');
    const { number } = useParams();

    useEffect(() => {
        if (number)
        {
            setMessage('The number is ' + number);
        }
        else {
            setMessage('No number provided')
        }
    }, []);

    return (
        <div>
            <h1>About</h1>
            <p>{message}</p>
        </div>

    )
}
