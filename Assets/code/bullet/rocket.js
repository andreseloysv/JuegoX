#pragma strict
var lastVelocity : float;
var acceleration : float;
var AuxOnCollisionEnter2D : int;
public var explotion : GameObject;
function Start () {
	lastVelocity =0;
	acceleration=0;
	AuxOnCollisionEnter2D=0;
}

function Update () {
	lastVelocity = this.rigidbody2D.velocity.y;
	acceleration = (lastVelocity - this.rigidbody2D.velocity.y) / Time.fixedDeltaTime;

	if(acceleration>=0&&AuxOnCollisionEnter2D==0){
		Debug.Log("acceleration: "+acceleration);
	 	this.rigidbody2D.AddTorque((Mathf.PI)/2);
 	}
}

	
function OnCollisionStay2D(coll: Collision2D){
if (coll.gameObject.name ==  "Plane"){
	AuxOnCollisionEnter2D=1;
}
}
function  OnCollisionEnter2D(coll: Collision2D){
	if (coll.gameObject.tag !=  "Enemy"){
	var distancia=this.transform.position.x - -76.00843;
	Debug.Log("Choque con: "+coll.gameObject.name);
		var cloneExplotion=Instantiate(explotion, (this.gameObject.transform.position), Quaternion.identity);
		if (coll.gameObject.name ==  "Player"){
			//Destroy(coll.gameObject);
			Debug.Log("Player destruido: ");
		}
		//yield WaitForSeconds(2);
		Destroy(this.gameObject);
		Destroy(cloneExplotion,0.5f);
	}
}