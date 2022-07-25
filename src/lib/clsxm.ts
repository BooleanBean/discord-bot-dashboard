import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// TODO: refactor codes to twin.macro and remove clsx/clsxm from the project no need anymore
export default function clsxm(...classes: ClassValue[]) {
   return twMerge(clsx(...classes));
}
