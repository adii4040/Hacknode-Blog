async function fetchContest(up = false) {
	const username = "redHair07";
	const apiKey = "641b79a6e0f605c363f04247e5e1ed0da71bb80c";
	const url = `https://clist.by/api/v4/contest/?username=${username}&api_key=${apiKey}&host=codechef.com&limit=100&upcoming=${up}`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();

		let reqData = data.objects;

		console.log(reqData);

		display(reqData);
	} catch (error) {
		console.error('Error fetching contests:', error);
	}
}

const cardContainer = document.getElementById("card-container");

const display = (data) => {
	cardContainer.innerHTML = "";

	if (data.length == 0) {
		const noEvent = document.createElement("div");
		noEvent.classList.add("noEvent");
		noEvent.innerHTML = "No upcoming contests available!!!";
		cardContainer.appendChild(noEvent);
		console.log("No upcoming contests to display");
		return; 
	}

	data.forEach(elem => {
		const card = document.createElement("div");
		card.classList.add("card");

		const title = document.createElement('h2');
		title.classList.add("eventName");
		title.textContent = elem.event;

		const host = document.createElement("h3");
		host.classList.add("host");
		host.innerHTML = `<span class=" highlight" >Host:</span>  ${elem.host}`;

		const link = document.createElement("a");
		link.classList.add("contestLink");
		link.href = elem.href;
		link.textContent = "Know More";

		const start = document.createElement("h3");
		start.classList.add("startContest");
		start.innerHTML = `<span class=" highlight" >Start:</span> ${elem.start}`;

		const end = document.createElement("h3");
		end.classList.add("endContest");
		end.innerHTML = `<span class=" highlight" >End:</span> ${elem.end}`;

		const duration = document.createElement("h3");
		duration.classList.add("duration");
		let durationInMs = elem.duration * 1000;
		let hours = Math.floor(durationInMs / (1000 * 60 * 60));
		let minutes = Math.floor((durationInMs % (1000 * 60 * 60)) / (1000 * 60));
		duration.innerHTML = `<span class=" highlight" ><i class="ri-hourglass-fill"></i> : </span> ${hours} hours ${minutes} minutes`;

		card.appendChild(title);
		card.appendChild(host);
		card.appendChild(link);
		card.appendChild(start);
		card.appendChild(end);
		card.appendChild(duration);

		cardContainer.appendChild(card);
	});
}

let upcoming = false;

document.querySelector(".upcoming").addEventListener("click", function(){
	if(!upcoming){
		console.log("Fetching upcoming contests");
		upcoming = true;
		fetchContest(upcoming);
	}
});

fetchContest(upcoming);	

