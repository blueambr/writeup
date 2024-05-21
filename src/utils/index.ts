import uiAdmin from "@/i18n/ui-admin.json";
import uiWebsite from "@/i18n/ui-website.json";
import { clsx, type ClassValue } from "clsx";

interface Vocabs {
  "ui-admin": keyof typeof uiAdmin;
  "ui-website": keyof typeof uiWebsite;
}

export const sluglify = (text: string) => text.replace(/\s+/g, "-");

export const unsluglify = (text: string) => text.replace(/-/g, " ");

export const t = <T extends keyof Vocabs>(vocab: T, key: Vocabs[T]) => {
  if (vocab === "ui-admin") {
    // @ts-ignore
    return uiAdmin[key];
  }

  if (vocab === "ui-website") {
    // @ts-ignore
    return uiWebsite[key];
  }

  return null;
};

export const getReadingTime = (body: string) => {
  const words = body.match(/\w+/g);
  return words ? `${Math.ceil(words.length / 150)}` : "1";
};

export const useDialog = (dialogId: string, triggerId: string) => {
  const dialog = document.getElementById(dialogId) as HTMLDialogElement;
  const dialogTrigger = document.getElementById(triggerId);

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });

  document.addEventListener("astro:before-swap", () => dialog.close());

  dialogTrigger?.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
  });

  return dialog;
};
