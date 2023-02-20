import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {
    let x = 0;
    const [y, setY] = useState(0);

    const ref = useRef(0);
    // console.log(ref);
    console.log("Outer Rendering....");
    const i = useRef(null);

    useEffect(() => {
        i.current = setInterval(() => {
            console.log("Namaste React", Math.random());
        }, 1000);

        return () => clearInterval(i.current);
    }, [])
    return (
        <>
            <div>CHECK THE CONSOLE</div>
            <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-[500px]'>
                <div>
                    <button className='bg-green-100 p-2 m-4'
                        onClick={() => {
                            x++;
                            console.log("x = " + x);
                        }}>

                        Increase x
                    </button>
                    <span className='font-bold text-xl'> Let {x}</span>
                </div>

                <div>
                    <button className='bg-green-100 p-2 m-4'
                        onClick={() => {
                            setY(y + 1);
                            console.log("rendering...");
                        }}>

                        Increase y
                    </button>
                    <span className='font-bold text-xl'>State {y}</span>
                </div>

                <div>
                    <button className='bg-green-100 p-2 m-4'
                        onClick={() => {
                            ref.current = ref.current + 1;
                            console.log(ref);
                        }}>

                        Increase ref
                    </button>
                    <span className='font-bold text-xl'>Ref {ref.current}</span>
                    <span className="display: block">The value of ref only changes on the screen when the component is re-renedred. If we keep clicking on "increase ref" it'll increase it's value behind the scene, but the react component wouldn't get re-rendered. It'll only get updated on the screen when the component re-renders. </span>
                </div>

                <button
                    className='bg-red-900 m-5 p-4 text-white font-bold rounded-lg'
                    onClick={() => {
                        clearInterval(i.current);
                    }}
                >
                    Stop Interval
                </button>
            </div>
        </>
    )
}

export default Demo2
