//Binary search from Khan Academy Challenge

var doSearch = function(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    var totalGuesses = 1;
    while (min <= max) {
        var totalNumberOfGuesses = 1;
        guess = Math.floor((max + min) / 2);
        println(totalNumberOfGuesses += 1);
        if (array[guess] === targetValue) {
            println("Total guesses " + totalGuesses);
            return guess;
        } else if (array[guess] > targetValue) {
            max = guess - 1;
        } else {
            min = guess + 1;
        }
        totalGuesses += 1;
        println(guess);
    }
    return -1;
};

//Tests
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
];
var result = doSearch(primes, 29);
println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 29), 9);
Program.assertEqual(doSearch(primes, 2), 0);