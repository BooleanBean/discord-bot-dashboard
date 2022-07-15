import { type ComponentPropsWithRef, forwardRef } from "react";

type Props = ComponentPropsWithRef<"main">;

const MainTag: React.FC<Props> = forwardRef((props, ref) => (
  <main ref={ref} {...props} />
));

export default MainTag;
