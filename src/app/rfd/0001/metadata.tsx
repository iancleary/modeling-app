const metadataBefore = {
  authors: "Ian Cleary",
  title: "Requests for Discussion",
  state: "ideation",
  labels: "process",
  pubDate: "2025-01-22",
  updatedDate: "2025-01-25",
};

// DO NOT CHANGE THE BELOW
const number = "0001";

export const metadata = {
  ...metadataBefore,
  number: number,
  shortNumber: number.replace(/^0+/, ""), // '0042' ->'42'
};
