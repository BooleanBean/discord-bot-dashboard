import { createGlobalStyle } from "styled-components";
import tw, { theme } from "twin.macro";

const BaseStyle = createGlobalStyle({
  // default theme
  ":root": {
    "--background": theme("colors.black"),
    "--background-secondary": theme("colors.gray.800"),
    "--primary": theme("colors.white"),
    "--primary-light": theme("colors.gray.100"),
    "--primary-medium": theme("colors.gray.200"),
    "--primary-dark": theme("colors.gray.300"),
    "--secondary": theme("colors.black"),
    "--border": theme("colors.gray.800"),
    "--tw-color-primary-50": "250, 245, 255",
    "--tw-color-primary-100": "243, 232, 255",
    "--tw-color-primary-200": "233, 213, 255",
    "--tw-color-primary-300": "216, 180, 254",
    "--tw-color-primary-400": "192, 132, 252",
    "--tw-color-primary-500": "168, 85, 247",
    "--tw-color-primary-600": "147, 51, 234",
    "--tw-color-primary-700": "126, 34, 206",
    "--tw-color-primary-800": "107, 33, 168",
    "--tw-color-primary-900": "88, 28, 135",
    "--color-primary-50": "rgb(var(--tw-color-primary-50))" /* #faf5ff */,
    "--color-primary-100": "rgb(var(--tw-color-primary-100))" /* #f3e8ff */,
    "--color-primary-200": "rgb(var(--tw-color-primary-200))" /* #e9d5ff */,
    "--color-primary-300": "rgb(var(--tw-color-primary-300))" /* #d8b4fe */,
    "--color-primary-400": "rgb(var(--tw-color-primary-400))" /* #c084fc */,
    "--color-primary-500": "rgb(var(--tw-color-primary-500))" /* #a855f7 */,
    "--color-primary-600": "rgb(var(--tw-color-primary-600))" /* #9333ea */,
    "--color-primary-700": "rgb(var(--tw-color-primary-700))" /* #7e22ce */,
    "--color-primary-800": "rgb(var(--tw-color-primary-800))" /* #6b21a8 */,
    "--color-primary-900": "rgb(var(--tw-color-primary-900))" /* #581c87 */,
  },
  "html, body, #__next": {
    background: theme`colors.tw-background`,
    WebkitTapHighlightColor: theme`colors.primary.700`,
    ...tw`antialiased w-full min-h-full select-none`,
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
