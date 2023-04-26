module.exports = {
  packagerConfig: {
    ignore: ["^(/src/render$)"],
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-wix',
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
