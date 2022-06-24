/*******************************************************************************************
MADE BY:      _______   _____________     _____     __________ 
/         /  /                /          /     /         /
 /       /   /                /          /     /         /
  /     /    /___             /          /    /          /
   /   /     /                /          / //            / 
    / /      /                /          /   /           /
     /       /________        /          /    /     __________

              __________    __________
/         /        /             /        /      /      /
 /       /         /             /       / /      /    /
  /     /          /             /      /   /      /  /
   /   /           /             /     /_____/      //
    / /            /        /    /    /       /     /
     /        __________     / /     /         /   /     

IS WINSTON A COUSIN OF WINSTON CHURCHIL??
********************************************************************************************/
var missileSpeed = 7;//Speed Of The Missiles
var winstonSpeed = 5;//Speed Of Winston
var speedIncreaseRate = 0.0005;//Speed at which the game progresses
/*******************************************************************************************

BIG THANKS TO:

    _/    _/  _/    _/    _/_/    _/      _/
   _/  _/    _/    _/  _/    _/  _/_/    _/
  _/_/      _/_/_/_/  _/_/_/_/  _/  _/  _/
 _/  _/    _/    _/  _/    _/  _/    _/_/
_/    _/  _/    _/  _/    _/  _/      _/
   
     _/_/      _/_/_/    _/_/    _/_/_/    _/_/_/_/  _/      _/  _/      _/
   _/    _/  _/        _/    _/  _/    _/  _/        _/_/  _/_/    _/  _/
  _/_/_/_/  _/        _/_/_/_/  _/    _/  _/_/_/    _/  _/  _/      _/
 _/    _/  _/        _/    _/  _/    _/  _/        _/      _/      _/
_/    _/    _/_/_/  _/    _/  _/_/_/    _/_/_/_/  _/      _/      _/

********************************************************************************************/
{
//Lets Start Off With Some Variables

var BackGround_Color_1_Red = random(100,255);//Generates Random Background Colors
var BackGround_Color_1_Green = random(100,255);
var BackGround_Color_1_Blue = random(100,255);

var BackGround_Color_2_Red = random(100,255);//We Need Three Backgrounds For The Game
var BackGround_Color_2_Green = random(100,255);
var BackGround_Color_2_Blue = random(100,255);

var BackGround_Color_3_Red = random(100,255);// AND We Need Three Variables To Generate Random Colors
var BackGround_Color_3_Green = random(100,255);
var BackGround_Color_3_Blue = random(100,255);//I Set The Random Variable Between 100-255 To get Bright Colors !!

var winstonX = 200;//Starting Position Of Winston In The Game (X and Y Coordinates)
var winstonY = 200;

var gameOver = false;//Determines When The Game Will End

var GameStart = false;//Starts The Game

var instructions = false;//Determines When The Instructions Page Will Open

var A = random(600,1500);//Generates random Spawning Locations For All The Missiles
var a = random(0,400);

var B = random(600,1500);//Capital Letters Are X Coordinates
var b = random(0,400);//Lower-Case Letters Are Y Cordinates

var C = random(600,1500);//We Need 7 Sets, As We Have 7 Missiles
var c = random(0,400);

var D = random(600,1500);
var d = random(0,400);

var E = random(600,1500);
var e = random(0,400);

var F = random(600,1500);
var f = random(0,400);

var G = random(600,1500);
var g = random(0,400);

var score = 0;//Keeps Track Of The Score

var Font = createFont("cursive");//Creates A Variable Holding The Font Style

noStroke();//Pretty Self-Explanatory


draw = function(){//THE DRAW FUNCTION !!!
    
    //T.H.I.S  I.S  T.H.E  M.A.I.N  M.E.N.U
    
    textFont(Font);//Sets The Font Style
    background( BackGround_Color_3_Red,BackGround_Color_3_Green,BackGround_Color_3_Blue);//Sets The Random Background Color
    fill(255, 0, 0);
    image(getImage("creatures/Winston"),125,122,100,100);//Displays The Winston Image
    textSize(10);
    fill(0, 0, 0);
    text("BY VETRI VIJAY",294,381,400,200);//Credits To Me !!
    fill(0, 0, 0);//Font Color Of The Title
    textSize(25);//Title Font Size
    text("Dodging Missiles With Winston",25,56,400,400);//Title
    fill(BackGround_Color_3_Red-40,BackGround_Color_3_Green-40,BackGround_Color_3_Blue-40);//Creates The Shadows For The Buttons
    rect(45,255,100,40,20);//Easy Button Shadow
    rect(45,305,100,40,20);//Hard Button Shadow
    rect(195,305,100,40,20);//Normal Button Shadow
    rect(195,255,100,40,20);//Extreme! Button Shadow
    rect(330,255,40,96,20);//? Button Shadow
    fill(0, 0, 0);//The Actual Button Color (Black)
    rect(50,250,100,40,20);//Easy Button
    rect(50,300,100,40,20);//Hard Button
    rect(200,300,100,40,20);//Extreme! Button
    rect(200,250,100,40,20);//Normal Button
    rect(335,250,40,96,20);//? Button
    textSize(20);//The Text Font For The Menu Buttons
    fill(30, 255, 0);//Menu Button Colors
    text("EASY",71,262,2300,2300);
    fill(251, 255, 0);
    text("NORMAL",207,262,2300,2300);
    fill(255, 179, 0);
    text("HARD",74,312,2300,2300);
    textSize(18);
    fill(255, 0, 0);
    text("EXTREME!",203,313,2300,2300);
    textSize(30);
    fill(0, 140, 255);
    text("?",346,285,200,200);
    

    mouseClicked = function(){//Decides Decides What Happens When You Click A Button
        
        //The Easy Button Function
        if(mouseX>50 && mouseX<150 && mouseY>250 && mouseY<290){//Determines The Location Of The Button
            
            missileSpeed-=1;//Decreases Or Increases The Missile's Speed
            GameStart=true;//Starts the game
        
        }
        
        //The Hard Button Function
        
        else if(mouseX>50 && mouseX<150 && mouseY>300 && mouseY<340){//The Code For The Easy Button Is Repeated Here, Except For The Coordinates
            missileSpeed+=1;
            GameStart=true;
            
        }
        
        //The Normal Button Functions
        
        else if(mouseX>200 && mouseX<300 && mouseY>250 && mouseY<290)
            {GameStart=true;
        
        }
        
        //Extreme Button Functions
        
        else if(mouseX>200 && mouseX<300 && mouseY>300 && mouseY<340){
            missileSpeed+=15;
            GameStart=true;
          
        } 
        
        //Opens The Instructions Page  
        
        else if(mouseX>335 && mouseX<375 && mouseY>250 && mouseY<344 && instructions===0){
            instructions = true;
            
        }
        
        //Closes The Instructions Page
        
        else if(mouseX>10 && mouseX<390 && mouseY>350 && mouseY<390 && instructions===1){
            instructions = false;//This Is The Button In The Instructions Page
            
        }
    
    
    }; 
    
    if(instructions===1){//Opens The Instructions Page If The Button Is Pressed
        
        background(204, 204, 204);//Background Color Of The Instructions Menu
        fill(163, 163, 163);//Fill Color Of The Return Buttons' Rectangle's shadow
        rect(5,355,380,40,20);//The Return Button Rectangle
        fill(0, 0, 0);//The Return Button's Color
        rect(10,350,380,40,20);//The Return Button's Shadow Rectangle
        textSize(30);//Sets The Text Size OF The 'RETURN' Text
        fill(0, 255, 0);//The Color Of The 'RETURN' Text
        text("RETURN",143,381);//The 'RETURN' Text
        fill(0, 0, 0);//The Fill Color Of The Instructions Text  
        textFont(Font,24);//The Font Size Of THe Instructions Text
        text("In This Game You Have To Dodge Missiles With Your Buddy Winston. If You Get Hit, Game Over.The First Missile Doesn't Kill You Use The Arrow Keys To Maneuver Winston. Don't Hit The Sides! You Will Die! Have Fun!!",0,13,400,400);//The Instructions Text
        
    }
    
    if(GameStart === true){//Starts the game if you click the start button in the menu
    
    
        
        var aa = function(A_Variable,Another_Variable){rect(A_Variable,Another_Variable,50,50,10);};//Creates an object for the rectangles in the background of the game over scene
        
        if(gameOver === true){//Draws a scene for if the game ends
            background(0, 0, 0);
            
            fill(59, 59, 59);//The Fill color of the rectangles in the background    
            for(var x = 0; x<400;x+=80){//A for loop FOR the background designs' rectangle's X coordinates
                for(var y = 0; y <400; y+=80){//A for loop FOR the background designs' rectangle's Y coordinates
                     rect(x,y,40,40,5);//Draws the set of rectangles
                }
                
            }

            for(var x = 40; x<400;x+=80){//This nested loops do the same thing but moves them around to generate the pattern
                for(var y = 40; y <400; y+=80){
                    rect(x,y,40,40,5);
                }
                
            }
                
            textSize(30);//The size of the text in the game over scene
            fill(255, 0, 0);
            
            //Display Score    
            text("You Killed Winston !!",65,150,400,100);
            text("Click Restart To Play Again",15,193,400,100);
            text("Your Score:",101,236,200,200);
            text(ceil(score),268,237,400,100);//Calculates and displays your score
            image(getImage("creatures/Winston"),283,280,100,100);
            
            mouseClicked = function(){
                if(mouseY<365 && mouseY>335 && mouseX<320 && mouseX>80){
                    Program.Restart();
                }
            };
        
        }
        
        
        
        else{//If the game is not over, and the game is continuing, this is what happens(The Game Mechanics)
            background(BackGround_Color_1_Red,BackGround_Color_1_Green,BackGround_Color_1_Blue);//Generates a random background color 
            fill(BackGround_Color_2_Red,BackGround_Color_2_Green,BackGround_Color_2_Blue);//Generates a random fill color for the rectangles    
                
            for(var x = 0; x<400;x+=80){//The same nested loop from line 157 generating the same background in different colors
                for(var y = 0; y <400; y+=80){
                     rect(x,y,40,40,5);
                     
                }
                
            }

            for(var x = 40; x<400;x+=80){
                for(var y = 40; y <400; y+=80){
                    rect(x,y,40,40,5);
                    
                }
                
            }
            
            //---------WINSTON!!!---------//
            
            fill(255, 234, 0);//The original fill color for winston
            ellipse(winstonX,winstonY,40,40);//winston's Head
            fill(0, 0, 0);//Black for Winston's eyes
            ellipse(winstonX - 11,winstonY - 6,7,7);//Winston's Left eyes
            ellipse(winstonX + 8,winstonY - 6,7,7);//Winston's Right Eye
            fill(255, 0, 0);//Red for Winston's MASSIVE mouth
            ellipse(winstonX + 3, winstonY + 9,15,15);//Winston's MASSIVE Mouth
            
            //Scoring
            
            textSize(15);//Size of the score text in the game
            score += 0.005;//The gradual increase in the score
            fill(0, 0, 0);//The fill color of the text
            text(ceil(score),1,14);//Generates and dispays the score
            
            //Winston's Animation!!!
            
            winstonSpeed += speedIncreaseRate;//Slowly increases the speed at which Winston moves to slowly increase dificulty
            
            if(winstonY > 20 && keyIsPressed && keyCode === UP){//The first condition in the 'if' statement makes sure Winston doesn't leave the game boundries                                                  //The second and third statement determine which button is pressed
                winstonY-=winstonSpeed;//Downwards Movement     
                
            }
            
            if(winstonY < 380 && keyIsPressed && keyCode === DOWN){//This is repeated four times to make Winston move in two dimensions
                winstonY+=winstonSpeed;//Upwards Movement
                
            }
            
            if(winstonX > 20 && keyIsPressed && keyCode === LEFT){
                winstonX-=winstonSpeed;//Downwards Movement
                
            }
            
            if(winstonX < 380 && keyIsPressed && keyCode === RIGHT){
                winstonX+=winstonSpeed;//Downwards Movement
                
            }
            
            //A LOT of Missiles
            
            missileSpeed += speedIncreaseRate;//Gradually increses the speed of the missiles to increase the difficulty of the game as it progresses
            
            var missile = function(){rect(A,a,100,5,20);};//Missile A
            if(A>-100){//As long as the Missile is in the Canvas, it will move forwards
                
                A-=missileSpeed;//Makes The mIssile Move Forwards
                
                fill(10, 10, 10);
                missile();//Draws The Missile
                fill(255, 136, 0);
                rect(A+100,a,20,5);//Creates The Missiles Tail Of Fire !!
                
            }
            else{
                A +=700;//If The Missile leaves the Canvas, the missile goes to the other end of the screen
                a = random(0,360);//This spawns the issile at a different Y position, or different height
                
            }
            
            var missile = function(){rect(B,b,100,5,20);};//Missile B
            if(B>-100){
                
                B-=missileSpeed;
                                    //This Code Is Repeated To Make 7 Re-Spawning Missiles
                fill(10, 10, 10);
                missile();
                fill(255, 136, 0);
                rect(B+100,b,20,5);
                
            }
            else{
                B +=700;
                b = random(0,360);
                
            }
             
            var missile = function(){rect(C,c,100,5,20);};//Missile C
            if(C>-100){
                
                C-=missileSpeed;
            
                fill(10, 10, 10);
                missile();
                fill(255, 136, 0);
                rect(C+100,c,20,5);
                
            }
            
            else{
                C +=700;
                c = random(0,360);
                
            }
        
            var missile = function(){rect(D,d,100,5,20);};//Missile D
            if(D>-100){
                
                D-=missileSpeed;
                
                fill(10, 10, 10);
                missile();
                fill(255, 136, 0);
                rect(D+100,d,20,5);
                
            }
            
            else{
                D +=700;
                d = random(0,360);
                
            }
         
            var missile = function(){rect(E,e,100,5,20);};//Missile E
            if(E>-100){
                
                E-=missileSpeed;
                
                fill(10, 10, 10);
                missile();
                fill(255, 136, 0);
                rect(E+100,e,20,5);
                
            }
            
            else{
                E +=700;
                e = random(0,360);
                
            }
                
            var missile = function(){rect(F,f,100,5,20);};//Missile F
            if(F>-100){
                
                F-=missileSpeed;
                
                fill(10, 10, 10);
                missile();
                fill(255, 136, 0);
                rect(F+100,f,20,5);
                    
                }
                
               
            else{
                F +=700;
                f = random(0,360);
                
            }
                
            var missile = function(){rect(G,g,100,5,20);};//Missile G
            if(G>-100){
                
                G-=missileSpeed;
                
                fill(10, 10, 10);
                missile();
                fill(255, 136, 0);
                rect(G+100,g,20,5);
                    
                }
            
            else{
                G +=700;
                g = random(0,360);
                
            }
        
            if(A-20<winstonX && A+120>winstonX && a-20<winstonY && a+25>winstonY){
                gameOver=true;//Here We Detect If A Missile Hits Winston
                
            }
            
            if(B-20<winstonX && B+120>winstonX && b-20<winstonY && b+25>winstonY){
                gameOver=true;
            
            }
            
            if(C-20<winstonX && C+120>winstonX && c-20<winstonY && c+25>winstonY){
                gameOver=true;
            
            }
                
            if(D-20<winstonX && D+120>winstonX && d-20<winstonY && d+25>winstonY){
                gameOver=true;
            
            }
            
            if(E-20<winstonX && E+120>winstonX && e-20<winstonY && e+25>winstonY){
                gameOver=true;
            
            }
            
            if(F-20<winstonX && F+120>winstonX && f-20<winstonY && f+25>winstonY){
                gameOver=true;
            
            }
            
        }
        
    
}
};

}//OPEN THIS TO VIEW THE CODE