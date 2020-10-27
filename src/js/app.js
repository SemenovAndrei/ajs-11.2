/* eslint-disable no-restricted-syntax */
import charactersList from './characters/characterslist';
import Team from './team';

const team = new Team();
team.addAll(charactersList);


for (const person of team) {
  console.log(person);
}
console.log('\n team.toArray():');

const members = team.toArray();
members.forEach((e) => {
  console.log(e);
});
