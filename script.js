var tabLinks = document.getElementsByClassName("titles");
        var tabContents = document.getElementsByClassName("links-content");

        function opentab(tabname) {
            for (tabLink of tabLinks) {
                tabLink.classList.remove("active-link");
            }
            for (tabContent of tabContents) {
                tabContent.classList.remove("active-content");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-content");
        }

        let section = document.querySelectorAll('section');
        let navLink = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            section.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');
                if (top > offset && top < offset + height) {
                    sec.classList.add('show-animate');
                    navLink.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
                    })
                }

            })
        }


let sidemenu = document.getElementById("sidemenu");
let cancel = document.getElementById("cancel")

function openmenu(){
    sidemenu.style.display="flex";
    cancel.style.display="block"
}
function closemenu(){
    sidemenu.style.display="none";
    cancel.style.display="none";
}