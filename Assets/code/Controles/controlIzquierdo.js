﻿#pragma strict

function Start () {

}

function Update () {

}

function OnMouseDrag() {
	var player=GameObject.Find("Player");
	player.transform.Translate(Vector2.right* -3f * Time.deltaTime);
}