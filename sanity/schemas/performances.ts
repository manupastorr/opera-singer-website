import { defineType } from "sanity";

import { Calendar } from "lucide-react";

export default defineType({
  name: "performances",
  title: "Performances",
  type: "document",
  icon: Calendar,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the performance",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Oper", value: "Oper" },
          { title: "Konzert", value: "Konzert" },
          { title: "Recital", value: "Recital" },
          { title: "Gottesdienst", value: "Gottesdienst" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "composer",
      title: "Composer",
      type: "string",
      description: "The composer of the performance",
    },
    {
      name: "composition",
      title: "Composition",
      type: "string",
      description: "The composition of the performance",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      description: "The role in the performance",
    },
    {
      name: "conductor",
      title: "Conductor",
      type: "string",
      description: "Optional. Leave blank if there is no conductor.",
    },
    {
      name: "instrumentation",
      title: "Ensemble / Instrumentation",
      type: "string",
      description: "Optional. Example: Voice, flute, piano.",
    },
    {
      name: "producer",
      title: "Producer",
      type: "string",
    },
    {
      name: "firstDate",
      title: "First date",
      type: "datetime",
      options: {
        dateFormat: "DD.MM.YYYY",
        timeFormat: "HH:mm",
        calendarTodayLabel: "Today",
        timeStep: 15,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "allDates",
      title: "All dates",
      type: "string",
      description:
        "The dates and times of the performance (e.g., 15. September 2023, um 10 Uhr und 18 Uhr), only if there are multiple dates and times.",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "The location of the performance",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "orchestra",
      title: "Orchestra",
      type: "string",
      description: "The orchestra of the performance",
    },
  ],
});
