import Card from "./Card";
import Button from "./ui/Button";

export default function ThemeProps() {


    return (
        <div className="bg-white border rounded-lg py-5 px-8">
            <div className="flex justify-between ">
                <h1 className="text-black text-3xl font-bold mb-1">Theme Toggler.</h1>
                <button className="mr-11 border px-2 rounded-lg hover:bg-amber-500 cursor-pointer">Toggle Button.</button>
            </div>

            <p className="mb-4 mt-2 text-gray-600">This section demonstrates theme toggling using Context API and props. The theme state is shared across all child components without prop drilling.</p>

            <div className="mt-4 flex flex-wrap gap-5">

                <Card title="User Information" >
                    <h1>Name : John Doe</h1>
                    <h1>Email : john@example.com</h1>
                    <h1>Role : Developer</h1>
                    <div className="mt-3">
                        <Button className="mr-3">Edit Profile</Button>
                        <Button variant="secondary">Settings</Button>
                    </div>
                </Card>

                <Card title="Statistics" >
                    <h1>Total Clicks: {0}</h1>
                    <h1>Theme: {"light"}</h1>
                    <h1>Status: {"Active"}</h1>
                </Card>

            </div>

            <div className=" mt-5 mb-3 shadow-sm shadow-gray-300 p-5 border-l-4 rounded-lg ">
                <div>
                    <h1 className="text-lg font-semibold">Why Context + Props?</h1>
                    <ul className="pl-2 list-inside list-disc mt-2">
                        <li>Avoids "prop drilling" through multiple component layers</li>
                        <li>Makes theme accessible to any component in the tree</li>
                        <li>Components can still receive other props normally</li>
                        <li>Combines global state (context) with local configuration (props)</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}