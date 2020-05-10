// Emable tooltips
$(() => {
  $("[data-toggle=\"tooltip\"]").tooltip();
});


// Register progress bar
$(".form-control").on("change paste", () => {
  const formCount = $("input.reg").length;
  const myFilledFormCount = $("input.reg").filter(function () {
    return $(this).val() === "";
  }).length;
  const width = ((1 / formCount) * (formCount - myFilledFormCount)) * 100;
  const myFormPercent = `${width}%`;
  $(".progress-bar").css("width", myFormPercent);
});

// Navbar shadow and background
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("#navbar").addClass("bg-light border-bottom shadow");
  } else {
    $("#navbar").removeClass("bg-light border-bottom shadow");
  }
});

// Smooth scroll for scrollspy
document.querySelectorAll("a[href^=\"#\"]").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Fix scrollspy nav
$(window).scroll(() => {
  if ($(window).scrollTop() > 100) {
    $("#fix-nav").addClass("affix");
    $("#fix-nav").scrollspy();
  } else {
    $("#fix-nav").removeClass("affix");
  }
});

const elementTogglePricing = document.getElementsByClassName("btn-xs");

$(() => {
  $("#togglePricing").change(function () {
    console.log(`Toggle: ${$(this).prop("checked")}`);
    const togglePricingVal = $(this).prop("checked");
    console.log(togglePricingVal);
  });
});
