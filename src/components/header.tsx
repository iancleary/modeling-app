import * as React from "react";
import Link from "next/link";
import * as stylex from "@stylexjs/stylex";
import { colors, inlineFlex, size, spacing } from "../app/tokens.stylex";

const styles = stylex.create({
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    width: {
      default: "70%",
      "@media (max-width: 1200px)": "80%",
      "@media (max-width: 800px)": "80%",
    },
    justifyContent: "space-between",
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.8",
    display: "inline-flex",
    paddingLeft: spacing.medium,
    paddingRight: spacing.medium,
    overflow: "hidden",
    paddingTop: 16,
  },
  text: {
    color: colors.neutral100,
    fontSize: size.large,
  },
  icon: {
    color: colors.neutral100,
  },
  noDecoration: {
    textDecoration: "none",
  },
  start: {
    justifyContent: "start",
  },
  end: {
    justifyContent: "end",
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
});

function Header() {
  return (
    <nav {...stylex.props(styles.nav)}>
      <header {...stylex.props(styles.header)}>
        <Link href="/" {...stylex.props(styles.start, styles.icon)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Home</title>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </Link>
        <div {...stylex.props(styles.end)}>
          <div {...stylex.props(inlineFlex.columnGapMedium)}>
            <Link
              href="/rfd/0001"
              {...stylex.props(styles.text, styles.noDecoration)}
            >
              About
            </Link>
            {/* <Link href="/rfd/0001" {...stylex.props(styles.text)}>RFD 0001</Link> */}
          </div>
        </div>
      </header>
    </nav>
  );
}

export default Header;
