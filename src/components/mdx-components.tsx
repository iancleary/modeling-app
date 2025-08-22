import React, { ComponentPropsWithoutRef } from "react";
import { Link } from "next-view-transitions";
import { Pre } from "./pre-with-copy-to-clipboard";

export function H1({ children, ...rest }: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1 className="text-foreground pt-6 pb-6 text-3xl font-bold" {...rest}>
      {children}
    </h1>
  );
}
export function H2({ children, ...rest }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 className="text-foreground pt-6 pb-6 text-2xl font-bold" {...rest}>
      {children}
    </h2>
  );
}

export function H3({ children, ...rest }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3 className="text-foreground pt-4 pb-4 text-xl font-bold" {...rest}>
      {children}
    </h3>
  );
}

export function H4({ children, ...rest }: ComponentPropsWithoutRef<"h4">) {
  return (
    <h4 className="text-foreground pt-4 pb-4 text-lg font-bold" {...rest}>
      {children}
    </h4>
  );
}

export function H5({ children, ...rest }: ComponentPropsWithoutRef<"h5">) {
  return (
    <h5 className="text-foreground text-md font-bold" {...rest}>
      {children}
    </h5>
  );
}

export function H6({ children, ...rest }: ComponentPropsWithoutRef<"h6">) {
  return (
    <h6 className="text-foreground text-base font-bold" {...rest}>
      {children}
    </h6>
  );
}

export function Paragraph({
  children,
  ...rest
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p className="text-foreground leading-8 text-[1.1rem] py-2" {...rest}>
      {children}
    </p>
  );
}

export function Blockquote({
  children,
  ...rest
}: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote className="pl-6 pr-6 border-l-4 border-neutral-500 bg-sidebar-accent py-4 mt-4 mb-4" {...rest}>
      <svg
        className="text-foreground h-4 w-4 mr-4 inline-block align-middle"
        stroke="currentColor"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
      </svg>
      {children}
    </blockquote>
  );
}

export function WarningBlockquote({
  children,
  ...rest
}: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote className="pl-6 pr-6 border-l-4 border-neutral-500 bg-background py-4 mt-4" {...rest}>
      <svg
        className="text-yellow-500 h-4 w-4 mr-4 inline-block align-middle"
        stroke="currentColor"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
      </svg>
      {children}
    </blockquote>
  );
}

export function Ul({ children, ...rest }: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul className="text-foreground list-disc pl-6 py-2" {...rest}>
      {children}
    </ul>
  );
}

export function Li({ children, ...rest }: ComponentPropsWithoutRef<"li">) {
  return (
    <li className="text-foreground" {...rest}>
      {children}
    </li>
  );
}

export function Anchor({
  href,
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  const baseClass = "text-purple-800 dark:text-purple-400 underline";
  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={baseClass} {...props}>
        {children}
      </Link>
    );
  }
  if (href?.startsWith("#")) {
    return (
      <a href={href} className={baseClass} {...props}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClass}
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
  return (
    <strong className="font-extrabold" {...rest}>
      {children}
    </strong>
  );
}

export function Code({ children, ...rest }: ComponentPropsWithoutRef<"code">) {
  return (
    <code {...rest}>
      {children}
    </code>
  );
}

export function Math({ children }: {children: React.ReactNode}) {
  // @ts-expect-error -- math is not a standard HTML element
  return <math className="text-foreground px-2 py-1 rounded">{children}</math>;
}

export function Table({ children }: ComponentPropsWithoutRef<"table">) {
  return <table className="w-full border-collapse border border-neutral-700 my-4">{children}</table>;
}

export function Th({ children }: ComponentPropsWithoutRef<"th">) {
  return <th className="bg-background text-foreground font-bold px-4 py-2 border border-neutral-700">{children}</th>;
}

export function Td({ children }: ComponentPropsWithoutRef<"td">) {
  return <td className="bg-background text-foreground px-4 py-2 border border-neutral-700">{children}</td>;
}

export function Hr() {
  return <hr className="my-8 border-neutral-700" />;
}

export const mdxComponents = {
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
  warningBlockquote: WarningBlockquote,
  strong: Strong,
  code: Code,
  pre: Pre,
  math: Math,
  table: Table,
  th: Th,
  td: Td,
  hr: Hr,
};
