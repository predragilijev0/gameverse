!(function($) {
  "use strict";

  // Toggle nav menu
  $(document).on('click', '.nav-toggle', function(e) {
    $('.nav-menu').toggleClass('nav-menu-active');
    $('.nav-toggle').toggleClass('nav-toggle-active');
    $('.nav-toggle i').toggleClass('bx-x bx-menu');
  });

  // Toogle nav menu drop-down items
  $(document).on('click', '.nav-menu .drop-down > a', function(e) {
    e.preventDefault();
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass('active');
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .active').removeClass('active');
          $(this).closest('li').addClass('active');
          $('.nav-menu').removeClass('nav-menu-active');
          $('.nav-toggle').removeClass('nav-toggle-active');
          $('.nav-toggle i').toggleClass('bx-x bx-menu');
        }
        return false;
      }
    }
  });
})(jQuery);

/// Moj JS

//Nav meni ispis
var nizNavHref = ["#hero", "#mainnews", "#agames", "#news", "#gw", "#reviews", "#gallery", "#contact"];
var nizNavIme = ["Home", "Main news", "Upcoming games", "Latest stories","Giveaways", "Reviews","Wallpapers", "Contact Us"];

var ispis="";

for(let i = 0; i < nizNavHref.length; i++){
  ispis += `
    <li><a href="${nizNavHref[i]}">${nizNavIme[i]}</a></li>
  `;
}
document.querySelector("#meniLista").innerHTML = ispis;

//Galerija ispis
var nizSrc = ["assets/img/thumb/wallp1th.jpg", "assets/img/thumb/wallp2th.jpg", "assets/img/thumb/wallp3th.jpg", "assets/img/thumb/wallp4th.jpg", "assets/img/thumb/wallp5th.jpg", "assets/img/thumb/wallp6th.jpg", "assets/img/thumb/wallp7th.jpg", "assets/img/thumb/wallp8th.jpg"];
var nizHref = ["assets/img/wallp1.jpg", "assets/img/wallp2.jpg", "assets/img/wallp3.jpg", "assets/img/wallp4.jpg", "assets/img/wallp5.jpg", "assets/img/wallp6.jpg", "assets/img/wallp7.jpg", "assets/img/wallp8.jpg"];
var nizAlt = ["Wallpaper1", "Wallpaper2", "Wallpaper3", "Wallpaper4", "Wallpaper5", "Wallpaper6", "Wallpaper7", "Wallpaper8"];

var nizCapt = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5", "Image 6", "Image 7", "Image 8", "Image 9", "Image 10"];

var ispis = "";

for(let i = 0; i < nizSrc.length; i++){
  ispis += `
    <div class="col-lg-4 col-md-6 col-12 darkbg2">
      <a href="${nizHref[i]}" data-caption="${nizCapt[i]}" class="d-block mb-4 h-100">
        <img src="${nizSrc[i]}" class="img-fluid" alt="${nizAlt[i]}">
      </a>
    </div>
  `;
}
document.querySelector("#slikeovde").innerHTML = ispis;

//Kartice ispis
var nizIconSrc = ["assets/img/rev8.jpg", "assets/img/hinf.jpg", "assets/img/hman3.jpg"];
var nizIconAlt = ["Icon1", "Icon2", "Icon3"];
var nizNoviSrc = ["assets/img/rev8-1.jpg", "assets/img/hinf-1.jpg", "assets/img/hman3-1.jpg"];

var clanakTekst = ["Does this game even need an introduction? The Resident Evil franchise is one of if not the longest-standing horror gaming franchises in the world. And with the return to its survival-horror roots with the enormously successful Resident Evil 7: Biohazard, the eighth installment is bound to be as jaw-dropping, if not more, right? You're absolutely correct!",
"If you've been eagerly anticipating the continuation of the Master Chief's saga, your patience will soon be rewarded! Although the game was supposed to launch around the end of 2020, the release has been postponed to 2021. However, the anticipation for it hasn't dwindled in the slightest! With all that in mind, eager fans can do nothing but save up and patiently wait for updates and more reveals.",
"This stealth-based third-person shooter focuses on using stealth and deception to take out prominent criminals worldwide. The developers behind the franchise, IO Interactive,  revealed that Agent 47's contracts would take him to Dubai, England, and many more places this time around. They also noted that the players would be able to sync their maps and progress from the previous Hitman games with the latest installment!"];
var clanakNaslov = ["Resident Evil Village", "Halo Infinite", "Hitman 3"];

var ispis = "";

for(let i = 0; i < nizIconSrc.length; i++){
  ispis += `
    <div class="col-lg-4 col-md-12 d-flex align-items-stretch">
      <div class="card darkbg">
        <img src="${nizIconSrc[i]}" data-alt-src="${nizNoviSrc[i]}" class="card-img-top prom" alt="${nizIconAlt[i]}">
        <div class="card-body">
          <h5 class="card-title"><a href="">${clanakNaslov[i]}</a></h5>
          <p class="card-text"> ${clanakTekst[i]} </p>
        </div>
      </div>
    </div>
  `;
}
document.querySelector("#karticeovde").innerHTML = ispis;

//time/date ispis
var nizTD = ["days", "hours", "minutes", "seconds"];
var ispis = "";

for(let i = 0; i < nizTD.length; i++){
  ispis += `
    <div class="deadline-format">
      <div>
        <h4 class="${nizTD[i]}">34</h4>
        <span>${nizTD[i]}</span>
      </div>
    </div>
  `;
}
document.querySelector("#dlHere").innerHTML = ispis;

//Novosti ispis
var nizVestSrc = ["assets/img/thumbvest1.jpg", "assets/img/thumbvest2.jpg", "assets/img/thumbvest3.jpg", "assets/img/thumbvest4.jpg"];
var nizVestAlt = ["Vest1", "Vest2", "Vest3", "Vest4"];

var vestTekst = ["The Game Awards took place earlier today, and it spent several hours delivering not only awards, but also a host of new game announcements and updates on existing games.",
"Super Meat Boy Forever has been a long time coming, having been first announced in 2014. Now the tough-as-nails platformer has finally set a release date.",
"Epic already gives away free games every week, but starting next Thursday, you'll be able to snag a freebie every day, to celebrate the holidays.",
"Given these circumstances, it's easy to see why Animal Crossing became such an immediate, inescapable hit, particularly during the first half of the year."];
var vestNaslov = ["The Game Awards 2020 Announcements: All The Biggest News",
"Super Meat Boy Forever Gets Release Date, After Wait Seemed Like Forever",
"Epic Is Giving Away 15 Free Games For Christmas Starting Next week",
"Best Games Of 2020 - Animal Crossing: New Horizons"];

var ispis = "";

for(let i = 0; i < nizVestSrc.length; i++){
  ispis += `
    <div class="col-12 mt-4 testing2">
      <div class="row no-gutters db2 d-flex flex-sm-row overflow-hidden shadow-sm h-md-250 position-relative testing">
        <div class="col-auto d-sm-block d-flex align-items-center pt-3 pb-3 dnone">
          <img width="200" height ="250" class="img-fluid m-3 border border-secondary" src="${nizVestSrc[i]}" alt="${nizVestAlt[i]}"/>
        </div>
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-warning">Article</strong>
          <h4 class="mb-0 text-light">${vestNaslov[i]}</h4>
          <div class="mb-1 text-muted">Gameverse</div>
          <p class="card-text mb-auto">${vestTekst[i]}</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
      </div>
    </div>
  `;
}
document.querySelector("#vestiovde").innerHTML = ispis;

//Forma ispis
var tbNames = ["tbImePrezime", "tbEmail", "tbTema"];
var tbPlaceholder = ["Your Name", "Your Email", "Subject here"];
var tbLabel = ["Name:", "Email:", "Subject:"];
var tbGr = ["gr1", "gr2", "gr0"];

var ispis = `<p id="confirmation" class="d-none alert alert-success">You have successfully sent a message!</p>`;

for(let i = 0; i < tbNames.length; i++){
  ispis += `
    <div class="form-group">
      <label class="gray" for="${tbNames[i]}">${tbLabel[i]}</label>
      <input type="text" id="${tbNames[i]}" placeholder="${tbPlaceholder[i]}" class="form-control"/>
      <span id ="${tbGr[i]}"> </span>
    </div>
  `;
}
ispis+=`
  <div class="form-group">
    <label class="gray" for="tbMessage">Message:</label>
    <textarea id="tbMessage" rows="5" placeholder="Write something..." class="form-control"></textarea>
    <span id ="gr3"> </span>
  </div>
    <div class="form-group d-flex justify-content-center justify-content-md-start">
    <input type="button" value="Send" id="buttonSubmit" class="btn btn-light"/>
  </div>
`;
document.querySelector("#formOne").innerHTML = ispis;


// Recenzije ispis + Paginacija
var current_page = 1;
var records_per_page = 3;


var nizRecSrc = ["assets/img/rew1.png", "assets/img/rew2.png", "assets/img/rew3.png", "assets/img/rew4.png", "assets/img/rew5.png", "assets/img/rew6.png", "assets/img/rew7.png", "assets/img/rew8.png", "assets/img/rew9.png"];
var nizRecAlt = ["Review 1", "Review 2", "Review 3", "Review 4", "Review 5", "Review 6", "Review 7", "Review 8", "Review 9"];

var recTekst = ["Final Fantasy 7 Remake has arrived on PC months after its PlayStation release, at a price of $70. The hope was for a definitive version, but at launch, I can't say this is it Which is disappointing, because in spite of Square Enix giving it the kind of PC port the publisher is infamous for...",
"Does an open world work for Halo? Since its announcement, that question is one that's been constantly asked of Halo Infinite Six years after the sour note of Halo 5, 343 Industries has dusted off the Master Chief's armour for a throwback to Bungie's original, pointedly nostalgic for a time when Halo was just a big green man...",
"After being airdropped from a cargo plane in an AMG One, I arrive at the festival site to fanfare and fireworks. The organisers are delighted—their 'superstar' is finally here—and to celebrate they offer me a choice of starting car. I leave the site and head to my first race in a Corvette Stingray Coupe. This isn't how racing games are supposed to start...",
"It might not sound like it, but trust me—it's hip... One of the many disembodied voices guiding me through this bold new society of extreme sports types in the mountains is telling me I can win a pizza delivery bike in the next event. She's also, knowingly or not, critiquing herself. Everybody here talks like they're hooked up to a Red Bull IV drip...",
"When Ossie Ardiles returned to manage Spurs, he decided to play to their strengths. They had five world-class strikers, so they all started. It was breathtaking... and a disaster. I find that kind of devil-may-care, joie-de-vivre irresistible, and that's why I've sucked at football manager sims all these years, since the Kevin Toms classic on the 16k ZX81...",
"On the evidence of its timeless tyranny over the RTS genre, there's a case to be made that there's no surpassing Age of Empires 2—now in its 'Definitive' form. Its competitive scene is thriving, people are lapping up its ongoing DLCs like bread loaves dished out by a benevolent ruler, and its gorgeous sprites have a cleanliness that 3D graphics...",
"It's a little weird to be back in Myst in 2021, after all this time. Cyan Worlds has completely remade the game (again, following 2000's realMyst and 2014's realMyst: Masterpiece Edition, neither of which I played). And this new 3D Myst works on both desktop and in VR, so I got to spend time actually (virtually) walking around in it...",
"There's a moment in Life is Strange: True Colors where protagonist Alex angrily throws a glass bottle across a room. It smashes into the opposite wall, leaving hundreds of shards scattered across the floor. Her rage is white-hot but only lasts an instant before it quickly melts away It's an incredibly tense scene, but Alex's actions...",
"You can tell a lot about a game's soul by what it deems a 'perk'. Fallout 3, for example, thinks being better at murdering women is one. In Modern Warfare it's dropping a grenade after death like a smug ghost. In Psychonauts 2, Double Fine will sell you a 'beastmastery' pin badge modifier that allows Raz's psychic fist..."];
var recNaslov = ["Final Fantasy 7 Remake PC review",
"Halo Infinite review",
"Forza Horizon 4 review",
"Riders Republic review",
"Football Manager 2022 review",
"Age of Empires 4 review",
"Myst review",
"Life is Strange: True Colors review",
"Psychonauts 2 review"];

var ispis2 = "";

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        ispis2 = "";
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        ispis2 = "";
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_rew = document.getElementById("reviewsovde");
    var page_span = document.getElementById("page");
 
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_rew.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < nizRecAlt.length; i++) {
      ispis2 += `
        <div class="col-12 mt-4">
          <div class="row no-gutters db2 d-flex flex-sm-row overflow-hidden h-md-250 position-relative">
            <div class="col-auto d-sm-block d-flex align-items-center pt-3 pb-3">
              <img width="200" height ="250" class="img-fluid m-3 border border-secondary d-none d-md-block" src="${nizRecSrc[i]}" alt="${nizRecAlt[i]}"/>
            </div>
            <div class="col p-4 d-flex flex-column">
              <strong class="d-inline-block mb-2 text-primary">Review</strong>
              <h4 class="mb-0 text-light">${recNaslov[i]}</h4>
              <div class="mb-1 text-muted">Gameverse</div>
              <p class="card-text mb-auto">${recTekst[i]}</p>
              <a href="#" class="stretched-link">Continue reading</a>
            </div>
          </div>
        </div>
      `;
      document.querySelector("#reviewsovde").innerHTML = ispis2;
    }
    page_span.innerHTML = page + "/" + numPages();

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(nizRecAlt.length / records_per_page);
}

// Forma
document.addEventListener("DOMContentLoaded", function() {
  var nameField = document.querySelector("#tbImePrezime");
  var emailField = document.querySelector("#tbEmail");
  var messageField = document.querySelector("#tbMessage");
  var subjectField = document.querySelector("#tbTema");

  var namePattern = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})+$/;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var messagePattern = /^[a-zA-Z0-9\s\W]{20,200}$/;
  var subjectPattern = /^[a-zA-Z0-9\s\W]{2,50}$/;

  function formExample(textNum) {
    var textArray = [
      "Example: <i>Tom Smith, Edward Hemingway...</i>",
      "Example: <i>tom@gmail.com, tom.smith@hotmail.com, etc...</i>",
      "Example: <i>Gaming news, Suggestion for the next event, Esports etc...</i>",
      "Enter at least 20 characters. <i>Max: 200.</i>"
    ];
    var divNameArray = ["#gr1", "#gr2", "#gr0", "#gr3"];
    document.querySelector(divNameArray[textNum]).innerHTML =
      "" + textArray[textNum];
  }

  nameField.addEventListener("blur", function() {
    proveraRegEx(namePattern, "#tbImePrezime", nameField);
  });

  emailField.addEventListener("blur", function() {
    proveraRegEx(emailPattern, "#tbEmail", emailField);
  });

  messageField.addEventListener("blur", function() {
    proveraRegEx(messagePattern, "#tbMessage", messageField);
  });

  subjectField.addEventListener("blur", function() {
    proveraRegEx(subjectPattern, "#tbTema", subjectField);
  });

  function proveraRegEx(regEx, element, field) {
    console.log(field.value);
    var fieldValue = field ? field.value : field.val();
    if (!fieldValue.match(regEx)) {
      field.classList.add("wrong");
      if (element == "#tbImePrezime") {
        formExample(0);
      }
      if (element == "#tbEmail") {
        formExample(1);
      }
      if (element == "#tbTema") {
        formExample(2);
      }
      if (element == "#tbMessage") {
        formExample(3);
      }
      return false;
    } else {
      field.classList.remove("wrong");
      return true;
    }
  }

  //Forma submit
  document.querySelector("#buttonSubmit").addEventListener("click", provera);
  function provera() {
    var mistakes = 0;
    if (!proveraRegEx(namePattern, "#tbImePrezime", nameField)) {
      mistakes++;
      nameField.classList.add("wrong");
      formExample(0);
    }

    if (!proveraRegEx(emailPattern, "#tbEmail", emailField)) {
      mistakes++;
      emailField.classList.add("wrong");
      formExample(1);
    }
    if (!proveraRegEx(messagePattern, "#tbMessage", messageField)) {
      mistakes++;
      messageField.classList.add("wrong");
      formExample(2);
    }
    if (!proveraRegEx(subjectPattern, "#tbTema", subjectField)) {
      mistakes++;
      subjectField.classList.add("wrong");
      formExample(3);
    }
    if (mistakes === 0) {
      document.querySelector("#confirmation").style.cssText = "display: block !important;";
      nameField.classList.add('success');
      emailField.classList.add('success');
      messageField.classList.add('success');
      subjectField.classList.add('success');

      nameField.value = "";
      emailField.value = "";
      messageField.value = "";
      subjectField.value = "";

      document.querySelector("#gr0").innerHTML = "";
      document.querySelector("#gr1").innerHTML = "";
      document.querySelector("#gr2").innerHTML = "";
      document.querySelector("#gr3").innerHTML = "";

      function sakrij() {
        document.querySelector("#confirmation").style.display = "none";
        nameField.classList.remove('success');
        emailField.classList.remove('success');
        messageField.classList.remove('success');
        subjectField.classList.remove('success');
      }

      window.setTimeout(sakrij, 5000);
    }
  }

  changePage(1);
});

//Giveaway countdown timer
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `Playstation 5 giveaway starts on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired!</h4>`;
  }
}
let countdown = setInterval(getRemaindingTime, 1000);
getRemaindingTime();


//Modal autor
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


$(document).ready(function(){
  // Dugme za show more
  $('.spoiler').hide();
  $('<input type="button" class="revealer btn btn-outline-light btn-sm" value="Show more"/>').insertBefore('.spoiler');
  $('.revealer').click(function(){
    $(this).hide();
    $(this).next().slideToggle();
  });

  slajder();
});

//Slajder slike glavne vesti
function slajder() {
  var current = $('#slike .prikazi');
  var next = current.next().length ? current.next() : current.parent().children(':first');
  
  current.fadeOut(1000);
  window.setTimeout(sakrij2,1000);
  function sakrij2() {
    current.hide().removeClass('prikazi');
    next.fadeIn().addClass('prikazi');
  }
  
  setTimeout(slajder, 5000);
}

//Promena slika hoverom
var srcPromena = function() {
  var $this = $(this);
  var noviSrc = $this.data('alt-src');
  $this.data('alt-src', $this.attr('src'));
  $this.attr('src', noviSrc);
}
$(function () {
  $('img.prom').hover(srcPromena, srcPromena);
});

//Show more dugme za vesti(Nestaje nakon sto se pojave sve vesti)
$(function () {
  var brKl = 0;
  $(".testing2").slice(0, 2).show();
  $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".testing2:hidden").slice(0, 1).slideDown();
      if ($(".testing2:hidden").length == 0) {
          $("#load").fadeOut('slow');
      }
      brKl += 2;
      if (brKl >= (nizVestSrc.length-1)) {
        $(".loaded").remove();
      }
  });
});

///JQuery Plugin Lightbox
$(function() {
  $('#gallery a').lightbox({
    blur: true,
    nav:false,
    // minSize: 768
  }); 
});
