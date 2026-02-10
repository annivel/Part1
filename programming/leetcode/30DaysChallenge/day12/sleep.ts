// 2621. Sleep
async function sleep(millis: number): Promise<void> {
    return new Promise((resolve) => { // creates a new Promise
        setTimeout(() => {
            resolve();
        }, millis) // Schedules resolved() to be called after millis milliseconds
    })
}