'use client'
import { ReactNode } from "react";
import { name } from "tailwindcss";


interface Props {
    children: ReactNode;
    type?: string;
    name: string;
    buttonClick?: () => any;
}


export default function Button({children, type, name, buttonClick} : Props) {
  let classes = ""
  switch (type) {
    case "clear":
      classes = "text-2xl text-cyan-500 w-16 h-16 mt-3 flex justify-center items-center bg-gradient-to-b from-zinc-900 to-zinc-800 rounded-full shadow-3d-sm"
      break;
    case "operator":
      classes = "text-2xl text-slate-200 w-16 h-16 mt-3 flex justify-center items-center bg-gradient-to-b from-cyan-800 to-cyan-700 rounded-full shadow-3d-sm"
      break;
    case "equals":
      classes = "text-2xl text-slate-200 w-16 h-16 mt-3 flex justify-center items-center bg-gradient-to-b from-cyan-600 to-cyan-500 rounded-full shadow-3d-sm"
      break;
  
    default:
      classes = "text-2xl text-slate-200 w-16 h-16 mt-3 flex justify-center items-center bg-gradient-to-b from-zinc-900 to-zinc-800 rounded-full shadow-3d-sm"
      break;
  }
  return (
    <button className={classes} name={name} onClick={buttonClick}>{children}</button>
  );
}
