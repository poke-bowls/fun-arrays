var dataset = require('./dataset.json');
var accounts = dataset.bankBalances;

/*
  create an array with accounts from bankBalances that are
  greater than 100000.00
  assign the resulting array to `hundredThousandairs`
*/

var hundredThousandairs = accounts.filter(function ( element, index, array ) {
  if ( element.amount > 100000.00 ) {
    return element;
  }
  });

/*
  set a new key for each object in bankBalances named `rounded`
  the value of this key will be the `amount` rounded to the nearest dollar
  example
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting array to `roundedDollar`
*/

var roundedDollar = accounts.map( function ( element, index, array ) {
    return {
      "amount": element.amount,
      "state": element.state,
      "rounded": Math.round( Number.parseFloat( element.amount ))
    };
  });

/*
  set a the `amount` value for each object in bankBalances
  to the value of `amount` rounded to the nearest 10 cents
  example
    {
      "amount": 134758.4,
      "state": "HI"
    }
  assign the resulting array to `roundedDime`
*/

var roundedDime = accounts.map( function ( element, index, array ) {
  return {
    "amount": Math.round (Number.parseFloat( element.amount * 10 )) / 10,
    "state": element.state
  };
});

// set sumOfBankBalances to the sum of all amounts in bankBalances

var sumOfBankBalances = accounts.reduce( function ( prev, curr, array ) {
  var currentvalue = Number.parseFloat(curr.amount);
  return Math.round((prev + currentvalue) * 100) / 100;
}, 0);

/*
  set sumOfInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  in each of the following states
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */
var filteredList = accounts.filter( function ( element, index, array ) {
  if ( element.state === 'WI' || element.state === 'IL' || element.state === 'WY' || element.state === 'OH' || element.state === 'GA' || element.state === 'DE' ) {
    return element;
  }
});

var sumOfInterests = filteredList.reduce( function ( prev, curr, array) {
  var interest = 0;
  var currentvalue = Number.parseFloat(curr.amount);
  interest += (prev + (currentvalue * 0.189));
  console.log(interest);
  return Math.round((interest) * 100)/100;
  }, 0);

/*
  set sumOfHighInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  where the amount of the sum of interests in that state is
    greater than 50,000
  in every state except
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */

var sumOfHighInterests = null;

/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table
    where the key is the two letter state abbreviation
    and the value is the sum of all amounts from that state
      the value must be rounded to the nearest cent
 */

var stateSums = null;

/*
  set lowerSumStates to an array containing
  only the two letter state abbreviation of each state
  where the sum of amounts in the state is
    less than 1,000,000
 */

var lowerSumStates = null;

/*
  set higherStateSums to be the sum of
    all amounts of every state
    where the sum of amounts in the state is
      greater than 1,000,000
 */

var higherStateSums = null;

/*
  set areStatesInHigherStateSum to be true if
    all of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */

var areStatesInHigherStateSum = null;

/*
  set anyStatesInHigherStateSum to be true if
    any of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */

var anyStatesInHigherStateSum = null;

module.exports = {
  hundredThousandairs : hundredThousandairs,
  roundedDollar : roundedDollar,
  roundedDime : roundedDime,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};