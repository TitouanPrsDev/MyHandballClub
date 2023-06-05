window.onload = () => {
    header();
    nav();
}

const header = () => {
    document.querySelectorAll('.header__container--layout .header__item').forEach(headerItem => {
        headerItem.addEventListener('click', () => {
            headerItem.querySelector('.header__submenu').classList.toggle('header__submenu--active');
        });
    });
}

const nav = () => {
    document.querySelectorAll('.nav__container').forEach(nav => {
        nav.querySelectorAll('.nav__item').forEach(navItem => {
            navItem.addEventListener('click', () => {
                let navItemId = navItem.id.substring(4);

                nav.querySelector('.nav__item--active').classList.remove('nav__item--active');
                navItem.classList.add('nav__item--active');

                if (nav.classList.contains('nav__container--component')) {
                    document.querySelector('.section__container--active').classList.remove('section__container--active');
                    document.querySelector(`#section_${ navItemId }`).classList.add('section__container--active');
                }
            });
        });
    });
}