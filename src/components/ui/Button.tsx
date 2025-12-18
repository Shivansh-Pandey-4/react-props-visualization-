import type { IButton } from "../../utils/interfaces"
import clsx from "clsx";

export default function Button({children, className, size="medium", variant="primary", ...props}: IButton){

    const baseStyle = "border rounded-sm";
    const disable = "opacity-50 cursor-not-allowed"
    
    const variants = {
         primary : "bg-blue-600 text-white border-gray-600 hover:bg-blue-800",

         secondary : "bg-green-600 text-white border-black hover:bg-green-700",

         danger : "bg-red-600 text-black border-black hover:bg-red-700"
    }

    const sizes = {
        small : "px-1 py-0.5",
        medium : "px-2 py-1",
        large : "px-3 py-2"
    }

    return (
        <button  {...props}  className={clsx(baseStyle, variants[variant], sizes[size], className, `${props.disabled ? disable: "cursor-pointer"}` )} > {children} </button>
    )
}