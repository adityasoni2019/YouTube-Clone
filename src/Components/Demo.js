import React, { useState } from 'react'
import { findPrime } from '../Utils/helper';
import { useMemo } from 'react';

// if we were to do a heavy operation, it would be called everytime the state changes, and we don't want that. 
// so, what we can do is, we can memoize this thing. And, this is what useMemo is used for. 

const Demo = () => {
    const [text, setText] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // const prime = findPrime(text);
    const prime = useMemo(() => findPrime(text), [text]);
    // useMemo takes in the first parameter as a function that needs to be memoised, or the value which it returns. 
    // and the second parameter, is basically, "only change the value of "prime" when the [text] changes. otherwise, use the cached value" 
    

    return (
        <div
            className={
                "m-4 p-2 w-96 h-96 border border-black " +
                (isDarkTheme && "bg-gray-900 text-white")
            }
        >
            <div>
                <button
                    className="m-10 p-2 bg-green-200"
                    onClick={() => setIsDarkTheme(!isDarkTheme)}
                >
                    Toggle
                </button>
            </div>
            <div>
                <input
                    className="border border-black w-72 px-2"
                    type="number"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div>
                <h1 className="mt-4 font-bold text-xl">nth Prime : {prime}</h1>
            </div>
        </div>
    );
};
export default Demo;
