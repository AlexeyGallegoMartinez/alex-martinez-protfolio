import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { fallbackLng } from "@/app/i18n/settings";
import { getSiteCopy } from "@/lib/site-copy";

export default function NotFound({ params }) {
  const lng = params?.lng ?? fallbackLng;
  const copy = getSiteCopy(lng).notFound;

  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {copy.title}
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          {copy.description}
        </p>
        <Button href={`/${lng}`} variant="secondary" className="mt-4">
          {copy.action}
        </Button>
      </div>
    </Container>
  );
}
