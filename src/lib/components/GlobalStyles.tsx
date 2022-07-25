import { createGlobalStyle } from "styled-components";
import tw, { theme } from "twin.macro";

const BaseStyle = createGlobalStyle({
   "html, body, #__next": {
      WebkitTapHighlightColor: theme`colors.primary.700`,
      ...tw`antialiased w-full h-full min-h-full select-none`,
   },
   ".cursor-newtab": {
      cursor: 'url("/images/new-tab.png") 10 10, pointer',
   },
});

export default function GlobalStyles() {
   return (
      <>
         <BaseStyle />
      </>
   );
}
