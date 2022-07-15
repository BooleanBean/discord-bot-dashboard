import { type ComponentPropsWithRef, forwardRef } from "react";

export type Props = ComponentPropsWithRef<"div">;

const DivTag: React.FC<Props> = forwardRef((props, ref) => (
  <div ref={ref} {...props} />
));

export default DivTag;
