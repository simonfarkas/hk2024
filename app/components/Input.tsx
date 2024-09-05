import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement>((props: any, ref) => {
  return (
    <input
      className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      ref={ref}
      id={props.id}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      {...props}
    />
  );
});
