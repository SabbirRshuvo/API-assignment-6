const assignmentLoad = () =>{
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res => res.json())
    .then(data => containerData(data.data));
    
}
const containerData = protopytes =>{
    console.log(protopytes);
    protopytes.forEach(protopyte=>{
        // console.log(protopyte);
        

        const containerDiv = document.getElementById('load-data');
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <img src="${protopyte.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${protopyte.phone_name
                  }</h5>
                  <p class="card-text">${protopyte.slug}</p>
                </div>
                <div class="card-footer">
                <button id="click-data" onclick="detailsData()">Click Me</button>
                </div>
        `
        containerDiv.appendChild(div);


        
    })
}

const detailsData = () =>{
    fetch('https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089')
    .then(res =>res.json())
    .then(data => detailsContainer(data.data));
    

   
}
// detailsContainer();

const detailsContainer = loadList=>{
    console.log(loadList);

    const listContainer = document.getElementById('click-data');
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${loadList.image}" class="list-data" alt="...">
    `;
    listContainer.appendChild(div);
}

