


	var toRotate=1;
	var blockIndex;
	var blockToCreate = Array();
	var score = 0;
		/*
		1 = L
		2 = i
		3 = O
		4 = T
		5 = U
		
		in blocks array
		
		
		*/
	var blocks =  Array(1,2,3,4,5);
	var blockCreated;
	var moveDownFast;
	var moveDown;
	var randBlock;




	function generateBlockIndex()
		{

	
			var blockL =  Array("10","11","12","22");
			var blocki =  Array("40","41","42","43");
			var blockO =  Array("40","41","50","51");
			var blockT =  Array("30","40","50","41");
			var blockU =  Array("30","31","41","51","50");
		// TO DO: Randomly generate a value from zero to four
		// to feed it to blocks array
		var randNum = Math.floor(Math.random()*5);
		status = randNum;
        randBlock = parseInt(blocks[randNum]);
       
        
        if(randBlock==1)
        {
         
        
        		blockToCreate = blockL;
        		
        		}
        		
        		else if(randBlock==2)
        		{
        			blockToCreate = blocki;
        			
        			}
        			
        				else if(randBlock==3)
        				{
        			
        				document.getElementById(2).disabled = true;
        						blockToCreate = blockO;
        							
									}
											
        							else if(randBlock==4)
        							{
        								blockToCreate = blockT;
        							
									}	
        									else if(randBlock==5)
											{ 
        											blockToCreate = blockU;
												
												}
		
		
        				
			createBlock(randBlock);

		}


	function createBlock(block)
		{

		
	
		for(var i=0; i<blockToCreate.length;i++)
		{
		 
			document.getElementById(blockToCreate[i]).innerHTML = 1;
			
		
		}
			
			blockCreated = block;
			if(blockCreated==1)
			{
			moveDown = setInterval("moveDownL()",frequency);
			}
		
			else if(blockCreated==2)
			{
				moveDown = setInterval("moveDowni()",frequency);
			}
				
				else if(blockCreated==3)
					{	moveDown = setInterval("moveDownO()",frequency);
				
					}
					else if(blockCreated==4)
					{
						moveDown = setInterval("moveDownT()",frequency);
					}	
						else if(blockCreated==5)
						{
						 
						 moveDown = setInterval("moveDownU()",frequency);
							}
	
				
			
		
		}
		
		function chooseMoveLeft()
			{
				
			if(blockCreated==1)
				   moveLeftL();
				   
				   else if(blockCreated==2)
				   			moveLefti();  
							   
							   else if(blockCreated==3)
							   		moveLeftO();
									   
									   else if(blockCreated==4)
									        moveLeftT();
											
												else
													moveLeftU();				   			
				   	
				
				
			}
		
		function chooseMoveRight()
			{
				if(blockCreated==1)
				   moveRightL();
				   
				   else if(blockCreated==2)
				   			moveRighti();  
							   
							   else if(blockCreated==3)
							   		moveRightO();
									   
									   else if(blockCreated==4)
									        moveRightT();
											
												else
													moveRightU();
			}
			
			
			function chooseMoveDown()
			{
				
					if(blockCreated==1)
				   	moveDown = setInterval("moveDownL()",frequency);
				   
				   else if(blockCreated==2)
				   		moveDown = setInterval("moveDowni()",frequency);  
							   
							   else if(blockCreated==3)
							   	moveDown = setInterval("moveDownO()",frequency);
									   
									   else if(blockCreated==4)
									    moveDown =setInterval("moveDownT()",frequency);
											
												else
													moveDown = setInterval("moveDownU()",frequency);
				
			}
			
			function chooseRotate()
			{
				
				if(blockCreated==1)
					rotateL();
					
					else if(blockCreated==2)
							rotatei();
					
						else if(blockCreated==3)
								rotateO();
														
							else if(blockCreated==4)
									rotateT();
							else
									rotateU();
				
				
			}
			
			function removeRow()
			{
				var count=0;
				var str;
				for(var i=1;i<9;i++)
						{
						 str = i+"8";
				    if(document.getElementById(str).innerHTML=="1")
				          count++;
				          
				          }
				          
				          if(count==8)
				          {
				           
				          
				            for(var x=1;x<9;x++)
				              {
				                str = x+"8";
				                document.getElementById(str).innerHTML = "0";
				                if(i==1)
				                {
				                score++; 
							document.getElementById("score").innerHTML = score;
				                }
				                }
				            
				            for(var row=7;row>0;row--)
				            {
				            for(var i=1;i<9;i++)
				                {
								str =i+""+row;
							if(document.getElementById(str).innerHTML == "1")
									{
									 document.getElementById(str).innerHTML = "0";
									str= i+""+(row+1);
									document.getElementById(str).innerHTML = "1";
									
									}
								
									
								}
				            
				            
				              }
				              }
				
				
			}
			
			
			function headRow()
			{
					var count=0;
				var str;
				for(var i=1;i<9;i++)
						{
						 str = i+"0";
				    if(document.getElementById(str).innerHTML=="1")
				      {
				          count++;
				          
				          
				         } 
				          
				          }
				          
				          if(count>0)
				             {
								
				alert("Game Over");
				window.location = "index.html";				
								
								
							}
				          
				
				
				
				
			}

	


		