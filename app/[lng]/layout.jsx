import Layout from "@/components/ui/layout";
import { LangAttribute } from "@/components/ui/lang-attribute";
import { languages } from "../i18n/settings";
import { Providers } from "../providers";

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
    <Providers>
      <LangAttribute lng={lng} />
      <div className="flex w-full">
        <Layout lng={lng}>{children}</Layout>
      </div>
    </Providers>
  );
}
