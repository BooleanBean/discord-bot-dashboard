import Link, { LinkProps } from "next/link";
import type { FC, ReactNode } from "react";
import { getIcon, IconStrings } from "../../../../utils/icons";

type Props = LinkProps & {
    children: ReactNode;
    leftIcon?: IconStrings;
    rightIcon?: IconStrings;
};

const UnstyledLink: FC<Props> = ({ leftIcon, rightIcon, children, ...props }) => {
    return (
        <Link {...props}>
            <a className="text-lg flex items-center">
                {leftIcon && <div className="w-7 h-7">{getIcon(leftIcon)}</div>}
                {children}
                {rightIcon && <div className="w-7 h-7">{getIcon(rightIcon)}</div>}
            </a>
        </Link>
    );
};

export default UnstyledLink;
