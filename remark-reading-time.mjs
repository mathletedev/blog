import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

// calculate reading time for an mdx file: https://docs.astro.build/en/recipes/reading-time/
export const remarkReadingTime =
    () =>
    (tree, { data }) => {
        data.astro.frontmatter.minutesRead = getReadingTime(toString(tree));
    };
