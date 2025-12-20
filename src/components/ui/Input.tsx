import clsx from "clsx";
import type { IInput } from "../../utils/interfaces";


export default function Input({className, ...props}: IInput){

    const baseStyle = "border focus:outline-none outline-none";

    return (
        <input {...props} className={clsx(baseStyle,className)} />
    )
}