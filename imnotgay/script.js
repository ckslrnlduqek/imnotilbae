const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const y = document.querySelector('.y');
const n = document.querySelector('.n');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = n.getBoundingClientRect();

y.addEventListener('click', ()=>{
    question.innerHTML = '헉'
});

n.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    n.style.left = i + 'px';
    n.style.top = j + 'px';
});