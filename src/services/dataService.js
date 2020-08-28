import data from '../data/data';

data.forEach(itemArr => itemArr.forEach(item => item.answer = null));

function getGroup(groupNumber) {
  return data[groupNumber];
}

function getItemById(group, id) {
  return group.find(item => item.id === id);
}

function getRandomItem(groupNumber) {
  const randomIndex = Math.floor(Math.random()*data[groupNumber].length);
  return data[groupNumber][randomIndex];
}

function getMaxGroup() {
  return data.length;
}

export {getGroup, getItemById, getRandomItem, getMaxGroup};
