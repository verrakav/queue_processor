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

// const queues = [
//   {queueNumber: 1, queueItems: []},
//   {queueNumber: 2, queueItems: []},
//   {queueNumber: 3, queueItems: []}
//   {queueNumber: 4, queueItems: []}
// ];

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

// addAllToQueues(playersMale, queues);

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

//NOTE: redestributes items in the queues
//dummy queues
const queuesFilled = [
  {
    queueNumber: 1,
    // has 7
    queueItems: [
      {id: 1, name: "Jo", category: "male", phoneNumber: "0495 333 222"},
      {id: 2, name: "Mike", category: "male", phoneNumber: "0495 321 123"},
      {id: 3, name: "Phil", category: "male", phoneNumber: "0455 535 321"},
      {id: 4, name: "Bart", category: "female", phoneNumber: "0465 565 623"},
      {id: 5, name: "Clive", category: "female", phoneNumber: "0444 434 341"},
      {id: 6, name: "Rick", category: "male", phoneNumber: "0455 905 900"},
      {id: 7, name: "Nick", category: "male", phoneNumber: "0475 396 099"}
    ]
  },
  {
    queueNumber: 2,
    // has 5
    queueItems: [
      {id: 8, name: "Moe", category: "male", phoneNumber: "0434 335 654"},
      {id: 9, name: "Alan", category: "male", phoneNumber: "0484 392 201"},
      {id: 10, name: "Jack", category: "male", phoneNumber: "0465 478 512"},
      {id: 11, name: "Kyle", category: "male", phoneNumber: "0493 372 282"},
      {id: 12, name: "Dan", category: "male", phoneNumber: "0433 562 728"}
    ]
  },
  {
    queueNumber: 3,
    //  has 2
    queueItems: [
      {id: 13, name: "Chris", category: "male", phoneNumber: "0462 563 487"},
      {id: 14, name: "Ted", category: "male", phoneNumber: "0485 903 773"}
    ]
  }
];

//NOTE: func to check the shortest q length use the num for the slicing
// returns the length of the queue
function findShortestQueue(queues) {
  const shortesQueue = queues.reduce(
    (acc, curVal) =>
      acc.queueItems.length < curVal.queueItems.length ? acc : curVal,
    queues[0]
  ).queueItems.length;
  return shortesQueue;
}
console.log(findShortestQueue(queuesFilled));

//NOTE: func get slices of qs (for updating state)    sliced = queues[i].queueItems.slice(2);

// NOTE:
function redestributeQueues(queues) {
  // const items = queues.queueItems;
  let tempQ = [];
  let slicingCollection = [];
  for (let i = 0; i < queues.length; i++) {
    //check every Q for length
    let sliced = [];
    if (queues[i].queueItems.length > 3) {
      sliced = queues[i].queueItems.slice(2);
      slicingCollection.push(sliced);
      /* if length < 3 take a slice  
        make vars for the slices
        the slice from idx 3 to the end*/
      console.log(slicingCollection);
      console.log("++++++++++++++++++++");
    }
    console.log(sliced);
  }
  //merge the slices keeping the order = temporaryQueue
  //use addAllToQueues in the temporaryQueue
  // console.dir(queuesFilled, {depth: null, name: true});
  console.log("++++++++++++++++++++");

  return queues;
}

// redestributeQueues(queuesFilled);
