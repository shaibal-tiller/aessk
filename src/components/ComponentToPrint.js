import React from "react";
import { render } from 'react-dom'
import Header from "../shared/Header";

const ComponentToPrint = React.forwardRef(({ data }, ref) => {
    const DTtoElement = (values) => {
        return (
            <div className="grid grid-cols-2 text-center w-[70%] leading-4 bg-slate-300 m-2 p-2 border-red-500 ">
                <h1 className="text-start ">{values[0]}</h1>
                <h1 className="text-end">{values[1]}</h1>
            </div>
        )
    }

    return (
        <div ref={ref}>
            <div className="space-y-4">
                <Header />
                <div className="grid grid-cols-2    mx-[15%] ">
                    {Object.entries(data).map((dt) => DTtoElement(dt))}
                </div>
            </div>
        </div>
    );
});

export default ComponentToPrint