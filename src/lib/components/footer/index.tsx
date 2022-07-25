import { BsDiscord, BsGithub, BsInstagram } from "react-icons/bs";
import "twin.macro";

import { Container } from "#components/StyledComponents";

import FooterIcon from "./FooterIcon";
import FooterNavigation from "./FooterNavigation";

export default function Footer() {
   return (
      <footer tw="bg-tw-background-secondary">
         <Container tw="py-16">
            <div tw="sm:flex sm:items-center sm:justify-between">
               <h3>Discord Bot</h3>

               <div tw="mt-6 flex space-x-6 sm:mt-0">
                  <FooterIcon href="/" icon={<BsInstagram tw="h-6 w-6" />}>
                     Instagram
                  </FooterIcon>
                  <FooterIcon href="/" icon={<BsDiscord tw="h-6 w-6" />}>
                     Discord
                  </FooterIcon>
                  <FooterIcon href="/" icon={<BsGithub tw="h-6 w-6" />}>
                     Github
                  </FooterIcon>
               </div>
            </div>

            <hr tw="border-tw-border my-12" />

            <div tw="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
               <FooterNavigation
                  category="Company"
                  items={[
                     { href: "/about-us", children: "About Us" },
                     { href: "/meet-the-team", children: "Meet the Team" },
                     { href: "/history", children: "History" },
                  ]}
               />

               <FooterNavigation
                  category="Discord Bot"
                  items={[
                     { href: "/premium", children: "Premium" },
                     { href: "/self-host", children: "Self Host" },
                     { href: "/other", children: "Other" },
                  ]}
               />

               <FooterNavigation
                  category="Helpfull Links"
                  items={[
                     { href: "/help-center", children: "Help Center" },
                     { href: "/faqs", children: "FAQs" },
                     { href: "/history", children: "History" },
                  ]}
               />

               <FooterNavigation
                  category="Legal"
                  items={[
                     { href: "/privacy-policy", children: "Privacy Policy" },
                     { href: "/terms-and-conditions", children: "Terms & Conditions" },
                     { href: "/returns-policy", children: "Returns Policy" },
                     { href: "/accessibility", children: "Accessibility" },
                  ]}
               />
            </div>

            <small tw="block mt-12">&copy; {new Date().getFullYear()} BooleanBean</small>
         </Container>
      </footer>
   );
}
