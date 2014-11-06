#pragma strict

var target : Transform;
var distance : float = 0.01;
var height : float = -100.0;
var width : float = -100.0;
var damping : float = 1.0;
 function Start() {
     target = GameObject.Find("Player").transform;
 }
function Update () { 
	
	var wantedPosition : Vector3 = target.TransformPoint(width,height, (target.position.z-5.5));
	//Time.deltaTime * damping
	this.transform.position = Vector3.Lerp(this.transform.position, wantedPosition, 0.03);
}