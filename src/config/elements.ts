export default [
  {
    edges: [],
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
    edges: ["top", "right"],
    name: "downAndRight",
    rules: {
      density: 0.1,
      validUnless: {
        cellAbove: ["blank", "horizontal", "downAndRight", "rightAndUp"],
        cellToTheLeft: ["horizontal", "downAndRight", "upAndRight"],
      },
    },
    // ╰
    value: "\u2570",
  },
  {
    edges: ["left", "right"],
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
    edges: [],
    name: "node",
    rules: {
      density: 0.2,
      validUnless: {
        cellAbove: ["node"],
        cellToTheLeft: ["node"],
      },
    },
    // ●
    value: "\u25CF",
  },
  {
    edges: ["left", "bottom"],
    name: "rightAndDown",
    rules: {
      density: 0.1,
      validUnless: {
        cellAbove: ["vertical", "rightAndDown", "upAndRight"],
        cellToTheLeft: ["blank", "vertical", "rightAndDown", "rightAndUp"],
      },
    },
    // ╮
    value: "\u256E",
  },
  {
    edges: ["left", "top"],
    name: "rightAndUp",
    rules:   {
      density: 0.1,
      validUnless: {
        cellAbove: ["blank", "horizontal", "downAndRight", "rightAndUp"],
        cellToTheLeft: ["blank", "vertical", "rightAndDown", "rightAndUp"],
      },
    },
    // ╯
    value: "\u256F",
  },
  {
    edges: ["bottom", "right"],
    name: "upAndRight",
    rules: {
      density: 0.1,
      validUnless: {
        cellAbove: ["vertical", "rightAndDown", "upAndRight"],
        cellToTheLeft: ["horizontal", "downAndRight", "upAndRight"],
      },
    },
    // ╭
    value: "\u256D",
  },
  {
    edges: ["top", "bottom"],
    name: "vertical",
    rules: {
      density: 0.1,
      validUnless: {
        cellAbove: ["blank", "horizontal", "downAndRight", "rightAndUp"],
        cellToTheLeft: ["horizontal", "downAndRight", "upAndRight"],
      },
    },
    // │
    value: "\u2502",
  },
];
