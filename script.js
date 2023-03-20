const input = document.querySelector("#textInput");
const output = document.querySelector("#output");

//TODO handle code injection/execution?

input.addEventListener("input", (event) => {
	output.value = input.value?.toLowerCase();
});

output.addEventListener("focus", function() {
	this.select();
});

const pasteButton = document.querySelector("#pasteButton");
const copyButton = document.querySelector("#copyButton");

//implemented as overwriting everything, handling prior cursor position seems out of scope
pasteButton.addEventListener("click", () => {
	try{
		navigator.clipboard
		.readText()
		.then((clipText) => {
			input.value = clipText;
			output.value = input.value?.toLowerCase();
		})
		.catch(err => console.error('Failed to paste. Promise catch.\n', err));
	}
	catch(err){
		console.error('Failed to paste. Likely missing certificate.\n', err);
	}
});

copyButton.addEventListener("click", () => {
	try{
		navigator.clipboard
		.writeText(output.value)
		.then(
			() => {
				// console.log("Wrote stuff to clipboard");
			},
			(err) => {
				console.error('Failed to write to clipboard, inner catch. Likely missing certificate', err);
			}
		)
		.catch(err => console.error('Failed to write to clipboard. Promise catch.\n', err));
	}
	catch(err){
		console.error('Failed to copy. Likely missing certificate.\n', err);
	}
});