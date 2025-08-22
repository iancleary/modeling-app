import React from "react";

import Header from "@/components/header";

export default function RfdLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center w-[90%] sm:w-[80%] lg:w-[70%] mx-auto max-w-screen-xl">
        <div className="font-sans overflow-hidden items-center justify-center">
          {children}
        </div>
      </main>
    </>
  );
}
