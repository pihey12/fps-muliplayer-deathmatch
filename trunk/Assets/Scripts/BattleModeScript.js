var newSkin : GUISkin;
var logoTexture : Texture2D;
var windowRect : Rect = Rect (20, 20, 120, 50);

function theFirstMenu() {
	GUI.skin = newSkin;
	var script;
    //layout start
    GUI.BeginGroup(Rect(20, 0, 550, Screen.height));
    
    //the menu background box
    //GUI.Box(Rect(0, 0, 300, 200), "");
    
    //logo picture
    //GUI.Label(Rect(15, 10, 300, 68), logoTexture);
    
    ///////main menu buttons
    //LAN button
    GUI.Label(Rect(5,125,150,50),"LAN Game Options");
    if(GUI.Button(Rect(5, 150, 300, 40), "Create Battle")) 
    {
    	script = GetComponent("BattleModeScript"); 
    	script.enabled = false;
    	var script3LAN = GetComponent("CreateRoomScript"); 
    	script3LAN.enabled = true;
    }    
    if(GUI.Button(Rect(5, 200, 300, 40), "Join Battle")) 
    {
    	script = GetComponent("BattleModeScript");
    	script.enabled = false;
    	var script5LAN = GetComponent("JoinRoomScript"); 
    	script5LAN.enabled = true;
    }
    //Online button
    GUI.Label(Rect(5,275,150,50),"Online Game Options");
    if(GUI.Button(Rect(5, 300, 300, 40), "Create Battle")) 
    {
    	windowRect = GUI.Window (0, windowRect, DoMyWindow, "My Window");
    	//script = GetComponent("BattleModeScript"); 
    	//script.enabled = false;
    	//var script3ONLINE = GetComponent("CreateRoomScriptOnline"); 
    	//script3LAN.enabled = true;
    }    
    if(GUI.Button(Rect(5, 350, 300, 40), "Join Battle")) 
    {
    	script = GetComponent("BattleModeScript");
    	script.enabled = false;
    	var script5ONLINE = GetComponent("JoinRoomScriptOnline"); 
    	script5LAN.enabled = true;
    }
    
    //game start button
    //if(GUI.Button(Rect(5, 150, 300, 40), "Create Battle")) {
    //script = GetComponent("BattleModeScript"); 
    //script.enabled = false;
    //var script3 = GetComponent("CreateRoomScript"); 
    //script3.enabled = true;
    //}    
    
    //if(GUI.Button(Rect(5, 200, 300, 40), "Join Battle")) {
    //script = GetComponent("BattleModeScript"); 
    //script.enabled = false;
    //var script5 = GetComponent("JoinRoomScript"); 
    //script5.enabled = true;
    //}
    
    if(GUI.Button(Rect(5, Screen.height-50, 300, 40), "Back")) {
    script = GetComponent("MainMenuScript"); 
    script.enabled = true;
    var script9 = GetComponent("BattleModeScript"); 
    script9.enabled = false;
    }    
    
    //layout end
    GUI.EndGroup();
}

function DoMyWindow (windowID : int) 
{
    if (GUI.Button (Rect (10,20,100,20), "Hello World"))
        print ("Got a click");
}

function OnGUI () {
    //load GUI skin
    GUI.skin = newSkin;
    
    //execute theFirstMenu function
    theFirstMenu();
}