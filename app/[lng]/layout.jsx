import "./globals.css";
import AOSInitializer from "@/components/ui/aos-initializer";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

export const metadata = {
  title: "Alex Site",
  description: "Alexey Personal Website Portfolio",
  // icons: {
  //   icon: "/icon.png", // Path to your favicon in the public folder
  // },
};
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function LangLayout({ children, params }) {
  const { lng } = await params;
  return (
    <>
      {children}
      {/* <AOSInitializer /> */}
    </>
  );
}
