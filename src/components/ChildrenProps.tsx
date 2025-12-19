import Card from "./Card";
import Button from "./ui/Button";

export default function ChildrenProps(){

    return (
        <div className="bg-white border rounded-lg py-5 px-8 scroll-mt-24">

             <h1 className="text-black text-3xl font-bold mb-1">Children Props.</h1>
        
             <p className="mb-4 mt-3 text-gray-600">The <span className="bg-gray-100 p-1 rounded-lg">children</span> prop allow you to pass JSX elements or components as children to other components, enabling component composition.</p>
        
             <h2 className="text-2xl font-semibold">Card Components with children:</h2>
             <div className="mt-6 flex flex-wrap justify-around">

                <Card title="User Profile">
                    <h1 className="text-md my-2"><span className="font-bold"> Name :</span> Shivansh Pandey </h1>

                    <h1 className="text-md my-2"><span className="font-bold">Email :</span> example@gmail.com</h1>

                    <h1 className="text-md my-2"><span className="font-bold">Role :</span> Software Developer</h1>
                </Card>

                <Card color="purple" title="Statistics">
                    <div>
                        <h1 className="text-md my-2">Total Users : <span className="font-bold"> 1,240 </span></h1>

                        <h1 className="text-md my-2">Active Sessions : <span className="font-bold"> 567</span></h1>

                        <h1 className="text-md my-2">Revenue : <span className="font-bold"> $50,000</span></h1>
                    </div>
                </Card>

                <Card color="orange" title="Quick Action">
                    <div className="flex flex-col">
                        <Button className="my-3">Create New</Button>
                        <Button variant="danger">View All</Button>
                    </div>
                </Card>

                <Card color="orange" title="Warning" >
                  <p>Your trial period ends in 5 days. Please upgrade your account to continue using all features.</p>
                </Card>

             </div>
                     
        </div>
    )
}