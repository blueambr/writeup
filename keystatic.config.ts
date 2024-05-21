import { configs } from "@/configs";
import { schemas } from "@/schemas";
import { t } from "@/utils";
import { config } from "@keystatic/core";

const {
  categories,
  postPage,
  posts,
  postsGrid,
  tags,
  uiAdmin,
  uiWebsite,
  website,
} = schemas;

export default config({
  // @ts-ignore
  locale: configs.website.lang,
  storage: {
    // kind: "local",
    kind: "github",
    repo: "blueambr/openblog",
  },
  ui: {
    brand: { name: configs.website.title },
    navigation: {
      [t("ui-admin", "navigation.collections.label")]: [
        "posts",
        "categories",
        "tags",
      ],
      [t("ui-admin", "navigation.configuration.label")]: [
        "website",
        "postsGrid",
        "postPage",
      ],
      [t("ui-admin", "navigation.translations.label")]: [
        "uiWebsite",
        "uiAdmin",
      ],
    },
  },
  collections: {
    posts,
    categories,
    tags,
  },
  singletons: {
    website,
    postsGrid,
    postPage,
    uiWebsite,
    uiAdmin,
  },
});
