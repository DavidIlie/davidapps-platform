"use client";

import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "~/components/ui/tooltip";
import { Discord, GitHub, Twitter, YouTube } from "./ui/icons";

export const Socials: React.FC<{
   font: string | number;
   invisible?: boolean;
}> = ({ font, invisible = false }) => {
   return (
      <div
         className={`mt-2 flex justify-center gap-8 text-black dark:text-white ${
            invisible ? "invisible" : "visible"
         }`}
      >
         <SocialIcon
            tooltip="DavidIlie"
            newPage
            link="https://github.com/davidilie"
         >
            <GitHub
               className="mb-1"
               size={font !== undefined ? `${font}em` : "1.75em"}
            />
         </SocialIcon>
         <SocialIcon tooltip="albastru#0922" notLink>
            <Discord size={font !== undefined ? `${font}em` : "1.75em"} />
         </SocialIcon>
         <SocialIcon
            tooltip="David Ilie"
            newPage
            link="https://www.youtube.com/channel/UC92hn9Y8WcY_5LribMDW8uA"
         >
            <YouTube
               className="mb-1"
               size={font !== undefined ? `${font}em` : "1.75em"}
            />
         </SocialIcon>
         <SocialIcon
            tooltip="MrDavidIlie"
            newPage
            link="https://twitter.com/MrDavidIlie"
         >
            <Twitter size={font !== undefined ? `${font}em` : "1.75em"} />
         </SocialIcon>
      </div>
   );
};

export const SocialIcon: React.FC<
   Partial<{
      children: React.ReactNode;
      tooltip: string;
      newPage: boolean;
      link: string;
      notLink: boolean;
   }>
> = ({ children, tooltip, newPage, link, notLink }) => {
   return (
      <div className="cursor-pointer">
         <TooltipProvider>
            <Tooltip>
               <TooltipTrigger>
                  {" "}
                  {!notLink ? (
                     <a
                        href={link}
                        target={newPage ? "_blank" : ""}
                        rel="noreferrer"
                        className="duration-250 hover:text-blue-100"
                        aria-label={`Social link: ${tooltip}`}
                     >
                        {children}
                     </a>
                  ) : (
                     <span
                        className="duration-250 hover:text-blue-100"
                        //    onClick={() => clipboard.copy(tooltip)}
                     >
                        {children}
                     </span>
                  )}
               </TooltipTrigger>
               <TooltipContent>
                  <p>{tooltip}</p>
               </TooltipContent>
            </Tooltip>
         </TooltipProvider>
      </div>
   );
};
