const playersMale = [
  {id: 1, name: "Jo", category: "male", phoneNumber: "0495 333 222"},
  {id: 2, name: "Mike", category: "male", phoneNumber: "0495 321 123"},
  {id: 3, name: "Phil", category: "male", phoneNumber: "0455 535 321"},
  {id: 4, name: "Bart", category: "female", phoneNumber: "0465 565 623"},
  {id: 5, name: "Clive", category: "female", phoneNumber: "0444 434 341"},
  {id: 6, name: "Rick", category: "male", phoneNumber: "0455 905 900"},
  {id: 7, name: "Nick", category: "male", phoneNumber: "0475 396 099"},
  {id: 8, name: "Moe", category: "male", phoneNumber: "0434 335 654"},
  {id: 9, name: "Alan", category: "male", phoneNumber: "0484 392 201"},
  {id: 10, name: "Jack", category: "male", phoneNumber: "0465 478 512"},
  {id: 11, name: "Kyle", category: "male", phoneNumber: "0493 372 282"},
  {id: 12, name: "Dan", category: "male", phoneNumber: "0433 562 728"},
  {id: 13, name: "Chris", category: "male", phoneNumber: "0462 563 487"},
  {id: 14, name: "Ted", category: "male", phoneNumber: "0485 903 773"},
  {id: 15, name: "Vince", category: "male", phoneNumber: "0466 839 281"},
  {id: 16, name: "Matt", category: "male", phoneNumber: "0472 493 150"},
  {id: 17, name: "Glen", category: "male", phoneNumber: "0456 783 218"}
  // {id: 18, name: "Paul", category: "male", phoneNumber: "0468 224 342"},
  // {id: 19, name: "Sean", category: "male", phoneNumber: "0457 558 924"},
  // {id: 20, name: "Tom", category: "male", phoneNumber: "0476 329 810"},
  // {id: 21, name: "Sam", category: "male", phoneNumber: "0481 123 594"},
  // {id: 22, name: "James", category: "male", phoneNumber: "0432 905 415"},
  // {id: 23, name: "Liam", category: "male", phoneNumber: "0463 329 612"},
  // {id: 24, name: "Harry", category: "male", phoneNumber: "0492 415 297"},
  // {id: 25, name: "Max", category: "male", phoneNumber: "0459 312 213"},
  // {id: 26, name: "Evan", category: "male", phoneNumber: "0474 897 525"},
  // {id: 27, name: "Isaac", category: "male", phoneNumber: "0446 932 411"},
  // {id: 28, name: "Fred", category: "male", phoneNumber: "0451 992 712"},
  // {id: 29, name: "Lucas", category: "male", phoneNumber: "0435 602 935"},
  // {id: 30, name: "Josh", category: "male", phoneNumber: "0497 223 919"},
  // {id: 31, name: "Jared", category: "male", phoneNumber: "0467 553 821"},
  // {id: 32, name: "Aiden", category: "male", phoneNumber: "0458 663 924"},
  // {id: 33, name: "Simon", category: "male", phoneNumber: "0487 223 412"},
  // {id: 34, name: "Scott", category: "male", phoneNumber: "0448 993 624"},
  // {id: 35, name: "Ben", category: "male", phoneNumber: "0494 731 402"},
  // {id: 36, name: "Tyler", category: "male", phoneNumber: "0462 584 101"},
  // {id: 37, name: "Alex", category: "male", phoneNumber: "0483 498 132"},
  // {id: 38, name: "David", category: "male", phoneNumber: "0456 924 410"},
  // {id: 39, name: "Luke", category: "male", phoneNumber: "0431 504 320"},
  // {id: 40, name: "Owen", category: "male", phoneNumber: "0476 902 417"},
  // {id: 41, name: "Charlie", category: "male", phoneNumber: "0493 876 214"},
  // {id: 42, name: "Jack", category: "male", phoneNumber: "0439 732 221"},
  // {id: 43, name: "Eric", category: "male", phoneNumber: "0482 923 117"},
  // {id: 44, name: "Jordan", category: "male", phoneNumber: "0469 153 381"},
  // {id: 45, name: "Marcus", category: "male", phoneNumber: "0489 914 228"},
  // {id: 46, name: "Riley", category: "male", phoneNumber: "0459 441 413"},
  // {id: 47, name: "Justin", category: "male", phoneNumber: "0437 929 421"},
  // {id: 48, name: "Aaron", category: "male", phoneNumber: "0445 830 221"},
  // {id: 49, name: "Ethan", category: "male", phoneNumber: "0454 589 121"},
  // {id: 50, name: "Ryan", category: "male", phoneNumber: "0498 200 412"},
  // {id: 51, name: "Gavin", category: "male", phoneNumber: "0475 115 239"},
  // {id: 52, name: "Dean", category: "male", phoneNumber: "0466 392 710"},
  // {id: 53, name: "Colin", category: "male", phoneNumber: "0485 573 914"},
  // {id: 54, name: "Shawn", category: "male", phoneNumber: "0451 473 392"},
  // {id: 55, name: "Brent", category: "male", phoneNumber: "0463 492 111"},
  // {id: 56, name: "Kurt", category: "male", phoneNumber: "0486 400 905"},
  // {id: 57, name: "Zach", category: "male", phoneNumber: "0443 819 213"},
  // {id: 58, name: "Victor", category: "male", phoneNumber: "0469 561 401"},
  // {id: 59, name: "Wes", category: "male", phoneNumber: "0482 629 002"},
  // {id: 60, name: "Brady", category: "male", phoneNumber: "0453 934 120"},
  // {id: 61, name: "Dylan", category: "male", phoneNumber: "0438 593 426"},
  // {id: 62, name: "Carl", category: "male", phoneNumber: "0465 928 117"},
  // {id: 63, name: "Patrick", category: "male", phoneNumber: "0479 823 220"},
  // {id: 64, name: "Louis", category: "male", phoneNumber: "0481 105 222"},
  // {id: 65, name: "Greg", category: "male", phoneNumber: "0444 722 199"},
  // {id: 66, name: "Clint", category: "male", phoneNumber: "0463 712 914"},
  // {id: 67, name: "Bruce", category: "male", phoneNumber: "0457 802 110"},
  // {id: 68, name: "Ray", category: "male", phoneNumber: "0433 649 131"},
  // {id: 69, name: "Leon", category: "male", phoneNumber: "0449 772 420"},
  // {id: 70, name: "Roy", category: "male", phoneNumber: "0496 892 314"},
  // {id: 71, name: "Brett", category: "male", phoneNumber: "0471 530 213"},
  // {id: 72, name: "Neil", category: "male", phoneNumber: "0458 402 124"},
  // {id: 73, name: "Doug", category: "male", phoneNumber: "0484 811 622"},
  // {id: 74, name: "Geoff", category: "male", phoneNumber: "0462 995 335"},
  // {id: 75, name: "Stefan", category: "male", phoneNumber: "0447 883 522"},
  // {id: 76, name: "Martin", category: "male", phoneNumber: "0477 882 211"},
  // {id: 77, name: "Pete", category: "male", phoneNumber: "0436 634 392"},
  // {id: 78, name: "Troy", category: "male", phoneNumber: "0491 484 314"},
  // {id: 79, name: "Brad", category: "male", phoneNumber: "0483 234 915"},
  // {id: 80, name: "Frank", category: "male", phoneNumber: "0443 119 430"},
  // {id: 81, name: "Hank", category: "male", phoneNumber: "0478 331 524"},
  // {id: 82, name: "Reed", category: "male", phoneNumber: "0459 223 419"},
  // {id: 83, name: "Casey", category: "male", phoneNumber: "0439 559 612"},
  // {id: 84, name: "Jake", category: "male", phoneNumber: "0442 438 712"},
  // {id: 85, name: "Nathan", category: "male", phoneNumber: "0490 204 534"},
  // {id: 86, name: "George", category: "male", phoneNumber: "0469 314 509"},
  // {id: 87, name: "Blake", category: "male", phoneNumber: "0487 394 632"},
  // {id: 88, name: "Logan", category: "male", phoneNumber: "0468 532 323"},
  // {id: 89, name: "Rex", category: "male", phoneNumber: "0454 982 620"},
  // {id: 90, name: "Travis", category: "male", phoneNumber: "0471 382 920"},
  // {id: 91, name: "Nolan", category: "male", phoneNumber: "0438 204 233"},
  // {id: 92, name: "Clark", category: "male", phoneNumber: "0480 725 442"},
  // {id: 93, name: "Derek", category: "male", phoneNumber: "0467 113 233"},
  // {id: 94, name: "Ken", category: "male", phoneNumber: "0472 423 615"},
  // {id: 95, name: "Quinn", category: "male", phoneNumber: "0434 991 523"},
  // {id: 96, name: "Harvey", category: "male", phoneNumber: "0489 331 928"},
  // {id: 97, name: "Seth", category: "male", phoneNumber: "0460 292 914"},
  // {id: 98, name: "Ed", category: "male", phoneNumber: "0499 905 392"},
  // {id: 99, name: "Ian", category: "male", phoneNumber: "0437 663 721"},
  // {id: 100, name: "Tommy", category: "male", phoneNumber: "0482 330 113"}
];

export default playersMale;
