import "../[lng]/globals.css";

export const metadata = {
  title: "Alex Portfolio",
  description: "Alexey Gallego Martinez Personal Portfolio",
};

export default function RootRedirectLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-950">
        {children}
      </body>
    </html>
  );
}
