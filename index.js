const orders = [
    {
        orderId: 'A001',
        customer: 'Alice',
        items: [
            { name: 'Laptop', quantity: 1, price: 1200 },
            { name: 'Mouse', quantity: 2, price: 25 }
        ],
        status: 'delivered'
    },
    {
        orderId: 'A002',
        customer: 'Bob',
        items: [
            { name: 'Keyboard', quantity: 1, price: 100 },
            { name: 'Monitor', quantity: 2, price: 300 }
        ],
        status: 'processing'
    },
    {
        orderId: 'A003',
        customer: 'Charlie',
        items: [
            { name: 'Tablet', quantity: 1, price: 800 },
            { name: 'Case', quantity: 1, price: 40 }
        ],
        status: 'cancelled'
    },
    {
        orderId: 'A004',
        customer: 'Alice',
        items: [
            { name: 'Headphone', quantity: 1, price: 150 },
            { name: 'Charger', quantity: 2, price: 20 }
        ],
        status: 'delivered'
    },
    {
        orderId: 'A005',
        customer: 'Diana',
        items: [
            { name: 'Laptop', quantity: 1, price: 1200 },
            { name: 'Monitor', quantity: 1, price: 300 }
        ],
        status: 'delivered'
    },
    {
        orderId: 'A006',
        customer: 'Eve',
        items: [
            { name: 'Tablet', quantity: 2, price: 800 }
        ],
        status: 'processing'
    },
    {
        orderId: 'A007',
        customer: 'Bob',
        items: [
            { name: 'Mouse', quantity: 3, price: 25 },
            { name: 'Keyboard', quantity: 1, price: 100 }
        ],
        status: 'delivered'
    },
    {
        orderId: 'A008',
        customer: 'Charlie',
        items: [
            { name: 'Laptop', quantity: 1, price: 1200 }
        ],
        status: 'delivered'
    }
];


document.addEventListener("DOMContentLoaded", () => { // đảm bảo cho DOM được tải xong, rồi mới thực hiện logic bên trong

    const searchBtn = document.getElementById("searchBtn");
    
    searchBtn.addEventListener("click", () => { 
        const searchValue = document.getElementById("searchInput").value;
        if (searchValue.length > 0) {
            console.log(searchValue.length)
            searchByCusName(searchValue);
        } else {
            renderOrder()
        }
    })

    document.addEventListener("submit", (e) => {
        e.preventDefault();
        const newOrderId = document.getElementById("orderId").value;
        const newCus = document.getElementById("customer").value;
        const index = document.getElementById("orderIndex").value;
        orders[index].orderId = newOrderId;
        orders[index].customer = newCus;
        renderOrder()
    })

})


//render ra giao diện
const renderOrder = () => {
    let orderUI = orders.map((order, index) => {
        let orderHTML =
            `
         <div class="order">
            <h2>Order ${order.orderId}</h2>
            <p>Customer: ${order.customer}</p>
        </div>
        <div class="buttons">
            <button class="btn btn-primary" onclick="getOrderByIndex(${index})" >Update</button>
            <button class="btn btn-danger"  onclick="removeOrderByIndex(${index})">Remove</button>
        </div>
        <hr>
        `
        return orderHTML;
    })
    let htmlResult = orderUI.join('');
    document.getElementById("orderContainer").innerHTML = ""
    document.getElementById("orderContainer").innerHTML += htmlResult
}


const searchByCusName = (name) => {
    let searchedOrder = orders.filter(order => order.customer.includes(name) || order.customer.toLocaleLowerCase().includes(name));
    let orderUI = searchedOrder.map((order, index) => {
        let orderHTML =
            `
         <div class="order">
            <h2>Order ${order.orderId}</h2>
            <p>Customer: ${order.customer}</p>
        </div>
        <div class="buttons">
            <button class="btn btn-primary" onclick="getOrderByIndex(${index})" >Update</button>
            <button class="btn btn-danger"  onclick="removeOrderByIndex(${index})">Remove</button>
        </div>
        <hr>
        `
        return orderHTML;
    })
    let htmlResult = orderUI.join('');
    document.getElementById("orderContainer").innerHTML = ""
    document.getElementById("orderContainer").innerHTML += htmlResult
}



//xác dinh thg can update & lay thong tin cua no
function getOrderByIndex(index) {
    const updatingOrder = orders[index];
    document.getElementById("orderId").value = updatingOrder.orderId;
    document.getElementById("customer").value = updatingOrder.customer;
    document.getElementById("orderIndex").value = index;
}

//xác dinh thg can update & lay thong tin cua no
function removeOrderByIndex(index) {
    orders.splice(index, 1);
    renderOrder()
}




// category ["viet", "nhat", "chau au"]
// select ["viet", "nhat", "chau au"]
// filter order theo category
