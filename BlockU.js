

var rotateFlag = false;
var rotateUval = 1;



	function moveLeftU()
		{
		 
		clearInterval(moveDownFast); 
		clearInterval(moveDown);
		var stop = false;
		

		for(var x=0; x<5; x++)
			if(blockToCreate[x].charAt(1)=='8' /*|| blockUnder() == true*/)
				stop = true;

		var num;
		if(!stop)
		{		
		for(var i=0; i<5;i++)
			{

			document.getElementById(blockToCreate[i]).innerHTML = "0";
		    	num = parseInt(blockToCreate[i]);
			num=num-10;
			blockToCreate[i] = num.toString();
		
			
			}
		createBlock(5);


		}	
			
			else
				{
			generateBlockIndex();
				}
				
					

		}

	function moveRightU()
		{
		
		clearInterval(moveDownFast);
		clearInterval(moveDown);
		var stop = false;

		for(var x=0; x<5; x++)
			if(blockToCreate[x].charAt(1)=='8' /*|| blockUnder() == true*/)
				stop = true;

		var num;
		if(!stop)
		{		
		for(var i=0; i<5;i++)
			{

			document.getElementById(blockToCreate[i]).innerHTML = "0";
		    	num = parseInt(blockToCreate[i]);
			num+=10;
			blockToCreate[i] = num.toString();
			
			}
		createBlock(5);


		}	
			
			else
				{
			generateBlockIndex();
				}
		
		
		}
		
	function moveDownU()
		{
	
	
		clearInterval(moveDownFast);
		clearInterval(moveDown);		
		var stop = false;


		// if the block is at the bottom of the grid or there is a block under
		// it should stop
		for(var x=0; x<5; x++)
			if(blockToCreate[x].charAt(1)=='8'/* || blockUnderU() == true*/)
				stop = true;

		var num;
		if(!stop)
		{		
		for(var i=0; i<5;i++)
			{

			document.getElementById(blockToCreate[i]).innerHTML = "0";
		    	num = parseInt(blockToCreate[i]);
			num++;
			blockToCreate[i] = num.toString();
			
			}
		createBlock(5);
		removeRow();
		
		}	
			
			else
				{
			
		
			clearInterval(moveDownFast);
			clearInterval(moveDown);
			headRow();
			generateBlockIndex();
			
				}

		}	

		 
	 	function rotateU()
		{
		
		
			clearInterval(moveDown);
			if(rotateUval==1)
		{
			document.getElementById(blockToCreate[0]).innerHTML = "0";
		    	num = parseInt(blockToCreate[0]);
			num+=2;
			blockToCreate[0] = num.toString();
			
			document.getElementById(blockToCreate[4]).innerHTML = "0";
		    	num = parseInt(blockToCreate[4]);
			num+=2;
			blockToCreate[4] = num.toString();
			
			
			rotateUval++; 
			createBlock(5);
		}	
		
		else 
		{
			document.getElementById(blockToCreate[0]).innerHTML = "0";
		    	num = parseInt(blockToCreate[0]);
			num-=2;
			blockToCreate[0] = num.toString();
			
			document.getElementById(blockToCreate[4]).innerHTML = "0";
		    	num = parseInt(blockToCreate[4]);
			num-=2;
			blockToCreate[4] = num.toString();
			
			
			rotateUval=1; 
			createBlock(5);
		}	
		
		

	
		}	
	
	function blockUnderU() 
		{
	// if there is a block under the one which is being controlled 
	 // it should stop and then a new block is created	 
		 
	 var isTrue = false;
	
	for(var i=0; i<5;i++)
		if(document.getElementById(parseInt(blockToCreate[i])+1).innerHTML == "1")
					isTrue = true;
	

	return isTrue; 
	 	}
	 	
	 	function blockOnR_U()
	 	   {
			// Dont move block to the right if there is another block on its right hand side
			// or if its on the edge	
				
				
				
			}
		function blockOnL_U()
		    {
			// Dont move block to the left if there is another block on its left hand side
			// or if its on the edge	
				
				
				
				
			}
