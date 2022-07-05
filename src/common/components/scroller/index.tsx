import { FC, ReactNode } from "react";
import Scroll from "react-perfect-scrollbar";
import { useDispatch } from "react-redux";
import { setHeaderBorder } from "../../../setup/site-manager";
import { classNames } from "../../../utils";

type Props = {
    children: ReactNode;
    component?: string;
    className?: string;
};

const Scroller: FC<Props> = ({ component, className, children }) => {
    const dispatch = useDispatch();

    const onScroll = (e: any) => {
        if (e.currentTarget.scrollTop === 0 ?? e.currentTarget.scrollTop < 100) {
            dispatch(setHeaderBorder(false));
        } else {
            dispatch(setHeaderBorder(true));
        }
    };

    return (
        <Scroll
            onScroll={onScroll}
            component={component}
            className={classNames("overflow-x-hidden overflow-y-auto", className)}
        >
            {children}
        </Scroll>
    );
};

export default Scroller;
