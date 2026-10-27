import * as prismic from "@prismicio/client";

export const repositoryName =
  import.meta.env.PRISMIC_REPOSITORY_NAME ?? "";

export function linkResolver(doc: { type: string; uid?: string | null }): string {
  if (doc.type === "portfolio" && doc.uid) {
    return `/portfolio/${doc.uid}`;
  }
  return "/";
}

export function createClient(config: prismic.ClientConfig = {}) {
  return prismic.createClient(repositoryName, config);
}
