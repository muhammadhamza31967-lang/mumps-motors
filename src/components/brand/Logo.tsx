import logo from "@/assets/mumps-motors-logo.png.asset.json";

export const logoUrl = logo.url;

export function Logo({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Mumps Motors logo"
      className={className}
      width={1920}
      height={686}
      decoding="async"
    />
  );
}