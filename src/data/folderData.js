const structureData = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "index.html",
          isFolder: false,
        },
        {
          name: "manifest.json",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "App.css",
          isFolder: false,
        },
        {
          name: "App.js",
          isFolder: false,
        },
        {
          name: "index.js",
          isFolder: false,
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
  ],
};

export default structureData;
