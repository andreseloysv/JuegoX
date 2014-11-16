#pragma strict

function Start () {

}

function Update () {
move();
}
function move(){

if(Input.GetKey(KeyCode.D)){
	transform.Translate(Vector2.right* 1f * Time.deltaTime*1.5);
}
if(Input.GetKey(KeyCode.A)){
	transform.Translate(-Vector2.right* 1f * Time.deltaTime*1.5);
}
if(Input.GetKey(KeyCode.Space)){
	transform.Translate(Vector2.up* 1f * Time.deltaTime*2);
}
}