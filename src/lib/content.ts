import { getCollection } from "astro:content";

export const getCategories = async () => {
  const categories = await getCollection("categories");

  if (categories) {
    return categories
      .sort((a, b) => a.data.title.localeCompare(b.data.title))
      .slice(0);
  }

  return [];
};

export const getPosts = async (max?: number) => {
  const posts = await getCollection("posts", ({ data }) => {
    return !data.draft;
  });

  if (posts) {
    return posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .slice(0, max);
  }

  return [];
};

export const getTags = async () => {
  const tags = await getCollection("tags");

  if (tags) {
    return tags
      .sort((a, b) => a.data.title.localeCompare(b.data.title))
      .slice(0);
  }

  return [];
};

export const getRelatedPosts = async (
  slug: string,
  tags: string[],
  number: number = 3,
) => {
  const posts = await getPosts();

  if (posts) {
    const relatedPosts = posts.filter(
      (post) =>
        post.slug !== slug &&
        post.data.tags &&
        post.data.tags.some((t) => tags.includes(t)),
    );

    if (relatedPosts.length) {
      return relatedPosts.slice(0, number);
    }
  }

  return null;
};
