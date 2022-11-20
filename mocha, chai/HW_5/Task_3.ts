export {};
function trimString (str: string, from: number, to: number) {
    return(str.substring(from, to));
}
console.log(trimString("Никита",1,4 ));