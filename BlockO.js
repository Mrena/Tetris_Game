
var rotateO = 1;


	function moveLeftO()
		{
		
		clearInterval(moveDown);
		var stop = false;
		

		for(var x=0; x<4; x++)
			if(blockToCreate[x].charAt(0)=='1' /*|| blockOnL_O() == true*/)
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
		createBlock(3);


		}	
			
			
				
					

		}

	function moveRightO()
		{
		
		
		clearInterval(moveDown);
		var stop = false;


			// if the block is at the bottom of the grid or there is a block under
		// it should stop
		for(var x=0; x<4; x++)
			if(blockToCreate[x].charAt(0)=='8'/* || blockOnR_O() == true*/)
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
		createBlock(3);
		stop = false;
		


		}	
			
			
		
		
		}
		
	function moveDownO()
		{
		clearInterval(moveDownFast);
		clearInterval(moveDown);		
		var stop = false;

		for(var x=0; x<4; x++)
			if(blockToCreate[x].charAt(1)=='8'/*|| blockUnderO() == true*/)
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
		createBlock(3);
		removeRow();
		
		}	
			
			else
				{
		
			clearInterval(moveDownFast);
			
			
			  clearInterval(moveDown);
			document.getElementById(2).disabled = false;
			headRow();
			generateBlockIndex();
	
				}

		}	


		
	function blockUnderO() 
	{
	 
	 // if there is a block under the one which is being controlled 
	 // it should stop and then a new block is created
	 
	var isTrue = false;
	var str = parseInt(blockToCreate[2])+1;
	var strOne = str.toString();
	
	var str1 = parseInt(blockToCreate[3])+1;
	var strTwo = str1.toString(); 
	
			if(strOne.charAt(1)!="9" || strTwo.charAt(1) != "9" )
			{
								
		if(document.getElementById(str1).innerHTML == "1" || document.getElementById(strTwo).innerHTML=="1")
				{
					isTrue = true;
				}
								
								
			}
			else
			   isTrue = true;
	return isTrue; 
	 }
	 
	 function blockOnR_O()
	     {
	      
	      // Dont move block to the right if there is another block on its right hand side
			// or if its on the edge
			var isTrue = false;
			var bRT = parseInt(blockToCreate[1])+1;
			var bRL =parseInt(blockToCreate[3])+1;
			
			if(document.getElementById(bRT)==null || document.getElementById(bRL)==null)
			        isTrue = true;
			        
			        
			
			
			return isTrue;
		}
		
	function blockOnL_O()
	  {
	  	// Dont move block to the left if there is another block on its left hand side
			// or if its on the edge 
	   
		var isTrue = false;
		
		var bLT = parseInt(blockToCreate[0])-1;
		var bLL = parseInt(blockToCreate[2])-1;
		
	 if(document.getElementById(bLT)==null || document.getElementById(bLL)==null)
			        isTrue = true;
		
		
		return isTrue;
	}	
