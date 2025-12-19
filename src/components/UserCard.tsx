import clsx from "clsx";
import type { IUserCard } from "../utils/interfaces";
import { defaultPic } from "../utils/constant";

export default function UserCard({children, profilePic=defaultPic, userName, email="currently empty", color="green",tags}: IUserCard){

    const colors = {
         green : "bg-green-100 p-3 border-l-3 border-green-400 rounded-lg shadow-lg shadow-gray-300",

         blue : "bg-blue-100 p-3 border-l-3 border-blue-400 rounded-lg shadow-lg shadow-gray-300",

         purple : "bg-purple-100 p-3 border-l-3 border-purple-400 rounded-lg shadow-lg shadow-gray-300",

         orange : "bg-orange-100 p-3 border-l-3 border-orange-400 rounded-lg shadow-lg shadow-gray-300"
    }

    return (
        <div className={clsx(colors[color], "w-md mx-4 mb-6 p-5")}>
        <div className="flex gap-5">
            <div>
                <img className="rounded-full w-13" src={profilePic} alt="user profile image" />
            </div>
            <div>
                <h1 className="text-xl font-semibold ">{userName}</h1>
                <h2 className="text-md mb-2">{email}</h2>
                {
                     tags && tags.map((tag,index) =><span key={index} className="rounded-2xl bg-amber-400 px-3 py-0.5 mr-2">{tag}</span>)
                }
            </div>
        </div>
           <section className="mt-5 mb-2 border-t border-t-gray-300"></section>
                {children}
        </div>
    )
}