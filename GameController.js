
var blocks;
var moments = 0, sec = 0, min = 0;
var timer;
var frequency;









	function constructBoard()
		{
	
	var board;
	var ind; 
	for(var i=1;i<=8;i++)
   		{
	for(var x=0;x<=8;x++)
              		{
		
	      	i =i.toString();
		x = x.toString();
		ind = i+x;
		
		
		board = document.getElementById(ind);
		
		board.innerHTML= ind;
		
		

		i = parseInt(i);
		x = parseInt(x);
			

				}
	
			}
         
	
		}

		
		function setFrequency()
		{

         	var level = document.getElementById("level");
		if(level.options.selectedIndex!=0)
			{
         	var i = level.options.selectedIndex;
		
		frequency = level.options[i].value;
		document.getElementById("btnSp").disabled=false;
		
		
				}
		


		}

		
		
		function count()
		{
		

		displayTime();
		moments++;
		if(moments==60)
		{
		moments = 0;
		sec++;
 		if(sec==60)
     		 {
		sec =0;
         	min++;
		
			}

		}
	
		}
	
	


	

	function displayTime()
	{
	if(min<10)
	{
  	 min = "0"+min.toString();
	}
    	if(sec<10)
		{

        sec = "0"+sec.toString();
		}
            if(moments<10)
			{
                moments = "0"+moments.toString();
			}

	document.getElementById("timer").innerHTML= min +":"+sec+":"+moments;
	if(min<10)
	min = parseInt(min.charAt(1));
	if(sec<10)
	sec = parseInt(sec.charAt(1));
	if(moments<10)
	moments = parseInt(moments.charAt(1));


	}

	function disableControl(n)
	{
	
	
	for(var i=2;i<=8;i+=2)
		document.getElementById(i).disabled = n;
		
	
	}
	
	
	
	function startGame()
		{
		 
	
		
		
		if(document.getElementById("btnSp").innerHTML=="Resume")
			createBlock(randBlock);	
		
		else
			generateBlockIndex();
		
		

		
		document.getElementById("score").innerHTML = score;
		document.getElementById('btnSpause').disabled=false;
		document.getElementById("btnSp").disabled = true;
		//document.getElementById("btnQuit").disabled = true;
		disableControl(false);	
		
		timer = setInterval("count()",100);
		
		
		

		}
		

		function pauseGame()
		{
		 
		clearInterval(moveDown);
		clearInterval(timer);
		clearInterval(moveDownFast);
		

		
		disableControl(true);	
		document.getElementById("btnSpause").disabled = true;
		document.getElementById("btnSp").disabled = false;
		document.getElementById("btnSp").value = "Resume";

		}


		function endGame()
		{
		
		
		clearInterval(moveDown);
		clearInterval(timer);
		
		
		clearInterval(moveDownFast);
		
		
		
		disableControl(true);

		document.getElementById("btnSp").disabled= true;
		document.getElementById("btnSpause").disabled = true;
		window.location = "index.html";

		}

	