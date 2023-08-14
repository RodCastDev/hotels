// Consumo de la Api

const getApi = async () => {
  const response = await fetch(
    "https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels"
  );
  const data = await response.json();
  console.log(data);

  data.forEach(element => {
    const cardHotel = document.createElement("article");
    cardHotel.className = "HotelCard";
    cardHotel.classList.add ("HotelCard")

    const imgCard = document.createElement("img");
    imgCard.className = "HotelCard__Img";
    imgCard.setAttribute("src", element.photo);
    imgCard.setAttribute("alt", "photoHotel");

    const cardTitle = document.createElement("h2");
    cardTitle.className = "HotelCard__Title";
    cardTitle.textContent = element.name;

    cardHotel.appendChild(imgCard);
    cardHotel.appendChild(cardTitle);
    sectionCards.appendChild(cardHotel);
    
  });
};

getApi();

// Manipulacion del DOM

const title = document.createElement("h1");
title.className = "Title";
title.textContent = "Book it!";

const filter__Container = document.createElement("div");
filter__Container.className = "Filter__Container";

const filter__Grid = document.createElement("div");
filter__Grid.className = "Filter__Grid";

const foundMessage__Container = document.createElement("div");
foundMessage__Container.className = "FoundMessage__Container";

const foundMessage__Title = document.createElement("p");
foundMessage__Title.className = "FoundMessage__Title";
foundMessage__Title.textContent = "We have found for you...";

const foundMessage__Content = document.createElement("p");
foundMessage__Content.className = "FoundMessage__Content";
foundMessage__Content.textContent =
  "All sizes hotels of all category prices in all contries.";

const selectCountries = document.createElement("select");
selectCountries.className = "Filter__Countries Filter-Icon";
selectCountries.name = "filter-countries";
selectCountries.id = "filter-countries";

const all = document.createElement("option");
all.value = "all";
all.textContent = "All countries";

const country1 = document.createElement("option");
country1.value = "country1";
country1.textContent = "Argentina";

const country2 = document.createElement("option");
country2.value = "country2";
country2.textContent = "Brasil";

const country3 = document.createElement("option");
country3.value = "country2";
country3.textContent = "Chile";

const country4 = document.createElement("option");
country4.value = "country3";
country4.textContent = "Uruguay";

selectCountries.appendChild(all);
selectCountries.appendChild(country1);
selectCountries.appendChild(country2);
selectCountries.appendChild(country3);
selectCountries.appendChild(country4);

const inputDateFrom = document.createElement("input");
inputDateFrom.className = "Filter__DateFrom Filter-Icon";
inputDateFrom.name = "date-from";
inputDateFrom.id = "date-from";
inputDateFrom.min = "2023-08-12";
inputDateFrom.type = "date";

const inputDateTo = document.createElement("input");
inputDateTo.className = "Filter__DateTo Filter-Icon";
inputDateTo.name = "date-to";
inputDateTo.id = "date-to";
inputDateTo.type = "date";

const selectPrices = document.createElement("select");
selectPrices.className = "Filter__Prices Filter-Icon";
selectPrices.name = "filter-prices";
selectPrices.id = "filter-prices";

const all1 = document.createElement("option");
all1.value = "all1";
all1.textContent = "All prices";

const price1 = document.createElement("option");
price1.value = "price1";
price1.textContent = "$";

const price2 = document.createElement("option");
price2.value = "price2";
price2.textContent = "$$";

const price3 = document.createElement("option");
price3.value = "price3";
price3.textContent = "$$$";

const price4 = document.createElement("option");
price4.value = "price4";
price4.textContent = "$$$$";

selectPrices.appendChild(all1);
selectPrices.appendChild(price1);
selectPrices.appendChild(price2);
selectPrices.appendChild(price3);
selectPrices.appendChild(price4);

const selectSizes = document.createElement("select");
selectSizes.className = "Filter__Sizes Filter-Icon";
selectSizes.name = "filter-sizes";
selectSizes.id = "filter-sizes";

const all2 = document.createElement("option");
all2.value = "all2";
all2.textContent = "All sizes";

const size1 = document.createElement("option");
size1.value = "size1";
size1.textContent = "Small";

const size2 = document.createElement("option");
size2.value = "size2";
size2.textContent = "Medium";

const size3 = document.createElement("option");
size3.value = "size3";
size3.textContent = "Large";

selectSizes.appendChild(all2);
selectSizes.appendChild(size1);
selectSizes.appendChild(size2);
selectSizes.appendChild(size3);

const buttonClear = document.createElement("button");
buttonClear.className = "Filter__Clear";
buttonClear.textContent = "Clear";

const header = document.querySelector(".Header");
header.appendChild(title);
header.appendChild(filter__Container);
header.appendChild(foundMessage__Container);

filter__Container.appendChild(filter__Grid);
foundMessage__Container.appendChild(foundMessage__Title);
foundMessage__Container.appendChild(foundMessage__Content);

const filterGrid = document.querySelector(".Filter__Grid");
filterGrid.appendChild(selectCountries);
filterGrid.appendChild(inputDateFrom);
filterGrid.appendChild(inputDateTo);
filterGrid.appendChild(selectPrices);
filterGrid.appendChild(selectSizes);
filterGrid.appendChild(buttonClear);

const info__Text = document.createElement("p")
info__Text.className = "Info__Text"
info__Text.textContent = "Hover over the cards to discover amazing information! ";

const sectionCards = document.createElement("section");
sectionCards.className = "HotelsContainer";

const main = document.querySelector("main");
main.appendChild(sectionCards);




