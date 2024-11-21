// Snowflake Generation
document.addEventListener("DOMContentLoaded", () => {
    const snowflakesContainer = document.createElement('div');
    snowflakesContainer.classList.add('snowflakes');
    document.body.appendChild(snowflakesContainer);

    const numSnowflakes = 100; // Number of snowflakes to create

    for (let i = 0; i < numSnowflakes; i++) {
        let snowflake = document.createElement('span');
        snowflakesContainer.appendChild(snowflake);
        snowflake.style.left = `${Math.random() * 100}%`; // Random horizontal position
        snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`; // Random falling speed
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay before starting
    }
});
