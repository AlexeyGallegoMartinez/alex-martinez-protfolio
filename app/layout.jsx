import Layout from "@/components/ui/Layout";
import { Providers } from "./providers";

export const metadata = {
  title: "Alex Portfolio",
  description: "Alexey Gallego Martinez Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
