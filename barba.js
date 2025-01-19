const main = document.querySelector(".main");

const leaveAnimation = () => {
  anime({
    targets: main,
    opacity: 0,
    duration: 4000,
  });
};

const enterAnimation = () => {
  anime({
    targets: main,
    opacity: 1,
    duration: 4000,
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
