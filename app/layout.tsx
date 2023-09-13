import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import cover from "../public/assets/cover.png";
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <meta
        property="og:image"
        content={
          "https://res.cloudinary.com/practicaldev/image/fetch/s--iH-ctzLt--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sdkt1q9bfasatrg8d2g4.png"
        }
      />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-full" id="home">
            <Navbar />
            <main className="">{children}</main>
            <footer className="w-full flex items-center justify-center py-3 gap-2 h-[10vh]">
              <span className="text-default-600 text-xs sm:text-medium">
                Created by{" "}
              </span>
              <p className="text-primary text-xs sm:text-medium  font-bold">
                Khash-Erdene
              </p>
              <span className="text-default-600 text-xs sm:text-medium">
                © all right reserved {new Date().getFullYear()}
              </span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
