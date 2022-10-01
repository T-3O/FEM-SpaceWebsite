class Page {
  fragmentBtns;
  fragments;
  fragmentContainers;

  constructor() {
    this.initEvents();
  };

  initEvents() {
    const self = this;
    this.fragmentBtns = document.getElementsByClassName("fragment-loader");
    this.fragments = document.getElementsByClassName("fragment");
    this.fragmentContainers = document.getElementsByClassName("fragment-container");

    Array.from(this.fragmentBtns).forEach(function(fragment) {
      fragment.addEventListener('click', self.loadFragment.bind(self));
    });
  };

  loadFragment(evt) {
    const button = evt.currentTarget;
    evt.stopPropagation();
    evt.preventDefault();

    if (button.classList.contains("selected"))
    {
      return;
    }
    //console.log(button);

    const target = button.getAttribute("data-target");
    const fragmentCounter = document.getElementsByClassName("fragment visible").length;
    let counter = 0;
    //console.log(target);
    //console.log("Fragment global counter is: " + fragmentCounter + " / " + counter);

    Array.from(this.fragmentBtns).forEach(function(fragment) {
      fragment.classList.remove("selected");
    });
    button.classList.add("selected");

    let targetFragments = [];
    Array.from(this.fragments).forEach(function(fragment) {
      if (fragment.classList.contains("hidden"))
      {
        if (fragment.getAttribute("data-display-obj") === target)
        {
          targetFragments.push(fragment);
        }
        return;
      }

      fragment.classList.remove("visible");
      fragment.setAttribute("hiding", "");
      fragment.addEventListener(
        "animationend",
        () => {
          fragment.removeAttribute("hiding");
          fragment.classList.add("hidden");
          counter++;

          if (counter === fragmentCounter)
          {
            targetFragments.forEach(fragment => {
              fragment.classList.add("visible");
              fragment.classList.remove("hidden");
            });
          }
        },
        { once: true }
      );
    });
  };
}

new Page();