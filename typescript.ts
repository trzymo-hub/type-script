const addButton: HTMLButtonElement | null = document.querySelector('#todoAddButton');
const inputTextField: HTMLInputElement | null = document.querySelector('#todoInputField');
const todosContainer: HTMLDivElement | null = document.querySelector('#todosContainer')!;

type Todo = {
    id: number,
    title: string,
    description?: string,
    isDone?: boolean,
};

let arrayOfTodos: Todo[] = [];

if (addButton && inputTextField && todosContainer) {
    addButton?.addEventListener('click', (e: PointerEvent): void => {
        arrayOfTodos.push({
            id: arrayOfTodos.length,
            title: inputTextField?.value
        });
        inputTextField.value = '';
        buildList();
    });
}

function buildList(): void {
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach((element: Todo) => {
       let container = document.createElement('div');
       let title = document.createElement('h3');
       let id = document.createElement('p');

       title.textContent = "tytuł:" + element.title;
       id.textContent = "ID" + element.id;

       container.appendChild(title);
       container.appendChild(id);

       todosContainer?.appendChild(container);
    });
}