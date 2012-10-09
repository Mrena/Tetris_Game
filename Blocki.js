

var rotateival = 1;
var blockState;

	function moveLefti()
		{
		clearInterval(moveDown);
		clearInterval(moveDownFast);
		var stop = false;
		

		for(var x=0; x<4; x++)
			if(blockToCreate[x].charAt(0)=='1' /*|| blockOnL_i() == true*/)
				stop = true;

		var num;
		if(!stop)
		{		
		for(var i=0; i<4;i++)
			{
			
			document.getElementById(blockToCreate[i]).innerHTML = "0";
		    	num = parseInt(blockToCreate[i]);
		    	
		    num-=10;
					  
			blockToCreate[i] = num.toString();
		
			
			}
		createBlock(2);


		}	
	stop = false;
			
			
				
					

		}

	function moveRighti()
		{
		
		clearInterval(moveDownFast);
		clearInterval(moveDown);
		var stop = false;

		for(var x=0; x<4; x++)
			if(blockToCreate[x].charAt(0)=='8' /*|| blockOnR_i() == true*/)
				stop = true;

		var num;
		if(!stop)
		{		
		for(var i=0; i<4;i++)
			{

			document.getElementById(blockToCreate[i]).innerHTML = "0";
		    	num = parseInt(blockToCreate[i]);
			num+=10;
			blockToCreate[i] = num.toString();
			
			}
		createBlock(2);


		}	
	stop = false;
			
		
		
		
		}
		
	function moveDowni()
		{
	
		clearInterval(moveDownFast);
		clearInterval(moveDown);		
		var stop = false;


			// if the block is at the bottom of the grid or there is a block under
			// it should stop
		for(var x=0; x<4; x++)
			if(blockToCreate[x].charAt(1)=='8' /*|| blockUnderi() == true*/)
				stop = true;

		var num;
		if(!stop)
		{		
		for(var i=0; i<4;i++)
			{

			document.getElementById(blockToCreate[i]).innerHTML = "0";
		    	num = parseInt(blockToCreate[i]);
			num++;
			blockToCreate[i] = num.toString();
			
			}
		createBlock(2);
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

	
		 
	 	function rotatei()
		{
		clearInterval(moveDownFast);	
		clearInterval(moveDown); 	
		if(rotateival==1)
		{
			
			
			num = parseInt(blockToCreate[0]);
	
			for(var i=1;i<4;i++)
			{
			
			 	
			num+=10;
			document.getElementById(blockToCreate[i]).innerHTML = "0";
			
			blockToCreate[i] = num.toString();
			
			}
			 
			
			rotateival=2; 
			createBlock(2);
		}	
		
	  else if(rotateival==2)
		{
		
			num = parseInt(blockToCreate[0]);
	
				
			for(var i=1;i<4;i++)
			{
			 
			num+=1;
			document.getElementById(blockToCreate[i]).innerHTML = "0";
		
			blockToCreate[i] = num.toString();
			
			
			
			}
			
			
			rotateival=3; 
			createBlock(2);
		}
		else if(rotateival==3)	
		{
		num = parseInt(blockToCreate[0]);
			blockState = blockToCreate;
				
			for(var i=1;i<4;i++)
			{
			 
			num-=10;
			document.getElementById(blockToCreate[i]).innerHTML = "0";
		
			blockToCreate[i] = num.toString();
			
				
			
			}
			
			
			rotateival=1; 
			createBlock(2);	
			
			
			
			
			
		}
		
		 

	
		}
	
	function blockUnderi() 
	{
	 
	 // if there is a block under the one which is being controlled 
	 // it should stop and then a new block is created
	 var isTrue = false;
	
	if(rotatevali==2)
		for(var i=0; i<4;i++)
		{
		
		 
		 
		if(document.getElementById(parseInt(blockToCreate[i])+1).innerHTML == "1")
					isTrue = true;
	
			}
			
			else
			{
			 var index = parseInt(blockToCreate[3])+1;
		 
		 
		if(document.getElementById(parseInt(index).innerHTML == "1")
					isTrue = true;
					
					}
			
			
	return isTrue; 
	 }
	 
	 function blockOnR_i()
	    {
	// Dont move block to the right if there is another block on its right hand side
	// or if its on the edge		
			
			
			
		}
		
	function blockOnL_i()
	    {
	// Dont move block to the left if there is another block on its left hand side
	// or if its on the edge	
			
			
			
			
		}	

