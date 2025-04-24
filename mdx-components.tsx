import type { MDXComponents } from "mdx/types";

import React, { ComponentPropsWithoutRef } from "react";
import { Link } from "next-view-transitions";

import * as stylex from "@stylexjs/stylex";

// must be a relative path, aliases don't work with stylex (as of 2025-03-16)
import { colors, text, spacing } from "./src/app/tokens.stylex";

const styles = stylex.create({
  h1: {
    color: colors.neutral100,
    paddingTop: spacing.lg,
    fontSize: text.h1,
  },
  h2: {
    color: colors.neutral100,
    paddingTop: spacing.md,
    fontSize: text.h2,
  },
  h3: {
    color: colors.neutral100,
    paddingTop: spacing.sm,
    fontSize: text.h3,
  },
  h4: {
    color: colors.neutral100,
    paddingTop: spacing.sm,
    fontSize: text.h4,
  },
  h5: {
    color: colors.neutral100,
    fontSize: text.h5,
  },
  h6: {
    color: colors.neutral100,
    fontSize: text.p,
  },
  p: {
    color: colors.neutral100,
    lineHeight: text.p,
    paddingBlockStart: spacing.sm,
    paddingBlockEnd: spacing.sm,
    fontSize: text.p,
  },
  a: {
    color: colors.supportingPurple300,
  },
  ul: {
    color: colors.neutral100,
    fontSize: text.p,
  },
  li: {
    color: colors.neutral100,
    fontSize: text.p,
  },
  blockquote: {
    paddingInlineStart: spacing.md,
    borderInlineStartColor: colors.neutral700,
    borderInlineStartStyle: "solid",
    borderInlineStartWidth: "0.2rem",
  },
  code: {
    backgroundColor: colors.neutral900,
    color: colors.neutral200,
    // padding: spacing.xsmall,
  },
  preWrapper: {
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
  },
  pre: {
    backgroundColor: colors.neutral900,
    borderWidth: "0.1em",
    borderColor: colors.neutral600,
    borderStyle: "solid",
    borderRadius: spacing.sm,
    color: colors.neutral800,
    paddingTop: spacing.sm,
    paddingLeft: spacing.sm,
    paddingBottom: spacing.sm,
    // Allow horizontal scroll of child code block
    position: "relative",
    overflow: "auto",
  },
  b: {
    fontWeight: 800,
  },
  strong: {
    fontWeight: 800,
    // color: "red",
  },
  math: {
    color: colors.neutral100,
    fontSize: text.h5,
    paddingTop: spacing.sm,
  },
});

export function H1({ children, ...rest }: ComponentPropsWithoutRef<"h1">) {
  return <h1 {...stylex.props(styles.h1)}>{children}</h1>;
}

export function H2({ children, ...rest }: ComponentPropsWithoutRef<"h2">) {
  return <h2 {...stylex.props(styles.h2)}>{children}</h2>;
}

export function H3({ children, ...rest }: ComponentPropsWithoutRef<"h3">) {
  return <h3 {...stylex.props(styles.h3)}>{children}</h3>;
}

export function H4({ children, ...rest }: ComponentPropsWithoutRef<"h4">) {
  return <h4 {...stylex.props(styles.h4)}>{children}</h4>;
}

export function H5({ children, ...rest }: ComponentPropsWithoutRef<"h5">) {
  return <h5 {...stylex.props(styles.h5)}>{children}</h5>;
}

export function H6({ children, ...rest }: ComponentPropsWithoutRef<"h6">) {
  return <h6 {...stylex.props(styles.h6)}>{children}</h6>;
}

export function Paragraph({
  children,
  ...rest
}: ComponentPropsWithoutRef<"p">) {
  return <p {...stylex.props(styles.p)}>{children}</p>;
}

export function Blockquote({
  children,
  ...rest
}: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote {...stylex.props(styles.blockquote)}>{children}</blockquote>
  );
}

export function Ul({ children, ...rest }: ComponentPropsWithoutRef<"ul">) {
  return <ul {...stylex.props(styles.ul)}>{children}</ul>;
}

export function Li({ children, ...rest }: ComponentPropsWithoutRef<"li">) {
  return <li {...stylex.props(styles.li)}>{children}</li>;
}

export function Anchor({
  href,
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  if (href?.startsWith("/")) {
    return (
      <Link href={href} {...stylex.props(styles.a)} {...props}>
        {children}
      </Link>
    );
  }
  if (href?.startsWith("#")) {
    return (
      <a href={href} {...stylex.props(styles.a)} {...props}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...stylex.props(styles.a)}
      {...props}
    >
      {children}
    </a>
  );
}

export function Strong({
  children,
  ...rest
}: ComponentPropsWithoutRef<"strong">) {
  return <strong {...stylex.props(styles.strong)}>{children}</strong>;
}

export function Code({ children, ...rest }: ComponentPropsWithoutRef<"code">) {
  return <code {...stylex.props(styles.code)}>{children}</code>;
}

export function Pre({ children, ...rest }: ComponentPropsWithoutRef<"pre">) {
  return (
    <div {...stylex.props(styles.preWrapper)}>
      <pre {...stylex.props(styles.pre)}>{children}</pre>
    </div>
  );
}

export function Math({ children }: { children: React.ReactNode }) {
  //@ts-ignore
  return <math {...stylex.props(styles.math)}>{children}</math>;
}

const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  a: Anchor,
  ul: Ul,
  li: Li,
  blockquote: Blockquote,
  strong: Strong,
  code: Code,
  pre: Pre,
  math: Math,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
