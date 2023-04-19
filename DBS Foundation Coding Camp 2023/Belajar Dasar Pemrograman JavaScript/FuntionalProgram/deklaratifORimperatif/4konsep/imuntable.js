// bila kita benar-benar perlu mengubah nilai dari sebuah objek.

const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);
console.log(user);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */