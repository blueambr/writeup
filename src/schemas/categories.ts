import { t } from "@/utils";
import { collection, fields } from "@keystatic/core";

export const categories = collection({
  label: t("ui-admin", "navigation.categories.label"),
  path: "src/content/categories/*",
  slugField: "title",
  columns: ["title"],
  schema: {
    title: fields.slug({
      name: {
        label: t("ui-admin", "categories.title.label"),
        validation: { length: { min: 1, max: 255 } },
      },
      slug: {
        label: t("ui-admin", "slug.label"),
        description: t("ui-admin", "slug.description"),
      },
    }),
  },
});
