window.addEventListener('load', () => {
    const $cinema = document.querySelector('.cinema');

    const getRandNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

    let counter = 0;
    for(let i = 0; i < 800; i++) {
        $cinema.innerHTML += `
            <div class="place">${i + 1}</div>
        `;
        
        if(getRandNumber(0, 1) === 0) {
            document.querySelectorAll('.place')[i].classList.add('reserved');
        }
    }

    document.querySelector('.preloader').classList.add('hidden');

    $cinema.addEventListener('click', (event) => {
        if(event.target.classList.contains('place') && !(event.target.classList.contains('reserved'))){
            event.target.classList.toggle('buying');
            if(event.target.classList.contains('buying')) {
                counter++;
            } else {
                counter--;
            }
        }
        document.querySelector('.basket__counter').textContent = counter;
    });
});