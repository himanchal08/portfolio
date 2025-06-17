import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal Portfolio",
  description: "Himanachal is a Freelancer based in India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.className} bg-gray-50 
      text-gray-950 relative
      pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[20rem] w-[20rem] xs:h-[28rem] xs:w-[28rem] sm:h-[31.25rem] sm:w-[31.25rem] rounded-full blur-[8rem] sm:blur-[10rem] md:w-[40rem] md:h-[40rem] lg:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-20rem] h-[20rem] w-[30rem] xs:h-[28rem] xs:w-[40rem] sm:h-[31.25rem] sm:w-[50rem] rounded-full blur-[8rem] sm:blur-[10rem] md:left-[-33rem] md:w-[50rem] md:h-[31.25rem] lg:left-[-28rem] lg:w-[68.75rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="bottom-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
