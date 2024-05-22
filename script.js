document.addEventListener("DOMContentLoaded", function () {
  // Code specific to index.html
  if (document.body.classList.contains("index-page")) {
    // fetching images
    const SubbmitBtn = document.getElementById("submit_btn");
    const UserInput = document.getElementById("user_input");
    const display_content = document.getElementById("display_content");
    const LoadMore = document.getElementById("LoadMore");
    const accesskey = "Q_lyH8u65Ehli5set-P6LYe8IGKgmK67NdiVABnb_88";
    const search_box = document.getElementById("search_box");

    let keywords = "";
    let page = 1;
    async function searchImage() {
      keywords = UserInput.value;
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keywords}&client_id=${accesskey}&per_page=12`;
      const response = await fetch(url);
      const data = await response.json();

      if (page == 1) {
        display_content.innerHTML = "";
      }

      const result = data.results;
      result.map((results) => {
        // display images
        const image = document.createElement("img");
        image.src = results.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = results.links.html;

        imagelink.appendChild(image);
        display_content.appendChild(imagelink);
        imagelink.target = "_blank";
        LoadMore.style.display = "block";
        display_content.classList.add("display_imgs");
      });
    }

    search_box.addEventListener("submit", (e) => {
      e.preventDefault();
      page = 1;
      searchImage();
    });
    LoadMore.addEventListener("click", () => {
      page++;
      searchImage();
    });

    // -----default-search -button diplayed on slide-----
    let item1_search = document.querySelector(".i_phn");
    let item2_search = document.querySelector(".Mug");
    let item3_search = document.querySelector(".zoom");
    item1_search.addEventListener("click", () => {
      UserInput.value = "iphone";
      searchImage();
    });
    item2_search.addEventListener("click", () => {
      UserInput.value = "mug";
      searchImage();
    });
    item3_search.addEventListener("click", () => {
      UserInput.value = "zoom-background";
      searchImage();
    });

    // ------------------slide-image-start------------

    const nextSlide = document.getElementById("right-btn");
    const prevtSlide = document.getElementById("left-btn");
    const Slider = document.querySelector(".slider");
    const img = document.querySelectorAll(".img-content");

    let slide_num = 1;
    function Next_slide() {
      Slider.style.transform = `translateX(-${slide_num * 100}%)`;
      slide_num++;
    }
    function first_slide() {
      Slider.style.transform = `translateX(0)`;
      slide_num = 1;
    }

    function PrevtSlide() {
      Slider.style.transform = `translateX(-${(slide_num - 2) * 100}%)`;
      slide_num--;
    }
    function Last_slide() {
      Slider.style.transform = `translateX(-${(img.length - 1) * 100}%)`;
      slide_num = img.length;
      console.log(img.length);
    }
    nextSlide.addEventListener("click", () => {
      slide_num < img.length ? Next_slide() : first_slide();
    });
    prevtSlide.addEventListener("click", () => {
      slide_num > 1 ? PrevtSlide() : Last_slide();
    });

    LoadMore.addEventListener("mousedown", () => {
      LoadMore.style.transform = "scale(0.9)";
    });
    LoadMore.addEventListener("mouseup", () => {
      LoadMore.style.transform = "scale(1)";
    });

    // animation on slide
    setInterval(function () {
      slide_num < img.length ? Next_slide() : first_slide();
    }, 8000);
  }
  // Code specific to All_images.html
  if (document.body.classList.contains("All_images")) {
    const display_container = document.querySelector(".All_images_container");
    const accesskey = "Q_lyH8u65Ehli5set-P6LYe8IGKgmK67NdiVABnb_88";
    let page = 0;
    async function ALl_images() {
      const keywords = "all";
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keywords}&client_id=${accesskey}&per_page=24`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      let result = data.results;

      result.map((images) => {
        const img = document.createElement("img");
        img.src = images.urls.small;

        const imgLink = document.createElement("a");
        imgLink.href = images.links.html;

        imgLink.appendChild(img);
        display_container.appendChild(imgLink);

        display_container.classList.add("display_images_All");
      });
    }
    ALl_images();
    const loadmoreBtn = document.querySelector("#LoadMore2");
    loadmoreBtn.addEventListener("click", () => {
      page++;
      ALl_images();
    });

    // for home page
    document.getElementById("prevbtn").addEventListener("click", () => {
      window.open("./index.html");
    });

    // clicking on mouse for load
    const LoadMore2 = document.querySelector(".LoadMore");
    LoadMore2.addEventListener("mousedown", () => {
      LoadMore2.style.transform = "scale(0.9)";
    });
    LoadMore2.addEventListener("mouseup", () => {
      LoadMore2.style.transform = "scale(1)";
    });
    // home
    const home = document.querySelector(".LoadMore2");
    home.addEventListener("mousedown", () => {
      home.style.transform = "scale(0.9)";
    });
    home.addEventListener("mouseup", () => {
      home.style.transform = "scale(1)";
    });
  }
  // Code specific to about-page.html
  if (document.body.classList.contains("about-page")) {
    // navigate to home page
    const input_text = document.querySelector("input");
    input_text.addEventListener("click", () => {
      window.open("./index.html");
    });
  }
  // Code specific to login_page.html
  if (document.body.classList.contains("login_page")) {
    //  login  text convert into registraion
    const login_btn = document.querySelector(".login-btn-a");
    const login_text = document.querySelector(".login-text");
    const nameInput = document.getElementById("name-box");
    const login_page_head = document.getElementById("login-page-head");

    login_btn.addEventListener("click", () => {
      // login  text convert into registraion

      if (login_btn.innerHTML == "login here") {
        login_btn.innerHTML = "Registraion";
        nameInput.style.display = "none";
        login_page_head.innerHTML = "Login Detail";
      } else {
        login_btn.innerHTML = "login here";
        nameInput.style.display = "block";
        login_page_head.innerHTML = "registration form";
      }
      // login_btn.innerHTML==="Login Here"? :login_btn.innerHTML="Login Here"
      login_text.innerHTML === "already have an account ?"
        ? (login_text.innerHTML = "Create a new account")
        : (login_text.innerHTML = "already have an account ?");
    });
  }
  // Code specific to contact.html
  if (document.body.classList.contains("contact")) {
    //  navigate to home page
    const input_text = document.querySelector("input");
    input_text.addEventListener("click", () => {
      window.open("./index.html");
    });
  }
});
// media query left slide for every page
let menu_toggle = document.querySelector(".icon");
menu_toggle.addEventListener("click", () => {
  console.log("ok");
  document.querySelector(".nav_media").classList.toggle("menu_toggle");
});

// display signup page
const login = document.querySelector(".signinbtn");
login.addEventListener("click", () => {
  window.open("./sign_up.html");
});
