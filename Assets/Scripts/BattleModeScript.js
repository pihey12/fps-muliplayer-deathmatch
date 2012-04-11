var newSkin : GUISkin;
var logoTexture : Texture2D;

function theFirstMenu() {
	GUI.skin = newSkin;
	var script;
    //layout start
    GUI.BeginGroup(Rect(20, 0, 350, Screen.height));
    
    //the menu background box
    GUI.Box(Rect(0, 0, 300, 200), "");
    
    //logo picture
    GUI.Label(Rect(15, 10, 300, 68), logoTexture);
    
    ///////main menu buttons
    //game start button
    if(GUI.Button(Rect(5, 150, 300, 40), "Create Battle")) {
    script = GetComponent("BattleModeScript"); 
    script.enabled = false;
    var script3 = GetComponent("CreateRoomScript"); 
    script3.enabled = true;
    }    
    
    if(GUI.Button(Rect(5, 200, 300, 40), "Join Battle")) {
    script = GetComponent("BattleModeScript"); 
    script.enabled = false;
    var script5 = GetComponent("JoinRoomScript"); 
    script5.enabled = true;
    }
    
    if(GUI.Button(Rect(5, Screen.height-50, 300, 40), "Back")) {
    script = GetComponent("MainMenuScript"); 
    script.enabled = true;
    var script9 = GetComponent("BattleModeScript"); 
    script9.enabled = false;
    }    
    
    //layout end
    GUI.EndGroup(); 
}

function OnGUI () {
    //load GUI skin
    GUI.skin = newSkin;
    
    //execute theFirstMenu function
    theFirstMenu();
}