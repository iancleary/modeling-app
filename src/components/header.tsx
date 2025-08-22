import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <nav className="flex items-center justify-center w-full">
      <header
        className="w-[90%] justify-between font-sans leading-7 inline-flex overflow-hidden py-4
        max-w-screen-xl
        "
      >
        <Link href="/" className="flex justify-start text-foreground">
          <Button variant="outline">
            <Home className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
          </Button>
        </Link>
        <div className="flex justify-end">
          <div className="inline-flex gap-4">
            <Link
              href="/rfd/0001"
              className="text-foreground text-xl flex items-center no-underline"
            >
              About
            </Link>
            <ModeToggle />
            {/* <Link href="/rfd/0001" className="text-foreground text-lg">RFD 0001</Link> */}
          </div>
        </div>
      </header>
    </nav>
  );
}

export default Header;
