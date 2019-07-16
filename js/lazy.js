const images = document.querySelectorAll('.img__lazy');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fetchImage = (url) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.onload = resolve;
        image.onerror = reject;
    });
}

const loadImage = (image) => {
    image.classList.add("img__lazy_loaded");
    const src = image.dataset.src;
    fetchImage(src).then(() => {
        image.src = src;
    })
}

const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            loadImage(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersection, options);

images.forEach(img => {
    observer.observe(img);
})