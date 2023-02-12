const boughtUrl = 'http://localhost:3000/buy';
const boughtProductsList = document.getElementById("boughtList");
let boughtProducts = getBoughtProducts(jwtToken);

unbuyButtons = document.getElementsByClassName("remove-btn")

for(let btn of unbuyButtons){
  btn.addEventListener('click', (btn) => {removeBuy(btn)})
}

displayBoughtProducts()

async function getBoughtProducts(token) {
    try {
      const response = await fetch(boughtUrl, {
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

function displayBoughtProducts(){
  for(let product of boughtProducts){
      let id = product.id;
      let title = product.name;
      let description = product.descr;
      let sizes = product.shoeSize;
      let madeIn = product.placeMade;
      let price = product.price;
      let pictureUrl = product.photo;

      htmlToAdd = getHtml(id, title, description, sizes, madeIn, price, pictureUrl);

      boughtProductsList.innerHTML += htmlToAdd;
  }
}

async function removeBuy(btn){
  let id = btn.dataset.id;

  const sendReq = {productId: id};
      try {
        const response = await fetch(boughtUrl, {
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
    for(let product of boughtProducts){
      if(product.id == id){
        boughtProducts = boughtProducts.filter(product)
      }
    }
    boughtProductsList.innerHTML = "";
    displayBoughtProducts();
}

