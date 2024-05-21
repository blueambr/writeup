import { configs } from "@/configs";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const GET = async (context: { site: string }) => {
  const posts = await getCollection("posts");

  return rss({
    title: configs.website.title,
    description: configs.website.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${post.data.category}/${post.slug}/`,
    })),
  });
};
