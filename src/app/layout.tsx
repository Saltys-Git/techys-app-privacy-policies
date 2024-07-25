import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
    title: "Techy's App Privacy Policies",
    description: "This website serves to give clients a proper privacy policy for their apps.",
    metadataBase: new URL("https://app-privacy-policies.mytechys.co.uk"),
    keywords: ["Techy's App Privacy Policies", "Privacy policies for Techy's Apps"],
    openGraph: {
        description: "This website serves to give clients a proper privacy policy for their apps.",
    },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#28282E]"}>
        {children}
        {/* Separator */}
        <div className="bg-orange-500 h-0.5 w-full" />
        {/* Copyright and Social Media */}
        <div className="flex flex-row justify-center items-center w-full py-4 text-white">
            <p className="text-sm cursor-pointer">© Copyright 2024 | <a
                href="https://www.mytechys.co.uk" target="_blank" rel="noreferrer"
                className="font-bold">Techy&apos;s World Ltd.</a></p>
        </div>
      </body>
    </html>
  );
}
