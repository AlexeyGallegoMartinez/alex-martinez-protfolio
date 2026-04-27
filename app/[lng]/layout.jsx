import "./globals.css";

import Layout from "@/components/ui/layout";
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
    <html lang={lng} className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-950">
        <Providers>
          <div className="flex w-full">
            <Layout lng={lng}>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
