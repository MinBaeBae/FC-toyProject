//날짜 설정
// const today = new Date('2021-09-04')
// const todayYear = today.getFullYear()
// const todayMonth = today.getMonth() + 1
// const todayDate = today.getDate()

//fetch API
fetch("../reference/bank.json").then(function(response){
    return response.json();
})
.then(function(obj){
const today = (obj.bankList.filter(e=>e.date === "2021-09-01"))

let expanseChart = [];
for (let i = 0; i < today.length; i++){
     expanseChart += today[i].history + today[i].price;
}




    
    // console.log(obj)
    // console.log(obj.bankList);
    // console.log(obj.bankList[0]);
    
    
    
    
    /*
    //중복 제거된 요일자
    let b = []
    let c = 0
    for (const user in obj) {
        for (let i = 0; i < obj[user].length; i++) {
            b.push(obj[user][i].date.split('-')[2])
        }
             const dayCalc = new Set(b)


        for (let i = 0; i < obj[user].length; i++) { 

if (c < dayCalc.size) {
    const dateListDay = document.createElement('li')
    dateListDay.className = 'date__list__day'
    dateListDay.setAttribute('data-set-date', c)
    
    const dayDiv = document.createElement('div')
    dayDiv.className = 'date__list__title'
    if (c === 0) {
        dayDiv.innerHTML = '오늘'

    }  else if(c ===1) {
        dayDiv.innerHTML = '어제'

    } else {
        dayDiv.innerHTML =  c + '일전'
    }

    const dateListUl = document.querySelector('.date__list')
    dateListUl.append(dateListDay)
    dateListDay.append(dayDiv, recentUl)
    
c= c+1
}


const userInfo = obj[user][i]
const userPrice = document.createElement('p')
userPrice.className = 'recent__list__amount'
userPrice.innerHTML = userInfo.price

const userHistory = document.createElement('p')
userHistory.className = 'recent__list__description'
userHistory.innerHTML = userInfo.history


const recentLi = document.createElement('li')
recentLi.className = 'recent__list'
recentLi.append(userHistory, userPrice)

const recentUl = document.createElement('ul')
recentUl.append(recentLi)





        }
    }
*/
})








