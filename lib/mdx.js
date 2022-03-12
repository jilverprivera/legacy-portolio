import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = async (type) =>
  fs.readdirSync(path.join(root, "data", type));

export const getFileBySlug = async (type, slug) => {
  const mdxSource = fs.readFileSync(
    path.join(root, "data", type, `${slug}.mdx`),
    "utf8"
  );
  const { data, content } = await matter(mdxSource);
  const source = await serialize(content, {});
  return { source, frontmatter: { slug, ...data } };
};

export const getAllFilesMetadata = async (type) => {
  const files = await getFiles(type);
  return files.reduce((allPost, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "data", type, postSlug),
      "utf8"
    );
    const { data } = matter(mdxSource);
    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPost];
  }, []);
};
