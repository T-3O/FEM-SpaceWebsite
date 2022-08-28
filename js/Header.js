class Header {
  constructor() {
    this.initEvents();
  };

  initEvents() {
    document.getElementById("phoneMenu").addEventListener("click", this.onPhoneMenuClicked.bind(this));
    document.getElementById("phoneMenuClose").addEventListener("click", this.onPhoneMenuClicked.bind(this));
  };

  onPhoneMenuClicked(evt) {
    const container = document.getElementsByClassName("nav-container")[0];
    container.classList.toggle("opened");
  };
}

new Header();