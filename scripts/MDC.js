export const cars = [{
   image: 'MDC.landcruiser.jpg',
   name: 'Landcruiser GR sport',
   description: 'description of car'
},{
image: 'db0d5ada2bec4331ac945b065e04b174.jpg',
name: 'audi RS',
description: 'description of car'
}, {
    image: 'bmw-m4 cs.jpg',
name: 'BMW M4 CS',
description: 'description of car'
}, {
    image: 'MDC.PRIZE GIVEAWAY CARS.JPG.jpg',
name: 'mercedez GL 350 D',
description: 'description of car'
}, {
    image: 'rangeroverlodge.jpg',
name: 'rangerover lodge',
description: 'description of car'
}, {
    image: 'rangerovervogue.jpg',
name: 'Range Rover vogue',
description: 'description of car'
}, {
    image: 'landroverdefender110/0c7a1e27bdfd477cac4d8f893e87110d.jpg',
name: 'Land Rover Defender 110',
description: 'description of car'
}, {
    image: 'audittrs/IMG-20240506-WA0015.jpg',
name: 'Audi  ttrs',
description: 'description of car'
}, {
    image: 'porsche718caymans/7580329f60494df7860c21780a942cdd.jpg',
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


console.log(carsHTML)

document.querySelector('.js-competition-cars')
.innerHTML = carsHTML;

