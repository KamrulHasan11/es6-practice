const schoolFriendAges = [12, 15, 13, 14, 14, 15];
const collageFriendAges = [19, 19, 20, 18, 17, 17];
const universityFriendAges = [22, 23, 24, 23, 22, 23];
const allAges = schoolFriendAges.concat(collageFriendAges).concat([7]).concat(universityFriendAges);
console.log(allAges);

const allAges2 = [...schoolFriendAges, ...collageFriendAges, 7, ...universityFriendAges];
console.log(allAges2);

const business = 750;
const minister = 550;
const govtEmployee = 470;
const largestNum = 950;
const takaPoisha = [750, 550, 470, 950];
// const maximum = Math.max(business, minister, govtEmployee, largestNum);
const maximum = Math.max(...takaPoisha);
console.log(maximum);


// const schoolFriendAges2 = [12, 13, 12, 11, 10, 13];
// const collageFriendAges2 = [15, 16, 16, 17, 14, 16];
// const universityFriendAges2 = [20, 20, 19, 18, 20, 21];
// const allAges3 = schoolFriendAges2.concat(collageFriendAges2).concat(7).concat(universityFriendAges2);
// console.log(allAges3);

// const allAges4 = [...schoolFriendAges2, ...collageFriendAges2, 7, ...universityFriendAges2];
// console.log(allAges4);

// const business2 = 7283;
// const minister2 = 3490;
// const govtEmployee2 = 3902;
// const maximum2 = Math.max(business2, minister2, govtEmployee2);
// console.log(maximum2);