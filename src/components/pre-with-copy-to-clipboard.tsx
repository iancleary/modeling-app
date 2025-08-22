"use client";

import React, { ComponentPropsWithoutRef } from "react";

// interface ICopyToClipboard {
//   children: React.ReactChild;
// }

function ClipboardIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5 text-foreground m-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
      />
    </svg>
  );
}

function CheckedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3.5}
      stroke="currentColor"
      className="h-5 w-5 text-green-500 m-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

export function Pre({ children }: ComponentPropsWithoutRef<"pre">) {
  const textInput = React.useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const onEnter = () => {
    setHovered(true);
  };

  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };

  const onCopy = () => {
    setCopied(true);
    if (textInput.current !== null && textInput.current.textContent !== null)
      navigator.clipboard.writeText(textInput.current.textContent);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="relative h-full pt-4 pb-4">
      <div
        ref={textInput}
        onMouseEnter={onEnter}
        onMouseLeave={onExit}
        className="relative top-0 left-0 h-full"
      >
        {hovered && (
          <button
            aria-label="Copy code"
            type="button"
            onClick={onCopy}
            className="absolute top-1 right-1 bg-muted rounded border border-background hover:bg-background/50 z-20 shadow-md"
          >
            {copied ? <CheckedIcon /> : <ClipboardIcon />}
          </button>
        )}
        <pre className="py-4 bg-secondary border border-sidecar rounded text-foreground p-2 relative overflow-auto h-full">
          {children}
        </pre>
      </div>
    </div>
  );
}
