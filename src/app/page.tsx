"use client";

import React from "react";
import { useEffect } from "react";

import Header from "@/components/header";
import DocsTable from "@/components/docsTable";
import RfdTable from "@/components/rfdTable";
import { invoke } from "@tauri-apps/api/core";

import { docFilesFrontmatter, rfdFilesFrontmatter } from "./frontmatter";

export default function Home() {
  useEffect(() => {
    invoke("show_main_window");
  }, []);

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
