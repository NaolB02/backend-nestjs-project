const url = 'http://localhost:3000/like'
const likedProductsList = document.getElementById("likedList")
const jwtToken = localStorage.getItem('jwtToken')
let likedProducts = getData(jwtToken)

displayLikedProducts();

let likeBtns = document.getElementsByClassName("like-btn");

for(let btn of likeBtns){
    btn.addEventListener('click', (btn) => {handleLikes(btn)})
}

function handleLikes(btn){
    let liked = btn.dataset.liked;

    if (liked == "false"){
        sendLikeRequest(btn);
    }else if (liked == "true"){
        sendDislikeRequest(btn);
    }
}

async function sendLikeRequest(btn){
    let id = btn.dataset.id;

    const sendReq = {productId: id};
    try{
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify(sendReq)
    });
    if (!response.ok) {
        throw new Error(response.statusText);
      }
    btn.dataset.liked = 'true';

    } catch (error) {
      console.error(error);
    }
}

async function sendDislikeRequest(btn){
    let id = btn.dataset.id;

    const sendReq = {productId: id};
        try {
          const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            },
            body: JSON.stringify(sendReq)
          });
      
          if (!response.ok) {
            throw new Error(response.statusText);
          } else {
            btn.dataset.liked = 'false';
          }
        } catch (error) {
          console.error(error);
        }
}

function getHtml(id, title, description, sizes, madeIn, price, pictureUrl){
    template = `<li
    style="flex: 0 0 30%"
    class="p-3 mb-3 border rounded-3 border-dark"
    >
    <div class="d-flex flex-column gap-3">
    <div class="card">
        <img class="card-img-top w-100 d-block" src="${pictureUrl}" />
        <div class="card-body">
            <h4 class="card-title">${title}</h4>
            <p class="card-text">
            <ul class="list-unstyled">
            <li>${description}</li>
            <li>${sizes}</li>
            <li>${madeIn}</li>
            </ul>
            </p>
        <div class="d-flex justify-content-around">
        <p>${price} birr</p>
        <button data-id="${id}" class="btn btn-dark buy-btn">Buy now</button>
        <button data-id="${id}" data-liked="true" aria-label="Like this" class="main__container__likebtn like-btn">
        <img
            src="./images/icons/heart.svg"
            alt="like icon"
            width="20"
            height="auto"
        />
        </button>
    </div>
        </div>
        </div>
    
    </div>
    </li>`
    return template
}


function displayLikedProducts(){
    for(let product of likedProducts){
        let id = product.id;
        let title = product.name;
        let description = product.descr;
        let sizes = product.shoeSize;
        let madeIn = product.placeMade;
        let price = product.price;
        let pictureUrl = product.photo;

        htmlToAdd = getHtml(id, title, description, sizes, madeIn, price, pictureUrl);

        likedProductsList.innerHTML += htmlToAdd;
    }
}

async function getData(token) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Request failed.');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }