import { getCategories, getTags } from "@/lib/content";
import { t } from "@/utils";
import { collection, fields } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";

const categories = await getCategories();
const CATEGORIES = categories.length
  ? categories.map((category) => ({
      label: category.data.title,
      value: category.id,
    }))
  : [];

const tags = await getTags();
const TAGS = tags.length
  ? tags.map((tag) => ({
      label: tag.data.title,
      value: tag.id,
    }))
  : null;

export const posts = collection({
  label: t("ui-admin", "navigation.posts.label"),
  path: "src/content/posts/*",
  slugField: "title",
  columns: ["title", "pubDate"],
  format: { contentField: "body" },
  entryLayout: "content",
  schema: {
    title: fields.slug({
      name: {
        label: t("ui-admin", "posts.title.label"),
        validation: { length: { min: 1, max: 255 } },
      },
      slug: {
        label: t("ui-admin", "slug.label"),
        description: t("ui-admin", "slug.description"),
      },
    }),
    draft: fields.checkbox({
      label: t("ui-admin", "posts.draft.label"),
      description: t("ui-admin", "posts.draft.description"),
    }),
    description: fields.text({
      label: t("ui-admin", "posts.description.label"),
      description: t("ui-admin", "posts.description.description"),
      validation: { length: { min: 1, max: 255 } },
    }),
    coverImage: fields.url({
      label: t("ui-admin", "posts.cover-image.label"),
      description: t("ui-admin", "posts.cover-image.description"),
      validation: {
        isRequired: true,
      },
    }),
    pubDate: fields.date({
      label: t("ui-admin", "posts.pub-date.label"),
      defaultValue: {
        kind: "today",
      },
      validation: {
        isRequired: true,
      },
    }),
    category: fields.select({
      label: t("ui-admin", "posts.category.label"),
      options: [
        { label: t("ui-admin", "categories.no-category.label"), value: "p" },
        ...CATEGORIES,
      ],
      defaultValue: "p",
    }),
    tags: TAGS
      ? fields.multiselect({
          label: t("ui-admin", "posts.tags.label"),
          options: TAGS,
        })
      : fields.empty(),
    comments: fields.url({
      label: t("ui-admin", "posts.comments.label"),
      description: t("ui-admin", "posts.comments.description"),
    }),
    body: fields.markdoc({
      label: t("ui-admin", "posts.body.label"),
      options: {
        heading: [2, 3, 4, 5, 6],
      },
      components: {
        CloudImage: block({
          label: t("ui-admin", "posts.body.cloud-image.label"),
          schema: {
            src: fields.text({
              label: t("ui-admin", "posts.body.cloud-image.src.label"),
              description: t(
                "ui-admin",
                "posts.body.cloud-image.src.description",
              ),
              validation: { length: { min: 1, max: 1275 } },
            }),
            alt: fields.text({
              label: t("ui-admin", "posts.body.cloud-image.alt.label"),
              description: t(
                "ui-admin",
                "posts.body.cloud-image.alt.description",
              ),
            }),
            figcaption: fields.text({
              label: t("ui-admin", "posts.body.cloud-image.figcaption.label"),
              description: t(
                "ui-admin",
                "posts.body.cloud-image.figcaption.description",
              ),
            }),
          },
        }),
        Gallery: block({
          label: t("ui-admin", "posts.body.gallery.label"),
          schema: {
            images: fields.array(
              fields.object({
                src: fields.text({
                  label: t("ui-admin", "posts.body.cloud-image.src.label"),
                  description: t(
                    "ui-admin",
                    "posts.body.cloud-image.src.description",
                  ),
                  validation: { length: { min: 1, max: 1275 } },
                }),
                alt: fields.text({
                  label: t("ui-admin", "posts.body.cloud-image.alt.label"),
                  description: t(
                    "ui-admin",
                    "posts.body.cloud-image.alt.description",
                  ),
                }),
                figcaption: fields.text({
                  label: t(
                    "ui-admin",
                    "posts.body.cloud-image.figcaption.label",
                  ),
                  description: t(
                    "ui-admin",
                    "posts.body.cloud-image.figcaption.description",
                  ),
                }),
                width: fields.integer({
                  label: t("ui-admin", "posts.body.gallery.images.width.label"),
                  description: t(
                    "ui-admin",
                    "posts.body.gallery.images.width.description",
                  ),
                  validation: {
                    min: 150,
                    max: 3000,
                  },
                }),
                height: fields.integer({
                  label: t(
                    "ui-admin",
                    "posts.body.gallery.images.height.label",
                  ),
                  description: t(
                    "ui-admin",
                    "posts.body.gallery.images.height.description",
                  ),
                  validation: {
                    min: 150,
                    max: 3000,
                  },
                }),
              }),
              {
                label: t("ui-admin", "posts.body.gallery.images.label"),
                itemLabel: (props) => props.fields.src.value,
              },
            ),
          },
        }),
      },
    }),
  },
});
