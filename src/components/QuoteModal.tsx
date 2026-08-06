import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { buildWhatsAppUrl, serviceNames } from "@/lib/site";
import { Logo } from "@/components/brand/Logo";

type QuoteContextValue = { open: () => void; close: () => void };
const QuoteContext = createContext<QuoteContextValue>({ open: () => {}, close: () => {} });

export function useQuote() {
  return useContext(QuoteContext);
}

const fieldBase =
  "w-full rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/70 focus:bg-white/8 focus:ring-2 focus:ring-primary/25";

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open, close }), [open, close]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "");
    const url = buildWhatsAppUrl("New Quote Request", [
      ["Full Name", get("name")],
      ["Phone Number", get("phone")],
      ["Email Address", get("email")],
      ["Vehicle Make", get("make")],
      ["Vehicle Model", get("model")],
      ["Registration Number", get("reg")],
      ["Service Required", get("service")],
      ["Preferred Booking Date", get("date")],
      ["Additional Information", get("notes")],
    ]);
    window.open(url, "_blank", "noopener,noreferrer");
    close();
  }

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto p-4 py-10 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
              onClick={close}
              aria-hidden
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Request a quote"
              className="glass relative w-full max-w-2xl rounded-3xl p-6 shadow-[var(--shadow-luxe)] sm:p-9"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={close}
                aria-label="Close quote form"
                className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-white/12 text-muted-foreground transition hover:border-primary/60 hover:text-foreground"
              >
                <X className="size-4" />
              </button>
              <Logo className="h-9 w-auto" />
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Request a Free Quote</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Send us your vehicle details and we&apos;ll reply on WhatsApp with a tailored quote.
              </p>
              <form onSubmit={handleSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Full Name" className={fieldBase} />
                <input name="phone" required placeholder="Phone Number" className={fieldBase} />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className={`${fieldBase} sm:col-span-2`}
                />
                <input name="make" required placeholder="Vehicle Make" className={fieldBase} />
                <input name="model" required placeholder="Vehicle Model" className={fieldBase} />
                <input
                  name="reg"
                  placeholder="Registration Number (Optional)"
                  className={fieldBase}
                />
                <select name="service" required defaultValue="" className={fieldBase}>
                  <option value="" disabled>
                    Service Required
                  </option>
                  {serviceNames.map((service) => (
                    <option key={service} value={service} className="bg-surface">
                      {service}
                    </option>
                  ))}
                </select>
                <label className="sm:col-span-2 grid gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Preferred Booking Date
                  <input name="date" type="date" className={fieldBase} />
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  placeholder="Additional Information"
                  className={`${fieldBase} sm:col-span-2 resize-none`}
                />
                <button
                  type="submit"
                  className="sm:col-span-2 mt-1 rounded-xl bg-[var(--gradient-red)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition hover:brightness-110 hover:shadow-[var(--shadow-glow)]"
                >
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </QuoteContext.Provider>
  );
}