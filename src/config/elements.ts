export default [
  {
    name: "blank",
    rules: {
      validUnless: {
        cellAbove: ["vertical", "rightAndDown", "upAndRight"],
        cellToTheLeft: ["horizontal", "downAndRight", "upAndRight"],
      },
    },
    // space
    value: " ",
  },
  {
    name: "downAndRight",
    rules: {
      chance: 0.1,
      validUnless: {
        cellAbove: ["blank", "horizontal", "downAndRight", "rightAndUp"],
        cellToTheLeft: ["horizontal", "downAndRight", "upAndRight"],
      },
    },
    // ╰
    value: "\u2570",
  },
  {
    name: "horizontal",
    rules: {
      validUnless: {
        cellAbove: ["vertical", "rightAndDown", "upAndRight"],
        cellToTheLeft: ["blank", "vertical", "blank", "rightAndDown", "rightAndUp"],
      },
    },
    // ─
    value: "\u2500",
  },
  {
    name: "node",
    rules: {
      chance: 0.2,
      validUnless: {
        cellAbove: ["node"],
        cellToTheLeft: ["node"],
      },
    },
    // ●
    value: "\u25CF",
  },
  {
    name: "rightAndDown",
    rules: {
      chance: 0.1,
      validUnless: {
        cellAbove: ["vertical", "rightAndDown", "upAndRight"],
        cellToTheLeft: ["blank", "vertical", "rightAndDown", "rightAndUp"],
      },
    },
    // ╮
    value: "\u256E",
  },
  {
    name: "rightAndUp",
    rules:   {
      chance: 0.1,
      validUnless: {
        cellAbove: ["blank", "horizontal", "downAndRight", "rightAndUp"],
        cellToTheLeft: ["blank", "vertical", "rightAndDown", "rightAndUp"],
      },
    },
    // ╯
    value: "\u256F",
  },
  {
    name: "upAndRight",
    rules: {
      chance: 0.1,
      validUnless: {
        cellAbove: ["vertical", "rightAndDown", "upAndRight"],
        cellToTheLeft: ["horizontal", "downAndRight", "upAndRight"],
      },
    },
    // ╭
    value: "\u256D",
  },
  {
    name: "vertical",
    rules: {
      chance: 0.1,
      validUnless: {
        cellAbove: ["blank", "horizontal", "downAndRight", "rightAndUp"],
        cellToTheLeft: ["horizontal", "downAndRight", "upAndRight"],
      },
    },
    // │
    value: "\u2502",
  },
];
