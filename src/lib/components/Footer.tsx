import { BsDiscord, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import "twin.macro";

import UnderlineLink from "#/lib/components/links/UnderlineLink";
import UnstyledLink from "#/lib/components/links/UnstyledLink";
import { Container } from "#/lib/components/StyledComponents";

export default function Footer() {
   return (
      <footer tw="bg-tw-secondary">
         <Container tw="space-y-14 py-16">
            <div tw="sm:flex sm:items-center sm:justify-between">
               <h3>Discord Bot</h3>

               <div tw="mt-8 flex space-x-6 sm:mt-0">
                  <UnstyledLink
                     tw="transition-opacity duration-200 ease-out hover:opacity-75"
                     href=""
                     target="_blank"
                     rel="noreferrer"
                  >
                     <span tw="sr-only"> Instagram </span>

                     <BsInstagram tw="h-6 w-6" />
                  </UnstyledLink>

                  <UnstyledLink
                     tw="transition-opacity duration-200 ease-out hover:opacity-75"
                     href=""
                     target="_blank"
                     rel="noreferrer"
                  >
                     <span tw="sr-only">Twitter</span>

                     <BsTwitter tw="h-6 w-6" />
                  </UnstyledLink>

                  <UnstyledLink
                     tw="transition-opacity duration-200 ease-out hover:opacity-75"
                     href=""
                     target="_blank"
                     rel="noreferrer"
                  >
                     <span tw="sr-only">Discord</span>

                     <BsDiscord tw="h-6 w-6" />
                  </UnstyledLink>

                  <UnstyledLink
                     tw="transition-opacity duration-200 ease-out hover:opacity-75"
                     href=""
                     target="_blank"
                     rel="noreferrer"
                  >
                     <span tw="sr-only"> GitHub </span>

                     <BsGithub tw="h-6 w-6" />
                  </UnstyledLink>
               </div>
            </div>

            <hr tw="border-gray-800" />

            <div tw="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
               <div>
                  <h6 tw="font-bold uppercase text-primary-500 text-xs">Company</h6>

                  <nav tw="mt-4 inline-flex flex-col space-y-2">
                     <UnderlineLink href="/about">About</UnderlineLink>
                     <UnderlineLink href="/team">Meet the Team</UnderlineLink>
                     <UnderlineLink href="/history">History</UnderlineLink>
                  </nav>
               </div>

               <div>
                  <h6 tw="font-bold uppercase text-primary-500 text-xs">Discord Bot</h6>

                  <nav tw="mt-4 inline-flex flex-col space-y-2">
                     <UnderlineLink href="/premium">Premium</UnderlineLink>
                     <UnderlineLink href="/self-host">Self Host</UnderlineLink>
                     <UnderlineLink href="/other">Other</UnderlineLink>
                  </nav>
               </div>

               <div>
                  <h6 tw="font-bold uppercase text-primary-500 text-xs">
                     Helpfull Links
                  </h6>

                  <nav tw="mt-4 inline-flex flex-col space-y-2">
                     <UnderlineLink href="/support-center">Support Center</UnderlineLink>
                     <UnderlineLink href="/faqs">FAQs</UnderlineLink>
                  </nav>
               </div>

               <div>
                  <h6 tw="font-bold uppercase text-primary-500 text-xs">Legal</h6>

                  <nav tw="mt-4 inline-flex flex-col space-y-2">
                     <UnderlineLink href="/privacy-policy">Privacy Policy</UnderlineLink>
                     <UnderlineLink href="/terms-and-conditions">
                        Terms & Conditions
                     </UnderlineLink>
                     <UnderlineLink href="/returns-policy">Returns Policy</UnderlineLink>
                     <UnderlineLink href="/accessibility">Accessibility</UnderlineLink>
                  </nav>
               </div>
            </div>

            <p tw="text-xs">&copy; {new Date().getFullYear()} BooleanBean</p>
         </Container>
      </footer>
   );
}
