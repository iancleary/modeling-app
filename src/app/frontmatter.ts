import type {
  DocsFrontmatter,
  DocsMetadata,
  RfdMetadata,
  RfdFrontmatter,
} from "@/types";

import { docsMetadata, rfdMetadata } from "./metadata";

function getFrontmatterObjectDocs(
  object: DocsMetadata,
  folder: string
): DocsFrontmatter {
  // console.log(object);
  const returnObject = {
    ...object,
    slug: `/docs/${folder}`,
  };
  // console.log(returnObject);
  return returnObject;
}

function getFrontmatterObjectRfd(object: RfdMetadata): RfdFrontmatter {
  const returnObject = {
    ...object,
    slug: `/rfd/${object.number}`,
  };
  return returnObject;
}

const docFilesFrontmatter = docsMetadata.map((item) =>
  getFrontmatterObjectDocs(item.metadata, item.folder)
);

const rfdFilesFrontmatter = rfdMetadata.map((item) =>
  getFrontmatterObjectRfd(item.metadata)
);

export { docFilesFrontmatter, rfdFilesFrontmatter };
