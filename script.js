/* ===== READ MORE BUTTIONS ===== */
const readMore = () => {
    let btn = document.getElementById('readMoreBtn');
    let btnTwo = document.getElementById('readMoreBtn2');
    let btnThree = document.getElementById('readMoreBtn3');

    let moreTextOne = document.getElementById('textOne');
    let moreTextTwo = document.getElementById('textTwo');
    let moreTextThree = document.getElementById('textThree');

    let dots = document.getElementById('dots');
    let dotsTwo = document.getElementById('dotsTwo');
    let dotsThree = document.getElementById('dotsThree');

    let tilesOne = document.getElementById('tilesOne');
    let tilesTwo = document.getElementById('tilesTwo');

    btn.addEventListener('click', () => {
        if (dots.style.display === 'none') {
            dots.style.display = 'inline';
            btn.innerHTML = 'Read More';
            moreTextOne.style.display = 'none';

        } else {
            dots.style.display = 'none';
            btn.innerHTML = 'Read Less';
            moreTextOne.style.display = 'inline'
            tilesOne.style.height = 'auto'
            tilesOne.style.transition = 'all 4s ease-in 2s'
        }
    })

    btnTwo.addEventListener('click', () => {
        if (dotsTwo.style.display === 'none') {
            dotsTwo.style.display = 'inline';
            btnTwo.innerHTML = 'Read More';
            moreTextTwo.style.display = 'none';
        } else {
            dotsTwo.style.display = 'none';
            btnTwo.innerHTML = 'Read Less';
            moreTextTwo.style.display = 'inline';
            tilesTwo.style.height = 'auto';
        }
    })


    btnThree.addEventListener('click', () => {
        if (dotsThree.style.display === 'none') {
            dotsThree.style.display = 'inline';
            btnThree.innerHTML = 'Read More';
            moreTextThree.style.display = 'none';
        } else {
            dotsThree.style.display = 'none';
            btnThree.innerHTML = 'Read Less';
            moreTextThree.style.display = 'inline';
        }
    })
}

readMore();

/* ===== MODAL OPEN & CLOSE ===== */

const modalBtn = document.getElementById('bookNowBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeModal');


modalBtn.addEventListener('click', openModal);

function openModal() {
    modal.style.display = 'block';
}

closeBtn.addEventListener('click', modalClose);

function modalClose() {
    modal.style.display = 'none';
}

window.addEventListener('click', outsideClick);

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
}

