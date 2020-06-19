document.addEventListener("DOMContentLoaded", function () {
  // Toggle navigation
  const toogleNavigationIcon = document.querySelector(".js-toggle-navigation");
  const panel = document.querySelector(".left-panel");

  const toogleNavigation = () => {
    panel.classList.toggle("navigation-collapsed");
  };

  if (toogleNavigationIcon)
    toogleNavigationIcon.addEventListener("click", toogleNavigation);

  // Change class active in navigation

  let navItems = Array.from(
    document.querySelectorAll(".js-navigation-items li")
  );

  const handleClick = (e) => {
    debugger;
    e.preventDefault();
    navItems.forEach((node) => {
      node.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  navItems.forEach((node) => {
    node.addEventListener("click", handleClick);
  });

  // Custom select
  const selects = document.querySelectorAll(".js-choice");
  selects.forEach((item) => {
    new Choices(item, {
      searchEnabled: false,
    });
  });

  // Hide show select
  const hideShowBtn = document.querySelectorAll(".js-layer");

  hideShowBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      const parent = e.target.closest(".layer-item__row-top");
      const selectBlock = parent.nextElementSibling;
      parent.classList.toggle("active");
      selectBlock.classList.toggle("active");
    });
  });

  // Change sitebar content

  const forward = document.getElementById("go-forward");
  const back = document.getElementById("go-back");
  const sitebarStart = document.querySelector(".js-sitebar-start");
  const sitebarOne = document.querySelector(".js-sitebar-one");

  forward.addEventListener("click", () => {
    sitebarStart.classList.remove("active");
    sitebarOne.classList.add("active");
  });

  back.addEventListener("click", () => {
    sitebarOne.classList.remove("active");
    sitebarStart.classList.add("active");
  });
});
