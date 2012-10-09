

var rotateLval = 1;



	function moveLeftL()
		{
		clearInterval(moveDown);
		clearInterval(moveDownFast);
		var stop = false;
		

		for(var x=0; x<4; x++)
			if(blockToCreate[x].charAt(0)=='1' /*|| blockUnder() == true*/)
				stop = true;

		var num;
		if(!stop)
		{		
		for(var i=0; i<4;i++)
			{

			document.getElementById(blockToCreate[i]).innerHTML = "0";
		    num = parseInt(blockToCreate[i]);
			num=num-10;
			blockToCreate[i] = num.toString();
		
			
			}
		
		createBlock(1);


		}

	
		}

	function moveRightL()
		{
		
	
	clearInterval(moveDown);
	var stop = false;

		for(var x=0; x<4; x++)
			if(blockToCreate[x].charAt(0)=='8' || blockUnderL() == true)
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
			createBlock(1);


			}	
		
		}
		
	function moveDownL()
		{
		clearInterval(moveDownFast);
		clearInterval(moveDown);
		var stop = false;

			// if the block is at the bottom of the grid or there is a block under
		// it should stop
		for(var x=0; x<4; x++)
			if(blockToCreate[x].charAt(1)=='8'/*|| blockUnderL() == true*/)
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
			createBlock(1);
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


		
	

	function rotateL()
		{
		 
		clearInterval(moveDownFast); 
		clearInterval(moveDown);
		if(rotateLval==1)
		{
			document.getElementById(blockToCreate[3]).innerHTML = "0";
		    num = parseInt(blockToCreate[3]);
			num-=20;
			blockToCreate[3] = num.toString();
		
			rotateLval+=1;
		
			createBlock(1);
		}	
		
		else if(rotateLval==2)
		{
			document.getElementById(blockToCreate[3]).innerHTML = "0";
		    num = parseInt(blockToCreate[3]);
			num-=2;
			blockToCreate[3] = num.toString();
			rotateLval++; 
		
			createBlock(1);
		}	
		
			else if(rotateLval==3)
		{
			document.getElementById(blockToCreate[3]).innerHTML = "0";
		    num = parseInt(blockToCreate[2]);
			num+=10;
			blockToCreate[3] = num.toString();
			rotateLval=1; 
		
			createBlock(1);
		}	
		


		}	
	
	function blockUnderL() 
	{
	 // if there is a block under the one which is being controlled 
	 // it should stop and then a new block is created 
	 
	var isTrue = false;
	var str = parseInt(blockToCreate[2])+1;
	var strOne = str.toString();
	var lastOne = parseInt(blockToCreate[3]);
	var lastOneP = (lastOne+1).toString(); 

	
			if(strOne.charAt(1)!="9" || lastOneP.charAt(1)!="9")
			{
			 try{
		if(document.getElementById(str).innerHTML == "1"||(document.getElementById(lastOne).innerHTML=="1"&&(document.getElementById(lastOneP).innerHTML=="1"||document.getElementById(lastOneP)==null)))
		                {
					isTrue = true;
						}
						}catch(ex)
						 {
							
					generateBlockIndex();	
							
						}
			}
			else
			{
			   isTrue = true;
			   
			   }
	return isTrue; 
	 }

	
	function blockOnR_L()
	  {
	// Dont move block to the right if there is another block on its right hand side
			// or if its on the edge	
		
		
		
	}
	
	function blockOnL_L()
	  {
		// Dont move block to the left if there is another block on its left hand side
			// or if its on the edge	
		
		
		
	}
	
		


