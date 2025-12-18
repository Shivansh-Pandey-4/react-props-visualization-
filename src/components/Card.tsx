import clsx from "clsx";
import type { ICard } from "../utils/interfaces";

export default function Card({children, title, color="green"}: ICard){

    const colors = {
         green : "bg-green-100 p-3 border-l-3 border-green-400 rounded-lg shadow-lg shadow-gray-300",

         blue : "bg-blue-100 p-3 border-l-3 border-blue-400 rounded-lg shadow-lg shadow-gray-300",

         purple : "bg-purple-100 p-3 border-l-3 border-purple-400 rounded-lg shadow-lg shadow-gray-300",

         orange : "bg-orange-100 p-3 border-l-3 border-orange-400 rounded-lg shadow-lg shadow-gray-300"
    }

    return (
        <div className={clsx(colors[color], "w-md mx-4 mb-6 p-5")}>
           <h1 className="text-xl mb-2 font-bold ">{title}</h1>
           {children}
        </div>
    )
}