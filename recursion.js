Recursion PALINDROME

function estPalindrome(mot) {
  if (mot.length <= 1) {
    return true;
  }

  if (mot[0] === mot[mot.length - 1]) {
    return estPalindrome(mot.slice(1, -1));
  } else {
    return false;
  }
}

const mot = "radar";


if (estPalindrome(mot)) {
  console.log(mot + " est un palindrome.");
} else {
  console.log(mot + " n'est pas un palindrome.");
}

