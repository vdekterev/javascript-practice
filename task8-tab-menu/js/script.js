document.addEventListener('DOMContentLoaded', () => {
    const tabList = document.querySelectorAll('.tabheader__item'),
        tabListWrapper = document.querySelector('.tabheader__items'),
        tabPictures = document.querySelectorAll('.tabcontent');

    function hideTabs() {
        tabPictures.forEach(tab => {
            tab.style.display = 'none';
        })
        tabList.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        })
    }

    function showTab(index = 0) {
        const tab = tabListWrapper.children[index];
        tab.classList.add('tabheader__item_active');
        tabPictures[index].style.display = '';
    }

    hideTabs();
    showTab();

    tabListWrapper.addEventListener('click', (event) => {
        const tab = event.target;
        console.log(tab.c);
        if (tab?.classList.contains('tabheader__item')) {
            hideTabs();
            console.dir(event);
            tabList.forEach((element, index) => {
                if (tab == element) {
                    showTab(index);
                };
            });
        };
    });     

});
