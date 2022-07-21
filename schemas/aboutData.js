export default {
  name: "aboutData",
  title: "aboutData",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "SubTitle",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
