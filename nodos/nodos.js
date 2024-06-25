"use strict"
const $root = document.querySelector("#root");
const $fragment = document.createDocumentFragment();
const lista = [
  {
    id: 1,
    title: "Imagen",
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/237/200/300"
  },
  {
    id: 1,
    title: "Imagen",
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/237/200/300"
  },
  {
    id: 1,
    title: "Imagen",
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/237/200/300"
  },
  {
    id: 1,
    title: "Imagen",
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/237/200/300"
  }
]

lista.foreach((element) => {
  let $img = document.createElement("img");
  let $src = $img.setAttribute("src", element.img);
  $root.appendChild($img);
})