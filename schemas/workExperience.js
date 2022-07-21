export default {
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  initialValue: {
    current: false,
  },
  fields: [
    {
      name: "workId",
      title: "Work ID",
      type: "number",
    },
    {
      name: "current",
      title: "Current Job",
      type: "boolean",
    },

    {
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "DD-MMM-YYYY",
      },
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "DD-MMM-YYYY",
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
  ],
  orderings: [
    {
      title: "Work ID",
      name: "workId",
      by: [{ field: "workId", direction: "desc" }],
    },
    {
      title: "Current Job",
      name: "current",
      by: [{ field: "current", direction: "desc" }],
    },
  ],
};
