#pragma strict
public var Hadouken : GameObject;
	 var fireRate : float = 0;
	 var Damage : float = 10;
	
	var timeToFire : float = 0;
	var firePoint : Transform;

	// Use this for initialization
	function Awake () {

	}
	
	// Update is called once per frame
	function Update () {
	for (var i = 0; i < Input.touchCount; ++i) {
			if (Input.GetTouch(i).phase == TouchPhase.Began) {
				Shoot();
			}
		}
		if(Input.GetMouseButtonDown(0)){
			Shoot();
		}
	}
	
	function Shoot () {
		CrearBala();
	}
function CrearBala(){
	// instanciamos la bala
	var auxtransform=transform.position;
	auxtransform.x+=0.25;
	Instantiate(Hadouken, auxtransform, Quaternion.identity);
}