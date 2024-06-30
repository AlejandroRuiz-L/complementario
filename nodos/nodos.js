"use strict";
const employees = async () => {
  let busqueda = await fetch("./employees.json");
  let data = await busqueda.json();
  return data
};
const customers = async () => {
  let busqueda = await fetch("./customers.json");
  let data = await busqueda.json();
  return data
}
const companies = async () => {
  let busqueda = await fetch("./companies.json");
  let data = await busqueda.json();
  return data
}
//estructura inicial (callbackHell)
// companies().then((value) => {
//   Object.values(value).forEach((clave) => {
//     console.log(clave.name);
//     customers().then((value) => {
//       Object.values(value).forEach((clave) => {
//         console.log(clave.contactPerson);
//         employees().then((value) => {
//           Object.values(value).forEach((clave) => {
//             console.log(clave.fullName);
//           })
//         })
//       })
//     })
//   })
// }).catch((error) => { console.log(error) })

//Se ejecutan las promesas en paralelo(enfoque simultaneo)
// Promise.all([companies(), customers(), employees()]).then(([companiesData, customersData, employeesData]) => {
//   companiesData.forEach(company => {
//     let answer = `Company: ${company.name}<br>`;
//     console.log(answer);
//     document.write(answer);
//   });

//   customersData.forEach(customer => {
//     let answer = `Customer Contact Person: ${customer.contactPerson}<br>`;
//     console.log(answer);
//     document.write(answer);
//   });

//   employeesData.forEach(employee => {
//     let answer = `Employee Full Name: ${employee.fullName}<br>`
//     console.log(answer);
//     document.write(answer);
//   });
// }).catch(error => {
//   console.error('Error loading data:', error);
// });

//Enfoque secuencial(usando for)
const printSequentially = async () => {
  try {
    const companiesData = await companies();
    const customersData = await customers();
    const employeesData = await employees();
    let count = 1;

    const totalIterations = Math.max(companiesData.length, customersData.length, employeesData.length);

    for (let i = 0; i < totalIterations; i++) {
      if (companiesData[i % companiesData.length]) {
        console.log(`${count}. Company: ${companiesData[i % companiesData.length].name}`);
      }
      if (customersData[i % customersData.length]) {
        console.log(`Customer Contact Person: ${customersData[i % customersData.length].contactPerson}`);
      }
      if (employeesData[i % employeesData.length]) {
        let emp = employeesData[i % employeesData.length];
        emp.id = count
        count++
        console.log(`Employee Full Name: "${emp.fullName}`);
        console.log(`Employee company: ${emp.company.name}`)
      }
      console.log("");
    }
  } catch (error) {
    console.error('Error loading data:', error);
  }
};

printSequentially();

printSequentially();

// const $body = document.querySelector("body");
const $root = document.querySelector("#root");
const $form = document.querySelector("#form");
const $input = document.querySelector("#input");
const $button = document.createElement("button");
$button.setAttribute("type", "submit");
$button.textContent = "Buscar";
$button.classList.add("button");
$form.appendChild($button);
// const $input = document.createElement("input");
// const $header = document.createElement("div");
// $header.classList.add("header");
// $header.appendChild($input);
// $body.firstChild = $header;
const $fragment = document.createDocumentFragment();
const lista = [
  {
    id: 1,
    title: "Voluptatibus",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/240/300/300"
  },
  {
    id: 2,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/237/300/300"
  },
  {
    id: 3,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/250/300/300"
  },
  {
    id: 4,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/23/300/300"
  },
  {
    id: 5,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/2/300/300"
  },
  {
    id: 6,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/1/300/300"
  },
  {
    id: 7,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/500/300/300"
  },
  {
    id: 8,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/600/300/300"
  },
  {
    id: 9,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/650/300/300"
  },
  {
    id: 10,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/0/300/300"
  }
]

// lista.forEach((element) => {
//   let $img = document.createElement("img");
//   let $src = $img.setAttribute("src", element.img);
//   $img.classList.add("img");
//   let $div = document.createElement("div");
//   $div.classList.add("item");
//   let $title = document.createElement("h3");
//   $title.textContent = `${element.id}. ${element.title}`;
//   let $text = document.createElement("p");
//   $text.textContent = element.text;
//   $div.appendChild($img);
//   $div.appendChild($title);
//   $div.appendChild($text);
//   $fragment.appendChild($div);
// });
// $root.appendChild($fragment);

// let count = 800;

// while (count <= 1000) {
//   const div = document.createElement('div');
//   div.classList.add('item');
//   let $img = document.createElement("img");
//   let conText = lista[0].text;
//   let conTitle = `${count}. ${lista[0].title}`;
//   let $title = document.createElement("h3");
//   $title.textContent = conTitle;
//   const text = document.createElement('p');
//   text.textContent = conText;
//   let url = `https://picsum.photos/id/${count}/300/300`;
//   $img.classList.add('img');
//   $img.setAttribute("src", url);
//   $img.setAttribute('alt', 'Imagen no encontrada.');
//   div.appendChild($img);
//   div.appendChild($title)
//   div.appendChild(text);
//   $fragment.appendChild(div);
//   count++;
// }
// $root.appendChild($fragment);