const obj = {
  newObj: {
    obj1: 'something1',
    obj2: 'something2',
    obj3: 'something3',
  },
  obj4: '',
  obj5: '',
};

const newThing = 'newthing1';
const newThing2 = 'newthing2';

const update = () => {
  return {
    ...obj,
    obj4: newThing,
  };
};
const update2 = () => {
  return {
    ...obj,
    obj5: newThing2,
  };
};
// const update = () => {
//   return (obj.newObj.obj1 = newThing);
// };
// const update2 = () => {
//   return (obj.newObj.obj2 = newThing2);
// };

console.log(update(), update2());
console.log(obj);
