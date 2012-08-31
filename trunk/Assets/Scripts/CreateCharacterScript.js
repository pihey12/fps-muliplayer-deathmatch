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

//Arrays for body parts
var head : String[] = ["head1","head2","head3","head4","head5","head6","head7",
	"head8","head9"];
var headObject : ArrayList;
headObject = new ArrayList();
var torso : String[] = ["torso1","torso2","torso3","torso4","torso5","torso6","torso7",
	"torso8","torso9"];
var ruArm : String[] = ["ruArm1","ruArm2","ruArm3","ruArm4","ruArm5","ruArm6","ruArm7",
	"ruArm8","ruArm9"];
var rlArm : String[] = ["rlArm1","rlArm2","rlArm3","rlArm4","rlArm5","rlArm6","rlArm7",
	"rlArm8","rlArm9"];
var luArm : String[] = ["luArm1","luArm2","luArm3","luArm4","luArm5","luArm6","luArm7",
	"luArm8","luArm9"];
var llArm : String[] = ["llArm1","llArm2","llArm3","llArm4","llArm5","llArm6","llArm7",
	"llArm8","llArm9"];
var ruLeg : String[] = ["ruLeg1","ruLeg2","ruLeg3","ruLeg4","ruLeg5","ruLeg6","ruLeg7",
	"ruLeg8","ruLeg9"];
var rlLeg : String[] = ["rlLeg1","rlLeg2","rlLeg3","rlLeg4","rlLeg5","rlLeg6","rlLeg7",
	"rlLeg8","rlLeg9"];
var luLeg : String[] = ["luLeg1","luLeg2","luLeg3","luLeg4","luLeg5","luLeg6","luLeg7",
	"luLeg8","luLeg9"];
var llLeg : String[] = ["llLeg1","llLeg2","llLeg3","llLeg4","llLeg5","llLeg6","llLeg7",
	"llLeg8","llLeg9"];

//Find main gameobjects
var head1 : GameObject;
var tempHead : GameObject;
head1 = GameObject.Find("HeadObject");
tempHead = head1.Find("head1");
//tempHead.SetActiveRecursively(false);

//tempHead = head1.Find("head2");
//tempHead.active = false;
//tempHead = Resources.Load("bodyParts/headPrefab1");

//sets all objects to inactive
var count : int = 0;
while(count <= 1)
{
   	headObject.Add(head1.Find(head[count]));
   	headObject[count].SetActiveRecursively(false);
   	tempHead = headObject[count];
   	count++;
}

function createCharacter() {
	GUI.skin = newSkin;
	var script;

	//Title
	GUI.Label(Rect(5,5,300,50),"Character Creation");
	
	//Grouping for head and body--------------------
	GUI.BeginGroup(Rect(20, Screen.height/12, 280, 60));
    //Head selection
    GUI.Label(Rect(40,0, 80, 30),"Head " + headSelection.ToString());
    headSelection = GUI.HorizontalScrollbar (Rect(0,30, 120, 30),headSelection, 1, 1, 10);
    //headSelection.
    updateBody(headSelection,headObject);
        
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
    if(GUI.Button(Rect(315, Screen.height-50, 300, 40), "Save Character"))
    {
    
    }
}

function updateBody(num,part)
{
	if(!tempHead.Equals(part[num-1]))
	{
		tempHead.SetActiveRecursively(false);
		tempHead.renderer.enabled = false;
		tempHead = part[num-1];
		tempHead.renderer.enabled = true;
		tempHead.SetActiveRecursively(true);		
	}
	//head1.renderer.;
	
	//headObject[num-1].SetActiveRecursively(true);
	
	//part[num].SetActiveRecursively(false);
	
	//tempHead = part[num-1];
	//tempHead.SetActiveRecursively(true);
}

function OnGUI () 
{
    
    baseCharacter.transform.position = Vector3(0.09,-231.67,-434.08);
    //load GUI skin
    GUI.skin = newSkin;
    
    //execute theFirstMenu function
    createCharacter();
}