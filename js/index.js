console.log('hello world');


const loadPhone = async (searchText, isShowAll) => {
const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
const phoneContainer =document.getElementById('phone-container');
phoneContainer.textContent ='';



phones.forEach (phone => {
    console.log(phone);
    const createDiv = document.createElement('div');
    createDiv.classList= 'card py-12  bg-red-100 shadow-xl'
    createDiv.innerHTML =`
    <figure><img src=" ${phone.image} " alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name} </h2>
                      <p>There are many variations of passages of available, but the majority have suffered</p>
                      <div class="card-actions justify-center">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
    `

    phoneContainer.appendChild(createDiv);
})
}

const handelSearch = (isShowAll) => {
const searchField = document.getElementById('input-field')
const searchText =searchField.value;
console.log(searchText);
loadPhone(searchText,isShowAll)
}



