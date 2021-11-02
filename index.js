 calculator = document.getElementById("calculate");

calculator.addEventListener("click", function() {
	const name = document.getElementById("name").value;
	let price = parseFloat(document.getElementById("bid").value);

	if (name != "" && !isNaN(price)) {
		let education = document.getElementById("education");
		let education_split = education.options[education.selectedIndex].value.split("coefficient ");
		price = price * parseFloat(education_split[1]);

		let networth = document.getElementById("net_worth");
		let networth_split = networth.options[networth.selectedIndex].value.split("coefficient ");
		price = price * parseFloat(networth_split[1]);

		let caste = document.getElementById("caste");
		let caste_sel = caste.options[caste.selectedIndex].value;
		if (caste_sel.includes("+") == true) {
			let caste_split = caste_sel.split("+");
			price = price + parseFloat(caste_split[1]);
		} else {
			let caste_split = caste_sel.split("-");
			price = price - parseFloat(caste_split[1]);
		}

		for (let i = 1; i <= 4; i++) {
			let skill = document.getElementById(`skills${i}`);
			if (skill.checked == true) {
				price = price + parseInt(skill.value);
			}
		}
		
		let ages = document.getElementsByName('age');

		ages.forEach(function(item, index) {
			if (item.checked == true) {
				item_split = item.value.split("coefficient ");
				price = price * parseFloat(item_split[1]);
			}
		});

		for (let i = 1; i <= 3; i++) {
			let rep = document.getElementById(`reputation${i}`);
			if (rep.checked == true) {
				if (rep.value.includes('coefficient ') == true) {
					price = price * parseFloat(rep.value.split('coefficient ')[1]);
				} else {
					price = price - parseInt(rep.value.split('-')[1]);
				}
			}
		}

		let loveletter = document.getElementById('loveletter');

		let person = {
			bride_name: name,
			bride_price: price,
			letter_to_bride: loveletter.value
		}

		if (loveletter.value == '') {
			person.letter_to_bride = "No text!";
		}

		document.getElementById('result').innerHTML = `Name: ${person.bride_name} || Your price: $${person.bride_price} || Love letter: ${person.letter_to_bride}`;
	} else {
		document.getElementById('result').innerHTML = "Name and Starting bid must be specified";
	}
});