const input = document.querySelector("#textInput");
const output = document.querySelector("#output");

//TODO handle code injection/execution

input.addEventListener("input", (event) => {
    output.value = input.value?.toLowerCase();
});

output.addEventListener("focus", function() {
    this.select();
});