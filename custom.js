var vote_count = {
	red : 0,
	blue : 0,
	green : 0,
	pink : 0,
	yellow : 0,
	bluegreen : 0,
	brown : 0,
	purple : 0,
	violette : 0,	
    cyan : 0,
	}

// JSON

$(document).ready(
	function(){

		
    $("#div1").click(
            function(){
                vote_count.red++;
                $("#p1vote").html("("+vote_count.red+")");
            }
        );
		$("#div2").click(
            function(){
                vote_count.brown++;
                $("#p2vote").html("("+vote_count.brown+")");
            }
		);
		$("#div3").click(
            function(){
                vote_count.blue++;
                $("#p3vote").html("("+vote_count.blue+")");
            }
		);
		$("#div4").click(
            function(){
                vote_count.green++;
                $("#p4vote").html("("+vote_count.green+")");
            }
		);
		$("#div5").click(
            function(){
                vote_count.bluegreen++;
                $("#p5vote").html("("+vote_count.bluegreen+")");
            }
		);
		$("#div6").click(
            function(){
                vote_count.cyan++;
                $("#p6vote").html("("+vote_count.cyan+")");
            }
		);
		$("#div7").click(
            function(){
                vote_count.purple++;
                $("#p7vote").html("("+vote_count.purple+")");
            }
		);
		$("#div8").click(
            function(){
                vote_count.violette++;
                $("#p8vote").html("("+vote_count.violette+")");
            }
		);
		$("#div9").click(
            function(){
                vote_count.pink++;
                $("#p9vote").html("("+vote_count.pink+")");
            }
        );
		$("#div10").click(
            function(){
                vote_count.green++;
                $("#p10vote").html("("+vote_count.green+")");
            }
		)

	}
);