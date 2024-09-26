export const flatten = (list: any[]): any[] =>
    list.reduce((acc, el) => acc.concat(el), []);