import { t } from "@/utils";
import { fields, singleton } from "@keystatic/core";

export const postsGrid = singleton({
  label: t("ui-admin", "navigation.posts-grid.label"),
  path: "src/configs/postsGrid.config",
  format: { data: "json" },
  schema: {
    postsPerPage: fields.integer({
      label: t("ui-admin", "posts-grid.posts-per-page.label"),
      defaultValue: 6,
      validation: {
        min: 6,
        max: 60,
      },
    }),
    coverImage: fields.object(
      {
        aspect: fields.select({
          label: t("ui-admin", "posts-grid.cover-image.aspect.label"),
          options: [
            { label: "16:9", value: "aspect-video" },
            { label: "4:3", value: "aspect-[4/3]" },
            { label: "2:1", value: "aspect-[2/1]" },
            { label: "1:1", value: "aspect-square" },
            { label: "auto", value: "aspect-auto" },
          ],
          defaultValue: "aspect-video",
        }),
        width: fields.integer({
          label: t("ui-admin", "posts-grid.cover-image.width.label"),
          defaultValue: 700,
          validation: {
            min: 150,
            max: 7680,
          },
        }),
        height: fields.integer({
          label: t("ui-admin", "posts-grid.cover-image.height.label"),
          defaultValue: 394,
          validation: {
            min: 150,
            max: 7680,
          },
        }),
      },
      {
        label: t("ui-admin", "posts-grid.cover-image.label"),
      },
    ),
  },
});
