# DSA in TypeScript

A comprehensive environment for practicing Data Structures & Algorithms using TypeScript.

## Project Structure

```
dsa/
├── src/
│   ├── 01-number-system/
│   ├── 02-bit-manipulation/
│   ├── 03-mathematics/
│   ├── 04-arrays/
│   ├── 05-searching/
│   ├── 06-sorting/
│   ├── 07-strings/
│   ├── 08-recursion/
│   ├── 09-backtracking/
│   ├── 10-linked-list/
│   ├── 11-stack/
│   ├── 12-queue/
│   ├── 13-hashing/
│   ├── 14-two-pointers/
│   ├── 15-sliding-window/
│   ├── 16-binary-search/
│   ├── 17-trees/
│   ├── 18-binary-search-tree/
│   ├── 19-heaps/
│   ├── 20-greedy/
│   ├── 21-graphs/
│   ├── 22-dynamic-programming/
│   ├── 23-trie/
│   ├── 24-segment-tree/
│   ├── 25-disjoint-set/
│   ├── 26-advanced-graphs/
│   ├── 27-advanced-dp/
│   └── playground/
│       └── index.ts
├── dist/
├── package.json
├── tsconfig.json
└── README.md
```

## Available Scripts

### `npm run dev`
Runs a TypeScript file with **hot-reload** using nodemon + ts-node.  
By default, it runs `src/playground/index.ts`.  
To run a different file, update the path in the `dev` script in `package.json`.

### `npm run build`
Compiles all TypeScript files from `src/` to JavaScript in `dist/`.

### `npm run start`
Runs the compiled JavaScript output from `dist/playground/index.js`.

## How to Run a Specific DSA File

To run a specific file (e.g., `src/04-arrays/example.ts`), use:

```bash
npx ts-node src/04-arrays/example.ts
```

Or temporarily update the `dev` script in `package.json`:

```json
"dev": "nodemon --exec ts-node src/04-arrays/example.ts"
```

Then run:

```bash
npm run dev
```

## Getting Started

```bash
# Verify the setup
npm run dev
```

You should see:

```
DSA with TypeScript is ready!
```

Happy coding! 🚀