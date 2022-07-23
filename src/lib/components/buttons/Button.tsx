import React from "react";
import { ImSpinner3 } from "react-icons/im";
import twM from "twin.macro";

enum ButtonVariant {
   "primary",
   "outline",
   "ghost",
   "light",
   "dark",
}

type ButtonProps = {
   children: React.ReactNode;
   isLoading?: boolean;
   variant?: keyof typeof ButtonVariant;
   isDarkBg?: boolean;
   disabled?: boolean;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   (
      {
         children,
         isLoading,
         variant = "primary",
         isDarkBg = false,
         tw,
         disabled: buttonDisabled,
         ...rest
      },
      ref
   ) => {
      const disabled = isLoading || buttonDisabled;

      return (
         <button
            ref={ref}
            type="button"
            disabled={disabled}
            css={[
               twM`inline-flex items-center rounded-lg px-4 py-2 font-semibold shadow-sm transition-colors duration-200 ease-out disabled:cursor-not-allowed`,
               // variants start
               variant === "primary" &&
                  twM`bg-primary-500 text-white border border-primary-600 hover:bg-primary-600 hover:text-white active:bg-primary-500 disabled:bg-primary-400 disabled:hover:bg-primary-400`,
               variant === "outline" &&
                  twM`text-primary-500 border border-primary-500 hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100`,
               variant === "ghost" &&
                  twM`text-primary-500 shadow-none hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100`,
               variant === "light" &&
                  twM`bg-white text-dark border border-gray-300 hover:bg-gray-100 hover:text-dark active:bg-white/80 disabled:bg-gray-200`,
               variant === "dark" &&
                  twM`bg-gray-900 text-white border border-gray-600 hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700`,
               // variants end
               isDarkBg && twM`hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800`,
               isLoading &&
                  twM`relative text-transparent transition-none hover:text-transparent disabled:cursor-wait`,
               tw,
            ]}
            {...rest}
         >
            {isLoading && (
               <div
                  css={[
                     twM`absolute`,
                     ["primary", "dark"].includes(variant) && twM`text-white`,
                     ["light"].includes(variant) && twM`text-black`,
                     ["outline", "ghost"].includes(variant) && twM`text-primary-500`,
                  ]}
               >
                  <ImSpinner3 tw="animate-spin" />
               </div>
            )}
            {children}
         </button>
      );
   }
);

export default Button;
