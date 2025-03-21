/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

import "./app.css";
import { globalTokens as $ } from "@/app/globalTokens.stylex";
import { colors, size } from "./tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "RFDs & Docs - Ian Cleary",
  description: "Copyright Ian Cleary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html {...stylex.props(styles.html)} lang="en">
        <body {...stylex.props(styles.body)}>
          <div {...stylex.props(styles.decorum)} />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}

const DARK = "@media (prefers-color-scheme: dark)";

const styles = stylex.create({
  html: {
    // colorScheme: 'light dark',
    // backgroundColor: colors.neutral100,
  },
  body: {
    // color: `rgba(${$.foregroundR}, ${$.foregroundG}, ${$.foregroundB}, 1)`,
    color: colors.neutral50,
    backgroundColor: colors.neutral950,
    // backgroundImage: {
    //   default: "linear-gradient(to bottom, rgb(214, 219, 220), white)",
    //   [DARK]: "linear-gradient(to bottom, rgb(20, 22, 27), black)",
    // },
  },
  decorum: {
    // https://github.com/clearlysid/tauri-plugin-decorum/blob/278e34378116ea80f7b6176ae85cf6aa26c631eb/src/js/titlebar.js#L10-L33
    backgroundColor: colors.neutral900,
    height: "32px", // matches https://docs.rs/crate/tauri-plugin-decorum/1.1.1 height
  },
  errorBoundary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: size.medium,
  },
});
