const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */

/*
    Tujuan  Anda memang tercapai namun itu bukanlah konsep dari paradigma FP. Bila Anda ingin menerapkan FP sepenuhnya, hindari cara seperti di atas. Lantas bagaimana solusinya? Sama seperti fungsi array map(), alih-alih mengubah nilai objek secara langsung, terapkan perubahan tersebut pada nilai return dalam objek baru.

*/