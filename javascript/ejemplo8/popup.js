window.onload = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (activeTab) => {
        const tabId = activeTab[0].id;
        mostrarPerro();
    });
};
const mostrarPerro = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            document.getElementById(
                "dog_image"
            ).src = json.message;
            ;
        });
};

/*https://api.thecatapi.com/v1/images/search */