import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(src: string) {
  if (src.startsWith("http")) return src;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${src.startsWith("/") ? "" : "/"}${src}`;
}
