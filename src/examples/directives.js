const autoFocus = {
    inserted(el) {
        el.focus();
    }
};

const color = {
    bind(el, binding) {
        el.style.color = binding.value;
    },
    update(el, binding) {
        const { oldValue, value } = binding;
        if (oldValue !== value) {
            el.style.color = value;
        }
    }
};

const colorShorcut = function (el, binding) {
    const { oldValue, value } = binding;
    if (oldValue !== value) {
        el.style.color = value;
    }
}

export {color, colorShorcut, autoFocus};