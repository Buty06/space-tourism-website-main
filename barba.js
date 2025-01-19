const main = document.querySelector(".loading_screen");

const leaveAnimation = () => {
  return new Promise((resolve) => {
    anime({
      targets: main,
      width: '100%',
      duration: 2000,
      easing: 'linear',
      complete: resolve,
    });
  });
};

const enterAnimation = () => {
  return new Promise((resolve) => {
    anime({
      targets: main,
      width: '0%',
      duration: 2000,
      easing: 'linear',
      complete: resolve,
    });
  });
};

barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave() {
        return leaveAnimation();
      },
      enter() {
        return enterAnimation();
      },
    },
  ],
});
