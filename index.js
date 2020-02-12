
for (const [i,v] of  [1,3 ,2, 6, 7].entries()) {
    //console.log(i, v);
}
if (![1,2].includes(3)) {
    console.log('Not found')
 }
 Math.pow(4, 2);
 let x  = 2;
 const r1 = x++ + x++; // 6
 const r2 = ++x + ++x; // 6
 const r3 = x++ + ++x;
 const r4 = ++x + x++;
 console.log(r1);
 console.log(r2);
 console.log(r3);
 console.log(r4);
 let y = 10;
 const r5 = y-- + y--; // 18
 const r6 = --y + --y; //
 const r7 = y-- + --y;
 const r8 = --y + y--;
 console.log(r5);
 console.log(r6);
 console.log(r7);
 console.log(r8);

 const SYM = Symbol();
 const o = { a: 1, b: 2, c: 3, [SYM]: 4 };
Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));