import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"KNIGHT — Terraform Quest", description:"Interactive Terraform and DevSecOps learning simulator" };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
