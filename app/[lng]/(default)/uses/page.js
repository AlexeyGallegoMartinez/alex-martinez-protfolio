import { Header } from "@/components/ui/header";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Uses – Alex Martinez",
  description: "Software and gear I use.",
};

export default function UsesPage() {
  return (
    <>
      <Header />
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software and gear I use.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Uses page coming soon.
          </p>
        </header>
      </Container>
    </>
  );
}
