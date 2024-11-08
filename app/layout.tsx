import type { Metadata } from "next";
import "./globals.css";
import { DM_Serif_Text, DM_Sans } from 'next/font/google'


export const metadata: Metadata = {
  title: "Cape Code Exterior Trim Inc.",
  description: "External railings and exterior trim. Serving the GTA for over 20 years.",
};

const titleFont = DM_Serif_Text({
  weight: "400", 
  subsets: ['latin'],
  style: 'normal',
  variable: '--title-font'
})

const bodyFont = DM_Sans({
  variable: "--body-font",
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${titleFont.variable} ${bodyFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
