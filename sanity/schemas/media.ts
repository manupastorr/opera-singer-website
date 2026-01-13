import { BiVideo } from "react-icons/bi";
import { defineType } from "sanity";

export default defineType({
  name: "media",
  title: "Media",
  type: "document",
  icon: BiVideo,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "files",
      type: "array",
      title: "Files",
      of: [
        {
          title: "File",
          type: "file",
          name: "file",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "description",
              type: "text",
              title: "Description",
              rows: 3,
            },

            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessiblity.",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
});
