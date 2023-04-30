module.exports = {
  packagerConfig: {
    ignore: ["^(/src/render$)"],
    icon: "src/assets/icon",
  },
  rebuildConfig: {},
  "publishers": [
    {
      "name": "@electron-forge/publisher-github",
      "config": {
        "repository": {
          "owner": "m-visaya",
          "name": "DVA"
        },
        draft: false,
      }
    }
  ],
  makers: [
    {
      name: '@electron-forge/maker-wix',
      config: {
        icon: "src/assets/icon.ico",
      },
    },
    {
      name: "@electron-forge/maker-zip",
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};
