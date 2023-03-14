const date1 = new Date('2022-05-01');
const date2 = new Date('2023-03-14');

const differenceInMs = Math.abs(date2 - date1);
const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

console.log(differenceInDays); // Output: 317
