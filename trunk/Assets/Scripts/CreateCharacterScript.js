var newSkin : GUISkin;
var logoTexture : Texture2D;
var headSelection : int = 1;
var torsoSelection : int = 1;
var ruArmSelection : int = 1;
var rlArmSelection : int = 1;
var luArmSelection : int = 1;
var llArmSelection : int = 1;
var ruLegSelection : int = 1;
var rlLegSelection : int = 1;
var luLegSelection : int = 1;
var llLegSelection : int = 1;
var baseCharacter : GameObject;
baseCharacter = GameObject.Find("baseCharacter");
baseCharacter.transform.position = Vector3(0.09,-231.67,-434.08);
//baseCharacter.transform.Translate(0,0,0);

//baseCharacter =  GameObject ("baseCharacter");
//baseCharacter.transform.Translate(0,-231,-431);
//baseCharacter.transform.localScale += Vector3(100,100,100);
//Instantiate(baseCharacter);

//baseCharacter.active = true;

function createCharacter() {
	GUI.skin = newSkin;
	var script;
	//gameObject.GetComponent("baseCharacter").active = false;
	//Load base character for editting
	
	//Vector3 location = Vector3(0,-231,-431);
	//GameObject.Instantiate(baseCharacter):GameObject;
			
	//Title
	GUI.Label(Rect(5,5,300,50),"Character Creation");
	
	//Grouping for head and body--------------------
	GUI.BeginGroup(Rect(20, Screen.height/12, 280, 60));
    //Head selection
    GUI.Label(Rect(40,0, 80, 30),"Head " + headSelection.ToString());
    headSelection = GUI.HorizontalScrollbar (Rect(0,30, 120, 30),headSelection, 1, 1, 10);
    //Torso selection
    GUI.Label(Rect(170,0, 80, 30),"Torso " + torsoSelection.ToString());
    torsoSelection = GUI.HorizontalScrollbar (Rect(130,30, 120, 30),torsoSelection, 1, 1, 10);
    GUI.EndGroup();
    
    //Grouping for right arm-------------------------------
    GUI.BeginGroup(Rect(20, Screen.height/5.5, 130, 110));
    //Right upper arm
    GUI.Label(Rect(0,0, 120, 30),"Upper Right Arm " + ruArmSelection.ToString());
    ruArmSelection = GUI.HorizontalScrollbar (Rect(0,30, 120, 30),ruArmSelection, 1, 1, 10);
    //Right lower arm
    GUI.Label(Rect(0,60, 120, 30),"Lower Right Arm " + rlArmSelection.ToString());
    rlArmSelection = GUI.HorizontalScrollbar (Rect(0,90, 120, 30),rlArmSelection, 1, 1, 10);
    GUI.EndGroup();
    
    //Grouping for left arm--------------------------------
    GUI.BeginGroup(Rect(150, Screen.height/5.5, 130, 110));
    //Left upper arm
    GUI.Label(Rect(0,0, 120, 30),"Upper Left Arm " + luArmSelection.ToString());
    luArmSelection = GUI.HorizontalScrollbar (Rect(0,30, 120, 30),luArmSelection, 1, 1, 10);
    //Left lower arm
    GUI.Label(Rect(0,60, 120, 30),"Lower Left Arm " + llArmSelection.ToString());
    llArmSelection = GUI.HorizontalScrollbar (Rect(0,90, 120, 30),llArmSelection, 1, 1, 10);
    GUI.EndGroup();
    
    //Grouping for right leg------------------------------
    GUI.BeginGroup(Rect(20, Screen.height/2.5, 130, 110));
    //Right upper leg
    GUI.Label(Rect(0,0, 120, 30),"Upper Right Leg " + ruLegSelection.ToString());
    ruLegSelection = GUI.HorizontalScrollbar (Rect(0,30, 120, 30),ruLegSelection, 1, 1, 10);
    //Right lower leg
    GUI.Label(Rect(0,60, 120, 30),"Lower Right Leg " + rlLegSelection.ToString());
    rlLegSelection = GUI.HorizontalScrollbar (Rect(0,90, 120, 30),rlLegSelection, 1, 1, 10);
    GUI.EndGroup();
    
    //Grouping for left leg--------------------------------
    GUI.BeginGroup(Rect(150, Screen.height/2.5, 130, 110));
    //Left upper leg
    GUI.Label(Rect(0, 0, 120, 30),"Upper Left Leg " + luLegSelection.ToString());
    luLegSelection = GUI.HorizontalScrollbar (Rect(0, 30, 120, 30),luLegSelection, 1, 1, 10);
    //Left lower leg
    GUI.Label(Rect(0, 60, 120, 30),"Lower Left Leg " + llLegSelection.ToString());
    llLegSelection = GUI.HorizontalScrollbar (Rect(0, 90, 120, 30),llLegSelection, 1, 1, 10);
    GUI.EndGroup();
    
    
    //Return to main menu
    if(GUI.Button(Rect(5, Screen.height-50, 300, 40), "Main Menu")) {
    script = GetComponent("MainMenuScript"); 
    script.enabled = true;
    var script2 = GetComponent("CreateCharacterScript"); 
    script2.enabled = false;
    }
    
    //
    if(GUI.Button(Rect(315, Screen.height-50, 300, 40), "Save Character")) {
    
    }     
}

function OnGUI () {
    
    baseCharacter.transform.position = Vector3(0.09,-231.67,-434.08);
    //load GUI skin
    GUI.skin = newSkin;
    
    //execute theFirstMenu function
    createCharacter();
}