import type { Metadata } from "next";
import Link from "next/link";
import { links } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy · Vikas Malik",
  description: "How vikasmalik.com handles your data.",
  alternates: { canonical: "/privacy" },
};

// TODO: draft for Vikas to review before launch.
export default function Privacy() {
  return (
    <main className="mx-auto max-w-[720px] px-4 py-16 lg:px-8">
      <Link href="/" className="font-mono text-sm">
        ← Back to the trail
      </Link>
      <h1 className="mt-8 mb-2 font-display text-[clamp(40px,6vw,56px)] leading-[1.05] font-normal">
        Privacy <em className="text-green">notice</em>
      </h1>
      <p className="mb-10 font-mono text-xs text-muted">
        Last updated 15 October 2026
      </p>

      <div className="flex flex-col gap-8 text-[17px] leading-[1.7] text-ink-2">
        <section>
          <h2 className="mb-2 font-display text-[28px] leading-tight text-ink">
            Who I am
          </h2>
          <p>
            This site is run by Vikas Malik, based in the UK. I am the data
            controller for anything you send me through it. Questions:{" "}
            <a
              href={`mailto:${links.email}`}
              className="underline underline-offset-4"
            >
              {links.email}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-[28px] leading-tight text-ink">
            What I collect
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-ink">Email signup.</strong> If you
              subscribe to field notes, I store your email address with Kit, my
              email provider, so I can send you occasional updates. I use it for
              nothing else.
            </li>
            <li>
              <strong className="text-ink">Booking a call.</strong> If you book
              through Cal.com, the details you enter (name, email, anything you
              add) go to Cal.com and to me. Cal.com has its own privacy notice.
            </li>
            <li>
              <strong className="text-ink">Email.</strong> If you write to me, I
              keep the message and my reply so I can follow up.
            </li>
            <li>
              <strong className="text-ink">Visit statistics.</strong> I use
              Vercel Web Analytics to count page views. It does not use cookies
              and does not track you across sites, so there is no cookie banner.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="mb-2 font-display text-[28px] leading-tight text-ink">
            Why, and how long
          </h2>
          <p>
            I process signup details with your consent, and booking and email
            details to reply to you. I keep signup data until you unsubscribe,
            and booking or email details for as long as the conversation needs,
            then delete them.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-[28px] leading-tight text-ink">
            Your rights
          </h2>
          <p>
            Under UK GDPR you can ask to see, correct or delete your data,
            withdraw consent, or complain to the Information Commissioner&apos;s
            Office (ico.org.uk). Every email has an unsubscribe link, or just
            write to me.
          </p>
        </section>
        <section>
          <h2 className="mb-2 font-display text-[28px] leading-tight text-ink">
            Who else sees it
          </h2>
          <p>
            Only the services above: Kit (email signup), Cal.com, Vercel
            (hosting and analytics) and my email host. I do not sell your data.
          </p>
        </section>
      </div>
    </main>
  );
}
