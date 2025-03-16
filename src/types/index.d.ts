export interface DocsMetadata {
  title: string;
  authors: string;
  state: string;
  labels: string;
  pubDate: string;
  updatedDate: string;
}

export interface DocsFrontmatter {
  slug: string;
  title: string;
  authors?: string;
  state: string;
  labels: string;
  pubDate: string;
  updatedDate: string;
}


export interface RfdMetadata {
  title: string;
  number: string;
  shortNumber: string;
  authors: string;
  state: string;
  labels: string;
  pubDate: string;
  updatedDate: string;
}

export interface RfdFrontmatter {
  slug: string;
  title: string;
  number: string;
  shortNumber: string;
  authors?: string;
  state: string;
  labels: string;
  pubDate: string;
  updatedDate: string;
}

// export type DocsFrontmatter = Omit<RfdFrontmatter, ["number", "shortNumber"]>;

export {
  RfdFrontmatter,
  RfdMetadata,
  DocsFrontmatter,
  DocsMetadata
}