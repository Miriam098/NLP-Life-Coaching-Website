let btn = document.getElementById('readMoreBtn');
let btnTwo = document.getElementById('readMoreBtn2')
let moreTextOne = document.getElementById('textOne');
let moreTextTwo = document.getElementById('textTwo')
let dots = document.getElementById('dots')
let dotsTwo = document.getElementById('dotsTwo')
let tilesOne = document.getElementById('tilesOne')
let tilesTwo = document.getElementById('tilesTwo')


const readMore = () => {
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
}

readMore();
