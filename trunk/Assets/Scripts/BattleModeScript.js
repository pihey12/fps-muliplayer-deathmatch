var newSkin : GUISkin;
var logoTexture : Texture2D;
var windowRect : Rect = Rect (5, 450, 200, 200);
var userName : String = "User Name";
var password : String = "Password";

function theFirstMenu() {
	GUI.skin = newSkin;
	var script;
	var script2;
    //layout start
    //GUI.BeginGroup(Rect(20, 0, 550, Screen.height));
    
    //the menu background box
    //GUI.Box(Rect(0, 0, 300, 200), "");
    
    //logo picture
    //GUI.Label(Rect(15, 10, 300, 68), logoTexture);
    
    ///////main menu buttons
    //LAN button
    GUI.Label(Rect(5,125,150,50),"LAN Game Options");
    if(GUI.Button(Rect(5, 150, 145, 40), "Create Battle")) 
    {
    	script = GetComponent("BattleModeScript"); 
    	script.enabled = false;
    	script2 = GetComponent("CreateRoomScript"); 
    	script2.enabled = true;
    }    
    if(GUI.Button(Rect(150, 150, 145, 40), "Join Battle")) 
    {
    	script = GetComponent("BattleModeScript");
    	script.enabled = false;
    	script2 = GetComponent("JoinRoomScript"); 
    	script2.enabled = true;
    }
    
    //Online button
    GUI.Label(Rect(5,275,150,50),"Online Game Options");
    //------------User name label and text
    GUI.Label(Rect(5,300,90,50),"User Name:");
    userName =  GUI.TextField (Rect (90, 300, 200, 20), userName, 25);
    //------------Password label and text
    GUI.Label(Rect(5,330,90,50),"Password:");
    password =  GUI.PasswordField (Rect (90, 330, 200, 20), password, 25);
    
    if(GUI.Button(Rect(5, 360, 145, 40), "Create Battle")) 
    {
    	script = GetComponent("BattleModeScript");
    	script.enabled = false;
    	script2 = GetComponent("CreateOnlineRoom"); 
    	script2.enabled = true;
    }    
    if(GUI.Button(Rect(150, 360, 145, 40), "Join Battle")) 
    {
    	script = GetComponent("BattleModeScript");
    	script.enabled = false;
    	script2 = GetComponent("JoinRoomScriptOnline");
    	script2.enabled = true;
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
    //GUI.EndGroup();
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