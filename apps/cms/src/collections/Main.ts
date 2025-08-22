import { CollectionConfig } from "payload";

export const Main: CollectionConfig = {
  slug: "main",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "user",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      type: "text",
      required: true,
    },
    {
      name: "profilePic",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "skillPic",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "about",
      type: "textarea",
      required: true,
    },
  ],
};
