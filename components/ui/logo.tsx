import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

export default function Logo({ className, isFooter = false }: LogoProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center pointer-events-none",
        className
      )}
    >
      <h1
        className={cn(
          "font-signature leading-none flex items-baseline gap-x-2 text-navy-deep dark:text-warm-white",
          isFooter ? "text-white text-4xl md:text-4xl" : "text-3xl md:text-4xl"
        )}
      >
        <span>Martín</span>
        <span>Quero</span>
        <span className="text-terracota font-sans text-4xl -ml-1.5">.</span>
      </h1>
      <p
        className={cn(
          "font-serif italic text-terracota tracking-wider leading-tight",
          isFooter
            ? "text-sm md:text-base mt-2 text-white"
            : "text-[10px] md:text-sm -mt-1"
        )}
      >
        Desarrollo personal aplicado
      </p>
    </div>
  );
}
