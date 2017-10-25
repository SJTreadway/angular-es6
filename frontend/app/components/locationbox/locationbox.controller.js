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
			if ($scope.anagrams.length > 9) {
				$scope.anagrams.shift();
			}
			$scope.anagram = shuffle(word);
			$scope.anagrams.push($scope.anagram);
		};

		$scope.reset = () => {
			$scope.userInput = null;
			$scope.anagram = null;
			$scope.anagrams = [];
		};

		$scope.highlight = (index) => {
			
		};

	}
}

LocationboxController.$inject = ["$scope"];

export default LocationboxController;
