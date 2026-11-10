self.addEventListener("message", (event) => {
    const iterations = event.data;
    const startTime = performance.now();
    let total = 0;

    for (let i = 0; i < iterations; i++) {
        total += Math.sqrt(i);
    }

    const durationMs = performance.now() - startTime;
    self.postMessage({ total, durationMs });
});
