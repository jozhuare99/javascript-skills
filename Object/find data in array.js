  const bestOffer = {
      tnt: [
        {regularTopPromo: [1, 2, 10]},
        {dataTopPromo: [6, 1, 5, 3]},
        {allinTopPromo: [5, 3, 6, 7, 8, 9]},
        {internationalTopPromo: [2]},
      ],
      smart: [
        {regularBestPromo: [8, 4, 10,9]},
        {dataBestPromo: [3, 7, 1, 9,2]},
        {allinBestPromo: [2, 1, 6, 7, 8, 9]},
      ],
      globe: [
        {regularPremuimPromo: [2,4,1]},
        {dataPremuimPromo: [9,10,11]}
      ]
    }

console.log(bestOffer.tnt.find(promo => 'regularTopPromo' in promo).regularTopPromo);

// for (const carrier in bestOffer) {
//   for (const promoType of bestOffer[carrier]) {
//     console.log(Object.values(promoType)[0]);
//   }
// }

for (const carrier in bestOffer) {
  console.log(Object.values(bestOffer[carrier]));
}
for (const promoType of bestOffer.tnt) {
  console.log(Object.values(promoType)[0]);
} 
