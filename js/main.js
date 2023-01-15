const myForm = document.querySelector('.input-form');
const nameInput = document.querySelector('#name');
const dateInput = document.querySelector('#date');
const amountInput = document.querySelector('#amount');
const table = document.querySelector('table');


// Adding a new item to the table
myForm.addEventListener('submit', addNew = (e) => {
    e.preventDefault();

    // Getting the information from the form
    expenseName = nameInput.value;
    date  = dateInput.value;
    amount = amountInput.value;

    // Creating a new table row <tr>
    tr = document.createElement('tr');

    // Creating <td> element for table data
    tdName = document.createElement('td');
    tdDate = document.createElement('td');
    tdAmount = document.createElement('td');
    tdAmount.className = 'money';
    tdDelete = document.createElement('td');

    // Appending text to the td elements
    tdName.appendChild(document.createTextNode(expenseName));
    tdDate.appendChild(document.createTextNode(date));
    tdAmount.appendChild(document.createTextNode(amount));

    // Creating a new delete button and adding an id
    deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('x'));
    deleteBtn.id = 'deleteBtn';

    // Adding our newly created button to tdDelete
    tdDelete.appendChild(deleteBtn);

    // Appending our table data to the table rows
    tr.appendChild(tdName);
    tr.appendChild(tdDate);
    tr.appendChild(tdAmount);
    tr.appendChild(tdDelete);

    // Adding the table row to the table
    table.appendChild(tr)

    // clearing the form feilds
    nameInput.value = '';
    dateInput.value = '';
    amountInput.value = '';
});

// Deleting an item
table.addEventListener('click', deleteItem = (e) => {
    if(e.target.id === 'deleteBtn'){
        tr = e.target.parentElement.parentElement; 
        tbody = tr.parentElement;
        tbody.removeChild(tr);
    };
});
