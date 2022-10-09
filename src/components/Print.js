import React, { useContext, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import AppContext from './App/Context';
import  ComponentToPrint  from './ComponentToPrint';

const Print = () => {
  const componentRef = useRef();
const myContext= useContext(AppContext)

  return (
    <div>
    <ComponentToPrint ref={componentRef} data={myContext.userData} />
      <ReactToPrint
        trigger={() => <button className=' mt-4 ml-[30%] text-center rounded-md bg-zinc-400 py-2 px-4 hover:bg-zinc-500 '>Print this out!</button>}
        content={() => componentRef.current}
      />
      
    </div>
  );
};
export default Print