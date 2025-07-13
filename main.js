

// //dùng fetch
// fetch('https://65300e576c756603295e2eec.mockapi.io/Items') // tuần tự fetch-> then(...) -> catch ( -> finally(...))
//     .then(function (response) { // nếu kh lỗi thì thực hiện cái này
//         return response.json(); //parse: dịch/ mã hóa ra dưới dạng json {key: value} 
//     })
//     .then(function (data) {
//         console.log('Data received:', data);
//     })
//     .catch(function (error) {
//         console.error('Fetch error:', error);
//     })
//     .finally( function () {
//         console.log('luôn chạy')
//     });


// // async await : xử lí bất đồng bộ (code kh chạy theo trình từ trên xuống dưới )
// async function getItems() { 
//     try {
//         const response = await fetch('https://65300e576c756603295e2eec.mockapi.io/Items'); //3s nhận data từ server
//         const data = await response.json(); // 2s
//         console.log('Data received:', data); 
//     } catch (error) {
//         console.error('Fetch error:', error);
//     }
// }
// getOrders();


const newItem =  {
    name: "Ngọc Thu",
    price: "anh minh",
    describe: "Đại giỏi",
    category: "bottle"
  }

fetch('https://65300e576c756603295e2eec.mockapi.io/Items', {
  method: 'POST',
  headers: {'content-type':'application/json'}, // Send your data in the request body as JSON
  body: JSON.stringify(newItem)
}).then(res => {
  if (res.ok) {
    console.log("up len thanh cong")
      return res.json();
  }
  // handle error
}).then(task => {
  // do something with the new task
}).catch(error => {
  // handle error
})