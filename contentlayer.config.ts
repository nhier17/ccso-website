import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Story = defineDocumentType(() => ({
  name: "Story",
  filePathPattern: `stories/*.mdx`,
  contentType: "mdx",

  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    excerpt: { type: "string", required: true },
    category: { type: "string", required: true },
    program: { type: "string", required: false },
    location: { type: "string", required: false },
    date: { type: "date", required: true },
    readTime: { type: "string", required: false },
    coverImage: { type: "string", required: true },
    featured: { type: "boolean", required: false },

    impact: {
      type: "json",
      required: false,
    },
  },

  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Story],
  disableImportAliasWarning: true,
});
