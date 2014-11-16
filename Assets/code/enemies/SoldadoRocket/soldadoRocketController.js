#pragma strict
	public var misil : GameObject;
	public var MisilFake :GameObject;
	var fireRate : float = 0;
	var Damage : float = 10;
	var distance : float = 3.35;
	var timeToFire : float = 0;
	var firePoint : Transform;

	function Start(){

	}
	// Gets called when the object goes out of the screen
	function OnBecameInvisible() {
    	enabled = false;
	}
	function OnBecameVisible() {
    	YourFunctionName();
	}
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
		auxtransform.x=-76.00843;
		auxtransform.y=-0.2372999;
		var auxMisil=Instantiate(misil, auxtransform,Quaternion.Euler(0, 0,310 ) );
		var Player = GameObject.Find("Player");
		var dis=Player.transform.position.x - auxMisil.transform.position.x;
		var distancia =((dis*1.0f)/0.02f);
		//var constante=-1*distancia/76.00843;
		auxMisil.gameObject.rigidbody2D.AddForce(new Vector2(distancia,200));
	}
	function YourFunctionName() { while(this.renderer.isVisible) {enabled = true; yield WaitForSeconds(1f);Shoot();yield WaitForSeconds(0.85f);  } }