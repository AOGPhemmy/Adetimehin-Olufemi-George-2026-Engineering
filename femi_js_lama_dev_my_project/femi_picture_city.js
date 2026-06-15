const data = [
  {
    id: 1,
    name: "eniola ajao",
    img: "./img/img_yor/eniola_ajao.jpg",
    age: 40,
    cat: "dark skinned",
    lang: "yoruba",
  },
  {
    id: 2,
    name: "olamide awe",
    img: "./img/img_yor/olamide_awe.jpg",
    age: 23,
    cat: "fair skinned",
    lang: "yoruba, english",
  },
  {
    id: 3,
    name: "olamide awe",
    img: "./img/img_yor/olamide_awe_4.jpg",
    age: 23,
    cat: "fair skinned",
    lang: "yoruba, english",
  },
  {
    id: 4,
    name: "bamikole faith oreoluwa",
    img: "./img/img_yor/bamikole_faith_oreoluwa.jpg",
    age: 20,
    cat: "fair skinned",
    lang: "yoruba, english",
  },
  {
    id: 5,
    name: "diva gold",
    img: "./img/img_yor/diva_gold_3.jpg",
    age: 27,
    cat: "fair skinned",
    lang: "yoruba, english",
  },
  {
    id: 6,
    name: "basira abere",
    img: "./img/img_yor/basira_abere.jpg",
    age: 34,
    cat: "fair skinned",
    lang: "yoruba",
  },
  {
    id: 7,
    name: "arinola odubela",
    img: "./img/img_yor/arinola_odubela_3.jpg",
    age: 24,
    cat: "dark skinned",
    lang: "yoruba, english",
  },
  {
    id: 8,
    name: "arinola odubela",
    img: "./img/img_yor/arinola_odubela_2.jpg",
    age: 24,
    cat: "dark skinned",
    lang: "yoruba, english",
  },
  {
    id: 9,
    name: "diva gold",
    img: "./img/img_yor/diva_gold_1.jpg",
    age: 27,
    cat: "fair skinned",
    lang: "yoruba, english",
  },
  {
    id: 10,
    name: "yetunde odunsi",
    img: "./img/img_yor/yetunde_odunsi.jpg",
    age: 26,
    cat: "fair skinned",
    lang: "yoruba, english",
  },
  {
    id: 11,
    name: "adria arjona",
    img: "./img/img_holly/adria_arjona.jpg",
    age: 33,
    cat: "fair skinned",
    lang: "spanish, english",
  },
  {
    id: 12,
    name: "sabrina carpenter",
    img: "./img/img_holly/sabrina_carpenter.jpg",
    age: 33,
    cat: "fair skinned",
    lang: "english",
  },
  {
    id: 13,
    name: "tems",
    img: "./img/img_holly/tems.jpeg",
    age: 30,
    cat: "dark skinned",
    lang: "yoruba, english",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const ageRange = document.querySelector(".ageRange");
const ageValue = document.querySelector(".ageValue");

const displayPictures = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
        <div class="product">
            <img src=${product.img} />
            <span class="name">${product.name}</span>
            <span class="priceText">${product.age}</span>
            <span class="priceText">Spoken Language: ${product.lang}</span>
          </div>
        `
    )
    .join("");
};

displayPictures(data);

const setSearchItem = () => {
  searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if (value) {
      displayPictures(
        data.filter(
          (item) =>
            item.name.toLowerCase().indexOf(value) != -1 ||
            item.lang.toLowerCase().indexOf(value) != -1
        )
      );
    } else {
      displayPictures(data);
    }
  });
};

setSearchItem();

const setCatalogue = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];

  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `
    <span class='cat'>${cat}</span>

    `
    )
    .join("");

  categoriesContainer.addEventListener("click", (e) => {
    const clickedCat = e.target.textContent;

    clickedCat === "All"
      ? displayPictures(data)
      : displayPictures(data.filter((item) => item.cat === clickedCat));
  });
};

const setAges = () => {
  const ageRegister = data.map((item) => item.age);
  const minAge = Math.min(...ageRegister);
  const maxAge = Math.max(...ageRegister);

  ageRange.min = minAge;
  ageRange.max = maxAge;

  ageRange.value = maxAge;
  // ageValue.textContent = maxAge + "" + "years";
  ageValue.textContent = `${maxAge} Years`;

  ageRange.addEventListener("input", (e) => {
    ageValue.textContent = e.target.value + "" + "years";
    displayPictures(data.filter((item) => item.age <= e.target.value));
  });
};

setCatalogue();
setAges();
