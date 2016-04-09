(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"./Bedingungen.png", id:"Bedingungen"},
		{src:"./Car.png", id:"Car"},
		{src:"./Claim.png", id:"Claim"},
		{src:"./Copyright.png", id:"Copyright"},
		{src:"./Logo.png", id:"Logo"},
		{src:"./Person.jpg", id:"Person"},
		{src:"./PersonSmall.jpg", id:"PersonSmall"},
		{src:"./Zinsen.png", id:"Zinsen"}
	]
};



// symbols:



(lib.Bedingungen = function() {
	this.initialize(img.Bedingungen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,8);


(lib.Car = function() {
	this.initialize(img.Car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,78);


(lib.Claim = function() {
	this.initialize(img.Claim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,12);


(lib.Copyright = function() {
	this.initialize(img.Copyright);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,57);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,37);


(lib.Person = function() {
	this.initialize(img.Person);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,90);


(lib.PersonSmall = function() {
	this.initialize(img.PersonSmall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,90);


(lib.Zinsen = function() {
	this.initialize(img.Zinsen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,51);


(lib.Zinsen_img = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.Zinsen();
	this.instance.setTransform(-54,-25.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54,-25.5,108,51);


(lib.TxtStart02 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(29,29,26,0.902)").s().p("AJACAIAAhhQgUgkgOgnQgOgogIgrIAwAAQAIAhAIAbQAJAdAJATQAKgXAIgaQAHgaAIghIAwAAQgKAvgOAmQgNAogTAhIAABhgAFxCAIAAj/IA8AAQAsAAAUAUQATATAAAtQAAAqgTATQgUAUgsAAIgKAAIAABagAGjABIAIAAQALgBAIgBQAHgEADgKQADgKAAgTQABgYgIgLQgHgKgRABIgJAAgADGCAIAAj/IA8AAQAsAAAUAUQATATAAAtQAAAqgTATQgUAUgsAAIgKAAIAABagAD4ABIAIAAQALgBAIgBQAHgEADgKQADgKAAgTQABgYgIgLQgHgKgRABIgJAAgACACAIgEgbIgFgdIg8AAIgFAcIgEAcIgxAAQAJhDAPg+QAPhAAVg+IA4AAQAVBAAPA/QAPBBAIA/gABRgnIgIAkIgHAhIAtAAIgGgfIgIglIgIggIgIAfgAhFCAIAAhzIg7AAIAABzIgzAAIAAj/IAzAAIAABmIA7AAIAAhmIAzAAIAAD/gAmICAIAAj/IB2AAIAAArIhDAAIAAA5IA5AAIAAAoIg5AAIAABIIBIAAIAAArgAnjCAIAAj/IAzAAIAAD/gAqrCAIAAj/IBKAAQAjAAAUAMQAVANAKAcQAJAcABAuQgBAvgKAcQgLAcgWANQgWAMggAAgAp4BXIAMAAQAWAAAMgIQAMgIAEgTQAEgTAAghQABgfgHgUQgGgTgMgIQgMgIgSAAIgMAAg");
	this.shape.setTransform(72.5,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBC91B").s().p("AECB7QgSgIgLgMIATgkQAMAMANAGQANAGALAAQANgBAJgHQAHgIAAgNQAAgJgDgIQgDgJgJgFIgUgKQgJgEgIgHQgUgLgHgRQgIgRAAgVQABgWAIgQQAJgRARgJQARgJAXgBQAJAAAKADQAKADAJAFQAJAFAFAHIgPAhQgIgJgIgEQgJgEgLAAQgLAAgHAIQgGAIAAAMQgBANAFAJQAFAJAJAFIALAHIAMAHQASAKAJAJQAJALAEAMQADANAAAPQABAWgKAQQgJARgRAJQgRAKgZAAQgWAAgSgIgAB2CAIAAhgQgVglgNgnQgOgogJgrIAxAAQAIAhAIAcQAIAcAJATQAKgWAIgbQAIgaAHghIAxAAQgKAvgOAnQgOAngTAhIAABhgAAMCAIgFgbIgEgdIg7AAIgFAdIgDAbIgxAAQAJhDAOg+QAPg/AVg/IA2AAQAVBAAPA/QAQBBAHA/gAghgmIgIAkIgHAhIAtAAIgHggIgIglIgHgfIgIAfgAkmCAIAAj/IBKAAQAiAAAVANQAUAMAKAcQAKAcAAAuQAAAvgLAcQgLAcgWANQgWAMggAAgAj0BXIAMAAQAWAAAMgIQAMgIAFgTQAEgTAAghQAAgfgGgTQgGgUgMgIQgMgIgTABIgMAAgAl2B8IAAg4IAoAAIAAA4gAl2gOIAAg4IAoAAIAAA4g");
	this.shape_1.setTransform(186.6,29.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.1,16,220.2,26.3);


(lib.TxtStart01 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(29,29,26,0.902)").s().p("AuwBjQgXgggBhDQABgsAMgdQANgcAWgOQAVgOAcAAQAVAAAQAHQAPAHAJAKIgcAjQgFgFgIgDQgIgEgKAAQgOAAgKAIQgLAHgGASQgGASAAAfQAAAsALAVQAMAVAYAAIAFAAIAGgCIAAgyIgbAAIAAgmIBOAAIAABuQgFAFgJAGQgJAGgOAEQgOAEgRAAIgCAAQgsAAgXgggAEXB7QgSgHgLgMIASgkQAMAMANAFQANAGAMAAQANAAAIgIQAIgHAAgNQAAgJgDgJQgDgIgKgGIgTgKQgJgEgJgGQgTgLgHgRQgIgSAAgUQAAgWAJgRQAJgQARgKQARgJAXAAQAJAAAKADQAKACAJAFQAIAFAGAIIgPAhQgIgJgJgEQgJgFgKAAQgLABgHAIQgGAHgBANQAAAMAFAJQAFAJAJAGIALAHIAMAGQARALAKAIQAJALAEANQADAMAAAQQAAAWgJAQQgJARgRAJQgRAJgZAAQgWAAgSgIgAUsCBQgSgzgVgmQgVglgTgYIAACWIgxAAIAAkDIAVAAQAQAOAPASQAPATAOAUIAZAlIASAfIAAiHIAxAAIAAD/gAQUCBIAAj/IB1AAIAAArIhDAAIAAA5IA6AAIAAAoIg6AAIAABIIBIAAIAAArgANjCBIAAj/IBGAAQAaAAAPAJQAPAIAHAPQAGAOAAATQAAAQgJAPQgJAPgUAKQAYAFAMAOQAMARAAAZQAAAigSATQgTATgmABgAOVBaIANAAQARAAAJgJQAJgIAAgVQAAgSgKgIQgJgJgTAAIgKAAgAOVgTIAMAAQAPAAAGgIQAGgIAAgSQAAgSgGgIQgHgJgNAAIgNAAgALKCBIAAj/IB2AAIAAArIhEAAIAAA5IA6AAIAAAoIg6AAIAABIIBJAAIAAArgAJvCBIAAj/IAyAAIAAD/gAHnCBIAAj/IAyAAIAADUIA/AAIAAArgABCCBIAAj/IBKAAQAiAAAVAMQAVAMAJAdQAKAcAAAuQAAAvgLAcQgLAcgVAMQgWANghAAgAB0BYIANAAQAWAAAMgIQALgIAFgTQAEgTAAgiQAAgfgGgTQgGgTgMgIQgMgIgSAAIgNAAgAgDCBIgKgiQgFgSgIgQQgHgRgKgMIgMAAIAABhIgyAAIAAj/IBGAAQAbAAANAKQAPAKAGASQAGASAAAaQgBAcgIAQQgJAPgLAGQAFAGAFAKIAJAUIAMAjQAFASAEATgAg3gEIAMAAQANAAAGgKQAGgKAAgVQAAgXgHgKQgGgKgMAAIgMAAgAjECBIAAj/IAyAAIAAD/gAl1CBIAAj/IBGAAQAaAAAPAJQAPAIAHAPQAGAOAAATQAAAQgJAPQgJAPgUAKQAYAFAMAOQAMARAAAZQAAAigSATQgTATgmABgAlDBaIANAAQARAAAJgJQAJgIAAgVQAAgSgKgIQgJgJgTAAIgKAAgAlDgTIAMAAQAPAAAGgIQAGgIAAgSQAAgSgGgIQgHgJgNAAIgNAAgAoxCBIAAhhQgVgkgNgoQgOgngJgrIAxAAQAIAhAIAbQAIAcAJAUQAKgXAIgaQAIgaAHghIAxAAQgKAugOAnQgOAogSAhIAABhgAqdCBIgJgiQgGgSgHgQQgHgRgKgMIgNAAIABBhIgzAAIAAj/IBHAAQAbAAAPAKQAPAKAGASQAGASgBAaQAAAcgJAQQgIAPgLAGQAFAGAEAKIAKAUIAMAjQAFASADATgArQgEIAMAAQAMAAAGgKQAGgKAAgVQAAgXgGgKQgGgKgMAAIgMAAgAwUCBQgSgzgVgmQgVglgTgYIAACWIgxAAIAAkDIAVAAQAQAOAPASQAPATAOAUIAZAlIASAfIAAiHIAxAAIAAD/gAzaCBIgEgbIgFgdIg8AAIgFAcIgEAcIgwAAQAIhDAPg+QAPhAAVg+IA4AAQAVA/APA/QAPBBAIBAgAzqAfIgHggIgIgkIgHggIgIAfIgIAkIgHAhIAtAAIAAAAg");
	this.shape.setTransform(139.1,29.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.2,15.9,274,26.4);


(lib.TxtEuro = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhmB8QgjgagLgwIgqAAIAAgbIAmAAIAAgIIAAgHIAAgIIAAgGIgmAAIAAgbIAsAAQAIgcATgVQASgVAbgMQAagLAhgBQAXABAWAHQAWAHASANIgeAnQgKgIgNgEQgPgEgOAAQgcAAgTALQgTAMgJAUIBsAAIAAAbIh0AAIgBAGIAAAIIAAAHIABAIIB0AAIAAAbIhuAAQAIAYAUANQAUAOAdAAQAPAAAPgFQAQgGALgKIAiAiQgSARgZAJQgYAKgcAAQgzAAgjgagACYhUIABgUIgQAKIgHgNIAQgKIgQgJIAHgOIAQAKIgBgTIARAAIAAAUIAPgLIAHAOIgQAJIAQAKIgHAOIgPgLIAAAUg");
	this.shape.setTransform(22.1,18.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.9,3.8,38.3,30.2);


(lib.txtCopyright = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.Copyright();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8,57);


(lib.txtBedingungen = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.Bedingungen();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61,8);


(lib.Txt09 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(54.4,24.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,0.8,103.6,48.1);


(lib.Txt05 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AI4A3QgDgDgBgGQABgFADgDQADgEAGAAQAFAAADAEQAEADAAAFQAAAGgEADQgDADgFABQgGgBgDgDgAhLAsQgKgQAAgcQgBgbAKgPQAJgPAVAAQATAAAKAOQAKAOAAAdQAAAcgKAPQgKAQgTAAQgUAAgJgPgAg3giQgDADgCAJQgCAIAAAOQAAAOACAJQABAJAEAEQAEAEAFAAQAJAAADgKQAEgLAAgTQAAgUgEgJQgEgJgIAAQgFAAgEAEgAIHA6QgJgXgJgRQgJgRgJgKIAABDIgWAAIAAh0IAJAAIAOAPIANARIALARIAJANIAAg8IAWAAIAABygAGIA6IAAhyIA1AAIAAATIgeAAIAAAaIAaAAIAAARIgaAAIAAAhIAhAAIAAATgAFoA6IgEgQIgGgPIgHgNIgGAAIAAAsIgXAAIAAhyIAgAAQAMAAAHAFQAHAEADAIQACAIAAAMQAAANgEAGQgEAHgFACIAFAHIAEAKIAFAPIAEARgAFRgBIAGAAQAFAAADgEQADgFAAgJQAAgLgDgEQgDgFgFAAIgGAAgAD2A6IAAhyIA1AAIAAATIgeAAIAAAaIAaAAIAAARIgaAAIAAAhIAgAAIAAATgADNA6IAAhyIAXAAIAABygACkA6IAAhTIgFAPIgGARIgFATIgZAAIgFgTIgGgRIgGgPIAABTIgXAAIAAhyIAgAAIAIARIAHASIAFAQQABgHAEgIIAHgTIAIgRIAgAAIAABygAAzA6IgEgQIgGgPIgHgNIgGAAIAAAsIgXAAIAAhyIAgAAQAMAAAHAFQAHAEADAIQACAIAAAMQAAANgEAGQgEAHgFACIAFAHIAEAKIAFAPIAEARgAAcgBIAGAAQAFAAADgEQADgFAAgJQAAgLgDgEQgDgFgFAAIgGAAgAiSA6IAAhyIA1AAIAAATIgeAAIAAAdIAaAAIAAARIgaAAIAAAxgAi4A6QgJgXgJgRQgJgRgJgKIAABDIgWAAIAAh0IAJAAIAOAPIANARIALARIAJANIAAg8IAWAAIAABygAkbA6IAAhyIAXAAIAABygAlWA6IgEgQIgGgPIgIgNIgFAAIAAAsIgXAAIAAhyIAgAAQAMAAAHAFQAGAEADAIQADAIAAAMQgBANgDAGQgEAHgFACIAEAHIAEAKIAGAPIAEARgAltgBIAFAAQAGAAACgEQADgFAAgJQAAgLgDgEQgDgFgFAAIgFAAgAnJA6IAAhyIA1AAIAAATIgeAAIAAAaIAaAAIAAARIgaAAIAAAhIAhAAIAAATgAnyA6IAAhyIAXAAIAABygAoaA6IAAg0IgbAAIAAA0IgXAAIAAhyIAXAAIAAAuIAbAAIAAguIAXAAIAABygAI1AXIAAhPIAXAAIAABPg");
	this.shape.setTransform(58.9,5.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,117.9,11.9);


(lib.Txt04 = function() {
	this.initialize();

	// Ebene 1
	this.txtHaendler = new cjs.Text("PEUGEOT CITROËN Retail\nDeutschlang GmbH\nNiederlassung \nSaarbrücken", "bold 15px 'Arial'");
	this.txtHaendler.name = "txtHaendler";
	this.txtHaendler.lineHeight = 13;
	this.txtHaendler.lineWidth = 250;

	this.addChild(this.txtHaendler);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,254,65.2);


(lib.Txt02 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AG3A5QgFgDgDgGQgCgFABgIIAAgYIgHAAIAAgLIAHAAIAAgQIASAAIAAAQIAPAAIAAALIgPAAIAAAaQAAAGABACQADADAEAAIADAAIAFgBIADAKIgGACIgIABQgKAAgEgDgAH0A8QgIAAgGgDQgEgEgCgGQgDgFAAgIIAAgiIASAAIAAAcIABAJQABAEACACQACACAGAAQAFAAADgCQACgDABgEIABgIIAAgcIASAAIAAAlIABALIACAGIgSAFIgBgEIgBgGQgEAGgFADQgEACgFAAIgCAAgAIxA6QgHgDgFgDIAHgJQAEADAFABQAGACAFAAQAEAAACgBQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIgBgDIgGgDIgHgDIgHgDQgEgCgDgEQgDgEAAgFQAAgHADgEQAEgEAFgCQAGAAAHAAIANAAIAJACIgFAKIgHgDIgIgBIgGABQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAIABAEIAEACIAJAEIAHADQAFADADADQACAEAAAFQAAAJgGAFQgIAGgNAAQgIAAgHgCgAF/A4QgHgEgDgHQgEgHAAgJQAAgKAEgHQAEgGAIgEQAHgCAKAAIAJAAIAJACIgHAMIgEgCIgGgBQgHAAgEAEQgEAFgBAJQAAAHAFAFQADAGAIAAIAGgBIAEgCIAHAKQgDADgFABQgFACgGAAQgLAAgHgEgAExA4QgFgFAAgJQAAgIAFgFQAGgFAJgCIAKgCIAKgBQgBgFgDgDQgEgCgHAAIgJABIgJADIgDgLIAKgCQAGAAAJAAQAOAAAIAEQAHAGAAAPIAAAQIABAFIABAFIABAFIgQADIgDgEIgBgEQgDAEgGADQgEACgIAAQgJAAgGgEgAFPAdIgFACQgGACgDACQgDADABADQAAAEACACQADACAFABQAFgBADgDQADgCAAgEIAAgKIAAgBIAAgBIgFABgADpA2QgLgGgGgMQgFgLAAgQQAAgMAFgLQAHgLALgGQALgHAOAAQAKAAAHADQAIACAHAFIgLAOQgDgDgGgBQgEgCgHAAQgJAAgHAEQgHAEgDAHQgDAFAAAJQAAAKADAHQADAIAHAEQAGAEAKAAQAHAAAFgCQAFgCAFgDIAMAMQgHAGgJADQgIAEgLAAQgPAAgLgGgAAcA2QgLgGgGgMQgGgLAAgQQAAgMAGgLQAHgLAKgGQAMgHAOAAQAJAAAHADQAJACAGAFIgKAOQgEgDgFgBQgFgCgGAAQgKAAgGAEQgHAEgEAHQgDAFAAAJQAAAKADAHQAEAIAHAEQAGAEAKAAQAGAAAGgCQAFgCAEgDIAMAMQgGAGgJADQgJAEgLAAQgOAAgLgGgAkmA2QgLgGgFgMQgHgLABgQQgBgMAHgLQAFgLALgGQALgHAPAAQAPAAALAHQAKAGAGALQAGALABAMQAAAOgGAMQgFALgLAHQgLAHgQAAQgPAAgLgGgAkhgNQgHAJgBANQABAKADAHQADAIAHAFQAGAEAJABQALgBAFgFQAHgEADgIQACgIAAgJQAAgJgDgFQgDgIgHgEQgGgEgJAAQgNAAgIAIgApDA2QgMgGgFgMQgHgLAAgQQAAgMAHgLQAGgLALgGQALgHAPAAQAIAAAIADQAIACAGAFIgKAOQgEgDgEgBQgFgCgGAAQgKAAgHAEQgHAEgDAHQgEAFAAAJQAAAKAEAHQADAIAHAEQAHAEAKAAQAFAAAGgCQAGgCADgDIAMAMQgGAGgIADQgJAEgLAAQgPAAgKgGgACPA6IAAgRIgwAAIAAgJIAKgTIAMgRIAHgKIAJgLIAKgLIASAAIAAA9IAJAAIAAAQIgJAAIAAARgACBAFIgNAUIAbAAIAAglIgOARgAg3A6QgHgLgHgJQgGgKgIgIIgOgOIgIgGIgIgHIAABBIgUAAIAAhgIAJAAQALAHAKAIQAKAIAKAKIAMAKIANAQIAAg5IATAAIAABegAjPA6IAAheIA6AAIAAAQIgmAAIAAAUIAhAAIAAAQIghAAIAAAaIApAAIAAAQgAlTA6IgEgJIgGgJIgJgLQgEgFgEgCIgJAAIAAAkIgTAAIAAheIAhAAQAMAAAIAEQAIADADAHQAEAHAAAJQAAAJgGAGQgEAHgIACIAGAGIAFAHIAIANIAGAOgAl3AHIANAAQAHAAADgCQADgCABgDIACgGQgBgGgCgDQgCgEgDgBIgIgBIgNAAgAnDA6IAAhNIgbAAIAAgRIBLAAIAAARIgcAAIAABNgAn6A6IAAheIATAAIAABegAiqgwQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAgAjAgwQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAg");
	this.shape.setTransform(62.8,7.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.4,1.3,120.8,12.1);


(lib.PersonSmall_1 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.PersonSmall();
	this.instance.setTransform(-68,-90);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-90,68,90);


(lib.Person_1 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.Person();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,135,90);


(lib.Car_1 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.Car();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,147,78);


(lib.Box03 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3B51B").s().p("AsuCgIAAk/IZcAAIAAE/g");
	this.shape.setTransform(70.5,16,0.865,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,141,32);


(lib.Box02 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBC91B").s().p("AsuCgIAAk/IZcAAIAAE/g");
	this.shape.setTransform(70.5,16,0.865,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,141,32);


(lib.Box01 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBCA1B").s().p("AjvSSMAAAgkjIHeAAMAAAAkjg");
	this.shape.setTransform(19,40,0.792,0.342);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38,80);


(lib.Bg = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Zinsen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.Zinsen_img();
	this.instance.setTransform(54,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,51);


(lib.Txt07 = function() {
	this.initialize();

	// Ebene 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBC91B").s().p("AADBTQAIgCAEgGQAEgFABgJIgPAAIAAgeIAeAAIAAAWQAAAMgCAIQgDAHgGAHQgGAFgKAEgAhrAuQgOgSAAgrQAAgtAPgTQANgQAXAAQAXAAAMAQQAQAUAAAsQAAArgQATQgMARgXgBQgXAAgOgRgAhQhDQgEAEgCAJQgEALAAAcQABAaACAKQADALAEADQAEAEAGgBQAFABAEgEQAFgEACgIQADgMABgaQgBgbgDgLQgCgKgFgEQgEgDgFAAQgGAAgEADgAA/ATIAAgcIA7AAIAAAcg");
	this.shape.setTransform(38.1,26.6);

	// Ebene 1
	this.txtEuro = new lib.TxtEuro();
	this.txtEuro.setTransform(64,25.9,0.548,0.548,0,0,0,21.1,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AE9DtQgKgGgFgKQgFgKAAgNQAAgLAFgKQAFgKALgFQAKgGAOAAQAIAAAHACQAIACAGAFIgJALQgEgCgFgBQgFgCgGAAQgIABgGADQgGACgEAHQgEAGAAAIQAAAJADAGQAEAHAGADQAGAFAKAAIAGgBIAGgCIAAgOIgQAAIAAgOIAhAAIAAAkIgHAFIgKADQgGABgIAAQgOAAgKgFgACJDvQgHgCgDgFQgEgFgBgGQgBgGAAgGIAAgzIARAAIAAAvQAAAIABAGQACAFAEADQADACAHAAQAHAAAEgCQADgDACgFQABgGAAgIIAAgvIARAAIAAAzIgBAMQgBAGgEAEQgDAFgHADQgHADgLAAQgLAAgHgDgAEPDxIgLgSIgMgPIgMgNIgHgGIgIgGIAAA6IgRAAIAAhVIAIAAIASANIARAPIALALIALAOIAAgzIARAAIAABTgABADxIAAhTIARAAIAABFIAhAAIAAAOgAAfDxIAAglIgnAAIAAAlIgRAAIAAhTIARAAIAAAhIAnAAIAAghIARAAIAABTgAgwDxIgDgJIgDgKIgmAAIgDAKIgDAJIgQAAIAHgXIAJgZIAEgLIAFgMIAGgMIATAAIAGAMIAGAMIAEALIAJAZIAHAXgAhOC6IgFAMIgEAKIAcAAIgEgKIgFgMIgFgMIgFAMgAi1DxIAAgKQAJgSALgQIAKgNIAJgMIghAAIAAgOIA5AAIAAAKIgPATIgPATIgGAKIgHALIAtAAIAAAOgAjODxIgLgSIgMgPIgMgNIgHgGIgIgGIAAA6IgRAAIAAhVIAIAAIASANIARAPIALALIALAOIAAgzIARAAIAABTgAkoDxIgDgJIgDgKIgmAAIgDAKIgDAJIgQAAIAHgXIAJgZIAEgLIAFgMIAGgMIATAAIAGAMIAGAMIAEALIAJAZIAHAXgAlGC6IgFAMIgEAKIAcAAIgEgKIgFgMIgFgMIgFAMgAjsA7IAAg2IgTAAIAAgIIAyAAIAAAIIgSAAIAAA2gAkSA7IAAg+IANAAIAAA+gAkrA7IAAgzIgEAHIgFAIIgEAJIgDAJIgPAAIgEgJIgEgJIgEgIIgEgHIAAAzIgNAAIAAg+IASAAIAIAIIAGAMIACAFIACAEIACgEIACgFIAHgMIAHgIIATAAIAAA+gABnh6IAAgrIgIgLIgHgMQgHgKgHgOQgGgNgGgRIAYAAIALAYIAKASIAEAHIAEAFIAEgFIAEgHIAKgSIAKgYIAZAAIgNAeIgNAYIgHALIgIALIAAAsgAgYh6IAAh4IApAAQAPABAKAFQAKAFAEAIQAEAJAAAMQAAALgFAJQgEAJgKAEQgKAGgOgBIgRAAIAAAqgAAAi2IAQAAQAKAAAEgGQAFgFAAgJQAAgKgEgFQgEgGgLAAIgQAAgAh9h6IAAh4IArAAQAPABAKAFQAKAFAEAIQAEAJAAAMQAAALgFAJQgEAJgKAEQgKAGgOgBIgTAAIAAAqgAhli2IASAAQAKAAAEgGQAFgFAAgJQAAgKgEgFQgEgGgLAAIgSAAgAifh6IgEgNIgFgOIg1AAIgFAOIgEANIgXAAIAKghQAFgSAIgSIAGgPIAHgSIAJgSIAbAAIAJASIAHASIAGAPIANAkIAKAhgAjKjJIgHASIgFAOIAnAAIgFgOIgIgSIgHgRIgHARgAkgh6IAAg1Ig7AAIAAA1IgYAAIAAh4IAYAAIAAAwIA7AAIAAgwIAYAAIAAB4g");
	this.shape_1.setTransform(38.3,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DBC91B").s().p("AjxA+IAAgfIAYAAIAAAfgACwA6QgJgBgIgDIgMgHIAKgSIAMAGQAHADAHABIAOACQAJAAAFgCQAFgCABgEIABgEQAAgDgCgEQgCgDgFgCIgLgEIgMgGIgKgDQgMgEgFgIQgGgIAAgKQAAgLAGgIQAGgIALgEQAKgEAPAAIAMACQAHABAGADQAGADAEAEIgJAQQgFgFgIgDQgHgCgJAAQgJgBgFAEQgFAEAAAFQAAAEACAEQADADAHADIAIAEIALAFIAJADQAMAEAFAHQAGAHAAALQAAAKgFAIQgFAIgKAFQgKAEgRAAQgKAAgJgCgABOA6IAAgrIgIgLIgHgJQgHgLgHgOQgGgNgGgQIAYAAIALAXIAKASIAEAHIAEAGIAEgGIAEgHIAKgSIAKgXIAZAAIgNAdIgNAZIgHAJIgIAKIAAAsgAAPA6IgEgMIgEgPIg0AAIgEAPIgEAMIgYAAIAKghQAGgSAHgQIAGgOIAIgSIAIgSIAbAAIAHASIAIASIAFAOIAOAiIAKAhgAgZgTIgHASIgGANIAmAAIgEgNIgHgSIgHgRIgHARgAi3A6IAAh1IAsAAQAcAAAPAQQAPAPAAAcQAAAPgGAOQgHAOgNAHQgNAJgUgBgAifAnIAOAAQAUAAAKgJQAJgKAAgUQAAgSgJgLQgJgKgVAAIgOAAgAjxgZIAAgfIAYAAIAAAfg");
	this.shape_2.setTransform(84.5,6.4);

	this.addChild(this.shape_2,this.shape_1,this.txtEuro,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.1,0.1,107.6,48.8);


(lib.Txt06 = function() {
	this.initialize();

	// Ebene 2
	this.txtPreis = new cjs.Text("XXX,-", "bold 33px 'Arial'", "#DBC91B");
	this.txtPreis.name = "txtPreis";
	this.txtPreis.lineHeight = 34;
	this.txtPreis.lineWidth = 251;
	this.txtPreis.setTransform(2.3,31);

	// Ebene 1
	this.txtEuro = new lib.TxtEuro();
	this.txtEuro.setTransform(118.7,50.3,0.877,0.877,0,0,0,21.1,23);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AogCBQgFgDgCgGQgCgFAAgJIAAgXIgHAAIAAgMIAHAAIAAgRIASAAIAAARIAPAAIAAAMIgPAAIAAAaQAAAGACACQACADAFAAIADAAIAEgBIADAKIgGACIgIABQgJAAgFgDgAkpCCIgLgDQgFgDgDgEIgCgEIgBgDIAAhYIATAAIAAA3QAEgGAFgCQAFgCAGgBQAIAAAGAEQAGADAEAGQAEAHAAALQAAAIgEAIQgEAHgIAFQgHADgKAAIgMgBgAkoBXQgEAEAAAJIAAAFIABAIQABADADACQADACAGAAQAIAAADgFQAEgGAAgJQAAgJgEgFQgEgDgGAAQgGgBgFAFgAmECAQgFgFAAgKQAAgHAFgFQAGgFAJgCIAKgCIAKgBQgBgGgDgCQgEgDgHAAIgJACIgJADIgEgLIALgDQAGgBAIgBQAPAAAIAHQAHAGAAAOIAAARIABAFIABAFIABAFIgRACIgCgDIgBgEQgDAEgGADQgFABgHAAQgKAAgFgDgAlmBlIgFACQgHACgCACQgDADABADQgBAEADACQADACAEAAQAGAAACgDQADgDABgDIAAgKIAAgBIAAgBIgFABgAnuCAQgGgDgDgGQgDgGAAgJIAAhPIATAAIAABPQAAAGACAEQADAEAGAAIAAANQgLAAgHgDgAnMCAQgDgEAAgDQAAgFADgDQADgDAFABQAEgBADADQACADABAFQgBADgCAEQgDACgEAAQgFAAgDgCgApNCCIAAgcQAAgKgCgEQgCgEgGAAIgFABQgDACgBAEQgCADAAAIIAAAcIgSAAIAAgcQAAgJgCgFQgDgFgFABQgHAAgCAEQgCAFAAAJIAAAcIgTAAIAAglIgBgLIgCgGIASgGIACAFIABAFQADgGAFgCQAEgCAGgBQAIAAAFAEQAFACACAHIABAAQADgHAFgDQAFgCAGgBQALAAAFAHQAGAGAAANIAAAjgAJ8ACQgJgCgEgCIAHgKIALAEIAMADQAEAAADgDQACgBAAgDQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAIgGgEIgIgCIgIgEQgFgCgDgFQgDgEAAgGQAAgIAEgFQADgFAHgCQAGgCAIAAQAHAAAHABQAHABAFADIgHALIgIgDQgFgCgEAAQgFAAgCACQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIABADIAFADIAKAEIAIAEQAGADADAEQADAEAAAGQAAAKgIAGQgIAEgPAAQgJAAgIgCgAIoABQgGgCgDgHQgCgHAAgIIAAgoIAVAAIAAAhIAAAKQABAEADADQADADAFAAQAHAAADgDQADgDABgFIAAgJIAAghIAVAAIAAArIABAMIADAHIgUAFIgCgEIgCgFQgEAFgFACQgGACgHAAQgJABgGgEgAHxABQgGgCgCgGQgCgGAAgJIAAgbIgHAAIAAgOIAHAAIAAgTIAVAAIAAATIARAAIAAAOIgRAAIAAAdQAAAHACADQACADAFAAIAEgBIAEgBIAEALIgGACIgKAAQgKAAgGgDgAGyAAQgIgCgEgJQgEgHAAgLQAAgKAFgIQAEgJAJgDQAIgFALAAIALABQAGACAEACIgHANIgGgCIgGgBQgIAAgFAFQgFAFAAAKQAAAJAEAGQAFAFAJAAIAGgBIAFgCIAIAMQgEABgFACQgGABgGAAQgNAAgIgEgAFaAAQgGgDAAgLQAAgJAGgGQAHgFAKgDIALgCIALgBQAAgFgEgDQgEgDgIAAIgKABIgLADIgEgMQAEgCAIgCQAHgBAJAAQARAAAJAHQAJAHAAARIAAASIAAAFIABAHIACADIgUADIgBgDIgCgDQgEADgGACQgGACgIAAQgLABgGgFgAF8gdIgGACQgHADgDADQgDACAAAFQAAAEADACQADADAFAAQAGAAAEgEQADgDABgFIAAgLIAAgBIAAgBIgGABgAEJgBQgNgHgGgMQgHgNAAgSQAAgQAHgNQAHgMAMgIQANgGAQgBQAKABAJADQAJACAHAGIgMAPQgDgDgGgBQgGgCgHAAQgLAAgHAEQgIAFgEAIQgEAHAAALQAAALAEAJQAEAIAIAEQAHAGALAAQAHgBAHgCQAGgCAEgEIAOANQgHAHgKADQgKAEgMgBQgRABgMgGgAAggBQgNgHgGgMQgHgNAAgSQAAgQAHgNQAHgMAMgIQANgGAQgBQAKABAJADQAJACAHAGIgMAPQgDgDgGgBQgGgCgHAAQgLAAgHAEQgIAFgEAIQgEAHAAALQAAALAEAJQAEAIAIAEQAHAGALAAQAHgBAHgCQAGgCAEgEIAOANQgHAHgKADQgKAEgMgBQgRABgMgGgAlNgBQgMgGgHgNQgHgOAAgRQAAgRAHgMQAHgMAMgIQAMgGARgBQARABAMAGQANAIAGAMQAHAMAAARQAAAPgGAOQgGANgMAHQgNAGgSAAQgRAAgMgFgAlHhOQgJAJAAASQAAAKAEAKQAEAIAHAFQAHAGAKAAQAMgBAHgFQAHgGADgIQAEgJAAgKQAAgKgEgJQgEgIgHgFQgIgFgKAAQgPAAgIAKgAqRgBQgMgHgHgMQgHgNAAgSQAAgQAHgNQAHgMANgIQAMgGARgBQAKABAJADQAJACAHAGIgMAPQgEgDgGgBQgGgCgGAAQgLAAgIAEQgHAFgEAIQgEAHAAALQAAALAEAJQAEAIAHAEQAIAGALAAQAHgBAGgCQAGgCAFgEIANANQgHAHgKADQgJAEgNgBQgQABgNgGgACiADIAAgSIg2AAIAAgLIALgVIAOgVIAIgMIAKgMIAMgMIAUAAIAABHIAKAAIAAASIgKAAIAAASgACSg4IgPAXIAfAAIAAgsIgQAVgAg/ADQgHgLgIgLIgQgUIgQgQIgJgJIgKgIIAABLIgWAAIAAhuIAKAAQAMAIAMAJQALAJALALIAOAOIAPASIAAhCIAWAAIAABrgAjqADIAAhrIBBAAIAAASIgrAAIAAAXIAlAAIAAATIglAAIAAAeIAvAAIAAARgAmAADIgFgJIgGgKIgKgNQgFgFgFgDIgKAAIAAAoIgWAAIAAhrIAlAAQAPAAAJADQAJAEADAIQAEAIAAAKQAAANgGAHQgFAHgJADIAHAGIAGAJIAJAOIAGAPgAmpg2IAPAAQAHAAAEgCQAEgDABgDIABgJQAAgGgCgFQgCgDgEgBQgEgCgFAAIgPAAgAn/ADIAAhZIgfAAIAAgSIBVAAIAAASIggAAIAABZgAo+ADIAAhrIAWAAIAABrgAjAh3QgCgBAAgDQAAgEACgCQACgCADAAQADAAACACQACACAAAEQAAADgCABQgCACgDAAQgDAAgCgCgAjah3QgCgBAAgDQAAgEACgCQADgCADAAQADAAACACQACACAAAEQAAADgCABQgCACgDAAQgDAAgDgCg");
	this.shape.setTransform(70.8,13.5);

	this.addChild(this.shape,this.txtEuro,this.txtPreis);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.3,0.2,254.7,77.3);


(lib.Txt03 = function() {
	this.initialize();

	// Ebene 2
	this.txtPreis = new cjs.Text("XXX,-", "bold 30px 'Arial'", "#DBC91B");
	this.txtPreis.name = "txtPreis";
	this.txtPreis.lineHeight = 31;
	this.txtPreis.lineWidth = 251;
	this.txtPreis.setTransform(27,18);

	// Ebene 1
	this.txtEuro = new lib.TxtEuro();
	this.txtEuro.setTransform(126.2,37.7,0.767,0.767,0,0,0,21.1,23.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhVDLQgDgCABgDQgBgEADgCQACgCAEAAQADAAACACQADACAAAEQAAADgDACQgCADgDAAQgEAAgCgDgAiQDNIAAhNIAPAAIAABAIAgAAIAAANgAi9DNIAAg/IgXAAIAAgOIA9AAIAAAOIgXAAIAAA/gAjqDNIAAg8IgFAIIgEAKIgGAKIgEALIgRAAIgFgLIgFgKIgFgKIgFgIIAAA8IgPAAIAAhNIAVAAIAJANIAJAPIACAFIACAFIADgFIACgFIAIgPIAJgNIAWAAIAABNgAjmBfIAAhNIAaAAQAJAAAFADQAFADACAEQADAEAAAGQAAAFgDAEQgCAEgFADQAFABADADQAEADACAEIABAIQAAAHgCAFQgEAFgFACQgGADgIAAgAjXBUIAKAAQAIAAADgDQAEgDAAgGQAAgGgEgCQgEgCgIAAIgJAAgAjXAyIAJAAQAFAAADgCQACgCABgGQgBgFgCgCQgDgDgFAAIgJAAgAj9BfIgDgIIgCgJIgjAAIgCAJIgDAIIgPAAIAGgVIAIgYIAFgJIAEgLIAGgMIARAAIAGAMIAEALIAFAJIAIAYIAGAVgAkYAsIgFAMIgDAJIAZAAIgDgJIgFgMIgEgLIgFALgADxhBIAAgzIgJgNIgJgNIgQgcQgIgQgHgTIAdAAIAMAbIAMAWIAFAHIAEAIIAFgIIAEgHIANgWIAMgbIAcAAQgHATgHAQQgIAQgHAMIgJANIgJAMIAAA0gABZhBIAAiMIAyAAQASABAMAFQALAGAFAKQAFALAAANQAAAOgGAKQgFAKgLAGQgLAGgSAAIgWAAIAAAwgAB1iHIAVAAQAMAAAFgGQAGgHAAgLQAAgLgFgGQgFgHgNAAIgVAAgAgbhBIAAiMIAwAAQASABAMAFQALAGAFAKQAFALAAANQAAAOgGAKQgFAKgLAGQgMAGgRAAIgVAAIAAAwgAAAiHIAUAAQALAAAHgGQAFgHAAgLQAAgLgFgGQgFgHgNAAIgUAAgAhEhBIgEgPIgGgRIg+AAIgGARIgEAPIgcAAIAMgnIAQgqIAGgRIAJgVIALgVIAfAAIAKAVIAJAVIAHARIAQAqIALAngAh1ieIgIAVIgHARIAuAAIgGgRIgJgVIgIgUIgIAUgAjbhBIAAg+IhDAAIAAA+IgdAAIAAiMIAdAAIAAA3IBDAAIAAg3IAdAAIAACMg");
	this.shape.setTransform(34.5,24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBC91B").s().p("AkZBIIAAgkIAcAAIAAAkgADMBFIgTgGIgPgIIANgVQAGAEAHAEQAJADAIACQAIACAJAAQAKAAAGgDQAFgDACgDIACgGQgBgDgCgEQgCgDgGgDIgNgGIgOgFIgNgFQgOgFgFgJQgHgJAAgMQAAgNAHgJQAHgJAMgFQANgFAQAAQAIAAAHACQAIABAHAEQAHADAFAFIgKATQgHgGgJgDQgIgEgLAAQgKAAgHAFQgFAEAAAHQAAAEADAEQADAEAHAEIALAEIANAGIAKAEQAOAEAGAJQAHAIAAAOQAAALgGAJQgFAJgNAGQgMAGgTAAQgMAAgLgDgABZBFIAAgzIgJgNIgJgLIgPgcQgIgQgHgTIAdAAIAMAbIANAWIAEAHIAFAIIAEgIIAEgHIANgWIAMgbIAcAAQgHATgHAQQgIAQgHAMIgJALIgJAMIAAA0gAAPBFIgEgPIgGgRIg8AAIgFARIgFAPIgcAAIAMgnIAPgoIAHgRIAJgVIALgVIAfAAIAIAVIAJAVIAHARIAPAoIAMAngAgggWIgIAVIgHAPIAuAAIgGgPIgIgVIgJgUIgIAUgAjZBFIAAiKIA0AAQAgABASASQASASAAAgQAAATgHAQQgJAPgPAKQgPAJgXAAgAi9AuIAQAAQAYAAALgLQAMgLgBgYQABgVgLgMQgLgMgZAAIgQAAgAkZgeIAAgkIAcAAIAAAkg");
	this.shape_1.setTransform(100.8,10.8);

	this.addChild(this.shape_1,this.shape,this.txtEuro,this.txtPreis);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.8,3.6,278.9,60.9);


// stage content:
(lib.CitroenCactusHWGAngryBirds2016April_Superbanner_728x90_24FPS_Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{DealerText:115,DealerFallback:350,Default:567});

	// timeline functions:
	this.frame_114 = function() {
		this.dispatchEvent( new cjs.Event( "FRAME_SELECT" ) );
	}
	this.frame_349 = function() {
		this.stop();
	}
	this.frame_566 = function() {
		this.stop();
	}
	this.frame_801 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(114).call(this.frame_114).wait(235).call(this.frame_349).wait(217).call(this.frame_566).wait(235).call(this.frame_801).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#878787").s().p("Eg43AHCIAAuDMBxvAAAIAAODgEg4tAG4MBxbAAAIAAtvMhxbAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(802));

	// logo claim
	this.instance = new lib.Logo();
	this.instance.setTransform(654,9);

	this.instance_1 = new lib.Claim();
	this.instance_1.setTransform(634,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(802));

	// txtBedingungen
	this.instance_2 = new lib.txtBedingungen();
	this.instance_2.setTransform(586.5,75,1,1,0,0,0,30.5,4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(149).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(40).to({alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(60).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).to({_off:true},70).wait(251).to({_off:false,alpha:0},0).to({alpha:1},10,cjs.Ease.get(1)).wait(191));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_139 = new cjs.Graphics().p("EgnCAHCIAAuDMBOFAAAIAAODg");
	var mask_graphics_374 = new cjs.Graphics().p("EgnCAHCIAAuDMBOFAAAIAAODg");
	var mask_graphics_591 = new cjs.Graphics().p("EgnCAHCIAAuDMBOFAAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(139).to({graphics:mask_graphics_139,x:446.7,y:45}).wait(211).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_374,x:446.7,y:45}).wait(193).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_591,x:446.7,y:45}).wait(211));

	// txt
	this.instance_3 = new lib.Txt09();
	this.instance_3.setTransform(164,22.5,1,1,0,0,0,119,9.5);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(374).to({_off:false},0).to({x:324},10,cjs.Ease.get(1)).wait(48).to({x:194},10,cjs.Ease.get(1)).to({_off:true},125).wait(235));

	// txt
	this.preis2 = new lib.Txt06();
	this.preis2.setTransform(153.4,50.9,1,1,0,0,0,128.4,35.9);
	this.preis2._off = true;

	this.preis2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.preis2).wait(270).to({_off:false},0).to({x:333.4},10,cjs.Ease.get(1)).to({_off:true},70).wait(311).to({_off:false,x:153.4},0).to({x:333.4},10,cjs.Ease.get(1)).wait(131));

	// txt
	this.instance_4 = new lib.Txt05();
	this.instance_4.setTransform(538.3,105.9,1,1,0,0,0,58.9,5.9);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219).to({_off:false},0).to({y:45.9},10,cjs.Ease.get(1)).to({_off:true},121).wait(36).to({_off:false,y:105.9},0).to({y:45.9},10,cjs.Ease.get(1)).to({_off:true},171).wait(104).to({_off:false,y:105.9},0).to({y:45.9},10,cjs.Ease.get(1)).wait(121));

	// img
	this.instance_5 = new lib.Box02();
	this.instance_5.setTransform(549.5,106,1,1,0,0,0,81.5,16);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(219).to({_off:false},0).to({y:46},10,cjs.Ease.get(1)).wait(10).to({alpha:0},10).to({alpha:1},10).wait(30).to({alpha:0},10).to({alpha:1},10).wait(20).to({alpha:0},10).to({alpha:1},10).to({_off:true},1).wait(36).to({_off:false,y:106},0).to({y:46},10,cjs.Ease.get(1)).wait(25).to({alpha:0},10).to({alpha:1},10).wait(24).to({alpha:0},10).to({alpha:1},10).wait(21).to({alpha:0},10).to({alpha:1},10).wait(20).to({alpha:0},10).to({alpha:1},10).to({_off:true},1).wait(104).to({_off:false,y:106},0).to({y:46},10,cjs.Ease.get(1)).wait(10).to({alpha:0},10).to({alpha:1},10).wait(30).to({alpha:0},10).to({alpha:1},10).wait(20).to({alpha:0},10).to({alpha:1},10).wait(1));

	// img
	this.instance_6 = new lib.Box03();
	this.instance_6.setTransform(549.5,46,1,1,0,0,0,81.5,16);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(229).to({_off:false},0).to({_off:true},121).wait(46).to({_off:false},0).to({_off:true},171).wait(114).to({_off:false},0).wait(121));

	// txt
	this.haendler = new lib.Txt04();
	this.haendler.setTransform(51.4,73.1,1,1,0,0,0,125.4,55.1);
	this.haendler._off = true;

	this.haendler.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.haendler).wait(210).to({_off:false},0).to({x:331.4},9,cjs.Ease.get(1)).wait(40).to({x:31.4},10,cjs.Ease.get(-1)).to({_off:true},1).wait(172).to({_off:false,x:51.4},0).to({x:331.4},9,cjs.Ease.get(1)).to({_off:true},116).wait(235));

	// img
	this.instance_7 = new lib.Zinsen_1();
	this.instance_7.setTransform(438,50.5,1,1,0,0,0,54,25.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(159).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(30).to({alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(401).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(30).to({alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(140));

	// txt
	this.preis = new lib.Txt03();
	this.preis.setTransform(167.8,64.7,1,1,0,0,0,140.8,31.7);
	this.preis._off = true;

	this.preis_1 = new lib.Txt07();
	this.preis_1.setTransform(167.8,64.7,1,1,0,0,0,140.8,31.7);
	this.preis_1._off = true;

	this.preis.mask = this.preis_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.preis).wait(149).to({_off:false},0).to({x:347.8},10,cjs.Ease.get(1)).wait(40).to({x:147.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(592));
	this.timeline.addTween(cjs.Tween.get(this.preis_1).wait(601).to({_off:false},0).to({x:347.8},10,cjs.Ease.get(1)).wait(40).to({x:147.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(140));

	// txt
	this.instance_8 = new lib.Txt02();
	this.instance_8.setTransform(175,24.5,1,1,0,0,0,119,9.5);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(139).to({_off:false},0).to({x:325},10,cjs.Ease.get(1)).wait(50).to({x:125},10,cjs.Ease.get(-1)).to({_off:true},1).wait(381).to({_off:false,x:175},0).to({x:325},10,cjs.Ease.get(1)).wait(50).to({x:125},10,cjs.Ease.get(-1)).to({_off:true},1).wait(140));

	// box
	this.instance_9 = new lib.Box01();
	this.instance_9.setTransform(194.5,127,0.395,0.925,0,0,0,19,40);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(133).to({_off:false},0).to({y:53},6,cjs.Ease.get(1)).to({_off:true},211).wait(18).to({_off:false,y:127},0).to({y:53},6,cjs.Ease.get(1)).to({_off:true},193).wait(18).to({_off:false,y:127},0).to({y:53},6,cjs.Ease.get(1)).wait(211));

	// img
	this.instance_10 = new lib.Car_1();
	this.instance_10.setTransform(-74.5,28,1,1,0,0,0,73.5,39);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(115).to({_off:false},0).to({x:105.5,y:51},9,cjs.Ease.get(1)).wait(226).to({x:-74.5,y:28},0).to({x:105.5,y:51},9,cjs.Ease.get(1)).wait(208).to({x:-74.5,y:28},0).to({x:105.5,y:51},9,cjs.Ease.get(1)).wait(226));

	// txt Copyright
	this.instance_11 = new lib.txtCopyright();
	this.instance_11.setTransform(7,38,1,1,0,0,0,4,28.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},0).to({_off:true},537).wait(235));

	// img
	this.instance_12 = new lib.PersonSmall_1();
	this.instance_12.setTransform(83,85,0.676,0.676);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(124).to({_off:false},0).to({scaleX:1,scaleY:1,x:68,y:90},9,cjs.Ease.get(1)).to({_off:true},217).wait(9).to({_off:false,scaleX:0.68,scaleY:0.68,x:83,y:85},0).to({scaleX:1,scaleY:1,x:68,y:90},9,cjs.Ease.get(1)).to({_off:true},199).wait(9).to({_off:false,scaleX:0.68,scaleY:0.68,x:83,y:85},0).to({scaleX:1,scaleY:1,x:68,y:90},9,cjs.Ease.get(1)).wait(217));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_35 = new cjs.Graphics().p("EglaAHCIAAuDMBK0AAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(35).to({graphics:mask_1_graphics_35,x:392.5,y:45}).wait(80).to({graphics:null,x:0,y:0}).wait(687));

	// txt
	this.instance_13 = new lib.TxtStart01();
	this.instance_13.setTransform(3.2,22,1,1,0,0,0,140.2,22);
	this.instance_13._off = true;

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(35).to({_off:false},0).to({x:293.2},9,cjs.Ease.get(1)).wait(60).to({y:-68},10,cjs.Ease.get(-1)).to({_off:true},1).wait(687));

	// txt
	this.instance_14 = new lib.TxtStart02();
	this.instance_14.setTransform(-23.3,58,1,1,0,0,0,113.7,22);
	this.instance_14._off = true;

	this.instance_14.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(44).to({_off:false},0).to({x:266.7},9,cjs.Ease.get(1)).wait(51).to({y:-32},10,cjs.Ease.get(-1)).to({_off:true},1).wait(687));

	// box
	this.instance_15 = new lib.Box01();
	this.instance_15.setTransform(162,207,1,1,0,0,0,24,117);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(30).to({_off:false},0).to({y:127},5).wait(69).to({y:37},10,cjs.Ease.get(-1)).to({_off:true},1).wait(687));

	// txt Copyright
	this.instance_16 = new lib.txtCopyright();
	this.instance_16.setTransform(7,38,1,1,0,0,0,4,28.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(4).to({_off:false},0).to({_off:true},26).wait(772));

	// img
	this.instance_17 = new lib.Person_1();
	this.instance_17.setTransform(-75,45,1,1,0,0,0,60,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x:60},4,cjs.Ease.get(1)).wait(20).to({x:-60},5,cjs.Ease.get(-1)).to({_off:true},1).wait(772));

	// bg
	this.instance_18 = new lib.Bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(802));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(229,45,863,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;