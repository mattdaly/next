## Taco

-   Can't use taco without forcing client rendering or using use client specific wrappers
-   Taco import uses cjs which requires installing dependencies like lodash

## Structure

-   The file naming (layout.tsx and page.tsx) naming is a little annoying from an ide perspective
-   Slots and intercepting routes is powerful, but the architecture is confusing with the file based routing and rendering slots in layouts

## Loading state

-   Placing a suspense boundary in layouts is useful, but can also be a bad thing when using async components. It can lead to waterfall loading states if not careful, it's probably better to defer loading optimisation and states to the page.

## Data fetching

-   Important to note/document parallel loading should use Promise.all, to keep performance optimal
