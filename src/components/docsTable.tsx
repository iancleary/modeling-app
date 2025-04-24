import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../app/tokens.stylex";
import Link from "next/link";
import type { DocsFrontmatter } from "@/types";


const styles = stylex.create({
  text: {
    color: colors.neutral100,
  },
  resultsWrapper: {
    fontSize: text.sm,
  },
  results: {
    textTransform: "uppercase",
    fontSize: text.sm,
    color: colors.neutral500,
  },
  resultsNumber: {
    textTransform: "uppercase",
    fontSize: text.sm,
    color: colors.neutral200,
  },
  main: {
    // width: "100%",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: spacing.md,
  },
  desktop: {
    display: {
      default: "none",
      "@media (min-width: 800px)": "block",
    },
  },
  mobile: {
    display: {
      default: "grid",
      "@media (min-width: 800px)": "none",
    },
    rowGap: spacing.md,
  },
  link: {
    color: colors.neutral200,
    textDecoration: "none",
  },
  paddingBottom: {
    paddingBottom: spacing.xs,
  },
  gridWrapper: {
    display: "grid",
    gridTemplateColumns: "8fr 3fr 3fr 5fr",
    columnGap: spacing.sm,
    // columnGap: spacing.md,
    // columns: 12,
    // width: "100%",
    // height: "3rem",
    backgroundColor: colors.neutral800,
    borderRadius: spacing.xs,
    // marginBottom: "1rem",
  },
  gridColumnNamesRow: {
    paddingInlineStart: spacing.sm,
    textTransform: "uppercase",
    // paddingInlineEnd: spacing.md,
  },
  gridColumnNames: {
    color: colors.neutral100,
    paddingTop: spacing.xs,
    paddingBottom: spacing.xs,

    fontSize: text.sm,
  },
  gridContentRowWrapper: {
    paddingTop: spacing.sm,
  },
  gridContentRow: {
    paddingInlineStart: spacing.sm,
    backgroundColor: colors.neutral900,
  },
  gridContent: {
    color: colors.neutral100,
    paddingTop: spacing.xs,
    paddingBottom: spacing.xs,
    fontSize: text.p,
    columnGap: spacing.sm,
  },
  topHelpers: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingInlineStart: spacing.md,
    paddingInlineEnd: spacing.md,
  },
  number: {
    fontSize: text.sm,
    display: "inline-flex",
    backgroundColor: {
      default: "inherit",
      ":hover": colors.neutral700,
    },
    padding: spacing.xxs,
    // margin: spacing.xxxs,
    borderRadius: spacing.xxs,
    width: "auto",
  },
  state: {
    textTransform: "capitalize",
    color: colors.neutral100,
    display: "flex",
    alignItems: "center",
  },
  date: {
    textTransform: "capitalize",
    color: colors.neutral100,
    display: "flex",
    alignItems: "center",
  },
  labels: {
    textTransform: "capitalize",
    color: colors.neutral100,
    display: "flex",
    alignItems: "center",
  },
  mobileCardWrapper: {
  },
  mobileCard: {
    paddingInlineStart: spacing.md,
    backgroundColor: colors.neutral950,
    borderStyle: "solid",
    borderColor: colors.neutral800,
    borderRadius: spacing.sm,
    fontSize: text.h5,
  },
  mobileCardContent: {
    color: colors.neutral100,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
    fontSize: spacing.md,
    columnGap: spacing.sm,
  },
  mobileStateWrapper: {
    display: "flex",
    justifyContent: "start",
    paddingBlockStart: spacing.sm,
    // paddingBlockEnd: spacing.sm,
  },
  mobileState: {
    textTransform: "uppercase",
    backgroundColor: colors.neutral900,
    color: colors.neutral200,
    borderWidth: "0.1em",
    borderColor: colors.neutral600,
    borderStyle: "solid",
    borderRadius: spacing.sm,
    padding: spacing.xs,
    display: "flex",
    alignItems: "center",
    fontSize: text.p,
  },
  mobileNumberTitleWrapper: {
    paddingBlockStart: spacing.sm,
    paddingBlockEnd: spacing.sm,
    fontSize: text.h5,
  },
  mobileNumber: {
    textTransform: "capitalize",
    color: colors.neutral100,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  mobileTitle: {
    textTransform: "capitalize",
    color: colors.neutral100,
    display: "flex",
    alignItems: "center",
  },
  mobileDate: {
    textTransform: "capitalize",
    color: colors.neutral300,
    display: "flex",
    alignItems: "center",
    paddingBlockEnd: spacing.sm,
    fontSize: text.h5,
  },
});


function getDateFormat(dateString: string) {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${month} ${day}, ${year}`;
}

function ResultCount({ count }: { count: string }): React.ReactElement {
  return (
    <div {...stylex.props(styles.text, styles.resultsWrapper)}>
      <span {...stylex.props(styles.results)}>Results: </span>
      <span {...stylex.props(styles.resultsNumber)}>{count}</span>
    </div>
  );
}

function GridHeaders(): React.ReactElement {
  return (
    <div {...stylex.props(styles.gridWrapper, styles.gridColumnNamesRow)}>
      <div {...stylex.props(styles.gridColumnNames)}>Title</div>
      <div {...stylex.props(styles.gridColumnNames)}>State</div>
      <div {...stylex.props(styles.gridColumnNames)}>Updated</div>
      <div {...stylex.props(styles.gridColumnNames)}>Labels</div>
    </div>
  );
}

function GridContentRow({ file }: { file: DocsFrontmatter }) {
  return (
    <div {...stylex.props(styles.gridContentRowWrapper)}>
      <div {...stylex.props(styles.gridWrapper, styles.gridContentRow)}>
        <div {...stylex.props(styles.gridContent)}>
          <Link {...stylex.props(styles.link)} href={file.slug} key={file.slug}>
            <div {...stylex.props(styles.number)}>
              <div>
                {/* <div>
                  RFD <span>{file.number}</span>
                </div> */}
                <div>{file.title}</div>
              </div>
            </div>
          </Link>
        </div>
        <div {...stylex.props(styles.state)}>{file.state}</div>
        <div {...stylex.props(styles.date)}>
          {getDateFormat(file.updatedDate)}
        </div>
        <div {...stylex.props(styles.labels)}>{file.labels}</div>
      </div>
    </div>
  );
}

function CardTitle({ file }: { file: DocsFrontmatter }) {
  return (
    <div {...stylex.props(styles.text, styles.mobileNumberTitleWrapper)}>
      <div>
        {/* <div {...stylex.props(styles.mobileNumber)}>
          RFD <span>{file.number}</span>
        </div> */}
        <div {...stylex.props(styles.mobileTitle)}>{file.title}</div>
      </div>
    </div>
  );
}

function CardContentRow({ file }: { file: DocsFrontmatter }) {
  return (
    <div {...stylex.props(styles.mobileCardWrapper)}>
      <div {...stylex.props(styles.mobileCard)}>
        <div {...stylex.props(styles.mobileStateWrapper)}>
          <div {...stylex.props(styles.mobileState)}>{file.state}</div>
        </div>
        <Link {...stylex.props(styles.link)} href={file.slug} key={file.slug}>
          <CardTitle file={file} />
        </Link>
        <div {...stylex.props(styles.mobileDate)}>
          {getDateFormat(file.updatedDate)}
        </div>
        {/* <div {...stylex.props(styles.labels)}>{file.labels}</div> */}
      </div>
    </div>
  );
}

function docTable({ docs }: { docs: DocsFrontmatter[] }): React.ReactElement {
  const count = docs.length.toString();
  // console.log(docs);
  return (
    <div {...stylex.props(styles.main)}>
      <h1 {...stylex.props(styles.title, styles.text)}>Documentation</h1>
      <div {...stylex.props(styles.topHelpers, styles.paddingBottom)}>
        {/* <div {...stylex.props(styles.text)}>Filter</div> */}
        <div />
        <ResultCount count={count} />
      </div>
      <div {...stylex.props(styles.desktop)}>
        <GridHeaders />
        {docs.map((file) => (
          <div key={file.slug}>
            <GridContentRow file={file} />
          </div>
        ))}
      </div>
      <div {...stylex.props(styles.mobile)}>
        {docs.map((file) => (
          <div key={file.slug}>
            <CardContentRow file={file} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default docTable;
