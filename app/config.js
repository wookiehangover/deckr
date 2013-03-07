require.config({
  deps: ["main"],

  paths: {
    underscore: "../assets/js/lodash",
    backbone: "../assets/js/backbone",
    transform: "../assets/js/transformjs.1.0.beta.2",
    easing: "../assets/js/jquery.easing.1.3",
    raf: "../assets/js/jquery.requestAnimationFrame"
  },

  shim: {
    backbone: {
      deps: ["underscore"],
      exports: "Backbone"
    },

    underscore: {
      exports: "_"
    },

    transform: []
  }
});

