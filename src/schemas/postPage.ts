import { t } from "@/utils";
import { fields, singleton } from "@keystatic/core";

export const postPage = singleton({
  label: t("ui-admin", "navigation.post-page.label"),
  path: "src/configs/postPage.config",
  format: { data: "json" },
  schema: {
    relatedPosts: fields.integer({
      label: t("ui-admin", "post-page.related-posts-number.label"),
      defaultValue: 3,
      validation: {
        min: 0,
        max: 9,
      },
    }),
    coverImage: fields.object(
      {
        aspect: fields.select({
          label: t("ui-admin", "post-page.cover-image.aspect.label"),
          options: [
            { label: "16:9", value: "aspect-video" },
            { label: "4:3", value: "aspect-[4/3]" },
            { label: "2:1", value: "aspect-[2/1]" },
            { label: "1:1", value: "aspect-square" },
            { label: "auto", value: "aspect-auto" },
          ],
          defaultValue: "aspect-[2/1]",
        }),
        width: fields.integer({
          label: t("ui-admin", "post-page.cover-image.width.label"),
          defaultValue: 1000,
          validation: {
            min: 150,
            max: 7680,
          },
        }),
        height: fields.integer({
          label: t("ui-admin", "post-page.cover-image.height.label"),
          defaultValue: 500,
          validation: {
            min: 150,
            max: 7680,
          },
        }),
      },
      { label: t("ui-admin", "post-page.cover-image.label") },
    ),
  },
});
