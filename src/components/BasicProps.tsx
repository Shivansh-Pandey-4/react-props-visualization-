import { useState } from "react";
import Button from "./ui/Button";

export default function BasicProps(){

    const [count, setCount] = useState<number>(0);
    const [disable, setDisable] = useState<boolean>(false);

    return (
        <div className="bg-white border rounded-sm py-5 px-8">
             <h1 className="text-black text-3xl font-bold mb-1">Basic Props.</h1>

             <p className="mb-4 mt-2 text-gray-600">Props are arguments passed to React Components. They allow you to pass data from parent to child components.</p>

             <h2 className="text-xl font-semibold">Different Colors</h2>
             <div className="mt-4">

                 <Button onClick={()=>setCount((current) =>current+1)} className="mx-3 ml-6 ">Primary (Default)</Button>

                 <Button onClick={()=>setCount((current) =>current+1)} variant="secondary" className="mx-3" >Secondary</Button>

                 <Button onClick={()=>setCount((current) =>current+1)} variant="danger" className="mx-3" >Danger</Button>
             </div>
            
             <h2 className="text-xl mt-8 mb-3 font-semibold">Different Sizes</h2>
             <div>
                 <Button onClick={()=>setCount((current) =>current+1)} className="mx-3 ml-6" size="small">Small</Button>

                 <Button onClick={()=>setCount((current) =>current+1)} size="medium" variant="primary" className="mx-3" >Medium (Default)</Button>

                 <Button onClick={()=>setCount((current) =>current+1)} size="large" variant="primary" className="mx-3" >Large</Button>

             </div>
               
            <div className="flex mt-8 mb-3 gap-5">
             <h2 className="text-xl font-semibold">Disabled State</h2>

             <Button onClick={()=>setDisable((current) =>!current)}  variant={disable? "secondary": "danger"} size="small">Set Disable: {disable ? "off" : "on"}</Button>

           </div>
            
           <Button disabled={disable} onClick={()=>setCount((current) =>current+1)} size="medium" variant="primary" className="mx-3 mt-2" > {disable ? "Disabled":"Enabled"} Button State</Button>

             <div className="bg-gray-200 text-xl mt-8 mb-3 p-3 rounded-sm">
                 <h1 className="text-gray-600">Click Count : <span className="text-blue-600 font-semibold">{count}</span> </h1>
             </div>
        </div>
    )
}