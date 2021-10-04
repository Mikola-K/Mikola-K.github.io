import {
    clearInputs,
    addItemToPage,
    renderItemsList,
    getInputValues,} from "./dom_util.js"

const submitButton = document.getElementById("create__sumnit");
const searchButton = document.getElementById("header__button__serch");
const cancelSearchButton = document.getElementById("header__button__clear");
const searchInput = document.getElementById("find__input");
const itemsCounter = document.getElementById("items_counter");
const totalPowerCounter = document.getElementById("total_power");
const sortAscButton  = document.getElementById("sort_items_asc");
const sortDescButton = document.getElementById("sort_items_desc");
const createCarForm = document.getElementById("create__car");
const main = document.getElementById("main");
const createCarsButton = document.getElementById("create__button");
const powerCounterButton = document.getElementById("count_total");

createCarsButton.addEventListener("click", (event) => {
    event.preventDefault();
    createCarForm.classList.toggle("active");
    main.classList.toggle("active");
})

let car1 = {
    id: 1, 
    title: "Ford Mustang 1967 fastback", 
    description: 'The 1968 Mustang GT 2+2 Fastback R Spec is Revology’s most track-focused model to date.Powered by the 460hp 5.0-liter Ti-VCT Coyote V-8 backed by a T56XL 6-speed manual, it features serious go-fast hardware, includingAP Racing brakes, Forgeline wheels',
    power: 340,
    speed: 240,
};

let car2 = {
    id: 2, 
    title: "Ford Mustang 1967 fastback", 
    description: 'The 1968 Mustang GT 2+2 Fastback R Spec is Revology’s most track-focused model to date.Powered by the 460hp 5.0-liter Ti-VCT Coyote V-8 backed by a T56XL 6-speed manual, it features serious go-fast hardware, includingAP Racing brakes, Forgeline wheels',
    power: 500,
    speed: 220,
};

let car3 = {
    id: 3, 
    title: "Anaconda", 
    description: 'The 1968 Mustang GT 2+2 Fastback R Spec is Revology’s most track-focused model to date.Powered by the 460hp 5.0-liter Ti-VCT Coyote V-8 backed by a T56XL 6-speed manual, it features serious go-fast hardware, includingAP Racing brakes, Forgeline wheels',
    power: 250,
    speed: 200,
};

let car4 = {
    id: 4, 
    title: "Shelby", 
    description: 'The 1968 Mustang GT 2+2 Fastback R Spec is Revology’s most track-focused model to date.Powered by the 460hp 5.0-liter Ti-VCT Coyote V-8 backed by a T56XL 6-speed manual, it features serious go-fast hardware, includingAP Racing brakes, Forgeline wheels',
    power: 1000,
    speed: 300,
};

let car = [car1, car2, car3, car4]
let cars = [...car];

window.onload = renderItemsList(cars);

sortAscButton.addEventListener("click", (event) => {
    event.preventDefault();
    cars.sort((a,b) => {
        return b.power - a.power;
    });
    renderItemsList(cars);
});

sortDescButton.addEventListener("click", (event) => {
    event.preventDefault();
    cars.sort((a,b) => {
        return a.speed - b.speed;
    });
    renderItemsList(cars);
});

const addItem = ({ title, description, power, speed }) => {
    const generatedId = () => Math.random().toString(36).substr(2, 9);

    const newItem = {
        id: generatedId,
        title,
        description,
        power, 
        speed,
    };
    cars.push(newItem);
    addItemToPage(newItem);
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const { title, description, power, speed } = getInputValues();
    clearInputs();
    addItem({
        title,
        description: description,
        power, 
        speed,
    });
});

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const foundDevices = cars
        .filter(d => d.title.search(searchInput.value) !== -1);
    
    itemsCounter.innerHTML = `${foundDevices.length}`;
    renderItemsList(foundDevices);
});


searchInput.addEventListener ("keydown", (e) => {
    const foundDevices = cars
        .filter(d => d.title.toUpperCase().search(searchInput.value.toUpperCase()) !== -1);
    
    if (searchInput.value == 0) {
        itemsCounter.innerHTML = `${"0"}`;
    }
    else {
        itemsCounter.innerHTML = `${foundDevices.length}`;
    }
    renderItemsList(foundDevices);
})


cancelSearchButton.addEventListener("click", (event) => {
    event.preventDefault();

    renderItemsList(cars);

    itemsCounter.innerHTML = `${0}`;
    searchInput.value = "";
});

powerCounterButton.addEventListener("click", (e) => {
    e.preventDefault();
    let totalLength = 0;
    for (const car of cars) {
        totalLength += Number(car.power);
    }
    totalPowerCounter.innerHTML = `${totalLength} lc`;
});

renderItemsList(cars);