#pragma strict

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
		if (fireRate == 0) {
			if (Input.GetButtonDown ("Fire1")) {
				Shoot();
			}
		}
		else {
			if (Input.GetButton ("Fire1") && Time.time > timeToFire) {
				timeToFire = Time.time + 1/fireRate;
				Shoot();
			}
		}
	}
	
	function Shoot () {
	Debug.Log ("Shot");
		var mousePosition : Vector2 = new Vector2 (Camera.main.ScreenToWorldPoint (Input.mousePosition).x, Camera.main.ScreenToWorldPoint(Input.mousePosition).y);
		var firePointPosition : Vector2 = new Vector2 (firePoint.position.x, firePoint.position.y);
		var hit : RaycastHit2D = Physics2D.Raycast (firePointPosition, mousePosition-firePointPosition, 100, whatToHit);
		Debug.DrawLine (firePointPosition, (mousePosition-firePointPosition)*100, Color.blue);
		if (hit.collider != null) {
			Debug.DrawLine (firePointPosition, hit.point, Color.red);
			Debug.Log ("We hit " + hit.collider.name + " and did " + Damage + " damage.");
		}
	}

