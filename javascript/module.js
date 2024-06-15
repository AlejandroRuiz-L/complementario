const signatures = [
  {
    id: 1,
    title: 'Lógica'
  },
  {
    id: 2,
    title: 'Bases de datos'
  },
  {
    id: 3,
    title: 'POO'
  }
]

const users = [
  {
    id: 1,
    name: 'Alejandro',
    student: true,
    signature: 1
  },
  {
    id: 2,
    name: 'Brayan',
    student: true,
    signature: [3],
    phone: 3157756815
  },
  {
    id: 3,
    name: 'Daniel',
    student: true,
    signature: 2
  }
];


export function getUserById(id, callback) {
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user) {
    return callback(`Usuario ${id} no encontrado.`);
  }
  return callback(null, user);
}

export function getSignatures(id, callback) {
  const signature = signatures.find(function (signature) {
    return signature.id === id;
  });
  if (!signature) {
    return callback(`Signatura ${id} no encontrada.`)
  }
  return callback(null, signature);
}