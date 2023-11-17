document.addEventListener('DOMContentLoaded', () => {
    const nav = document.createElement('nav');
    nav.id = 'navbar';
    document.body.insertBefore(nav, document.body.firstChild)

    const f = new XMLHttpRequest();
    f.onreadystatechange = function(){
        document.getElementById("navbar").innerHTML = this.response;
    }
    f.open("GET", "./hakemisto.html", true)
    f.send()

    // document.getElementById("navbar").innerHTML = 
})
