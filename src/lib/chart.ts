import Chart from "chart.js/auto";

Chart.defaults.backgroundColor = "#1e1e2e";
Chart.defaults.borderColor = "#313244";
Chart.defaults.color = "#a6adc8";
Chart.defaults.elements.arc.borderColor = "#cdd6f4";
Chart.defaults.elements.point.radius = 0;
Chart.defaults.elements.point.hitRadius = 8;
Chart.defaults.font.family = "PT Sans";
Chart.defaults.plugins.legend.display = false;
Chart.defaults.scale.ticks.display = false;
Chart.defaults.scale.min = 4;

export const CHART_COLORS = [
    "rgb(243, 139, 168, 0.5)",
    "rgb(250, 179, 135, 0.5)",
    "rgb(249, 226, 175, 0.5)",
    "rgb(166, 227, 161, 0.5)",
    "rgb(137, 180, 250, 0.5)",
    "rgb(180, 190, 254, 0.5)"
];

export const createChart = (
    target: HTMLCanvasElement,
    data: Record<string, number>
) =>
    new Chart(target, {
        type: "polarArea",
        options: {
            scales: {
                r: {
                    pointLabels: {
                        centerPointLabels: true,
                        color: "#bac2de",
                        display: true,
                        font: {
                            family: "PT Sans",
                            size: 18
                        }
                    }
                }
            }
        },
        data: {
            labels: Object.keys(data),
            datasets: [
                {
                    data: Object.values(data),
                    backgroundColor: CHART_COLORS
                }
            ]
        }
    });
