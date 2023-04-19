const createPersonWithAge = (age, person) => {
    return { ...person, age }; // destruction
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person,
    newPerson
  });

  /*
    kita manfaatkan destructuring object daripada mengubah objek tersebut secara langsung.
  */