document.addEventListener('DOMContentLoaded', function() {
    let tabs = document.querySelector('.tabs'); 
    tabs.querySelector('.nav_tab_list').addEventListener('click', realizationTabs);
    document.querySelectorAll('.accordion').forEach(element => {
        element.querySelectorAll('.accordion-item').forEach(item => {
            item.addEventListener('click', realizatinAcc);
        })
    });
});

function isActive(arr, active) {
    arr.forEach(element => {
        element.classList.remove('active')
    });
    active.classList.add('active')
}

function targetElement(e) {
    let target = e.target;
    return target
}

function realizationTabs(e) {
    let tabActive = targetElement(e);
    if (!tabActive.classList.contains('active')){
        let tabs = tabActive.closest('.tabs').querySelectorAll('button.btn_nav_tab');
        isActive(tabs, tabActive);

        let showContent = document.querySelector(tabActive.dataset.target);
        let tabsContent = tabActive.closest('.tabs').querySelectorAll('.tab_block');
        tabsContent.forEach(element => {
            element.classList.remove('show')
        });
        

        showContent.classList.add('show')
        console.log(tabsContent);
    }else{
        console.log('false');
        return false
    }
    
}

function realizatinAcc(e) {
    let openAcc = targetElement(e);
    openAcc.closest('.accordion-item').classList.toggle('open');
}