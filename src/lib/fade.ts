const container = document.getElementById("fade")!;

for (let i = 0; i < container.children.length; i++) {
    const child = container.children[i] as HTMLElement;
    child.style.pointerEvents = "none";
    child.style.opacity = "0";

    setTimeout(
        () => {
            child.style.pointerEvents = "unset";
            child.style.opacity = "1";
        },
        i * 200 + 500
    );
}
