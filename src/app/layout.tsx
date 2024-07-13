import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Widget9 from "@/app/components/testing/Widget2"



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
   
        {/* <Widget1/> */}
        <Widget9/>
        
        {children}
        
        </body>
    </html>
  );
}
