const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const suits = [
    {
        // icon: '♥',
        icon: '㋡',
        color: 'red'
    },
    {
        icon: '♣',
        color: 'black'
    },
    {
        icon: '♦',
        color: 'red'
    },
    {
        icon: '♠',
        color: 'black'
    },
];

let positions = [];
const spacing = 10;

const container = document.getElementById('container');
const shuffleBtn = document.getElementById('shuffle');

function createCard({ number, suit, suit_idx, number_idx }) {

    const cardElement = document.createElement('div');

    cardElement.classList.add('card')
    if (suit.color === 'red') {
        cardElement.classList.add('red');
    }

    const TOP = suit_idx * 175 + spacing * suit_idx + 'px'; // height
    // const LEFT = number_idx * (window.innerWidth / 14) + spacing * number_idx + 'px';
    const LEFT = number_idx * 120 + spacing * number_idx + 'px'; // width

    cardElement.style.top = TOP;
    cardElement.style.left = LEFT;

    positions.push([TOP, LEFT]);

    cardElement.innerHTML = `
        <span class="number top">
            ${number}
        </span>
        <p class="suit">
            ${suit.icon}
        </p>
        <span class="number bottom">
            ${number}
        </span>
    `

    container.appendChild(cardElement);
}

// Creating the card
suits.forEach((suit, suit_idx) => {
    numbers.forEach((number, number_idx) => {
        const cardDetails = {
            number,
            suit,
            suit_idx,
            number_idx
        }
        createCard(cardDetails);
    })
})

const cards = document.querySelectorAll('.card');


shuffleBtn.addEventListener('click', () => {

    shuffleBtn.classList.add('disabled');
    shuffleBtn.disabled = "true";

    // Maybe put in function?
    cards.forEach((card, idx) => {
        setTimeout(() => {
            card.style.zIndex = 52 - idx
            card.style.top = '50%';
            card.style.left = '50%';
        }, idx * 20)
    })

    setTimeout(shuffleBack, 52 * 20 + 500)
});

function shuffleBack() {
    // Shuffle the positions
    shufflePositions();
    cards.forEach((card, idx) => {
        setTimeout(() => {
            card.style.top = positions[idx][0];
            card.style.left = positions[idx][1];
        }, idx * 50)
    })

    shuffleBtn.classList.remove('disabled');
    shuffleBtn.removeAttribute('disabled');
}

function shufflePositions() {
    let amountOfTimes = Math.floor(Math.random() * 200)

    for (let i = 0; i < amountOfTimes; i++) {
        const rand1 = Math.floor(Math.random() * 52)
        const rand2 = Math.floor(Math.random() * 52)

        const temp = positions[rand1];

        positions[rand1] = positions[rand2];
        positions[rand2] = temp;
    }
}