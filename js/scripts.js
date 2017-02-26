$(document).ready(function() {
	$("form#vacation").submit(function(event) {
		var name = $("input#name").val();
		var season = parseInt($("select#season").val());
		var length = parseInt($("input#length-of-stay").val());
		var budget = $("input:radio[name=budget]:checked").val();
		var attractions = parseInt($("select#attractions").val());
		var transportation = parseInt($("select#transporation").val());

		var maldives = "Maldives";
		var thailand = "Thailand";
		var uae = "United Arab Emirates";
		var greenland = "Greenland";
		var netherlands = "Netherlands";

		if (name.length === 0 || !length || !budget ) {
			alert("Please fill in all fields");
		} else if (budget === "no-budget" && attractions === 1) {
			$("#result").text(maldives); 
			$("span#name").text(name);
			$("div#suggester").hide();
			$("p#maldives").show();
		} else if (season != 4 && budget === "under-1k" && transportation != 2) {
			$("#result").text(thailand);
			$("span#name").text(name);
			$("div#suggester").hide();
			$("p#thailand").show();
		} else if ((season === 1 || season === 2) && budget === "no-budget") {
			$("#result").text(uae);
			$("span#name").text(name);
			$("div#suggester").hide();
			$("p#uae").show();
		} else if ((season === 1 || season === 3) && budget === "1k-2k" && attractions === 2) {
			$("#result").text(greenland);
			$("span#name").text(name);
			$("div#suggester").hide();
			$("p#greenland").show();
		} else {
			$("#result").text(netherlands);
			$("span#name").text(name);
			$("div#suggester").hide();
			$("p#netherlands").show();

		}

		event.preventDefault();
	});
});