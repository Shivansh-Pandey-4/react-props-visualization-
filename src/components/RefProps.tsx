import { useRef } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function RefProps() {
    const firstRef = useRef<HTMLInputElement | null>(null);
    const secondRef = useRef<HTMLInputElement | null>(null);

    return (
        <div className="bg-white border rounded-lg py-5 px-8">
            <h1 className="text-black text-3xl font-bold mb-1">Ref Props.</h1>

            <p className="mb-4 mt-2 text-gray-600">
                Refs provide a way to access DOM nodes or React elements directly. Use
                <span className="bg-gray-100 p-1 ml-1 rounded-lg">forwardRef</span> to
                pass refs to child components.
            </p>

            <div className="bg-blue-100 p-5 rounded-lg">
                <h2 className="text-xl font-semibold">Try it out:</h2>

                <div className="mt-4">
                    <h1 className="font-semibold mb-2">First Input (with ref)</h1>
                    <Input
                        ref={firstRef}
                        className="border border-gray-400 focus:ring-2 ring-blue-500 p-1 px-3 rounded-sm w-2xl"
                        placeholder="Type something..."
                    />
                </div>

                <div className="mt-4">
                    <h1 className="font-semibold mb-2">Second Input (with ref)</h1>
                    <Input
                        ref={secondRef}
                        className="border border-gray-400 focus:ring-2 ring-blue-500 p-1 px-3 rounded-sm w-2xl"
                        placeholder="Type something else..."
                    />
                </div>

                <div className="my-5 flex flex-wrap gap-4">
                    <Button onClick={() => {
                        firstRef.current?.focus()
                    }}>Focus First Input</Button>

                    <Button onClick={() => {
                        secondRef.current?.focus();
                    }} variant="secondary">Focus Second Input</Button>

                    <Button onClick={() => {
                        if (firstRef.current?.value) {
                            alert(firstRef.current.value);
                        }
                    }} variant="danger">Get First Input Value</Button>

                    <Button onClick={() => {
                        if (firstRef.current?.value) {
                            firstRef.current.value = '';
                        }
                    }}>Clear First Input</Button>
                </div>
            </div>
        </div>
    );
}
