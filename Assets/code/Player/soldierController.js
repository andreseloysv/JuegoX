#pragma strict	


var forwardSpeed : float = 6;
var backwardSpeed : float = 4;
var jumpSpeed : float = 16;
var inAirMultiplier : float = 0.25;					// Limiter for ground speed while jumping
public var Soldierclone:GameObject;
public var IdEnemy : int;
private var thisTransform : Transform;
private var character : CharacterController;
private var velocity : Vector3;						// Used for continuing momentum while in air
private var canJump = true;
private var Player : GameObject;
function Start()
{	
	//Soldierclones = new List.<GameObject>(); 
	
	var Soldierclones = new Array (GameObject);
    Soldierclones.Push(Soldierclone);
   	
	Player = GameObject.Find("Player");
	// Cache component lookup at startup instead of doing this every frame		
	thisTransform = GetComponent( Transform );

	// Move the character to the correct start position in the level, if one exists
	var spawn = GameObject.Find( "PlayerSpawn" );
	if ( spawn )
		thisTransform.position = spawn.transform.position;
}

function OnEndGame()
{
}

function Update()
{
	var movement = Vector3.zero;

	// Fllow the player
		if( (Player.transform.position.x-1) >=this.transform.position.x){
				movement = Vector3.right * forwardSpeed;
		}
		
		else if( (Player.transform.position.x+1) < this.transform.position.x){
				movement = Vector3.left * forwardSpeed;
		}
		
		// Adjust additional movement while in-air
		movement.x *= inAirMultiplier;
//		movement.z *= inAirMultiplier;
		
	movement += velocity;	
	//movement += Physics.gravity;
	movement *= Time.deltaTime;
	this.transform.Translate(movement);
}


function  OnCollisionEnter2D(coll: Collision2D){
	if (coll.gameObject.name ==  "Player"){
		coll.gameObject.rigidbody2D.AddForce(new Vector2(1,1)*10.0f);
		//Debug.Log("Is touchin a player");
	}
}
function OnCollisionStay2D(coll: Collision2D){
	if(coll.gameObject.tag ==  "Player"){
	}
}
function setIdEnemy(id:int){
	this.IdEnemy=id;
}