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
  var returnObject = {
    ...object,
    slug: `/docs/${folder}`,
  };
  // console.log(returnObject);
  return returnObject;
}

function getFrontmatterObjectRfd(object: RfdMetadata): RfdFrontmatter {
  var returnObject = {
    ...object,
    slug: `/rfd/${object.number}`,
  };
  return returnObject;
}

let docFilesFrontmatter = docsMetadata.map((item) => getFrontmatterObjectDocs(item.metadata, item.folder));


let rfdFilesFrontmatter = rfdMetadata.map((item) => getFrontmatterObjectRfd(item.metadata));

export {
  docFilesFrontmatter,
  rfdFilesFrontmatter
}