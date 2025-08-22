import * as React from "react";
import { Link } from "next-view-transitions";
import type { RfdFrontmatter } from "@/types";
import { H2 } from "./mdx-components";

function getDateFormat(dateString: string) {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${month} ${day}, ${year}`;
}

function ResultCount({ count }: { count: string }): React.ReactElement {
  return (
    <div className="text-foreground text-sm">
      <span className="uppercase text-base text-red">Results: </span>
      <span className="uppercase text-base text-foreground">{count}</span>
    </div>
  );
}

function GridHeaders(): React.ReactElement {
  return (
    <div className="grid grid-cols-[8fr_3fr_3fr_5fr] gap-x-2 bg-secondary rounded-md pl-4 uppercase">
      <div className="text-foreground pt-4 pb-4 text-base">Number / Title</div>
      <div className="text-foreground pt-4 pb-4 text-base">State</div>
      <div className="text-foreground pt-4 pb-4 text-base">Updated</div>
      <div className="text-foreground pt-4 pb-4 text-base">Labels</div>
    </div>
  );
}

function GridContentRow({ file }: { file: RfdFrontmatter }) {
  return (
    <div className="pt-4">
      <div className="grid grid-cols-[8fr_3fr_3fr_5fr] gap-x-2 bg-secondary pl-4 group">
        <div className="text-foreground pt-4 pb-4 text-base gap-x-2 ">
          <Link
            className="text-foreground no-underline"
            href={file.slug}
            key={file.slug}
          >
            <div className="text-foreground inline-flex bg-inherit group-hover:bg-primary group-hover:text-secondary px-2 rounded w-auto">
              <div>
                <div>
                  RFD <span>{file.shortNumber}</span>
                </div>
                <div>{file.title}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="capitalize text-foreground flex items-center">
          {file.state}
        </div>
        <div className="capitalize text-foreground flex items-center">
          {getDateFormat(file.updatedDate)}
        </div>
        <div className="capitalize text-foreground flex items-center">
          {file.labels}
        </div>
      </div>
    </div>
  );
}

function CardTitle({ file }: { file: RfdFrontmatter }) {
  return (
    <div className="text-foreground pt-2 pb-2 text-lg">
      <div>
        <div className="capitalize text-foreground font-bold flex items-center">
          RFD <span>{file.shortNumber}</span>
        </div>
        <div className="capitalize text-foreground flex items-center">
          {file.title}
        </div>
      </div>
    </div>
  );
}

function CardContentRow({ file }: { file: RfdFrontmatter }) {
  return (
    <div>
      <div className="pl-4 bg-background border border-solid border-neutral-800 rounded text-lg">
        <div className="flex justify-start pt-2">
          <div className="uppercase bg-background text-muted-foreground border border-neutral-600 border-solid rounded px-2 flex items-center text-base">
            {file.state}
          </div>
        </div>
        <Link
          className="text-muted-foreground no-underline"
          href={file.slug}
          key={file.slug}
        >
          <CardTitle file={file} />
        </Link>
        <div className="capitalize text-muted-foreground flex items-center pb-2 text-lg">
          {getDateFormat(file.updatedDate)}
        </div>
        {/* <div className="capitalize text-foreground flex items-center">{file.labels}</div> */}
      </div>
    </div>
  );
}

function rfdTable({ rfds }: { rfds: RfdFrontmatter[] }): React.ReactElement {
  const count = rfds.length.toString();
  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <H2>Requests for Discussion</H2>
      </div>
      <div className="flex items-center justify-between w-full pl-4 pr-4 pb-4">
        {/* <div className="text-foreground">Filter</div> */}
        <div />
        <ResultCount count={count} />
      </div>
      <div className="hidden md:block">
        <GridHeaders />
        {rfds.map((file) => (
          <div key={file.slug}>
            <GridContentRow file={file} />
          </div>
        ))}
      </div>
      <div className="grid md:hidden gap-y-4">
        {rfds.map((file) => (
          <div key={file.slug}>
            <CardContentRow file={file} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default rfdTable;
