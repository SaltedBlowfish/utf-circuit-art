# UTF Circuit Art

This package generates a collection of UTF characters with nodes and various lines. Use it to make cool patterns in your apps or terminals windows.

# Installation

`npm i utf-circuit-art`

or

`yarn add utf-circuit-art`

## Usage

```
import circuitArt from "utf-circuit-art";

...

console.log(circuitArt.generate());
```

## Examples

### Default

```
// Generates using default options (5 rows, 30 columns, every element is weighted equally)
circuitArt.generate();

╯╭●╮●╮╭● ●╰●╯│●╭●╯●─╮╰╮╭─╯╰╯╰╯
╭╯ ●╰●╯╰●╮ ╰─╯╭● ●╰●│●││╭╮    
╰●─╮╭╮  ╭● ●╭╮│╭●╮╭╮│╰●╰╯●─╮╭╮
╭╮●╰╯●╮ ●╰╮╰●╰╯│ ││●│╭─╮╭╮╭●│╰
●│╰● │╰●─╮│   ╭● ●│││●╭●╯╰●╮│
```

### Limited Nodes

```
circuitArt.generate({
  node: { chance: 0.2 }
});

╮│ ╭─╮╰●─╯╭╮╰╯ │╰╮ │╭╮╭●────╯╰
●╯╭╯●╰╮   ╰╯╭──╯ │ ╰╯││╭╮╭╮╭──
╰─╯ │╭╯ ╭╮  ╰╮  ╭╯╭╮╭╯││╰╯│╰╮
╮╭─╮││╭╮╰╯  ╭╯╭╮│╭╯╰●╭╯│╭╮╰─╯
╯│ ╰╯╰╯│  ╭─╯ ││││ ╭─╯╭╯╰╯╭──╮
```

### No Vertical Directions

```
circuitArt.generate({
  downAndRight: { chance: 0 },
  rightAndDown: { chance: 0 },
  rightAndUp: { chance: 0 },
  upAndRight: { chance: 0 },
  vertical: { chance: 0 },
});

─●  ● ●─●──● ●─●──●──●─●─● ● ●
  ●──●─●─●────●────●──●───────
●───●───●─●─●──● ●───● ● ● ●─●
───●───●─●   ●    ●───────●───
─●  ● ● ● ●      ●───●   ●─● ●
```

### No Horizontal Directions

```
circuitArt.generate({
  downAndRight: { chance: 0 },
  rightAndDown: { chance: 0 },
  rightAndUp: { chance: 0 },
  upAndRight: { chance: 0 },
  horizontal: { chance: 0 },
});

●││ ● │● ● ││ ●   ││     ●  ●
●││●  ●││   ●│●│ ● ││ ●  ●│●  
│●│ ● │││●  │●│● │●││ │  │●  ●
● │ │●││●│● ││●│ ●│●│●│● ●│   
│●│ │ ●││││●││ │ ││││ ●│●││●  
```

## Developing / Contributing

Clone repo and install dependencies (`yarn` or `npm i`)

### Running Dev Server

`yarn run develop` starts a dev server at http://localhost:1234

### Building Distribution

`yarn run build` updates `dist` with a new build
