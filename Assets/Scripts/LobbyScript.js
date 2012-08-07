var newSkin : GUISkin;
var logoTexture : Texture2D;

function theFirstMenu() 
{
	
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
    
    //execute theFirstMenu function
    theFirstMenu();
}