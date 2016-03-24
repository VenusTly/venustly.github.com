function SuperType(name) {
	this.name = name;
}
function SupType() {
	SuperType.call(this, "Nicholas");
	this.age = 29;
}
var instance = new SubType();
alert(instance.name);
alert(instance.age);