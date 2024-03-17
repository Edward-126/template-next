import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex h-dvh flex-col items-center justify-between px-5 py-10 md:col-span-9 md:px-10 md:py-10 xl:px-20 xl:py-20 2xl:px-28 2xl:py-28">
        <div className="flex w-full justify-center sm:justify-between">
          <div className="hidden items-center rounded-lg border bg-primary-foreground px-5 py-3 sm:flex">
            <h1 className="">
              Get started by editing&nbsp;
              <span className="font-mono font-semibold">app/page.tsx</span>
            </h1>
          </div>
          <div className=" flex items-center gap-2">
            By
            <a href="https://edward-hyde.vercel.app/">
              <Image
                src="./assets/sign.svg"
                alt="Edward Hyde"
                className="pointer-events-none h-14 w-full dark:invert"
                width={50}
                height={50}
                priority
              />
            </a>
          </div>
        </div>
        <div className="">
          <Image
            src="./assets/template-next.svg"
            alt="Edward Hyde"
            className="pointer-events-none h-16 w-full dark:invert sm:h-28"
            width={50}
            height={50}
            priority
          />
        </div>
        <div className="flex w-full flex-col justify-between text-center sm:flex-row sm:gap-8 lg:text-left">
          <a href="https://nextjs.org/docs" target="_blank">
            <div className=" group space-y-2 rounded-lg border border-transparent px-6 py-4 text-2xl font-medium transition-all duration-200 ease-in-out hover:border-border hover:bg-primary-foreground sm:max-w-sm">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <h1 className="">Next.js Docs</h1>
                <span className="inline-block transition-transform group-hover:translate-x-1 group-active:translate-x-0 motion-reduce:transform-none">
                  -&gt;
                </span>
              </div>
              <p className="text-base font-normal opacity-70">
                Official Next.js documentation.
              </p>
            </div>
          </a>

          <a
            href="https://nobs-docs.vercel.app/docs/Components"
            target="_blank"
          >
            <div className=" group space-y-2 rounded-lg border border-transparent px-6 py-4 text-2xl font-medium transition-all duration-200 ease-in-out hover:border-border hover:bg-primary-foreground sm:max-w-sm">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <h1 className="">Components</h1>
                <span className="inline-block transition-transform group-hover:translate-x-1 group-active:translate-x-0 motion-reduce:transform-none">
                  -&gt;
                </span>
              </div>
              <p className="text-base font-normal opacity-70">
                Custom components created by Edward.
              </p>
            </div>
          </a>

          <a href="https://github.com/Edward-126" target="_blank">
            <div className=" group space-y-2 rounded-lg border border-transparent px-6 py-4 text-2xl font-medium transition-all duration-200 ease-in-out hover:border-border hover:bg-primary-foreground sm:max-w-sm">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <h1 className="">Github</h1>
                <span className="inline-block transition-transform group-hover:translate-x-1 group-active:translate-x-0 motion-reduce:transform-none">
                  -&gt;
                </span>
              </div>
              <p className="text-base font-normal opacity-70">
                Visit the Github profile of Edward.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
