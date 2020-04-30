function foo(a) {
    var b = a * 2;
    function bar (c){
        console.log(a,b,c);
    }
    bar(b*4); //set c = b*4 which =16
}
foo(2);

// console.log(foo(2))