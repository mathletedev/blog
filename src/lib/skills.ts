import { CHART_COLOURS, createChart } from "./chart";

const skills = document.getElementById("skills") as HTMLCanvasElement;
const nav = document.getElementById("fade")!.children as HTMLCollection;

skills.width = skills.height = Math.min(500, window.innerWidth - 32);

const CHARTS: Record<string, number>[] = [
    {
        Rust: 10,
        Go: 9,
        TypeScript: 8,
        "C/C++": 7,
        Haskell: 6,
        Gleam: 5,
    },
    {
        Astro: 10,
        Svelte: 9,
        Tailwind: 10,
        GraphQL: 9,
        tRPC: 8,
        PostgreSQL: 9,
    },
    {
        "GNU/Linux": 10,
        Nix: 9,
        Neovim: 10,
        Git: 9,
        Jira: 7,
    },
];

let chart = createChart(skills, CHARTS[0]);
(nav[0].children[0] as HTMLElement).classList.add("current");
let current = 0;

for (let i = 0; i < nav.length; i++) {
    (nav[i].children[0] as HTMLButtonElement).onclick = () => {
        (nav[current].children[0] as HTMLElement).classList.remove("current");

        chart.data.labels = Object.keys(CHARTS[i]);
        chart.data.datasets = [
            {
                data: Object.values(CHARTS[i]),
                backgroundColor: CHART_COLOURS,
            },
        ];
        chart.update();

        (nav[i].children[0] as HTMLElement).classList.add("current");
        current = i;
    };
}
