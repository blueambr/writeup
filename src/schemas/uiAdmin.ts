import { t } from "@/utils";
import { fields, singleton } from "@keystatic/core";

export const uiAdmin = singleton({
  label: t("ui-admin", "navigation.ui-admin.label"),
  path: "src/i18n/ui-admin",
  format: { data: "json" },
  schema: {
    "navigation.collections.label": fields.text({
      label: "Navigation: Collections, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "navigation.posts.label": fields.text({
      label: "Navigation: Posts, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "navigation.categories.label": fields.text({
      label: "Navigation: Categories, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "navigation.tags.label": fields.text({
      label: "Navigation: Tags, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "navigation.configuration.label": fields.text({
      label: "Navigation: Configuration, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "navigation.website.label": fields.text({
      label: "Navigation: Website, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "navigation.posts-grid.label": fields.text({
      label: "Navigation: Posts Grid, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "navigation.post-page.label": fields.text({
      label: "Navigation: Post Page, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "navigation.translations.label": fields.text({
      label: "Navigation: Translations, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "navigation.ui-website.label": fields.text({
      label: "Navigation: UI Website, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "navigation.ui-admin.label": fields.text({
      label: "Navigation: UI Admin, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "slug.label": fields.text({
      label: "Slug: Label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "slug.description": fields.text({
      label: "Slug: Description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.title.label": fields.text({
      label: "Posts: Title, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.draft.label": fields.text({
      label: "Posts: Draft, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.draft.description": fields.text({
      label: "Posts: Draft, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.description.label": fields.text({
      label: "Posts: Description, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.description.description": fields.text({
      label: "Posts: Description, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.cover-image.label": fields.text({
      label: "Posts: Cover Image, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.cover-image.description": fields.text({
      label: "Posts: Cover Image, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.pub-date.label": fields.text({
      label: "Posts: Publication Date, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.category.label": fields.text({
      label: "Posts: Category, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.tags.label": fields.text({
      label: "Posts: Tags, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.comments.label": fields.text({
      label: "Posts: Comments, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.comments.description": fields.text({
      label: "Posts: Comments, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.body.label": fields.text({
      label: "Posts: Body, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.body.cloud-image.label": fields.text({
      label: "Posts: Body, Cloud image, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.body.cloud-image.src.label": fields.text({
      label: "Posts: Body, Cloud image, Src, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.body.cloud-image.src.description": fields.text({
      label: "Posts: Body, Cloud image, Src, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.body.cloud-image.alt.label": fields.text({
      label: "Posts: Body, Cloud image, Alt, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.body.cloud-image.alt.description": fields.text({
      label: "Posts: Body, Cloud image, Alt, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.body.cloud-image.figcaption.label": fields.text({
      label: "Posts: Body, Cloud image, Figcaption, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.body.cloud-image.figcaption.description": fields.text({
      label: "Posts: Body, Cloud image, Figcaption, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.body.gallery.label": fields.text({
      label: "Posts: Body, Gallery, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.body.gallery.images.label": fields.text({
      label: "Posts: Body, Gallery, Images, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.body.gallery.images.width.label": fields.text({
      label: "Posts: Body, Gallery, Images, Width, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.body.gallery.images.width.description": fields.text({
      label: "Posts: Body, Gallery, Images, Width, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.body.gallery.images.height.label": fields.text({
      label: "Posts: Body, Gallery, Images, Height, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts.body.gallery.images.height.description": fields.text({
      label: "Posts: Body, Gallery, Images, Height, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "categories.title.label": fields.text({
      label: "Categories: Title, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "categories.no-category.label": fields.text({
      label: "Categories: No category, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "tags.title.label": fields.text({
      label: "Tags: Title, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.lang.label": fields.text({
      label: "Website: Lang, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.lang.description": fields.text({
      label: "Website: Lang, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.title.label": fields.text({
      label: "Website: Title, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.description.label": fields.text({
      label: "Website: Description, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.author.label": fields.text({
      label: "Website: Author, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.favicon.label": fields.text({
      label: "Website: Favicon, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.favicon.description": fields.text({
      label: "Website: Favicon, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.og-image.label": fields.text({
      label: "Website: OG Image, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.og-image.description": fields.text({
      label: "Website: OG Image, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.webmanifest.label": fields.text({
      label: "Website: Webmanifest, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.webmanifest.description": fields.text({
      label: "Website: Webmanifest, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.webmanifest.themeColor.label": fields.text({
      label: "Website: Webmanifest, Theme color, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.webmanifest.themeColor.description": fields.text({
      label: "Website: Webmanifest, Theme color, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.webmanifest.bgColor.label": fields.text({
      label: "Website: Webmanifest, Background color, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.webmanifest.bgColor.description": fields.text({
      label: "Website: Webmanifest, Background color, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.webmanifest.apple-touch-icon.label": fields.text({
      label: "Website: Webmanifest, Apple touch icon, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.webmanifest.apple-touch-icon.description": fields.text({
      label: "Website: Webmanifest, Apple touch icon, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.webmanifest.android-touch-icon.label": fields.text({
      label: "Website: Webmanifest, Android touch icon, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.webmanifest.android-touch-icon.description": fields.text({
      label: "Website: Webmanifest, Android touch icon, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.webmanifest.android-splash-icon.label": fields.text({
      label: "Website: Webmanifest, Android splash icon, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.webmanifest.android-splash-icon.description": fields.text({
      label: "Website: Webmanifest, Android splash icon, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.comments.label": fields.text({
      label: "Website: Comments, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.comments.description": fields.text({
      label: "Website: Comments, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.comments.label.label": fields.text({
      label: "Website: Comments, Label, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.comments.icon.label": fields.text({
      label: "Website: Comments, Icon, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.comments.icon.description": fields.text({
      label: "Website: Comments, Icon, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.socials.label": fields.text({
      label: "Website: Socials, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.socials.label.label": fields.text({
      label: "Website: Socials, Label, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.socials.icon.label": fields.text({
      label: "Website: Socials, Icon, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.socials.icon.description": fields.text({
      label: "Website: Socials, Icon, description",
      validation: { length: { min: 1, max: 255 } },
    }),
    "website.socials.link.label": fields.text({
      label: "Website: Socials, Link, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts-grid.posts-per-page.label": fields.text({
      label: "Posts Grid: Posts per page, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts-grid.cover-image.label": fields.text({
      label: "Posts Grid: Cover Image, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts-grid.cover-image.aspect.label": fields.text({
      label: "Posts Grid: Cover Image aspect, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts-grid.cover-image.width.label": fields.text({
      label: "Posts Grid: Cover Image width, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "posts-grid.cover-image.height.label": fields.text({
      label: "Posts Grid: Cover Image height, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "post-page.related-posts-number.label": fields.text({
      label: "Post Page: Related posts number, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "post-page.cover-image.label": fields.text({
      label: "Post Page: Cover Image, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "post-page.cover-image.aspect.label": fields.text({
      label: "Post Page: Cover Image aspect, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "post-page.cover-image.width.label": fields.text({
      label: "Post Page: Cover Image width, label",
      validation: { length: { min: 1, max: 255 } },
    }),
    "post-page.cover-image.height.label": fields.text({
      label: "Post Page: Cover Image height, label",
      validation: { length: { min: 1, max: 255 } },
    }),
  },
});
