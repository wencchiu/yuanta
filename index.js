
var strArr = ["壽", "險", "保", "障", "P", "l", "u", "s", "+"];
var i = 0;
var divTyping = document.getElementById("cover-text-title");

function typing() {
  if (i < strArr.length) {
    Arr = strArr.slice(0);
    ArrCut = Arr.splice(i+1);
    divTyping.innerText = Arr.join('');
    setTimeout(typing, 150);
    i++;
  } else {
    divTyping.innerText = strArr.join('');
  }
}
setTimeout(typing, 300);


 // Animation detection //

var caseBox = document.getElementById("case-box");
var detailBox = document.getElementById("detail-box");
var methodTimeBox = document.getElementById("method-time-box");
var firstScrollCase, firstScrollDetail, firstScrollMethodTime, inFooter = false;

var methodBox = document.getElementById("method-box");
var methodImage = document.getElementById("method-image");
var timeBox = document.getElementById("time-box");
var footer = document.getElementById("footer");
var calculateMobileBtn = document.getElementById("btn-calculate-mobile");
var iconBoxMobile = document.getElementById("icon-box-mobile");
var circleFront = document.getElementById("circle-front");

window.addEventListener('scroll', scrolling);

function scrolling() {
  if (isScrolledIntoView(caseBox)) {
    if (!firstScrollCase) {
      firstScrollCase = true;
      console.log("firstScroll in the case box");
      caseNoExpTitle.classList.add("animation-case-title", "animation-on");
      caseNoExpContentBg.classList.add("animation-case-content-bg", "animation-on");
      caseNoExpTree.classList.add("animation-case-tree", "animation-on");
    }
  };
  if (isScrolledIntoView(detailBox)) {
    if (!firstScrollDetail) {
      firstScrollDetail = true;
      console.log("firstScroll in the detail box");
      detailFreshmanImage.classList.add("animation-detail","animation-on");
    }
  };
  if (isScrolledIntoView(methodTimeBox)) {
    if (!firstScrollMethodTime) {
      firstScrollMethodTime = true;
      console.log("firstScroll in the method-time box");
      methodBox.classList.add("animation-method-time-text","animation-on");
      methodImage.classList.add("animation-method-time-image","animation-on");
      timeBox.classList.add("animation-method-time-text","animation-on");
    }
  };
  if (isScrollToFooter(footer)) {
    if (!inFooter) {
      inFooter = true;
      calculateMobileBtn.style.display = "none";
      iconBoxMobile.classList.add("hide");
      circleFront.classList.add("show");
    }
  };
  if (isScrollOffFooter(footer)) {
    if (inFooter) {
      inFooter = false;
      calculateMobileBtn.style.display = "unset";
      iconBoxMobile.classList.remove("hide");
      circleFront.classList.remove("show");
    }
  }
}

function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var isVisible = rect.top <= 100;
  return isVisible;
};

function isScrollToFooter(el) {
  var rect = el.getBoundingClientRect();
  var isVisible = rect.top <= 650;
  return isVisible;
};

function isScrollOffFooter(el) {
  var rect = el.getBoundingClientRect();
  var isVisible = rect.top >= 650;
  return isVisible;
};


// case animation //

var caseNoExpTitle = document.getElementById("no-exp-title");
var caseNoExpContentBg = document.getElementById("no-exp-content-bg");
var caseNoExpTree = document.getElementById("no-exp-tree");
var caseHaveExpTitle = document.getElementById("have-exp-title");
var caseHaveExpContentBg = document.getElementById("have-exp-content-bg");
var caseHaveExpTree = document.getElementById("have-exp-tree");
var caseImage = document.getElementById("case-family-image");

caseNoExpTitle.addEventListener("webkitAnimationEnd", caseAnimation2);
caseNoExpTitle.addEventListener("animationend", caseAnimation2);

function caseAnimation2() {
  caseHaveExpTitle.classList.add("animation-case-title", "animation-on");
  caseHaveExpContentBg.classList.add("animation-case-content-bg", "animation-on");
  caseHaveExpTree.classList.add("animation-case-tree", "animation-on");
}

caseHaveExpTitle.addEventListener("webkitAnimationEnd", caseAnimation3);
caseHaveExpTitle.addEventListener("animationend", caseAnimation3);

function caseAnimation3() {
  caseImage.classList.add("animation-case-image", "animation-on");
}

// detail animation //

var detailFreshmanImage = document.getElementById("freshman-image");
var detailFreshmanPhase = document.getElementById("freshman-phase");
var detailFreshmanInsuranceBg = document.getElementById("freshman-insurance-bg");
var detailFreshmanAnnual = document.getElementById("freshman-annual");

var detailWorkingImage = document.getElementById("working-image");
var detailWorkingPhase = document.getElementById("working-phase");
var detailWorkingInsuranceBg = document.getElementById("working-insurance-bg");
var detailWorkingAnnual = document.getElementById("working-annual");
var detailBalloon1 = document.getElementById("balloon-1");

var detailMarriedImage = document.getElementById("married-image");
var detailMarriedPhase = document.getElementById("married-phase");
var detailMarriedInsuranceBg = document.getElementById("married-insurance-bg");
var detailMarriedAnnual = document.getElementById("married-annual");
var detailBalloon2 = document.getElementById("balloon-2");

detailFreshmanImage.addEventListener("animationend", detailAnimation2);
detailFreshmanPhase.addEventListener("animationend", detailAnimation3);

detailFreshmanInsuranceBg.addEventListener("animationend", detailAnimation4);
detailWorkingImage.addEventListener("animationend", detailAnimation5);
detailWorkingPhase.addEventListener("animationend", detailAnimation6);

detailWorkingInsuranceBg.addEventListener("animationend", detailAnimation7);
detailMarriedImage.addEventListener("animationend", detailAnimation8);
detailMarriedPhase.addEventListener("animationend", detailAnimation9);

function detailAnimation2() {
  detailFreshmanPhase.classList.add("animation-detail","animation-on");
}
function detailAnimation3() {
  detailFreshmanInsuranceBg.classList.add("animation-detail","animation-on");
  detailFreshmanAnnual.classList.add("animation-detail","animation-on");
}
function detailAnimation4() {
  detailWorkingImage.classList.add("animation-detail","animation-on");
}
function detailAnimation5() {
  detailWorkingPhase.classList.add("animation-detail","animation-on");
}
function detailAnimation6() {
  detailWorkingInsuranceBg.classList.add("animation-detail","animation-on");
  detailWorkingAnnual.classList.add("animation-detail","animation-on");
  detailBalloon1.classList.add("animation-detail","animation-on");
}
function detailAnimation7() {
  detailMarriedImage.classList.add("animation-detail","animation-on");
}
function detailAnimation8() {
  detailMarriedPhase.classList.add("animation-detail","animation-on");
}
function detailAnimation9() {
  detailMarriedInsuranceBg.classList.add("animation-detail","animation-on");
  detailMarriedAnnual.classList.add("animation-detail","animation-on");
  detailBalloon2.classList.add("animation-detail","animation-on");
}

// term animation //
var checkAll = document.getElementById("check-all-mobile");
var termBox = document.getElementById("term-box");
var termtext = document.getElementById("term-text");

checkAll.addEventListener("click",checkAllBtn);
function checkAllBtn() {
  termBox.style.height = "unset";
  termtext.style.height = "unset";
  checkAll.style.display = "none";
};

// footer animation //
var topArrow = document.getElementById("footer-arrow");
var topArrowMobile = document.getElementById("top-icon-mobile");
topArrow.addEventListener("click",backToTop);
topArrowMobile.addEventListener("click",backToTop);
function backToTop() {
  window.scrollTo(
    {top: 0,
    left: 0,
    behavior: "smooth"});
};
