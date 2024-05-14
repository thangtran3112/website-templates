export const fadeRight = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  },
};

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  },
};

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const zoomIn = {
  initial: {
    scale: 0,
  },

  animate: (index) => ({
    scale: 1,

    transition: {
      delay: 0.05 * index,
    },
  }),
};
