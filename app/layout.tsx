import "../styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "../config/site";
import { fontSans } from "../config/fonts";
import { Providers } from "./providers";
import { Navbar } from "../components/navbar";
import clsx from "clsx";
import Footer from "../components/footer";
export const metadata: Metadata = {
  metadataBase: new URL("https://khasherdene.vercel.app"),
  openGraph: {
    images: ["/assets/cover.png"],
  },
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
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-full" id="home">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
