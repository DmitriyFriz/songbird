import data from '../data/data';

function getGroup(group) {
  return data[group].map(item => {
    item.answer = null;
    return item
  });
}

function getItemById(group, id) {
  return data[group].find(item => item.id === id);
}

function getRandomItem(group) {
  const randomIndex = Math.floor(Math.random()*data[group].length);
  return data[group][randomIndex];
}

function getMaxGroup() {
  return data.length;
}

export {getGroup, getItemById, getRandomItem, getMaxGroup};
