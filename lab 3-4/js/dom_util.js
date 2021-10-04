const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const powerInput = document.getElementById("power__input");
const speedInput = document.getElementById("max-speed_input");

const itemsContainer = document.getElementById("items_container");
const getItemId = (id) => `item-${id}`;

export const EDIT_BUTTON_PREFIX = 'edit-button-';

const itemTemplate = ({ id, title, description, power, speed }) => `
    <li class="card" id="${getItemId(id)}>
    <div class="card" >
        <img class="mustang__img" src="./picture/mustang.jpg" alt="oops">
        <h2 class="main__title">${title}</h2>
        <h1 class="main__subtittle">${description}</h1>
            <h1 class="change_content"  contenteditable="false">${power} lc</h1>
            <h1  class="change_content"  contenteditable="false">${speed} km</h1>
        <div class="main__button">
        <button id="${EDIT_BUTTON_PREFIX}${id}" name="edit_button"  class="main__button_edit">Edit</button>
        <button id="delete_button_${getItemId(id)}" class="main__button_remove">Remove</button> 
        </div>
    </div>
    </li>
`;

export const clearInputs = () => {
  titleInput.value = "";
  descriptionInput.value = "";
  powerInput.value = "";
  speedInput.value = "";
};

export const addItemToPage = ({ id, title, description, power, speed}) => {
    itemsContainer.insertAdjacentHTML(
        "beforeend",
        itemTemplate({ id, title, description, power, speed })
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    editButton.addEventListener("click", (e) => {
        e.preventDefault();    
        document.querySelectorAll('.change_content, .main__title , .main__subtittle').forEach(function(ele){
            ele.contentEditable = "true";
        })        
    });
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";
    for (const item of items) {
        addItemToPage(item);
    }
};

export const getInputValues = () => {
  return {
    title: titleInput.value,
    description: descriptionInput.value,
    power: powerInput.value,
    speed: speedInput.value,
  };
};

