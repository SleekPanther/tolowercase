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
	console.log('paste click')
	
	try{
		navigator.clipboard
		.readText()
		.then((clipText) => {
			input.value = clipText;
			output.value = input.value?.toLowerCase();
		})
		.catch(err => console.error('Failed to paste.', err));
	}
	catch(e){
		console.error('Failed to paste.', err);
	}
});

copyButton.addEventListener("click", () => {
	navigator.clipboard
	.writeText(output.value)
	.then(
		() => {
			console.log("Wrote stuff to clipboard");
		},
		(err) => {
			console.error('Failed to write to clipboard.', err);
		}
	  );

	// .then(() => {
	//   console.log("Wrote stuff to clipboard");
	// },
	// (err) => {
	//   console.error('Failed to write to clipboard.', err);
	// })
	// //unclear if this way of handling promise failure is better
	// .catch(err => console.error('Failed to write to clipboard.', err));
});