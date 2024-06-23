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
  },
  {
    id: 4,
    title: 'DOM'
  },
  {
    id: 5,
    title: 'SCRUM'
  }
]

const users = [
  {
    id: 1,
    name: 'Alejandro',
    student: true,
    signature: [1, 5]
  },
  {
    id: 2,
    name: 'Brayan',
    student: true,
    signature: [3, 4],
    phone: 3157756815
  },
  {
    id: 3,
    name: 'Daniel',
    student: true,
    signature: [1, 2, 4]
  },
  {
    id: 4,
    name: 'Adderlyn',
    student: false,
    signature: []
  },
  {
    id: 5,
    name: 'Miguel',
    student: true,
    signature: [1, 2, 3, 4]
  }
];

export async function getUserById(id) {
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user || !user.student) {
    return Promise.reject(`Usuario ${id} no válido.`);
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: user
      });
    }, 3000);
  })
}

export async function getSignatures(ids) {
  const search = signatures.filter((asignacion) => ids.includes(asignacion.id) ? true : false);
  return new Promise((ok, notOk) => {
    setTimeout(() => {
      ok({
        value: search
      })
    }, 2000);
  })
}

export async function returnName(name) {
  return name
}