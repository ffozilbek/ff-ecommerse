const elsHeaderLink = document.querySelectorAll(".header__link"),
    elBurger = document.querySelector(".burger"),
    elHeaderNav = document.querySelector(".header__nav"),
    elHeaderList = document.querySelector(".header__list"),
    elsSlider = document.querySelectorAll(".product__img"),
    elsOwlSlider = document.querySelectorAll(".slider-item__img"),
    elNext = document.querySelector(".next"),
    elPrev = document.querySelector(".prev"),
    elPlus = document.querySelector(".plus"),
    elMinus = document.querySelector(".minus"),
    elCounter = document.querySelector(".counter"),
    elAddCartBtn = document.querySelector(".addcart-btn"),
    elCartCounter = document.querySelector(".header__cart-counter"),
    elHeaderCart = document.querySelector(".header__cart"),
    elCartModal = document.querySelector(".modal__cart"),
    elModalIsEmpty = document.querySelector(".modal__cart-empty"),
    elModalCartBody = document.querySelector(".modal__cart-body"),
    elModalPrev = document.querySelector(".js-modal-prev"),
    elModalNext = document.querySelector(".js-modal-next"),
    elModalPreview = document.querySelector(".preview__modal")
    elCloseBtn = document.querySelector(".close__btn");

elsHeaderLink.forEach(headerLink => {
    headerLink.addEventListener("click", ()=> {
        elsHeaderLink.forEach(item => {
            item.classList.remove("active")
        })

        headerLink.classList.add("active");
    })
})

if(elBurger) {
    elBurger.addEventListener("click", ()=> {
        elHeaderNav.classList.toggle("active");
        setTimeout(() => {
            elBurger.classList.toggle("active");
        }, 200);
        setTimeout(() => {
            elHeaderList.classList.toggle("active");
        }, 100);
    })
}

if(elsOwlSlider) {
    elsOwlSlider.forEach(slider => {
        slider.addEventListener("click", ()=> {
            elsOwlSlider.forEach(item => {
                item.classList.remove("active");
            })

            slider.classList.add("active");

            index = slider.dataset.index;
            elsSlider.forEach(carousel => {
                carousel.style.transform = `translateX(-${index * 100}%)`;
            })
        })
    })
}

let indexCounter = 0;

if(elNext) {
    elNext.addEventListener("click", ()=> {
        if(indexCounter<3) {
            indexCounter++;
            elsSlider.forEach(carousel => {
                carousel.style.transform = `translateX(-${indexCounter * 100}%)`;
            })
        } else {
            indexCounter = 0;
            elsSlider.forEach(carousel => {
                carousel.style.transform = `translateX(-${indexCounter * 100}%)`;
            })
        }

    })
}

if(elPrev) {
    elPrev.addEventListener("click", ()=> {
        if(indexCounter == 0) {
            indexCounter=3;
            elsSlider.forEach(carousel => {
                carousel.style.transform = `translateX(-${indexCounter * 100}%)`;
            })
        } else {
            indexCounter--;
            elsSlider.forEach(carousel => {
                carousel.style.transform = `translateX(-${indexCounter * 100}%)`;
            })
        }

    })
}

// MODAL SLIDER

if(elModalNext) {
    elModalNext.addEventListener("click", ()=> {
        if(indexCounter<3) {
            indexCounter++;
            elsSlider.forEach(carousel => {
                carousel.style.transform = `translateX(-${indexCounter * 100}%)`;
            })
        } else {
            indexCounter = 0;
            elsSlider.forEach(carousel => {
                carousel.style.transform = `translateX(-${indexCounter * 100}%)`;
            })
        }

    })
}

if(elModalPrev) {
    elModalPrev.addEventListener("click", ()=> {
        if(indexCounter == 0) {
            indexCounter=3;
            elsSlider.forEach(carousel => {
                carousel.style.transform = `translateX(-${indexCounter * 100}%)`;
            })
        } else {
            indexCounter--;
            elsSlider.forEach(carousel => {
                carousel.style.transform = `translateX(-${indexCounter * 100}%)`;
            })
        }

    })
}

let counter = 0;

elPlus.addEventListener("click", ()=> {
    counter++;
    elCounter.innerHTML = counter;
})

elMinus.addEventListener("click", ()=> {
    if(counter!=0) {
        counter--;
        elCounter.innerHTML = counter;
    }
})

elAddCartBtn.addEventListener("click", ()=> {
    if(counter!= 0) elCartCounter.style.display = "block";
    elCartCounter.innerHTML = counter;
})


elHeaderCart.addEventListener("click", ()=> {
    elCartModal.classList.toggle("active");
    if(counter!=0) {
        elModalIsEmpty.style.display = "none";
        elModalCartBody.style.display = "block";
    }
})

elsSlider.forEach(item => {
    item.addEventListener("click", ()=> {
        elModalPreview.style.display = "flex";
    })
})

if(elCloseBtn) {
    elCloseBtn.addEventListener("click", ()=> {
        elModalPreview.style.display = "none";
    })
}