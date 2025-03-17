"use client";

import React from "react";
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import stylex from "@stylexjs/stylex";

import Header from "@/components/header";
import DocsTable from "@/components/docsTable";
import RfdTable from "@/components/rfdTable";

import { colors } from "./tokens.stylex";

import { docFilesFrontmatter, rfdFilesFrontmatter } from "./frontmatter";

export default function Home() {
  useEffect(() => {
    invoke("show_main_window");
  }, []);

  return (
    <>
      <Header />
      <main {...stylex.props(styles.main)}>
        <div {...stylex.props(styles.content)}>
          {/* <p {...stylex.props(styles.text)}>
            {JSON.stringify(rfdFilesFrontmatter)}
          </p>
          <p {...stylex.props(styles.text)}>
            {JSON.stringify(docFilesFrontmatter)}
          </p> */}
          <RfdTable rfds={rfdFilesFrontmatter} />
          <DocsTable docs={docFilesFrontmatter} />
        </div>
      </main>
    </>
  );
}

const styles = stylex.create({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  content: {
    fontFamily: "system-ui, sans-serif",
    overflow: "hidden",

    width: {
      "@media (max-width: 1400px)": "90%",
      default: "60%",
    },
    paddingBlockStart: {
      default: 16,
      "@media (min-width: 800px)": 32,
    },
    paddingBlockEnd: {
      default: 16,
      "@media (min-width: 800px)": 32,
    },
  },
  text: {
    color: colors.neutral100,
  },
});

const MEDIA_MOBILE = "@media (max-width: 700px)" as const;
const MEDIA_TABLET =
  "@media (min-width: 701px) and (max-width: 1120px)" as const;
