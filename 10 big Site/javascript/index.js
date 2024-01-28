// // Scroll By Mouse Wheel

const slider = document.querySelector(".scroll-bar");
if (slider) {
	slider.addEventListener("wheel", (e) => {
		e.preventDefault();
		slider.scrollLeft += e.deltaY;
		console.log("do it");
	});

	// Scroll by Draging.....................

	let isDown = false;
	let startX;
	let scrollX;

	slider.addEventListener("mousedown", (e) => {
		// e.preventDefault();
		isDown = true;
		slider.classList.add("active");
		startX = e.pageX - slider.offsetLeft;
		scrollX = slider.scrollLeft;
		console.log(startX, scrollX);
	});
	slider.addEventListener("mouseleave", () => {
		isDown = false;
		slider.classList.remove("active");
	});
	slider.addEventListener("mouseup", () => {
		isDown = false;
		slider.classList.remove("active");
	});
	slider.addEventListener("mousemove", (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		const walk = (x - startX) * 2;
		slider.scrollLeft = scrollX - walk;
		console.log(x, startX, slider.scrollLeft);
	});
}
// // Down-List .....................
let downList = document.querySelectorAll(".down-list");
let list = document.querySelectorAll(".list");
downList.forEach((e) => {
	e.addEventListener("mouseover", () => {
		e.classList.add("active");
	});
	e.addEventListener("mouseleave", () => {
		e.classList.remove("active");
	});
});

// // .......... Form Validation .........
let form = document.querySelector(".myform");
let signIn = document.querySelector(".signin");
let email = document.querySelector("#email");
let user = document.querySelector("#user");
let pass = document.querySelector("#pass");
let btns = document.querySelector(".btns");

let signInWelcome = document.querySelector(".welcome-signin");
let validate = false;
let signnedIn = false;

// let newUser = { username: "", password: "", email: "", isSignnedIn: false };
// let mydata = {
// 	username: "",
// 	password: "",
// 	email: "",
// 	isSignnedIn: false,
// };
// let fuken = {
// 	ahmed: "moza",
// 	awdaw: "mewtoza",
// 	mohamed: "moza",
// }
// let jsonFuken = JSON.stringify(fuken)

// Method 1
// ************************************************************************

// form.addEventListener("submit", (e) => {
// 	e.preventDefault();

// 	const formData = new FormData(form);
// 	const data = Object.fromEntries(formData);
// 	console.log(`formData`);
// 	console.log(`data is ${data}`);
// 	console.log(`object is ${JSON.stringify(data)}`);
// 	fetch("http://localhost:3000/user", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(data),
// 	});
// });

// Method 2
// ************************************************************************
form.addEventListener("submit", async (e) => {
	e.preventDefault();

	const formData = new FormData(form);
	const data = Object.fromEntries(formData);

	console.log("formData", formData);
	console.log("data is", data);
	console.log("object is", JSON.stringify(data));

	try {
		const response = await fetch("../db.json", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const responseData = await response.json();
		console.log(responseData);
	} catch (error) {
		console.error("Error:", error);
	}
});

let fetcher = function () {
	let putted = JSON.stringify(newUser);
	console.log(putted);
};
// Sign Up ....................
if (form) {
	form.addEventListener("submit", (e) => {
		e.preventDefault();

		if (/[^a-zA-Z0-9]/.test(user.value)) {
			alert("Username shouldn't contain special characters");
			e.preventDefault();
			return;
		}
		if (user.value.length <= 5 || user.value.length >= 15) {
			alert("Username should contain between 5 to 15 letter");
			e.preventDefault();
			return;
		}
		if (!/[0-9]/.test(pass.value)) {
			alert("Password should contain atleast one number ");
			e.preventDefault();
			return;
		}
		if (pass.value.length <= 5 || pass.value.length >= 15) {
			alert("Password should contain between 5 to 15 number ");
			e.preventDefault();
			return;
		}
		console.log(`Username is ${user.value}`);
		console.log(`Password is ${pass.value}`);
		console.log(`Email is ${email.value}`);

		// newUser = {
		// 	username: user.value,
		// 	password: pass.value,
		// 	email: email.value,
		// 	isSignnedIn: true,
		// };
		// fetcher();
		// document.location.href = "do7a.html";
	});
}
// // Fetch Data .....................
let fetchData = async function () {
	await fetch("http://localhost:3000/user")
		.then((res) => res.json())
		.then((data) => {
			mydata = data;
			console.log(mydata);
		});
	if (btns) {
		if (mydata.isSignnedIn) {
			btns.classList.add("none");
			signInWelcome.classList.remove("none");
		} else {
			btns.classList.remove("none");
			signInWelcome.classList.add("none");
		}
	}
};
fetchData();
// // Sign In .......................

if (signIn) {
	signIn.addEventListener("submit", (e) => {
		if (!/[0-9]/.test(pass.value)) {
			alert("Password should contain atleast one number ");
			e.preventDefault();
			return;
		}
		if (pass.value.length <= 5 || pass.value.length >= 15) {
			alert("Password should contain between 5 to 15 number ");
			e.preventDefault();
			return;
		}

		e.preventDefault();

		// document.location.href = "do7a.html";
	});
}

// Method 3

// let object = { title, number, adress };
// form.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	const formData = new FormData(form);
// 	const data = Object.fromEntries(formData);

// 	console.log("formData", formData);
// 	console.log("data is", data);
// 	console.log("object is", JSON.stringify(object));
// 	fetch("../db.json", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(data),
// 	});
// });
