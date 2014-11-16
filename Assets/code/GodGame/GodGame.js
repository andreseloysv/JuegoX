#pragma strict
import System.Collections.Generic;

public var Soldierclone:GameObject;
private var idEnemy: int;
var Soldierclones= new Array (GameObject);
private var Player : GameObject;

function Start () {
	idEnemy=0;
	Player = GameObject.Find("Player");
}

function Update () {
	clonarme();
}
function clonarme(){	
//	if(GameObject.FindGameObjectsWithTag("Enemy").length<18){		
//		var posicion =new Vector2(Player.transform.position.x+(Random.Range(5.0, 10.0)),Player.transform.position.y+(Random.Range(10.0, 10.0)));
//		Instantiate(Soldierclone, posicion, Quaternion.identity);
//	}
}