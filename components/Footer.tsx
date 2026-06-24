import Link from "next/link";
import { nav, primaryCta, site } from "@/content/site";
import { Wordmark } from "@/components/Wordmark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-x py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 font-mono text-sm text-muted">{site.tagline}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-muted transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h2 className="mono-label">Pages</h2>
              <ul className="mt-4 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mono-label">Connect</h2>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={site.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    Email
                  </a>
                </li>
                {site.social.github && (
                  <li>
                    <a
                      href={site.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      GitHub
                    </a>
                  </li>
                )}
                {site.social.linkedin && (
                  <li>
                    <a
                      href={site.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
                {site.social.instagram && (
                  <li>
                    <a
                      href={site.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      Instagram
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h2 className="mono-label">Start</h2>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link
                    href={primaryCta.href}
                    className="text-sm text-accent transition-colors hover:text-accent-dim"
                  >
                    {primaryCta.label} →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-faint">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-faint">
            Built by {site.name} <span className="text-accent">— barely.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
