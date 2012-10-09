

var rotateFlag = false;

var rotateTval = 1;
var num=0;



	function moveLeftT()
		{
		 
	 	clearInterval(moveDownFast);
		clearInterval(moveDown);
		var stop = false;
		

		for(var x=0; x<4; x++)
			if(blockToCreate[x].charAt(1)=='8' /*|| blockOnL_T() == true*/)
				stop = true;

		
		if(!stop)
		{		
		for(var i=0; i<4;i++)
			{

			document.getElementById(blockToCreate[i]).innerHTML = "0";
		    	num = parseInt(blockToCreate[i]);
			num=num-10;
			blockToCreate[i] = num.toString();
		
			
			}
		createBlock(4);


		}	
			
			else
				{
			generateBlockIndex();
				}
				
					

		}

	function moveRightT()
		{
		
		
		clearInterval(moveDown);
		var stop = false;

		for(var x=0; x<4; x++)
			if(blockToCreate[x].charAt(1)=='8' /*|| blockOnR_T() == true*/)
				stop = true;

	
		if(!stop)
		{		
		for(var i=0; i<4;i++)
			{

			document.getElementById(blockToCreate[i]).innerHTML = "0";
		    	num = parseInt(blockToCreate[i]);
			num+=10;
			blockToCreate[i] = num.toString();
			
			}
		createBlock(4);


		}	
			
			else
				{
			generateBlockIndex();
				}
		
		
		}
		
	function moveDownT()
		{
		
		clearInterval(moveDownFast);
		clearInterval(moveDown);		
		var stop = false;
		
			// if the block is at the bottom of the grid or there is a block under
		// it should stop
		for(var x=0; x<4; x++)
			if(blockToCreate[x].charAt(1)=='8' /*|| blockUnderT() == true*/)
				stop = true;

		
		if(!stop)
		{		
		for(var i=0; i<4;i++)
			{

			document.getElementById(blockToCreate[i]).innerHTML = "0";
		    	num = parseInt(blockToCreate[i]);
			num++;
			blockToCreate[i] = num.toString();
			
			}
		createBlock(4);
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



	 
	 	function rotateT()
		{
		 
		 
	clearInterval(moveDown);
	if(rotateTval==1)
		{
		 
				num = parseInt(blockToCreate[1]);
				num-=1;
				
				document.getElementById(blockToCreate[3]).innerHTML = "0";
				blockToCreate[3] = num.toString();
			
			rotateTval=2; 
			createBlock(4);
		}	
		
		else if(rotateTval==2)
		{
		
			num = parseInt(blockToCreate[1]);
				num+=1;
				
				document.getElementById(blockToCreate[3]).innerHTML = "0";
				blockToCreate[3] = num.toString();
			
			
			
			rotateTval=1; 
			createBlock(4);
		}	
		
	
		

	
		}
			
	function blockUnderT() 
	{
		// if there is a block under the one which is being controlled 
		 // it should stop and then a new block is created


	var isTrue = false;
	var str;
	var strOne
	var lastOne = parseInt(blockToCreate[3]);
	var lastOneP = (lastOne+1).toString(); 
	
	
	for(var i =0; i<3;i++)
	{
	 str = parseInt(blockToCreate[2])+1;
	 strOne = str.toString();
			if(strOne.charAt(1)!="9" || lastOneP.charAt(1)!="9")
			{
		if(document.getElementById(str).innerHTML == "1" || (document.getElementById(lastOne).innerHTML=="1"&&document.getElementById(lastOneP).innerHTML=="1"))
					isTrue = true;
	
			}
			
	}		
	return isTrue; 
	
	
	
	 }	
	 
	 function blockOnR_T()
	 {
		// Dont move block to the right if there is another block on its right hand side
			// or if its on the edge
		
		
		
	}
	function blockOnL_T()
	{
		// Dont move block to the left if there is another block on its left hand side
			// or if its on the edge	
		
		
		
	}
