 const cars = [{
  image: 'cars folder/toyotalandcruisergrsport/9c8744627ef249059678daf3ec668409.jpg',
   name: 'Landcruiser GR sport',
   description: 'description of car'
},{
image: 'cars folder/audirs7sportback/16464b7a982048cfa1f5352abe6eb2e0.jpg',
name: 'audi RS',
description: 'description of car'
}, {
    image: 'cars folder/bmwm4cs/952e3da3a5b54bd292f4930e52ab0de6.jpg',
name: 'BMW M4 CS',
description: 'description of car'
}, {
    image: 'cars folder/mercedesglc63scoupeestate/3cd1e65cd54d4378999e7b65af34003e.jpg',
name: 'mercedez GL 350 D',
description: 'description of car'
}, {
    image: 'cars folder/rangerovervelarhse/89a73b94d9524194a371fa6d0b1a33e8.jpg',
name: 'rangerover velar hse',
description: 'description of car'
}, {
    image: 'cars folder/rangerovervogueautobiographyhse/22a336aeaac54999b9b22520af68d2d3.jpg',
name: 'Range Rover vogue',
description: 'description of car'
}, {
    image: 'cars folder/landroverdefender110/0c7a1e27bdfd477cac4d8f893e87110d.jpg',
name: 'Land Rover Defender 110',
description: 'description of car'
}, {
    image: 'cars folder/audittrs/IMG-20240506-WA0015.jpg',
name: 'Audi  ttrs',
description: 'description of car'
}, {
    image: 'cars folder/porsche718caymans/7580329f60494df7860c21780a942cdd.jpg',
name: 'Porcche 718 caymans',
description: 'description of car'
}]

let carsHTML = '';

cars.forEach((car) =>{
    carsHTML += `
    <div class="car">
            
            <img src="${car.image}" alt="Toyota landcruiser GR sport">
            <h2>${car.name}</h2>
            <p>${car.description}</p>
            <a href="landcruiserGR.html" class="btn-3 js-view-details " >view details</a>
            </div>
            `;

            
});




document.querySelector('.js-competition-cars')
.innerHTML = carsHTML;

document.querySelectorAll('.js-view-details')
.forEach((a) => {
a.addEventListener('click' , () => {
    console.log('added car')
})
})