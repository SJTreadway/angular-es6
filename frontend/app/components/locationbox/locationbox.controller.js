import $ from 'jquery';
import _ from 'lodash';
import angular from 'angular';

class LocationboxController {
	constructor($scope){

		$scope.anagrams = [];

		const shuffle = (word) => {
			let newWord = word.split('');
			const length = newWord.length;
	
			for(let i = 0; i < length; i++) {
				let random = Math.floor(Math.random() * (i + 1));
				let temp = newWord[i];
				newWord[i] = newWord[random];
				newWord[random] = temp;
			}
			return newWord.join('');	
		};

		$scope.anagramize = (word) => {
			if (!word) {
				return;
			}
			$scope.anagram = {
				word: shuffle(word),
				keep: false
			};
			if ($scope.anagrams.length > 9) {
				let i = 0;
				while ($scope.anagrams[i].keep && i < 9) {
					i++;
				}
				if (i <= 9 && !$scope.anagrams[i].keep) {
					$scope.anagrams.splice(i, 1);
				} else {
					return;
				}
			}
			$scope.anagrams.push($scope.anagram);
		};

		$scope.reset = () => {
			$scope.userInput = null;
			$scope.anagram = null;
			$scope.anagrams = [];
		};

		$scope.highlight = (anagram) => anagram.keep = !anagram.keep;

		$scope.sortTable = () => $scope.anagrams = _.sortBy($scope.anagrams, 'word');
	}
}

LocationboxController.$inject = ["$scope"];

export default LocationboxController;
