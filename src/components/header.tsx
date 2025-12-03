import Link from "next/link";
import { UserNav } from "@/components/user-nav";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-auto flex items-center gap-2">
          <Logo className="h-6 w-auto text-primary" />
          <span className="font-bold text-lg">Teal Market</span>
        </Link>
        <UserNav />
      </div>
    </header>
  );
}
