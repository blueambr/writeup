import { t } from "@/utils";
import { collection, fields } from "@keystatic/core";

export const tags = collection({
  label: t("ui-admin", "navigation.tags.label"),
  path: "src/content/tags/*",
  slugField: "title",
  columns: ["title"],
  schema: {
    title: fields.slug({
      name: {
        label: t("ui-admin", "tags.title.label"),
        validation: { length: { min: 1, max: 255 } },
      },
      slug: {
        label: t("ui-admin", "slug.label"),
        description: t("ui-admin", "slug.description"),
      },
    }),
  },
});
