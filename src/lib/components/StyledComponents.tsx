import twM, { styled } from "twin.macro";

export type ContainerProps = {
   centered?: boolean;
};

export const Container = styled.div<ContainerProps>(({ centered = true, tw }) => [
   twM`container`,
   centered && twM`mx-auto`,
   tw,
]);
