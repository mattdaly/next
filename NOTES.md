## Taco

-   Can't currently use taco without forcing client rendering or using use client specific wrappers
-   Taco import uses cjs, a note for the design system team but this shouldn't be the case

## Structure

-   The file naming (layout.tsx and page.tsx) naming is a little annoying from an ide perspective, with every tab named the same. There's probably a plugin or something to fix that
-   Slots and intercepting routes are powerful, but the architecture is a little confusing at first with the file based routing and rendering slots in layouts
    -   E.g. intercepted routes as dialogs essentially have to be in slots in order to show them "over" the page content
    -   To have "dialog routes" that work when refreshing the url you have to duplicate the file structure otherwise you get 404

## Loading state

-   Placing a suspense boundary in layouts is useful, but can also be a bad thing when using async components. It can lead to waterfall loading states if not careful, it's probably better to defer loading optimisation and states to the page.

## Data fetching

-   Important to note/document parallel loading should use Promise.all, to keep performance optimal and not introduce waterfalls from await in component render. I see this as something product developers will trip up on, maybe we can lint it somehow

## DX

-   Doing git operations on paths that include special routes (@something, [id], (..)something) requires the string in quotes, annoying

## Caching

-   There are some caching issues while they are in alpha/beta https://twitter.com/TkDodo/status/1660928385554456576
