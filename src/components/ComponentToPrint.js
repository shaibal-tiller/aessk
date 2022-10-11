import React, { useState } from "react";
import Header from "../shared/Header";
import { QRCodeCanvas } from "qrcode.react";

const ComponentToPrint = React.forwardRef(({ data }, ref) => {
    const [url, setUrl] = useState("AESSK-558878Dga")
    const DTtoElement = (values) => {
        return (
            <div>            <div className="grid grid-cols-2 space-x-4  text-center w-[70%] leading-4
               m-2 px-2 bg-opacity-75 border-red-500 ">
                <p className="text-start text-sm ">{values[0]}</p>
                <h1 className="text-start">{values[1]}</h1>
                
            </div>
          
            </div>

        )
    }
    const downloadQRCode = (e) => {
        e.preventDefault();
        setUrl("");
    };

    const qrCodeEncoder = () => {
        setUrl("AESSK-558878Dga");
    };
    const qrcode = (
        <QRCodeCanvas
            className="p-2  absolute right-20 border-solid border-4 border-black bg-[#fff] z-50"
            bgColor="#fff"
            fgColor="#000"
            id="qrCode"
            value={url}
            size={120}

            level={"H"}
        />
    );

    return (
        <div ref={ref} >
            <div className="space-y-4">
                <Header />
                <img className="opacity-40 absolute z-[-1] h-[50%]  top-[30%]" src="https://aessk.org.bd/wp-content/uploads/2019/01/cropped-logo-alumni.png" />
                <div className="grid grid-cols-2 mx-[15%] bg-[#fff] bg-opacity-70 ">
                    {qrcode}
                    {Object.entries(data).map((dt) => DTtoElement(dt))}
                </div>
            </div>
        </div>
    );
});

export default ComponentToPrint