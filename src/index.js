import engine from 'countto/src/count-to-engine';

const getScroll = () => (window.pageOffsetY || document.documentElement.scrollTop);
const setScroll = pos => window.scrollTo(0, pos);
const top = (el, offset) => (el.getBoundingClientRect().top + offset);
const targetPos = (target, offset) => {
    const type = typeof target;
    if (type === 'number') return offset + target;
    if (type === 'string') return top(document.querySelector(target), offset);
    return top(target, offset);
};

export default function scrollTo(target, options = {}) {
    const from = getScroll();
    const to = targetPos(target, from);
    const args = Object.assign({ from, to, render: setScroll }, options);

    return engine(args);
}
