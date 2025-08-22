import React from "react";

import Header from "@/components/header";
import DocsTable from "@/components/docsTable";
import RfdTable from "@/components/rfdTable";

import { docFilesFrontmatter, rfdFilesFrontmatter } from "./frontmatter";
// import { SessionProvider } from "next-auth/react";
export default async function Home() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center mx-auto max-w-screen-xl">
        <div className="font-sans overflow-hidden items-center w-[90%] sm:w-[80%] lg:w-[70%]">
          <RfdTable rfds={rfdFilesFrontmatter} />
          <DocsTable docs={docFilesFrontmatter} />
        </div>
      </main>
    </>
  );
}
