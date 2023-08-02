function changeImage(filename)
{
    let mainImg = document.querySelector("#bannerImage");
    img.attr('src ,filename');
}


let toggler = document.querySelector(".toggler");
let price = document.querySelectorAll(".price");
let dollar = document.querySelectorAll(".dollar");
let usd = 284.99;
// 1 dollar = 284.99 which is the current rate at 2023

toggler.onclick = () => {

    toggler.classList.toggle("active");

    if (toggler.classList.contains("active")) {

        for (var i = 0; i < dollar.length; i++) {
            dollar[i].innerText = "PKR";
        }
        for (var k = 0; k < price.length; k++) {
            price[k].innerText = (price[k].innerText * usd).toFixed(2);
        }

    }
    else {

        for (var i = 0; i < dollar.length; i++) {
            dollar[i].innerText = "$";
        }
        for (var k = 0; k < price.length; k++) {
            price[k].innerText = (price[k].innerText / usd).toFixed(2);
        }

    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}




function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


// Search Function

$(document).ready(function () {

    $("#bestInput").on("keyup", function () {

        var value = $(this).val().toLowerCase();

        $(".search").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});