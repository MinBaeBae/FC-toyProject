//fetch API
fetch("../reference/bank.json").then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    const today = (obj.bankList.filter(e => e.date === "2021-09-01"))
    const yesterday = (obj.bankList.filter(e => e.date === "2021-09-02"))
    const before = (obj.bankList.filter(e => e.date !== "2021-09-02", "2021-09-01"))
    const dayDiv = document.querySelector('.recent__list__today')
    const yesterdayDiv = document.querySelector('.recent__list__yesterday')
    const beforeDiv = document.querySelector('.recent__list__before')
    const plus = (obj.bankList.filter(e => e.income === "in"))


    //오늘 (9월1일 꺼)

    let todayHistory = "";
    for (let i = 0; i < today.length; i++) {
      todayHistory += `<li class="container">
      <p class="recent__list__description"> ${today[i].history}</p>
      <p class="recent__list__amount"> ${today[i].price}</p></li>
       `;
    }

    const todayUl = document.createElement('ul')
    todayUl.className = 'recent__list'
    todayUl.innerHTML = todayHistory
    dayDiv.insertAdjacentElement("afterend", todayUl);


    //어제 (9월 2일)
    let yesterdayHistory = "";
    for (let i = 0; i < yesterday.length; i++) {
      yesterdayHistory += `<li class="container">
      <p class="recent__list__description"> ${yesterday[i].history}</p>
      <p class="recent__list__amount"> ${yesterday[i].price}</p></li>
       `;
      if (plus === "true") {
        const inStyle = document.querySelectorAll('.recent__list__amount')
        inStyle.style.cssText = "color: #FF5F00";
      }
    }

    const yesterdayUl = document.createElement('ul')
    yesterdayUl.className = 'recent__list'
    yesterdayUl.innerHTML = yesterdayHistory
    yesterdayDiv.insertAdjacentElement("afterend", yesterdayUl);


    //이전 전부
    let beforeHistory = "";
    for (let i = 0; i < before.length; i++) {
      beforeHistory += `<li class="container">
      <p class="recent__list__description"> ${before[i].history}</p>
      <p class="recent__list__amount"> ${before[i].price}</p></li>
       `;
    }

    const beforeUl = document.createElement('ul')
    beforeUl.className = 'recent__list'
    beforeUl.innerHTML = beforeHistory
    beforeDiv.insertAdjacentElement("afterend", beforeUl);







  })