import type { FC } from "react";
import HashLoader from "react-spinners/HashLoader";
import { LoaderSizeProps } from "react-spinners/helpers/props";

type Props = LoaderSizeProps & {
    size: keyof typeof SpinnerSize;
};

enum SpinnerSize {
    xs = 20,
    sm = 30,
    md = 40,
    lg = 50,
    xl = 60
}

const Spinner: FC<Props> = ({ size = "md" }) => {
    return <HashLoader color="white" size={SpinnerSize[size]} children="data loaded" />;
};

export default Spinner;
