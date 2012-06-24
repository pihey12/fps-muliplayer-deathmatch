var newSkin : GUISkin;
var logoTexture : Texture2D;

function theSettingsMenu() {
	var script;
	GUI.Label(Rect(5,5,200,50),"Modify Game Settings","label");
    
    ///////menu buttons  
    //video button    
    if(GUI.Button(Rect(5, 100, 200, 40), "Video")) 
    {
	    script = GetComponent("SettingsMenuScript"); 
	    script.enabled = false;
	    var scriptVideo = GetComponent("VideoModeScript"); 
	    scriptVideo.enabled = true;
    }
    
    //audio button
    if(GUI.Button(Rect(5, 150, 200, 40), "Audio")) 
    {
	    script = GetComponent("SettingsMenuScript"); 
	    script.enabled = false;
	    var scriptAudio = GetComponent("AudioMenuScript"); 
	    scriptAudio.enabled = true;
    }
    
    //back button
    if(GUI.Button(Rect(5, Screen.height-50, 200, 40), "Back")) 
    {
	    script = GetComponent("SettingsMenuScript"); 
	    script.enabled = false;
	    var scriptBack = GetComponent("MainMenuScript"); 
	    scriptBack.enabled = true;
    }   
}

function OnGUI () {    
    //execute theSettingsMenu function
    theSettingsMenu();
}