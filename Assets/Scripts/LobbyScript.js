var newSkin : GUISkin;
var logoTexture : Texture2D;

var gameName : String = "Your Mom's Place";
var gameType : String = "Team Deathmatch";
var playerList : String = "";
var count:int = 0;

var playerNames : String[] = ["Boe Peep","Boodissy","Prophet","DancerofWar","Smokewalker","Monkey","Wasted","StickUser","xPoorManx","defaultName",
								"Test 1","Test 2","Test 3","Test 4"];
var scrollPosition : Vector2 = Vector2.zero;
var scrollPosition2 : Vector2 = Vector2.zero;

function theFirstMenu() 
{
	//Titles
	GUI.Label(Rect(5,25,150,50),gameName);
	GUI.Label(Rect(200,25,150,50),gameType);
	
	GUI.Label(Rect(320,120,150,30),"Minutes: ");
	GUI.Label(Rect(320,150,150,30),"Max Players: ");

	//Game Map
    GUI.Box(Rect(5,120,250,250),"Map Preview");
    
    //Player view    
    GUI.Label(Rect(5,390,150,30),"Players");
    scrollPosition = GUI.BeginScrollView (Rect (5,410,150,170),scrollPosition, Rect (0, 0, 120, count*15));
    GUI.Label(Rect (0, 0, 150, 300), playerList);
    GUI.EndScrollView ();
    
    //Chat window view    
    scrollPosition2 = GUI.BeginScrollView (Rect (320,180,410,280),scrollPosition, Rect (0, 0, 400, 270));
    GUI.TextArea(Rect (0, 0, 400, 270),"Chat Box");
    GUI.EndScrollView ();
    GUI.TextField(Rect (320, 470, 200, 20),"Type here");
	
	//game start button
    if(GUI.Button(Rect(Screen.width-320, Screen.height-90, 300, 40), "Start Game"))
    {
    	//Start the match
    }
    //Back to main network menu
    if(GUI.Button(Rect(Screen.width-320, Screen.height-50, 300, 40), "Cancel Game"))
    {
    	script = GetComponent("BattleModeScript"); 
    	script.enabled = true;
    	var script2 = GetComponent("LobbyScript"); 
    	script2.enabled = false;
    }
}

function OnGUI () {
    //load GUI skin
    GUI.skin = newSkin;
//    while(count < 5)
//    {
//    	playerList += playerNames[count]+"\n";
//    	count++;
//    }
	while(count < playerNames.Length)
    {
    	playerList += playerNames[count]+"\n";
    	count++;
    }
    //execute theFirstMenu function
    theFirstMenu();
}