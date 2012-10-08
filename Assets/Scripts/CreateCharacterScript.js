var newSkin : GUISkin;
var logoTexture : Texture2D;
var headSelection : int = 0;
var prevHeadSelect : int = 1;
var headColor : int=0;
var torsoSelection : int = 1;
var prevTorsoSelect : int = 1;
var bodyColor : int = 0;
var ruArmSelection : int = 1;
var prevRUArmSelect : int = 1;
var ruArmColor : int = 0;
var rlArmSelection : int = 1;
var prevRLArmSelect : int = 1;
var rlArmColor : int = 0;
var luArmSelection : int = 1;
var prevLUArmSelect : int = 1;
var luArmColor : int = 0;
var llArmSelection : int = 1;
var prevLLArmSelect : int = 1;
var llArmColor : int = 0;
var ruLegSelection : int = 1;
var prevRULegSelect : int = 1;
var ruLegColor : int = 0;
var rlLegSelection : int = 1;
var prevRLLegSelect : int = 1;
var rlLegColor : int = 0;
var luLegSelection : int = 1;
var prevLULegSelect : int = 1;
var luLegColor : int = 0;
var llLegSelection : int = 1;
var prevLLLegSelect : int = 1;
var llLegColor : int = 0;

var baseCharacter : GameObject;
baseCharacter = GameObject.Find("baseCharacter");


var head : String[] = ["head1","head2","head3","head4","head5","head6","head7","head8","head9"];
var headObject : ArrayList;
headObject = new ArrayList();

var torso : String[] = ["torso1","torso2","torso3","torso4","torso5","torso6","torso7","torso8","torso9"];
var torsoObject = new ArrayList();
		
var ruArm : String[] = ["rupperArm1","rupperArm2","rupperArm3","rupperArm4","rupperArm5","rupperArm6","rupperArm7"];
var ruArmObject = new ArrayList();

var rlArm : String[] = ["rlowerArm1","rlowerArm2","rlowerArm3","rlowerArm4","rlowerArm5","rlowerArm6","rlowerArm7"];
var rlArmObject = new ArrayList();

var luArm : String[] = ["upperArm1","upperArm2","upperArm3","upperArm4","upperArm5","upperArm6","upperArm7"];
var luArmObject = new ArrayList();

var llArm : String[] = ["llowerArm1","llowerArm2","llowerArm3","llowerArm4","llowerArm5","llowerArm6","llowerArm7"];
var llArmObject = new ArrayList();

var ruLeg : String[] = ["ruLeg1","ruLeg2","ruLeg3","ruLeg4","ruLeg5","ruLeg6","ruLeg7","ruLeg8","ruLeg9"];
var ruLegObject = new ArrayList();
	
var rlLeg : String[] = ["rlLeg1","rlLeg2","rlLeg3","rlLeg4","rlLeg5","rlLeg6","rlLeg7","rlLeg8","rlLeg9"];
var rlLegObject = new ArrayList();

var luLeg : String[] = ["luLeg1","luLeg2","luLeg3","luLeg4","luLeg5","luLeg6","luLeg7","luLeg8","luLeg9"];
var luLegObject = new ArrayList();

var llLeg : String[] = ["llLeg1","llLeg2","llLeg3","llLeg4","llLeg5","llLeg6","llLeg7","llLeg8","llLeg9"];
var llLegObject = new ArrayList();

//Find main gameobjects
var tempPart : GameObject;
var headOne : GameObject;
var tempHead : GameObject;
headOne = GameObject.Find("HeadObject");
tempHead = headOne.Find("head1");

var count : int = 0;
while(count <= 8)
{
	headObject.Add(headOne.Find(head[count]));
	tempHead = headObject[count];
	headObject[count].transform.localPosition = Vector3(0,100,100);
	prevHeadSelect = count;
	count++;
}
var LUpperArm : GameObject;
var tempLUpperArm : GameObject;
LUpperArm = GameObject.Find("LUpperArm");
tempLUpperArm = LUpperArm.Find("upperArm1");
count = 0;
while(count <= 6)
{
	luArmObject.Add(LUpperArm.Find(luArm[count]));
	tempLUpperArm = luArmObject[count];
	luArmObject[count].transform.localPosition = Vector3(0,100,100);
	prevLUArmSelect = count;
	count++;
}

var RUpperArm : GameObject;
var tempRUpperArm : GameObject;
RUpperArm = GameObject.Find("RUpperArm");
tempRUpperArm = RUpperArm.Find("rupperArm1");
count = 0;
while(count <= 6)
{
	ruArmObject.Add(RUpperArm.Find(ruArm[count]));
	tempRUpperArm = ruArmObject[count];
	ruArmObject[count].transform.localPosition = Vector3(0,100,100);
	prevRUArmSelect = count;
	count++;
}

var RLowerArm : GameObject;
var tempRLowerArm : GameObject;
RLowerArm = GameObject.Find("RLowerArm");
tempRLowerArm = RLowerArm.Find("rlowerArm1");
count = 0;
while(count <= 6)
{
	rlArmObject.Add(RLowerArm.Find(rlArm[count]));
	tempRLowerArm = rlArmObject[count];
	rlArmObject[count].transform.localPosition = Vector3(0,100,100);
	prevRLArmSelect = count;
	count++;
}

var LLowerArm : GameObject;
var tempLLowerArm : GameObject;
LLowerArm = GameObject.Find("LLowerArm");
tempLLowerArm = LLowerArm.Find("llowerArm1");
count = 0;
while(count <= 6)
{
	llArmObject.Add(LLowerArm.Find(llArm[count]));
	tempLLowerArm = llArmObject[count];
	llArmObject[count].transform.localPosition = Vector3(0,100,100);
	prevLLArmSelect = count;
	count++;
}

var bodyTorso : GameObject;
var tempTorso : GameObject;
bodyTorso = GameObject.Find("BodyObject");
tempTorso = bodyTorso.Find("torso1");
count = 0;
while(count <= 6)
{
	torsoObject.Add(bodyTorso.Find(torso[count]));
	tempTorso = torsoObject[count];
	torsoObject[count].transform.localPosition = Vector3(0,100,100);
	prevTorsoSelect = count;
	count++;
}

var LUpperLeg : GameObject;
var tempLUpperLeg : GameObject;
LUpperLeg = GameObject.Find("LUpperLeg");
tempLUpperLeg = LUpperLeg.Find("luLeg1");
count = 0;
while(count <= 6)
{
	luLegObject.Add(LUpperLeg.Find(luLeg[count]));
	tempLUpperLeg = luLegObject[count];
	luLegObject[count].transform.localPosition = Vector3(0,100,100);
	prevLULegSelect = count;
	count++;
}

var RUpperLeg : GameObject;
var tempRUpperLeg : GameObject;
RUpperLeg = GameObject.Find("RUpperLeg");
tempRUpperLeg = RUpperLeg.Find("ruLeg1");
count = 0;
while(count <= 6)
{
	ruLegObject.Add(RUpperLeg.Find(ruLeg[count]));
	tempRUpperLeg = ruLegObject[count];
	ruLegObject[count].transform.localPosition = Vector3(0,100,100);
	prevRULegSelect = count;
	count++;
}

var RLowerLeg : GameObject;
var tempRLowerLeg : GameObject;
RLowerLeg = GameObject.Find("RLowerLeg");
tempRLowerLeg = RLowerLeg.Find("rlLeg1");
count = 0;
while(count <= 6)
{
	rlLegObject.Add(RLowerLeg.Find(rlLeg[count]));
	tempRLowerLeg = rlLegObject[count];
	rlLegObject[count].transform.localPosition = Vector3(0,100,100);
	prevRLLegSelect = count;
	count++;
}

var LLowerLeg : GameObject;
var tempLLowerLeg : GameObject;
LLowerLeg = GameObject.Find("LLowerLeg");
tempLLowerLeg = LLowerLeg.Find("llLeg1");
count = 0;
while(count <= 6)
{
	llLegObject.Add(LLowerLeg.Find(llLeg[count]));
	tempLLowerLeg = llLegObject[count];
	llLegObject[count].transform.localPosition = Vector3(0,100,100);	
	prevLLLegSelect = count;
	count++;
}
var testMaterial : Material;
var colorCounter = 0;
//testMaterial = Resources.Load("bodyParts/Materials/body");
//testMaterial.SetColor("_Color",Color.green);
//torsoObject[0].material.SetColor("_SpecColor",Color.red);

function createCharacter() {
	GUI.skin = newSkin;
	var script;

	//Title
	GUI.Label(Rect(5,5,300,50),"Character Creation");
	
	//Grouping for head and body--------------------
	GUI.BeginGroup(Rect(20, Screen.height/12, 280, 90));
    //Head selection
    GUI.Label(Rect(40,0, 80, 30),"Head " + headSelection.ToString());
    headSelection = GUI.HorizontalScrollbar (Rect(0,30, 120, 30),headSelection, 1, 1, 10);
    if(headSelection != prevHeadSelect)
    {
    	tempPart = tempHead;
    	updateBody(headSelection,headObject,prevHeadSelect);
    	prevHeadSelect = headSelection;
    }
    //Head Color
    if(GUI.Button(Rect(0, 50, 120, 30), "Head Color")) 
    {
    	testMaterial = Resources.Load("bodyParts/Materials/head");
    	if(headColor <= 9)
    	{
    		updateColor(testMaterial,headColor);
    	}
    	else
    	{
    		headColor = 0;
    		updateColor(testMaterial,headColor);
    	}
    	headColor++;
    }
    //Torso selection
    GUI.Label(Rect(170,0, 80, 30),"Torso " + torsoSelection.ToString());
    torsoSelection = GUI.HorizontalScrollbar (Rect(130,30, 120, 30),torsoSelection, 1, 1, 8);
    if(torsoSelection != prevTorsoSelect)
    {
    	tempPart = tempTorso;
    	updateBody(torsoSelection,torsoObject,prevTorsoSelect);
    	prevTorsoSelect = torsoSelection;
    }
    //Body Color
    if(GUI.Button(Rect(130, 50, 120, 30), "Body Color")) 
    {
    	testMaterial = Resources.Load("bodyParts/Materials/body");
    	if(bodyColor <= 9)
    	{
    		updateColor(testMaterial,bodyColor);
    	}
    	else
    	{
    		bodyColor = 0;
    		updateColor(testMaterial,bodyColor);
    	}
    	bodyColor++;
    }
    GUI.EndGroup();
    
    //Grouping for right arm-------------------------------
    GUI.BeginGroup(Rect(150, Screen.height/4.5, 130, 180));
    //Right upper arm
    GUI.Label(Rect(0,0, 120, 30),"Upper Right Arm " + ruArmSelection.ToString());
    ruArmSelection = GUI.HorizontalScrollbar (Rect(0,30, 120, 30),ruArmSelection, 1, 1, 8);
    if(ruArmSelection != prevRUArmSelect)
    {
    	tempPart = tempRUpperArm;
    	updateBody(ruArmSelection,ruArmObject,prevRUArmSelect);
    	prevRUArmSelect = ruArmSelection;
    }
    // Right upper arm color
    if(GUI.Button(Rect(0, 50, 120, 30), "Upper Arm Color")) 
    {
    	testMaterial = Resources.Load("bodyParts/Materials/ruArm");
    	if(ruArmColor <= 9)
    	{
    		updateColor(testMaterial,ruArmColor);
    	}
    	else
    	{
    		ruArmColor = 0;
    		updateColor(testMaterial,ruArmColor);
    	}
    	ruArmColor++;
    }
    //Right lower arm
    GUI.Label(Rect(0,80, 120, 30),"Lower Right Arm " + rlArmSelection.ToString());
    rlArmSelection = GUI.HorizontalScrollbar (Rect(0,110, 120, 30),rlArmSelection, 1, 1, 8);
    if(rlArmSelection != prevRLArmSelect)
    {
    	tempPart = tempRLowerArm;
    	updateBody(rlArmSelection,rlArmObject,prevRLArmSelect);
    	prevRLArmSelect = rlArmSelection;
    }
    if(GUI.Button(Rect(0, 130, 120, 30), "Lower Arm Color")) 
    {
    	testMaterial = Resources.Load("bodyParts/Materials/rlArm");
    	if(rlArmColor <= 9)
    	{
    		updateColor(testMaterial,rlArmColor);
    	}
    	else
    	{
    		rlArmColor = 0;
    		updateColor(testMaterial,rlArmColor);
    	}
    	rlArmColor++;
    }
    GUI.EndGroup();
    
    //Grouping for left arm--------------------------------
    GUI.BeginGroup(Rect(20, Screen.height/4.5, 130, 140));
    //Left upper arm
    GUI.Label(Rect(0,0, 120, 30),"Upper Left Arm " + luArmSelection.ToString());
    luArmSelection = GUI.HorizontalScrollbar (Rect(0,30, 120, 30),luArmSelection, 1, 1, 8);
    if(luArmSelection != prevLUArmSelect)
    {
    	tempPart = tempLUpperArm;
    	updateBody(luArmSelection,luArmObject,prevLUArmSelect);
    	prevLUArmSelect = luArmSelection;
    }
    //Left lower arm
    GUI.Label(Rect(0,60, 120, 30),"Lower Left Arm " + llArmSelection.ToString());
    llArmSelection = GUI.HorizontalScrollbar (Rect(0,90, 120, 30),llArmSelection, 1, 1, 8);
    if(llArmSelection != prevLLArmSelect)
    {
    	tempPart = tempLLowerArm;
    	updateBody(llArmSelection,llArmObject,prevLLArmSelect);
    	prevLLArmSelect = llArmSelection;
    }
    GUI.EndGroup();
    
    //Grouping for left leg--------------------------------
    GUI.BeginGroup(Rect(20, Screen.height/2.5, 130, 140));
    //Left upper leg
    GUI.Label(Rect(0, 0, 120, 30),"Upper Left Leg " + luLegSelection.ToString());
    luLegSelection = GUI.HorizontalScrollbar (Rect(0, 30, 120, 30),luLegSelection, 1, 1, 8);
    if(luLegSelection != prevLULegSelect)
    {
    	tempPart = tempLUpperLeg;
    	updateBody(luLegSelection,luLegObject,prevLULegSelect);
    	prevLULegSelect = luLegSelection;
    }
    //Left lower leg
    GUI.Label(Rect(0, 60, 120, 30),"Lower Left Leg " + llLegSelection.ToString());
    llLegSelection = GUI.HorizontalScrollbar (Rect(0, 90, 120, 30),llLegSelection, 1, 1, 8);
    if(llLegSelection != prevLLLegSelect)
    {
    	tempPart = tempLLowerLeg;
    	updateBody(llLegSelection,llLegObject,prevLLLegSelect);
    	prevLLLegSelect = llLegSelection;
    }
    GUI.EndGroup();
    
    //Grouping for right leg------------------------------
    GUI.BeginGroup(Rect(150, Screen.height/2, 130, 140));
    //Right upper leg
    GUI.Label(Rect(0,0, 120, 30),"Upper Right Leg " + ruLegSelection.ToString());
    ruLegSelection = GUI.HorizontalScrollbar (Rect(0,30, 120, 30),ruLegSelection, 1, 1, 8);
    if(ruLegSelection != prevRULegSelect)
    {
    	tempPart = tempRUpperLeg;
    	updateBody(ruLegSelection,ruLegObject,prevRULegSelect);
    	prevRULegSelect = ruLegSelection;
    }
    //Right lower leg
    GUI.Label(Rect(0,60, 120, 30),"Lower Right Leg " + rlLegSelection.ToString());
    rlLegSelection = GUI.HorizontalScrollbar (Rect(0,90, 120, 30),rlLegSelection, 1, 1, 8);
    if(rlLegSelection != prevRLLegSelect)
    {
    	tempPart = tempRLowerLeg;
    	updateBody(rlLegSelection,rlLegObject,prevRLLegSelect);
    	prevRLLegSelect = rlLegSelection;
    }
    GUI.EndGroup();    
    
    //Return to main menu
    if(GUI.Button(Rect(5, Screen.height-50, 300, 40), "Main Menu")) 
    {
    	baseCharacter.transform.localPosition = Vector3(5,0,0);
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

function updateBody(num,part,prevPartNumber)
{
	tempPart = part[num-1];
	part[prevPartNumber-1].transform.localPosition = Vector3(0,100,100);				
	part[num-1].transform.localPosition = Vector3(0,0,0);
	//part[num-1].renderer.material.color = Color.cyan;
}

function updateColor(matName,colorNumber)
{
	if(colorNumber == 0)
	{
		matName.SetColor("_Color",Color.black);
	}
	else if(colorNumber == 1)
	{
		matName.SetColor("_Color",Color.blue);
	}
	else if(colorNumber == 2)
	{
		matName.SetColor("_Color",Color.gray);
	}
	else if(colorNumber == 3)
	{
		matName.SetColor("_Color",Color.green);
	}
	else if(colorNumber == 4)
	{
		matName.SetColor("_Color",Color.magenta);
	}
	else if(colorNumber == 5)
	{
		matName.SetColor("_Color",Color.red);
	}
	else if(colorNumber == 6)
	{
		matName.SetColor("_Color",Color.white);
	}
	else if(colorNumber == 7)
	{
		matName.SetColor("_Color",Color.yellow);
	}
	else if(colorNumber == 8)
	{
		matName.SetColor("_Color",Color.cyan);
	}
	else if(colorNumber == 9)
	{
		matName.SetColor("_Color",Color.grey);
	}
}

function OnGUI () 
{
    //load GUI skin
    //GUI.skin = newSkin;
    
    //execute theFirstMenu function
    createCharacter();
}