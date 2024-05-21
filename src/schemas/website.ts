import { t } from "@/utils";
import { fields, singleton } from "@keystatic/core";

export const website = singleton({
  label: t("ui-admin", "navigation.website.label"),
  path: "src/configs/website.config",
  format: { data: "json" },
  schema: {
    lang: fields.text({
      label: t("ui-admin", "website.lang.label"),
      description: t("ui-admin", "website.lang.description"),
      validation: { length: { min: 1, max: 255 } },
    }),
    title: fields.text({
      label: t("ui-admin", "website.title.label"),
      validation: { length: { min: 1, max: 255 } },
    }),
    description: fields.text({
      label: t("ui-admin", "website.description.label"),
      validation: { length: { min: 1, max: 255 } },
    }),
    author: fields.text({
      label: t("ui-admin", "website.author.label"),
      validation: { length: { min: 1, max: 255 } },
    }),
    favicon: fields.image({
      label: t("ui-admin", "website.favicon.label"),
      description: t("ui-admin", "website.favicon.description"),
      directory: "public",
      publicPath: "/",
      validation: { isRequired: true },
    }),
    ogImage: fields.image({
      label: t("ui-admin", "website.og-image.label"),
      description: t("ui-admin", "website.og-image.description"),
      directory: "public",
      publicPath: "/",
      validation: { isRequired: true },
    }),
    webmanifest: fields.object(
      {
        themeColor: fields.text({
          label: t("ui-admin", "website.webmanifest.themeColor.label"),
          description: t(
            "ui-admin",
            "website.webmanifest.themeColor.description",
          ),
          validation: { length: { min: 1, max: 255 } },
        }),
        bgColor: fields.text({
          label: t("ui-admin", "website.webmanifest.bgColor.label"),
          description: t("ui-admin", "website.webmanifest.bgColor.description"),
          validation: { length: { min: 1, max: 255 } },
        }),
        appleTouchIcon: fields.image({
          label: t("ui-admin", "website.webmanifest.apple-touch-icon.label"),
          description: t(
            "ui-admin",
            "website.webmanifest.apple-touch-icon.description",
          ),
          directory: "public",
          publicPath: "/",
          validation: { isRequired: true },
        }),
        androidTouchIcon: fields.image({
          label: t("ui-admin", "website.webmanifest.android-touch-icon.label"),
          description: t(
            "ui-admin",
            "website.webmanifest.android-touch-icon.description",
          ),
          directory: "public",
          publicPath: "/",
          validation: { isRequired: true },
        }),
        androidSplashIcon: fields.image({
          label: t("ui-admin", "website.webmanifest.android-splash-icon.label"),
          description: t(
            "ui-admin",
            "website.webmanifest.android-splash-icon.description",
          ),
          directory: "public",
          publicPath: "/",
          validation: { isRequired: true },
        }),
      },
      {
        label: t("ui-admin", "website.webmanifest.label"),
        description: t("ui-admin", "website.webmanifest.description"),
      },
    ),
    comments: fields.object(
      {
        label: fields.text({
          label: t("ui-admin", "website.comments.label.label"),
          validation: {
            length: { min: 1, max: 255 },
          },
        }),
        icon: fields.text({
          label: t("ui-admin", "website.comments.icon.label"),
          description: t("ui-admin", "website.comments.icon.description"),
        }),
      },
      {
        label: t("ui-admin", "website.comments.label"),
        description: t("ui-admin", "website.comments.description"),
      },
    ),
    socials: fields.array(
      fields.object({
        label: fields.text({
          label: t("ui-admin", "website.socials.label.label"),
          validation: { length: { min: 1, max: 255 } },
        }),
        icon: fields.text({
          label: t("ui-admin", "website.socials.icon.label"),
          description: t("ui-admin", "website.socials.icon.description"),
          validation: { length: { min: 1, max: 255 } },
        }),
        link: fields.url({
          label: t("ui-admin", "website.socials.link.label"),
          validation: {
            isRequired: true,
          },
        }),
      }),
      {
        label: t("ui-admin", "website.socials.label"),
        slugField: "label",
        itemLabel: (props) => props.fields.label.value,
      },
    ),
  },
});
