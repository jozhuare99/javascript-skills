 // create a new array with 3 elements array children
 var parentArray = new Array(3);
 for (var i = 0; i < parentArray.length; i++) {
   parentArray[i] = new Array(3); 
 }
 [ [ '<3 empty items>' ], [ '<3 empty items>' ], [ '<3 empty items>' ] ]
 var parentArray1 = Array.from({length: 3}, () => Array.from({length: 3}))
 [
     [ undefined, undefined, undefined ],
     [ undefined, undefined, undefined ],
     [ undefined, undefined, undefined ]
 ]
 var parentArray2 = Array(3).fill().map(() => Array(3).fill());
 [
     [ undefined, undefined, undefined ],
     [ undefined, undefined, undefined ],
     [ undefined, undefined, undefined ]
 ]
 
 var parentArray3 = Array.apply(null, Array(3)).map(function () {
     return Array.apply(null, Array(3));
 });
 [
     [ undefined, undefined, undefined ],
     [ undefined, undefined, undefined ],
     [ undefined, undefined, undefined ]
 ]
 
 console.log(parentArray3)
 