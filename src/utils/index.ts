export function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

export function sortByName(a: any, b: any) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}
