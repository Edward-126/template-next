import Link from "next/link";
import {
  ArrowRight,
  Code,
  Zap,
  Package,
  Layers,
  LucideFileCog,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen w-full flex-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="mx-auto flex max-w-[800px] flex-grow flex-col items-center justify-center px-4 md:px-6">
          <div className="flex flex-col items-center space-y-5 text-center sm:space-y-6">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Template-NEXT
            </h1>
            <p className="mx-auto max-w-prose text-base text-muted-foreground md:text-xl">
              A clean Next.js template with TypeScript, TailwindCSS, and
              Prettier. Optimized for quick project setup with handy packages.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:text-base"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-primary bg-background px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10 sm:text-base"
              >
                Changelog
                <LucideFileCog className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 rounded-full bg-secondary px-3 py-1 text-sm">
                <Code size={16} />
                <span>Next.js</span>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-secondary px-3 py-1 text-sm">
                <Code size={16} />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-secondary px-3 py-1 text-sm">
                <Package size={16} />
                <span>TailwindCSS</span>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-secondary px-3 py-1 text-sm">
                <Layers size={16} />
                <span>Shadcn/ui</span>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-secondary px-3 py-1 text-sm">
                <Zap size={16} />
                <span>Prettier</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-muted-foreground">
          Developed by{" "}
          <Link
            href="https://its-thilina.vercel.app/"
            className="transition-colors hover:text-primary"
          >
            Thilina Rathnayaka (A.K.A Edward Hyde)
          </Link>
        </div>
      </section>
    </>
  );
}
