let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let responseStatusEl = document.getElementById("responseStatus");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let responseBodyEl = document.getElementById("responseBody");
let sendRequestBtnEL = document.getElementById("sendRequestBtn");

let url = requestUrlEl.value;

function postAndPutData() {
    let options = {
        method: requestMethodEl.value,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer f26cffadd6dd336bdfd075413397a5f30e1fad26976e1b7e04e6b7d8bc5326a6"
        },
        body: requestBodyEl.value
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            responseStatusEl.value = jsonData.code;
            responseBodyEl.value = JSON.stringify(jsonData);
        })
}

requestMethodEl.addEventListener("change", function(Event) {
    let dataMethod = Event.target.value;
})

sendRequestBtnEL.addEventListener("click", function() {
    postAndPutData();
});

consoleFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
})
