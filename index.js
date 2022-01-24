// Menu toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}


//adding hovered class on hovered one
let list = document.querySelectorAll('.navigation li');

function activeLinks(){
    list.forEach((item)=>{
        item.classList.remove('hovered');
    });
    this.classList.add('hovered');
}
list.forEach((item)=>{
    item.addEventListener('mouseover',activeLinks);
});

// CHARTS

const ctx = document.getElementById('myChart').getContext('2d');
const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebook', 'Youtube', 'Amazon'],
        datasets: [{
            label: 'Traffic Source',
            data: [1200, 1900, 3000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ]
        }]
    },
    options: {
        responsive: true
    }
});

const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['January', 'Febrauary', 'March','April','May','June'],
        datasets: [{
            label: 'Earnings',
            data: [1200, 1900, 3000,1600, 2000, 1000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ]
        }]
    },
    options: {
        responsive: true
    }
});