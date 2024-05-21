import { t } from "@/utils";
import { fields, singleton } from "@keystatic/core";

export const uiWebsite = singleton({
  label: t("ui-admin", "navigation.ui-website.label"),
  path: "src/i18n/ui-website",
  format: { data: "json" },
  schema: {
    "page-title.all-posts": fields.text({
      label: "Page title: All posts",
      validation: { length: { min: 1, max: 255 } },
    }),
    "page-title.before-page-number": fields.text({
      label: "Page title: Before page number",
      validation: { length: { min: 1, max: 255 } },
    }),
    "title.if-no-posts": fields.text({
      label: "Title: If no posts",
      validation: { length: { min: 1, max: 255 } },
    }),
    "title.related-articles": fields.text({
      label: "Title: Related articles",
      validation: { length: { min: 1, max: 255 } },
    }),
    "text.after-reading-time-number": fields.text({
      label: "Text: After reading time number in minutes",
      validation: { length: { min: 1, max: 255 } },
    }),
    "text.show-more": fields.text({
      label: "Text: Show more",
      validation: { length: { min: 1, max: 255 } },
    }),
    "label.header.home": fields.text({
      label: "Label: Header, Home",
      validation: { length: { min: 1, max: 255 } },
    }),
    "label.header.categories": fields.text({
      label: "Label: Header, Categories",
      validation: { length: { min: 1, max: 255 } },
    }),
    "label.header.tags": fields.text({
      label: "Label: Header, Tags",
      validation: { length: { min: 1, max: 255 } },
    }),
    "label.header.search": fields.text({
      label: "Label: Header, Search",
      validation: { length: { min: 1, max: 255 } },
    }),
    "label.header.theme": fields.text({
      label: "Label: Header, Theme",
      validation: { length: { min: 1, max: 255 } },
    }),
    "label.pagination.first-page": fields.text({
      label: "Label: Pagination, First page",
      validation: { length: { min: 1, max: 255 } },
    }),
    "label.pagination.go-to-page": fields.text({
      label: "Label: Pagination, Go to page",
      validation: { length: { min: 1, max: 255 } },
    }),
    "label.pagination.last-page": fields.text({
      label: "Label: Pagination, Last page",
      validation: { length: { min: 1, max: 255 } },
    }),
    "label.toc": fields.text({
      label: "Label: Table of contents",
      validation: { length: { min: 1, max: 255 } },
    }),
    "gallery.close": fields.text({
      label: "Gallery: Close",
      validation: { length: { min: 1, max: 255 } },
    }),
    "gallery.zoom": fields.text({
      label: "Gallery: Zoom",
      validation: { length: { min: 1, max: 255 } },
    }),
    "gallery.previous": fields.text({
      label: "Gallery: Previous",
      validation: { length: { min: 1, max: 255 } },
    }),
    "gallery.next": fields.text({
      label: "Gallery: Next",
      validation: { length: { min: 1, max: 255 } },
    }),
    "gallery.loading-error": fields.text({
      label: "Gallery: Loading error",
      validation: { length: { min: 1, max: 255 } },
    }),
  },
});
