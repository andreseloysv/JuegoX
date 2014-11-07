#pragma strict
public var Hadouken : GameObject;
	 var fireRate : float = 0;
	 var Damage : float = 10;
	 var whatToHit :LayerMask;
	
	var timeToFire : float = 0;
	var firePoint : Transform;

	// Use this for initialization
	function Awake () {
//		firePoint = transform.FindChild ("FirePoint");
//		if (firePoint == null) {
//			Debug.LogError ("No firePoint? WHAT?!");
//		}
	}
	
	// Update is called once per frame
	function Update () {
	for (var i = 0; i < Input.touchCount; ++i) {
			if (Input.GetTouch(i).phase == TouchPhase.Began) {
				Shoot();
			}
		}

//		else {
//			if (Input.GetButton ("Fire1") && Time.time > timeToFire) {
//				timeToFire = Time.time + 1/fireRate;
//				Shoot();
//			}
//		}
	}
	
	function Shoot () {
	Debug.Log ("Crear bala");
		CrearBala();
		var mousePosition : Vector2 = new Vector2 (Camera.main.ScreenToWorldPoint (Input.mousePosition).x, Camera.main.ScreenToWorldPoint(Input.mousePosition).y);
		var firePointPosition : Vector2 = new Vector2 (firePoint.position.x, firePoint.position.y);
		var hit : RaycastHit2D = Physics2D.Raycast (firePointPosition, mousePosition-firePointPosition, 100, whatToHit);
		Debug.DrawLine (firePointPosition, (mousePosition-firePointPosition)*100, Color.blue);
		if (hit.collider != null) {
			Debug.DrawLine (firePointPosition, hit.point, Color.red);
			Debug.Log ("We hit " + hit.collider.name + " and did " + Damage + " damage.");
		}
	}
function CrearBala(){
	// instanciamos la bala
	//GameObject newBala = Instantiate(Hadouken, transform.position, transform.rotation);
	Debug.Log ("Crear bala");
	Instantiate(Hadouken, transform.position, Quaternion.identity);
	// accedemos al script con los valores iniciales
//	BalaControlador balaControl = newBala.GetComponent<BalaControlador>); 
//	balaControl.Speed = 100;
//	balaControl.Damage = 30;
}