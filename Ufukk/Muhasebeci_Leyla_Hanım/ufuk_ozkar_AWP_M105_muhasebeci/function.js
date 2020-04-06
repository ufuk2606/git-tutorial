


function renderCanton(){
    let container = document.querySelector("#canton");   

    let cantonItems = cantons.map(item =>{
        return `<option value="${item.value}">${item.name}</option>`
    }).join();

    container.innerHTML = cantonItems;
}

saveNewPerson(){
        
    person.firstName = document.querySelector("#firstName").value;

    document.querySelector("#submit").addEventListener("click", Persons.saveNewPerson());
    console.log(person.firstName);
}