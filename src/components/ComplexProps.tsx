import { useState } from "react";
import Button from "./ui/Button";
import UserCard from "./UserCard";

export default function ComplexProps(){

    const [profile, setProfile] = useState<string>('');

    function handleButton(input: string){
         setProfile(input);
    }

    return (
            <div className="bg-white border rounded-lg py-5 px-8">
                 <h1 className="text-black text-3xl font-bold mb-1">Complex/Nested Props.</h1>
    
                 <p className="my-3 text-gray-600">Complex props allow you to pass nested objects and functions, enabling sophisticated component configurations and interactions.</p>

                {
                    profile && (<div className="bg-blue-100 mt-5 mb-3 p-2 rounded-sm border-l-4 border-blue-600">
                        <h1 className=" text-blue-600 text-lg pl-4">Viewing {profile}'s profile</h1>
                    </div>)
                }
                
    
                 <h2 className="text-xl font-semibold mt-4">User Profile Card (Nested User, Theme, and Actions):</h2>

                 <div className="mt-4 flex flex-wrap gap-10 justify-center">
                     <UserCard userName="Bob Smith" email="bob@gmail.com" tags={["developer","ux/ui"]}>
                       <div className="flex justify-around">
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold">145</h1>
                            <h1 className="text-sm text-gray-600">Posts</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold">2843</h1>
                            <h1 className="text-sm text-gray-600">Followers</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold">421</h1>
                            <h1 className="text-sm text-gray-600">Followings</h1>
                        </div>
                       </div>
                       <div className="mt-5 flex justify-center">
                            <Button onClick={()=>handleButton("Bob")} className="mr-5 w-35">View Profile</Button>

                            <Button className="w-35" variant="secondary" size="medium">Message</Button>
                       </div>
                     </UserCard>     

                     <UserCard color="purple" userName="Micheal Jackson" email="micheal@gmail.com" tags={["engineer","devOps"]}>
                       <div className="flex justify-around">
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold">20</h1>
                            <h1 className="text-sm text-gray-600">Posts</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold">222</h1>
                            <h1 className="text-sm text-gray-600">Followers</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold">100</h1>
                            <h1 className="text-sm text-gray-600">Followings</h1>
                        </div>
                       </div>
                       <div className="mt-5 flex justify-center">
                            <Button onClick={()=>handleButton("Michael")} className="mr-5 w-35">View Profile</Button>

                            <Button className="w-35" variant="secondary" size="medium">Message</Button>
                       </div>
                     </UserCard> 

                 </div>
            </div>
        )
}