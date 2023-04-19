
// Array Map.
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);

/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * 
 */

// Array filter

const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  
  console.log(eligibleForScholarshipStudents);
  
  /**
   * output:
   * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
   * 
   */
   
// Array Reduce
  
  const totalScore = students.reduce((acc, student) => acc + student.score, 0);
  
  console.log(totalScore);

//   msaih banyak kayak, array some, find, sort,every