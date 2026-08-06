import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { useQuote } from "@/components/QuoteModal";
import { site } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useQuote();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="bg-gradient-red fixed inset-x-0 top-0 z-[110] h-[3px] origin-left"
      />
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled ? "glass-strong py-2" : "bg-transparent py-4"
        }`}
      >
        <nav className="shell flex items-center justify-between gap-4">
          <Link to="/" aria-label="Mumps Motors home" className="shrink-0">
            <Logo className={`w-auto transition-all duration-500 ${scrolled ? "h-11" : "h-14"}`} />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative rounded-full px-5 py-2.5 text-[0.8rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-active"
                      className="bg-gradient-red absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full"
                    />
                  ) : null}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={site.phoneHref} className="btn-ghost !px-5 !py-2.5">
              <Phone className="size-4" />
              Call
            </a>
            <button onClick={open} className="btn-red !px-6 !py-3">
              Request Quote
            </button>
          </div>

          <button
            className="grid size-11 place-items-center rounded-full border border-white/12 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-[95] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="glass-strong relative flex flex-col gap-2 px-6 pb-10 pt-28"
            >
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.07 }}
                >
                  <Link
                    to={link.to}
                    className="block border-b border-white/8 py-4 font-display text-2xl font-semibold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                onClick={() => {
                  setMenuOpen(false);
                  open();
                }}
                className="btn-red mt-6 w-full"
              >
                Request Quote
              </motion.button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}