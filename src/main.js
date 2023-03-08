document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-fac-question]');
    
    const hero_section = document.querySelector('.hero');
    const altura_hero = hero_section.clientHeight;

    window.addEventListener('scroll', function() {
        const posicao_atual = window.scrollY;

        if (posicao_atual < altura_hero) {
            oculta_elementos_header();
        } else {
            exibe_elementos_header();
        }
    });
    
    //secão de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const aba_alvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${aba_alvo}]`);
            esconde_todas_abas();
            aba.classList.add('shows__list--is-active');
            remove_botao_ativo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abre_ou_fecha_resposta);
    }

});

function oculta_elementos_header() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibe_elementos_header() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abre_ou_fecha_resposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    console.log(elemento);
    const elemento_pai = elemento.target.parentNode;

    elemento_pai.classList.toggle(classe)
}

function remove_botao_ativo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function esconde_todas_abas() {
    const tabs_container = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabs_container.length; i++) {
        tabs_container[i].classList.remove('shows__list--is-active');
    }

}