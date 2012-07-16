var newSkin : GUISkin;
var logoTexture : Texture2D;

var gameName : String = "Name";
var password : String = "";

var buttonSize = 0;
var battleTypeInt = 0;
var battleTypeStrings : String[] = ["Deathmatch", "Team Deathmatch"];
var playerCountInt = 0;
var playerCountStrings : String[] = ["2","4","6","8","10"];
var gameTimeInt = 0;
var gameTimeStrings : String[] = ["5","10","15"];
var mapSelectionInt = 0;
var mapSelectionStrings : String[] = ["Place","Your Mom's","Hooker Haven","Urban Playground","Wasteland","Monkey Cage","Another Place","Backseat"];
var mapSelection : Vector2 = Vector2.zero;

function theFirstMenu() {
	GUI.skin = newSkin;
	var script;
    //layout start
    //GUI.BeginGroup(Rect(20, 0, 350, Screen.height));
    //the menu background box
    //GUI.Box(Rect(0, 0, 300, 200), "");
    //logo picture
    //GUI.Label(Rect(15, 10, 300, 68), logoTexture);
    
    ///////main menu buttons and such
    //Battle Options
    GUI.Label(Rect(5,50,150,50),"Battle Type:");
    battleTypeInt = GUI.Toolbar (Rect (5, 70, 250, 30), battleTypeInt, battleTypeStrings);
    
    //# of players Options
    GUI.Label(Rect(5,110,150,50),"Number of Players");
    playerCountInt = GUI.Toolbar (Rect (5, 130, 250, 30), playerCountInt, playerCountStrings);
    
    //Length of match
    GUI.Label(Rect(300,50,150,50),"Game Time:");
    gameTimeInt = GUI.Toolbar (Rect (300, 70, 150, 30), gameTimeInt, gameTimeStrings);
    
    //Map Preview
    GUI.Box(Rect(300,200,300,300),"Map Preview");
    
    //Map Selection
    buttonSize = mapSelectionStrings.Length*30;
    mapSelection = GUI.BeginScrollView (Rect (5,200,275,300),mapSelection, Rect (0,0, 250, buttonSize));
    //mapSelectionInt = GUI.Toolbar (Rect (0, 0, 250, 700), mapSelectionInt, mapSelectionStrings);
    mapSelectionInt = GUI.SelectionGrid (Rect (5, 0, 250, buttonSize), mapSelectionInt, mapSelectionStrings, 1);

    GUI.EndScrollView ();
    
    
    //Game name and password fields
    GUI.BeginGroup(Rect(Screen.width-250, 50, 250, 60));
    GUI.Label(Rect(0,0,90,50),"Game Name:");
    gameName =  GUI.TextField (Rect (90, 0, 150, 20), gameName, 25);
    //------------Password label and text
    GUI.Label(Rect(0,30,90,50),"Password:");
    password =  GUI.PasswordField (Rect (90, 30, 150, 20), password, 25);
    GUI.EndGroup();
    
    //game start button
    if(GUI.Button(Rect(Screen.width-320, Screen.height-90, 300, 40), "Create Game"))
    {
    	//Start the network lobby
    }
    //Back to main network menu
    if(GUI.Button(Rect(Screen.width-320, Screen.height-50, 300, 40), "Back"))
    {
    	script = GetComponent("BattleModeScript"); 
    	script.enabled = true;
    	var script2 = GetComponent("CreateRoomScript"); 
    	script2.enabled = false;
    }
    
    //layout end
    //GUI.EndGroup(); 
}

function OnGUI () {
    //load GUI skin
    GUI.skin = newSkin;
    
    //execute theFirstMenu function
    theFirstMenu();
}