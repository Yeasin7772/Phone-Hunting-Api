console.log('hello world');


const loadPhone = async (searchText = '13', isShowAll) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = '';

  const ShowAllContainer = document.getElementById('show-all-container')

  if (phones.length > 12 && !isShowAll) {
    ShowAllContainer.classList.remove('hidden')
  } else {
    ShowAllContainer.classList.add('hidden')
  }
  //console.log('is show all', isShowAll);

  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }



  phones.forEach(phone => {
    //console.log(phone);
    const createDiv = document.createElement('div');
    createDiv.classList = 'card py-12  bg-gray-200 shadow-xl'
    createDiv.innerHTML = `
    <figure><img src=" ${phone.image} " alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name} </h2>
                      <p>There are many variations of passages of available, but the majority have suffered</p>
                      <div class="card-actions justify-center">
                        <button onclick="handleShowDetail(' ${phone.slug}'); 
                        " class="btn bg-blue-500 text-white">Show Details</button>
                      </div>
                    </div>
    `

    phoneContainer.appendChild(createDiv);
  });
  toggleLoadingSpinner(false)
}

const handleShowDetail = async (id) => {
   console.log('clicked show details', id)
  // load single phone data
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  const phone = data;
console.log(phone);
  ShowPhoneDetails(phone)

}

const ShowPhoneDetails = (phone) => {
  console.log(phone);
  const phoneName = document.getElementById('show-detail-phone-name');
  //phoneName.innerText=phone.name ;
  show_details_modal.showModal();
}

const handelSearch = (isShowAll) => {
  toggleLoadingSpinner(true)
  const searchField = document.getElementById('input-field')
  const searchText = searchField.value;
  //console.log(searchText);
  loadPhone(searchText, isShowAll)
}


const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spinner');
  if (isLoading) {
    loadingSpinner.classList.remove('hidden')
  } else {
    loadingSpinner.classList.add('hidden')
  }
}

const handleShowAll = () => {
  handelSearch(true)
}

loadPhone();



