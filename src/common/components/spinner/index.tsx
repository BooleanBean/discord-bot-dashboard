import type { FC } from "react";
import HashLoader from "react-spinners/HashLoader";

type Props = {
    isLoading: boolean;
    size: keyof typeof SpinnerSize;
};

enum SpinnerSize {
    xs = 20,
    sm = 30,
    md = 40,
    lg = 50,
    xl = 60
}

const Spinner: FC<Props> = ({ isLoading, size = "md" }) => {
    return <HashLoader color="white" loading={isLoading} size={SpinnerSize[size]} />;
};

export default Spinner;
