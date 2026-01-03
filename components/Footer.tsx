import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-extrabold tracking-wide">
            ELEV8
          </h3>
          <p className="mt-4 text-sm text-[var(--color-muted)] max-w-xs">
            Personal coaching & body transformation programs focused on
            discipline, performance, and long-term results.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-[var(--color-muted)]">
            <li>
              <Link href="/about" className="hover:text-[var(--color-foreground)]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[var(--color-foreground)]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--color-foreground)]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-sm text-[var(--color-muted)]">
            <li>Personal Training</li>
            <li>Body Transformation</li>
            <li>Online Coaching</li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>

          <div className="flex gap-4 mb-6">
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:info@elev8performance.com"
              aria-label="Email"
              className="p-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-sm text-[var(--color-muted)]">
            Email: info@elev8performance.com
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-muted)]">
          <span>
            © {new Date().getFullYear()} ELEV8 Performance. All rights reserved.
          </span>

          <span>
            Designed & Developed with discipline 💪
          </span>
        </div>
      </div>
    </footer>
  );
}
