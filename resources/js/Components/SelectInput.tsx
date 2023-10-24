import { Listbox } from "@headlessui/react";
import {
    SelectHTMLAttributes,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";

export default forwardRef(function SelectInput(
    {
        className = "",
        isFocused = false,
        options,
        ...props
    }: SelectHTMLAttributes<HTMLSelectElement> & {
        isFocused?: boolean;
        options: string[];
    },
    ref
) {
    const localRef = useRef<HTMLSelectElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    const [selected, setSelected] = useState<string>(options[0]);

    return (
        <select
            {...props}
            className={
                "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                className
            }
            ref={localRef}
        >
            {options.map((option, id) => (
                <option value={option}>{option}</option>
            ))}
        </select>
        // <Listbox value={selected} onChange={setSelected}>
        //     <Listbox.Button
        //         className={
        //             "px-4 py-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm cursor-pointer" +
        //             className
        //         }
        //     >
        //         {selected}
        //     </Listbox.Button>
        //     <Listbox.Options className="px-4 py-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm cursor-pointer">
        //         {options.map((option, id) => (
        //             <Listbox.Option key={id} value={option}>
        //                 {option}
        //             </Listbox.Option>
        //         ))}
        //     </Listbox.Options>
        // </Listbox>
    );
});
