import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { BackgroundPattern } from "~/components/background-pattern";
import { Footer } from "~/components/footer";
import { ThemeProvider } from "~/components/theme-provider";
import ThemeToggle from "~/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "David Ilie Redirect",
   description: "David Ilie Redirect",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={inter.className}>
            {children}
         </body>
      </html>
   );
   
   // return (
   //    <html lang="en" suppressHydrationWarning>
   //       <body className={inter.className}>
   //          <ThemeProvider>
   //             <ThemeToggle />
   //             <BackgroundPattern>
   //                {children}
   //                <Footer />
   //             </BackgroundPattern>
   //          </ThemeProvider>
   //       </body>
   //    </html>
   // );
}
