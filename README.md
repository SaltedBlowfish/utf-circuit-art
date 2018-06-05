# UTF Circuit Art

╯╭╯● ╰╮╰──╯ ╭───╮╭──╯●╰╯│╭╮╰╮╭╯╰╮│●╰╯ ╰╮╭╮││╰╯╭╯ │ ╰╮ │╰╯│╭╯╭──●││╭╮╰╯ ╰───╮│  ╰╯ ╰╮ ││╭╮│ ╰─╮  ●╭╮││││  │ ●│     ╰╮╭─●╰╯╰╯╭
╮╰╮╰─╮│  ╭──╯ ╭╮╰╯ ╭╮│ ╭╯│╰╮╰╯●─╯╰╮  ╭─╯│╰╯╰──╯╭─╯ ╭╯╭╯  ●╯╭╯  ╰╯╰╯│●╭────╮╰╯╭╮ ╭──╯●╯││╰╯ ╭╮╰─╮╰╯│●╰╯│●╭╯ ╰╯╭───╮╭╯│ ╰──╮ ╰
│╭╯╭╮││●─╯   ╭╯╰─╮ │││╭╯ ╰─╯╭──╮● │╭─●──╯     ╭● ●─●╮│ ╭╮ ╭╯  ● ╭●─╯ ╰●  ╭╯╭─╯│╭╯  ╭╮ │╰╮  ╰╯ ●╰●─╯│╭─╯││╭╮  ●╭●╮││╭╯╭╮╭─╯  
╯╰─╯╰●│╰╮ ╭╮ ╰───╯╭╯│╰╯╭╮╭╮ ● ●╯ ╭╯│   ╭╮  ●  ││ │╭╮│╰─●│●│╭╮╭╯ │ ╭●╭╮│╭╮●╭╯╭╮│╰╮  │╰╮│╭╯      ╭╮╭╮│╰╮╭╯│╰╯╭──╯││●│╰─╯●│╭───
─● ╭─╮╰╮╰╮│●─╮ ╭──╯╭╯ ╭╯││╰──╮│ ●╰─╯ ╭─╯╰──╮ ●╯╰╮│││╰╮ ╰●─╯╰●╯  ╰╮│╭╯││●╯╭●╭╯●╰─╯  ╰╮╰╯│╭─╮  ╭╮│││╰╯ ╰╯╭●──╯ ╭╮││ ╰╮●╭╯╰●╭──
╮ ╭╯╭╯╭╯ │╰╮ ╰╮●╮●╮╰╮ │ ╰╯╭╮ ││●╰───╮╰╮●──╮╰╮╰──╯╰╯●╭●╭╮│╭─╮│╭╮╭─●╰╯ ╰╯ ╭╯╰● │╭──╮╭╮│ ╭●╯╭╯╭─╯│●╯╰╮ ●─╮╰╯ ╭╮╭╯╰╯│ ╭●╮●──╯●──
╯ │╭╯ ╰─╮│╭╯╭╮│╰╯╰╯╭╯ ●──╮││╭╯╰╯╭───╯╭╯╭╮ ╰─● ● ╭──╮│╭╯││╰╮╰╯│●│ │╭╮╭───╯  ╭╮│●─╮│●╯│ │╭─╯╭╯╭╮│ ●╮╰╮╰╮╰───●╰╯   ●╮●╯╰╯  ╭╯ ╭
╭─╯│ ╭╮ │╰╯ ╰╯● ╭╮ │   ╭╮│●╰╯╭╮╭╯╭╮╭●╰─●╰─╮   ╰╮│╭╮│●│●╯│╭╯╭●╯ │╭╯╰╯│ ╭╮   ●╰╯╰─●╰─╮│╭╯╰─╮│ ││● ╭╯ │╭╯╭╮●╭╯╭──● ╰╯╭╮   ╭● ╭●
╯╭─╯╭╯│●╰───●╭╯ ●╰─╯ ●╭╯╰╯  ╭╯││ ││╰╮╭●╯  ╰─╮╭─╯╰╯││╰╯  ●╯●╰╮╭─●│╭──╯ ╰╯╭╮●│╭╮╭╮╰╮╭╯│╰╮ ╭╯●╮││╭─╯╭╮││ ╰╯╰╯╭╯ ╭───╮╰╯╭╮╭╯╭─╯
─╯  │╭●╭╮ ╭●╮╰╮╭─╮ ●──╯╭──● ●╮│╰─╯●╭╯││╭╮●──╯│  ╭╮╰●╭───╮  ╭╯│╭─╯╰──╮● ╭╯│╭╯│╰╯╰─╯╰─●╭●╮│╭╮╰╯╰╯ ╭╯│╰╯╭╮  ╭●─╮╰─╮ ╰╮╭╯│●╮│ ╭─

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

## Options

These are the defaults. You can pass in any modifications to these values when calling `circuitArt.generate()`.

```
blank: { chance: 1 },         // options for space character ( )
columns: 30,                  // # of columns in output
downAndRight: { chance: 1 },  // options for downAndRight character (╰)
horizontal: { chance: 1 },    // options for horizontal line character (─)
node: { chance: 1 },          // options for node character (●)
rightAndDown: { chance: 1 },  // options for rightAndDown character (╮)
rightAndUp: { chance: 1 },    // options for rightAndUp character (╯)
rows: 5,                      // # of rows in output
upAndRight: { chance: 1 },    // options for upAndRight character (╭)
vertical: { chance: 1 },      // options for horizontal line character (│)
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

### Building Distribution Package

`yarn run build` updates `dist` with a new build

### Sharing your Changes

Make a branch off `develop` and always submit a PR to merge your feature or bugfix to develop branch.
