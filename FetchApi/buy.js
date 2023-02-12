const url = "http://localhost:3000/buy"
const buybtns = document.getElementsByClassName("buy-btn")

for (let btn of buybtns) {
    id = btn.dataset.id;
    btn.addEventListener('click', () => { buyProduct(id) })
}

async function buyProduct(id) {


    const sendReq = { productid: id };
    console.log(sendReq);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ jwtToken }`
            },
            body: JSON.stringify(sendReq)
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }

    } catch (error) {
        console.error(error);
    }
}

async function changeAmountBought(id) {

    const sendReq = { productid: id };
    console.log(sendReq);
    try {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ jwtToken }`
            },
            body: JSON.stringify(sendReq)
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }

    } catch (error) {
        console.error(error);
    }
}