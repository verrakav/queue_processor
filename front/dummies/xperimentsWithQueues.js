//NOTE: What a queue looks like
//  [ {queueNumber: 1, queueItem: [{name: 'Jo'...}, {name: 'Mike'}]},
//   {queueNumber: 2, queueItem: [{name: 'Phil'}, {name: 'Bart'}]} ]

// a player {id: 1, name: "Jo", category: "male", phoneNumber: "0495 333 222"},

import playersMale from "./dummy1.js";

const playersMaleUpdated = playersMale.map(e => {
  e.assignedToQueue = false;
  return e;
});
// console.log(playersMaleUpdated);

console.log("******* PRIVET *******");

const queues = [
  {queueNumber: 1, queueItems: []},
  {queueNumber: 2, queueItems: []},
  {queueNumber: 3, queueItems: []},
  {queueNumber: 4, queueItems: []}
];

// console.log(8 / 3);
// console.log(Array.isArray(playersMale));

//NOTE: add 1 item to a queue
function addItemToQueue(item, queue) {
  //   console.log(item);
  item.assignedToQueue = true;
  queue.queueItems.push(item);
  return queue;
}

// console.log(addItemToQueue(playersMaleUpdated[6], queues[3]));
// console.log("++++++++++++++++++++");

//NOTE: use add 1 item to a queue here
function addAllToQueues(items, queues) {
  //get how many items in a queue
  const totalItems = items.length;

  let j = 0;
  for (let i = 0; i < totalItems; i++) {
    const totalQueues = queues.length;
    if (j == totalQueues) j = 0;
    addItemToQueue(items[i], queues[j]);
    j++;
  }
  // a node thing to cl the full content of objs
  console.dir(queues, {depth: null, name: true});
  // console.log("++++++++++++++++++++");
  return queues;
}

addAllToQueues(playersMale, queues);

//NOTE:
function progressQueueOneStep(queue) {
  queue.queueItems.shift();
  return queue;
}

// console.log(progressQueueOneStep(queues[0]));
// console.log("++++++++++++++++++++");

//NOTE: remove particular item
function removeParticularItem(queue, toRemove) {
  console.log(toRemove);
  return queue.queueItems.filter(item => item.name !== toRemove.name);
}

// console.log(removeParticularItem(queues[0], queues[0].queueItems[1]));
// console.log("++++++++++++++++++++");

//NOTE:
