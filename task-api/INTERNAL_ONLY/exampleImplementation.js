import { getJoeFriends, getJoeFriendDetails } from './rest';

export const run = () => {
    throw new Error('Not implemented yet');
};

// This is the reference model, optimal implementation
// export const run = async () => {
//   ///Your code goes here
//   const friends = await getJoeFriends();
//   const count = (
//     await Promise.all(
//       friends.map(
//         async (friend) => (await getJoeFriendDetails(friend.id)).friendsCount,
//       ),
//     )
//   ).reduce((sum, x) => sum + x);
//   return count;
//   //
// };

// // This one consist of a bug, getJoeFriendDetails(friend.id) is a async function and we need to await for it to be executed to get the friendsCount, like this that returns a promise and friendsCount cannot be resolved.
// export const run = async () => {
//   const friends = await getJoeFriends();

//   const items = await Promise.all(
//     friends.map(async (friend) => getJoeFriendDetails(friend.id).friendsCount),
//   );
//   return items.reduce((sum, x) => sum + x);
// };

// // This one has a bug, the forEach function works with callback and does not halt fow await. Also forEach cannot return a value so Promise.all cannot be implemented, we need to change that to use a map
// export const run = async () => {
//   let items: number[] = [];
//   const friends = await getJoeFriends();

//   friends.forEach(async (friend) => {
//     items.push((await getJoeFriendDetails(friend.id)).friendsCount);
//   });
//   return items.reduce((sum, x) => sum + x);
// };

// // This is an inefficient implementation as for loops are running in the same tread as all other statements, this meas that all await statements will halt the execution in the for loop. This will make the calls to be run one after the other and not in parallel.
// export const run = async () => {
//   const friends = await getJoeFriends();
//   let count: number = 0;

//   for (let i = 0; i < friends.length; i++) {
//     const detailed = await getJoeFriendDetails(friends[i].id);
//     count += detailed.friendsCount;
//   }
//   return count;
// };

try {
    run();
} catch (error) {
    console.error(error);
}
