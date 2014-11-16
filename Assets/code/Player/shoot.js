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
				ShootHadouken();
			}
		}
		if(Input.GetMouseButtonDown(0)){
			ShootHadouken();
		}
	}
	
	function ShootHadouken() {
		CrearBalaHadouken();
	}
function CrearBalaHadouken(){
	// instanciamos la bala
	var auxtransform=transform.position;
	auxtransform.x+=0.25;
	Instantiate(Hadouken, auxtransform, Quaternion.identity);
}