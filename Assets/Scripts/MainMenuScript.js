var newSkin : GUISkin;
var logoTexture : Texture2D;
var baseCharacter : GameObject;
baseCharacter = GameObject.Find("baseCharacter");
//baseCharacter.transform.Translate(5,0,0);
//baseCharacter.transform.Translate(0,0,0);
baseCharacter.transform.position = Vector3(5,-231.67,-434.08);

function theFirstMenu() {
	var script;
	GUI.Label(Rect(5,5,300,50),"Attempted Intelligence Encounter","label");
    //layout start
    //GUI.BeginGroup(Rect(20, 20, Screen.width, Screen.height));
    //Title
	//GUI.Label(Rect(5,5,300,50),"Attempted Intelligence Encounter");
    
    //the menu background box
    //GUI.Box(Rect(0, 0, 300, 200), "");
    
    //logo picture
    //GUI.Label(Rect(15, 10, 300, 68), logoTexture);
    
    ///////main menu buttons
    //game start button
    if(GUI.Button(Rect(5, 100, 300, 40), "Create Character")) {
    
    script = GetComponent("MainMenuScript"); 
    script.enabled = false;
    var script2 = GetComponent("CreateCharacterScript");
    script2.enabled = true;
    }
    
    if(GUI.Button(Rect(5, 150, 300, 40), "Battles")) {
    script = GetComponent("MainMenuScript"); 
    script.enabled = false;
    var script3 = GetComponent("BattleModeScript"); 
    script3.enabled = true;
    }    
    
    if(GUI.Button(Rect(5, 200, 300, 40), "Settings")) {
    script = GetComponent("MainMenuScript"); 
    script.enabled = false;
    var script5 = GetComponent("SettingsMenuScript"); 
    script5.enabled = true;
    }
    
    //quit button
    if(GUI.Button(Rect(5, 250, 300, 40), "Quit")) {
    Application.Quit();
    }
    
    //layout end
    //GUI.EndGroup(); 
}

function OnGUI () {
    //load GUI skin
    //GUI.skin = newSkin;
    baseCharacter.transform.position = Vector3(5,-231.67,-434.08);
    //execute theFirstMenu function
    theFirstMenu();
}