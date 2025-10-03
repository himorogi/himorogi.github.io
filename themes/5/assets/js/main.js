[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function () {
    img.removeAttribute('data-src');
    // img.setAttribute('class', 'loaded');
    // if (img.parentNode.tagName !== "A") {
    //   img.style.cursor = "pointer";
    //   img.onclick = (e) => {
    //     let div = document.createElement('div');
    //     div.setAttribute("id", "zoom-image");
    //     let zoomimg = document.createElement('img');
    //     zoomimg.setAttribute("src", img.getAttribute('src'));
    //     zoomimg.setAttribute("height", img.getAttribute('height'));
    //     zoomimg.setAttribute("width", img.getAttribute('width'));
    //     div.appendChild(zoomimg);
    //     document.body.appendChild(div)

    //     div.onclick = (e) => {
    //       div.remove();
    //     };
    //     window.onscroll = (e) => {
    //       div.remove();
    //     };
    //   }
    // };
  }

});




// if(document.querySelector('.posts-main #calendar')){


// const weeks = ['日', '月', '火', '水', '木', '金', '土']
// const date = new Date()
// const year = date.getFullYear()
// const month = date.getMonth() + 1
// const monthStr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const today = date.getDate();
// const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
// const endDate = new Date(year, month, 0) // 月の最後の日を取得
// const endDayCount = endDate.getDate() // 月の末日
// const startDay = startDate.getDay() // 月の最初の日の曜日を取得
// let dayCount = 1 // 日にちのカウント
// let calendarHtml = '' // HTMLを組み立てる変数

// calendarHtml += `<div class="calendar-today">${year}/${month}/${today} (${weeks[date.getDay()]})</div>`;

// calendarHtml += '<div class="calendar-title"><span>' + monthStr[month - 1] + ' ' + year + '</span></div>';
// calendarHtml += '<div class="calendar-date">';



// for (let w = 0; w < 6; w++) {

//   for (let d = 0; d < 7; d++) {
//     if (w == 0 && d < startDay) {
//       calendarHtml += '<span></span>'
//     } else if (dayCount > endDayCount) {
//       calendarHtml += '<span></span>'
//     } else {
//       if (dayCount === today){
//         calendarHtml += `<span class="today"  data-date="${year}/${month}/${today}">${today}</span>`;
//       }else{
//       calendarHtml += `<span data-date="${year}/${month}/${dayCount}">${dayCount}</span>`;
//       }
//       dayCount++
//     }
//   }

// }
// calendarHtml += '</div>';

// document.querySelector('.posts-main #calendar').innerHTML = calendarHtml



// fetch('https://api.sunrise-sunset.org/json?lat=35.6581&lng=139.7414&date=today&tzid=Asia/Tokyo', {
// 	method: 'GET', // HTTPメソッドとしてGETを指定
// })

// 	.then((res) => res.json())
// 	.then(data => {
//     const sunriseTime = document.createTextNode(data.results.sunrise);
//     document.getElementById('sunrise').appendChild(sunriseTime);
//     const sunsetTime = document.createTextNode(data.results.sunset);
//     document.getElementById('sunset').appendChild(sunsetTime);
//   });
// }

// const c = localStorage.getItem("countUp");
// if (c){
//   var count = Number(c) + 1;
//   localStorage.setItem("countUp", count);
//   if (c = 11){

//   } else (c > 11) {
//     localStorage.removeItem("countUp");
//   }

// }else{
// localStorage.setItem("countUp", 0);
// }