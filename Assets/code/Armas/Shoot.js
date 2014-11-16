#pragma strict
// Public variable 
public var speed : int = 1;
public var explotion : GameObject;
// Gets called once when the bullet is created
function Start () {  
    // Set the Y velocity to make the bullet move upward
    rigidbody2D.velocity.x = speed*0.1f;
}

function Update () {

}

// Gets called when the object goes out of the screen
function OnBecameInvisible() {
    // Destroy the bullet 
    Destroy(gameObject);
}

//Basic collision detection checking for two differently named objects
function OnCollisionEnter(theCollision : Collision){
Debug.Log("Hit the floor");
 if(theCollision.gameObject.name == "Floor"){
  Debug.Log("Hit the floor");
 }else if(theCollision.gameObject.name == "Soldier"){
  Debug.Log("Hit the Soldier");
 }
}

function  OnCollisionEnter2D(coll: Collision2D){
	if (coll.gameObject.tag ==  "Enemy"){
		var cloneExplotion=Instantiate(explotion, coll.gameObject.transform.position, Quaternion.identity);
		Destroy(coll.gameObject);
		//yield WaitForSeconds(2);
		Destroy(cloneExplotion,0.5f);
	}
}