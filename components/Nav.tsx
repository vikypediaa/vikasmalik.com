import { nav } from "@/lib/content";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-bg/90 backdrop-blur">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-8">
        <nav
          aria-label="Main"
          className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-line py-4 lg:py-5"
        >
          <a
            href="#top"
            className="font-display text-[30px] leading-none !text-ink no-underline"
          >
            Vikas Malik
          </a>
          <div className="flex items-center gap-4 text-[15px] font-medium lg:gap-7">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hidden !text-[#3e443f] no-underline hover:!text-green sm:inline"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              className="rounded-full bg-green px-5 py-3 font-semibold !text-white no-underline hover:bg-green-hover"
            >
              Book a call
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
