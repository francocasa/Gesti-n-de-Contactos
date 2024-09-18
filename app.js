// Referencias a elementos del DOM
const counter = document.getElementById('counter');
const contactNameInput = document.getElementById('contactName');
const addContactButton = document.getElementById('addContact');
const contactList = document.getElementById('contactList');
let contacts = [];
// Función para validar que el nombre no esté vacío y no sea duplicado
function isValidContact(name) {
  if (name === '') {
    alert('El nombre no puede estar vacío.');
    return false;
  }
  if (contacts.includes(name)) {
    alert('Este contacto ya existe.');
    return false;
  }
  return true;
}
// Función para crear un nuevo contacto en la lista
function createContactElement(name) {
  const li = document.createElement('li');
  const contactNameText = document.createElement('span');
  contactNameText.textContent = name;
  const editButton = document.createElement('button');
  editButton.textContent = 'Editar';
  editButton.addEventListener('click', () => editContact(contactNameText, editButton));
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.addEventListener('click', () => removeContact(li, name));
  li.appendChild(contactNameText);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  return li;
}
// Función para agregar un contacto a la lista
function addContact() {
  const contactName = contactNameInput.value.trim();
  if (isValidContact(contactName)) {
    contacts.push(contactName);
    const contactElement = createContactElement(contactName);
    contactList.appendChild(contactElement);
    contactNameInput.value = '';  // Limpiar el input
  }
}
// Función para eliminar un contacto
function removeContact(contactElement, name) {
  contactList.removeChild(contactElement);
  contacts = contacts.filter(contact => contact !== name);
}
// Función para editar un contacto
function editContact(contactNameText, editButton) {
  const originalName = contactNameText.textContent;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = originalName;
  const saveButton = document.createElement('button');
  saveButton.textContent = 'Guardar';
  saveButton.addEventListener('click', () => saveContact(contactNameText, input, saveButton, editButton, originalName));
  contactNameText.replaceWith(input);
  editButton.replaceWith(saveButton);
}
// Función para guardar un contacto editado
function saveContact(contactNameText, input, saveButton, editButton, originalName) {
  const newName = input.value.trim();
  if (isValidContact(newName)) {
    contacts = contacts.map(contact => contact === originalName ? newName : contact);
    contactNameText.textContent = newName;
    input.replaceWith(contactNameText);
    saveButton.replaceWith(editButton);
  }
}
// Evento para agregar un contacto al hacer clic en el botón "Agregar"
addContactButton.addEventListener('click', addContact);
// Evento para permitir agregar contacto con la tecla "Enter"
contactNameInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addContact();
  }
});

contactList.addEventListener("change", prueba);
function prueba()
{
  alert('entra');
}
