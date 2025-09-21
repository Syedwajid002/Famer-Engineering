// utils/importImages.ts
export function importAll(r: Record<string, () => Promise<any>>): string[] {
    return Object.keys(r).map((key) => r[key]().then((m) => m.default));
}
