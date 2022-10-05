export {};
function foo () {
    console.log("Foo");
};

function boo () {
    console.log("Boo")
};

function fooBoo(bool: boolean, foo: any, boo: any) {
    if (bool == true) {
        console.log(foo);
    } else {
        console.log(boo);
    }
}
fooBoo(false, foo, boo);