import { footerLinks } from "@/lib/content";
import { SignupForm } from "./SignupForm";

export function Footer() {
  return (
    <footer className="border-t border-line bg-sand/50">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-4 py-14 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-16">
          <div className="lg:max-w-[520px] lg:flex-1">
            <SignupForm />
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[15px] font-semibold lg:flex-col lg:items-end">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="border-t border-line pt-6 font-mono text-xs text-muted">
          © 2026 Vikas Malik · Built with Claude Code ·{" "}
          <a href="/privacy" className="underline underline-offset-4">
            Privacy
          </a>
        </p>
      </div>
    </footer>
  );
}
