import type { ComponentProps, ElementType } from "react";

import clsxm from "#/lib/clsxm";

import DivTag, { type Props as DivTagProps } from "#/tags/DivTag";

// TODO: find a solution to fix types
type Props<T extends ElementType> = ComponentProps<T> & {
  centered?: boolean;
  className?: string;
  as?: T;
};

export default function Container<
  T extends ElementType = ElementType<DivTagProps>
>({ as, centered, className, ...rest }: Props<T>) {
  const Component = as || DivTag;

  return (
    <Component
      {...rest}
      className={clsxm("container", centered ?? "mx-auto", className)}
    />
  );
}
