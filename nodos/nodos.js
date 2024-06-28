"use strict"
const data = async () => {
  let busqueda = await fetch("./data.json");
  let data = await busqueda.json();
  return data
}
data().then((value) => {
  Object.keys(value).forEach(clave){
    console.log(clave);
  }
})

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
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/237/300/300"
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
    img: "https://picsum.photos/id/237/300/300"
  },
  {
    id: 4,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/237/300/300"
  },
  {
    id: 5,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/237/300/300"
  },
  {
    id: 6,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/237/300/300"
  },
  {
    id: 7,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/237/300/300"
  },
  {
    id: 8,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/237/300/300"
  },
  {
    id: 9,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/237/300/300"
  },
  {
    id: 10,
    title: "Cachorro",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam sint quam numquam neque! Impedit commodi illo aut at! Aspernatur harum voluptatibus odit distinctio adipisci! Dolore minus nobis inventore sed.",
    img: "https://picsum.photos/id/237/300/300"
  }
]

lista.forEach((element) => {
  let $img = document.createElement("img");
  let $src = $img.setAttribute("src", element.img);
  $img.classList.add("img");
  let $div = document.createElement("div");
  $div.classList.add("item");
  let $title = document.createElement("h3");
  $title.textContent = `${element.id}. ${element.title}`;
  let $text = document.createElement("p");
  $text.textContent = element.text;
  $div.appendChild($img);
  $div.appendChild($title);
  $div.appendChild($text);
  $fragment.appendChild($div);
});
$root.appendChild($fragment);