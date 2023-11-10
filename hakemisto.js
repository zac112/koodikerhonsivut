const hakemisto = document.getElementById("hakemisto")

const content = fetch("/hakemisto.html").then((content) => {
    return content.text()
}).then((text) => {
    hakemisto.innerHTML = text;
})
