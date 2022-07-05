import type { FC, ReactNode } from "react";
import { classNames } from "../../../../utils";

type PrimaryBadgeProps = {
    children: ReactNode;
    className?: string;
};

const PrimaryBadge: FC<PrimaryBadgeProps> = ({ children, className }) => {
    return (
        <span
            className={classNames(
                "bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800",
                className
            )}
        >
            {children}
        </span>
    );
};

export default PrimaryBadge;
