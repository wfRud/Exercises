class Slider {
  constructor(elemSelector) {
    this.currentSlide = 0;
    this.elemSlider = elemSelector;
    this.slider = null;
    this.sliderCnt = null;
    this.slides = null;
    this.prev = null;
    this.next = null;
    this.dots = null;
  }

  generateSlider() {
    this.slider = document.querySelector(this.elemSlider);
    const sliderFrame = document.createElement("div"),
      sliderCnt = document.createElement("div");

    sliderFrame.classList.add("slider-frame");
    sliderCnt.classList.add("slider", "slider-cnt");

    this.slides = this.slider.children;
    [...this.slides].forEach((slide) => sliderCnt.appendChild(slide));

    sliderFrame.appendChild(sliderCnt);
    this.slider.appendChild(sliderFrame);

    this.slides = sliderCnt.children;
    this.sliderCnt = sliderCnt;

    this.createPrevNextButtons();
    this.createDots();
  }

  createPrevNextButtons() {
    // fontAwesome Icons
    const prevIcon = document.createElement("i");
    const nextIcon = document.createElement("i");
    prevIcon.classList.add("fas", "fa-chevron-left");
    nextIcon.classList.add("fas", "fa-chevron-right");

    this.prev = document.createElement("button");
    this.prev.type = "button";
    this.prev.classList.add("button", "button-prev");
    this.prev.appendChild(prevIcon);
    this.prev.addEventListener("click", this.prevSlide.bind(this));

    this.next = document.createElement("button");
    this.next.type = "button";
    this.next.classList.add("button", "button-next");
    this.next.appendChild(nextIcon);
    this.next.addEventListener("click", this.nextSlide.bind(this));

    const sliderButtons = document.createElement("div");
    sliderButtons.classList.add("slider-buttons");
    sliderButtons.appendChild(this.prev);
    sliderButtons.appendChild(this.next);

    this.slider.appendChild(sliderButtons);
  }

  createDots() {
    const sliderDots = document.createElement("div");
    sliderDots.classList.add("slider-dots");

    [...this.slides].forEach((slide, index) => {
      const dot = document.createElement("div");
      dot.classList.add(`slider-dot`, `slider-${index + 1}`);
      dot.dataset.target = index;
      sliderDots.appendChild(dot);
    });
    this.slider.appendChild(sliderDots);
    this.dots = sliderDots.querySelectorAll(".slider-dot");

    this.controlDots();
  }

  prevSlide() {
    if (this.currentSlide <= 0) {
      this.prev.disabled = true;
    } else {
      this.currentSlide--;
      this.next.disabled = false;
    }
    this.switchSlide();
  }
  nextSlide() {
    if (this.currentSlide >= this.slides.length - 1) {
      this.next.disabled = true;
    } else {
      this.currentSlide++;
      this.prev.disabled = false;
    }
    this.switchSlide();
  }

  controlDots() {
    this.dots.forEach((dot) =>
      dot.addEventListener("click", (e) => {
        this.dots.forEach((dot) => dot.classList.remove("active"));
        e.target.classList.toggle("active");
        this.currentSlide = e.target.dataset.target;
        this.switchSlide();
      })
    );
  }

  switchSlide() {
    let sliderCurrentWidth =
      this.sliderCnt.getBoundingClientRect().width * this.currentSlide;
    this.dots.forEach((dot) => dot.classList.remove("active"));
    this.dots[this.currentSlide].classList.toggle("active");

    this.sliderCnt.style.transform = `translate(-${sliderCurrentWidth}px)`;
  }
}

const slider = new Slider("#slider");
slider.generateSlider();
