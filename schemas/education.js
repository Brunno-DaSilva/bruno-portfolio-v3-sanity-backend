export default {
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    {
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "dd-MMM-YYYY",
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
};
