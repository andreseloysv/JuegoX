#pragma strict

function Start () {

}

function Update () {
move();
}
function move(){

if(Input.GetKey(KeyCode.D)){
	transform.Translate(Vector2.right* 4f * Time.deltaTime);
}
}