export function delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(); // A promessa é resolvida após o tempo especificado
        }, ms);
    });
}