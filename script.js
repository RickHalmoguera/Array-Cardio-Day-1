const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

  
const people = [
'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

/*--------------------------------------------------EXERCISE 1-------------------------------------------------------*/

console.table(inventors)
console.log("Exercise 1: Filter the list of investors for those who were born in the 1500´s")



const checkYearBorn = (inventor)=> (inventor.year >1499 && inventor.year < 1600)

const result = inventors.filter(checkYearBorn)
console.log("Answer:")
console.table(result)
console.log("/////////////////////////////////////////////")



/*--------------------------------------------------EXERCISE 2-------------------------------------------------------*/
console.log("Exercise 2: Give us an array of the inventors first and last names")

const getNames = (inventor)=> `${inventor.first}  ${inventor.last}` 
const fullNames = inventors.map(getNames)
console.log("Answer:")
console.table(fullNames)
console.log("/////////////////////////////////////////////")

/*--------------------------------------------------EXERCISE 3-------------------------------------------------------*/
console.log("Exercise 3: Sort the inventors by birthdate, oldest to youngest")

const oldestToYoungest= inventors
oldestToYoungest.sort((a, b)=> a.year > b.year? 1:-1)
console.log("Answer:")
console.table(oldestToYoungest)
console.log("/////////////////////////////////////////////")

/*--------------------------------------------------EXERCISE 4-------------------------------------------------------*/
console.log("Exercise 4: How many years did all the inventors live")
const totalYears = inventors.reduce((total,inventor)=> total + (inventor.passed-inventor.year),0)

console.log("Answer:")
console.log(totalYears)
console.log("/////////////////////////////////////////////")

/*--------------------------------------------------EXERCISE 5-------------------------------------------------------*/
console.log("Exercise 5: Sort the inventors by years lived")
const yearsLivedOrder = inventors

yearsLivedOrder.sort( (a,b)=> (a.passed - a.year)> (b.passed- b.year)? 1 :-1)
console.log("Answer:")
console.table(yearsLivedOrder)
console.log("/////////////////////////////////////////////")

/*--------------------------------------------------EXERCISE 6-------------------------------------------------------*/
console.log("Exercise 6: Sort the people alphabetically by last name")

const OrderLastName= people

OrderLastName.sort ((a,b)=>{
    const aSeparatedNames=a.split(", ")
    const bSeparatedNames=b.split(", ")

    return(aSeparatedNames[0] >bSeparatedNames[0]? 1: -1)
})

console.log("Answer:")
console.table(OrderLastName)
console.log("/////////////////////////////////////////////")

/*--------------------------------------------------EXERCISE 7-------------------------------------------------------*/
console.log("Sum up the instances of each of these")

const transport = data.reduce( (obj,item)=>{
    if(!obj[item]){
        obj[item]=0
    }
    obj[item]++
    return obj
},{})

console.log("Answer:")
console.table(transport)
console.log("/////////////////////////////////////////////")



