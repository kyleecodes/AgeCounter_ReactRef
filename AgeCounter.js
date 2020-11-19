import React, {useState, useRef, useEffect} from 'react';

const Age = (props) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const secondsPassed = useRef(0);

    let agism = useRef(0);
    let today = new Date();

    // enter your own bithday here
    let birth = new Date('December 11, 1995');

    let totalAge = (today - birth) / 31556952000;

    // you may change decimals
    let roundAge = Math.round((totalAge + Number.EPSILON) * 100000000) / 100000000;

    useEffect(() => {
        const timeout = setTimeout(() => {
            const date = new Date();
            agism.current = secondsPassed.current + roundAge;
            setTime(date.toLocaleTimeString());
        }, 1000);
        return () => {
            clearTimeout(timeout);
        }
    },);

    return (

        // of course you can change to any type of tag instead of span
        <span>
        {agism.current}
        </span>
)
}

export default Age;

