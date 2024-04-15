(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECECEC").s().p("AgrFfQgkgCgPhgQgLhLgCixQgBiaAhhgQAjhoA9AEQA+ADASBrQARBjgZCYQgZCYgkBcQgkBfgmAAIgBAAg");
	this.shape.setTransform(-0.0074,-59.6543);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AhEIkQg6gEgXiVQgSh3gDkSQgCjxA0iXQA3iiBiAGQBiAGAdCmQAbCbgnDuQgnDtg6CQQg6CUg7AAIgCAAg");
	this.shape_1.setTransform(-0.0076,-54.7567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-109.5,34.2,109.5);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECECEC").s().p("AgfEAQgkhcgZiYQgZiYARhjQAShrA+gDQA9gEAjBoQAhBggBCaQgCCxgLBLQgPBggkACIgBAAQgmAAgkhfg");
	this.shape.setTransform(0.0074,-59.6543);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AhEIkQg6gEgXiVQgSh3gDkSQgCjxA0iXQA3iiBiAGQBiAGAdCmQAbCbgnDuQgnDtg6CQQg6CUg7AAIgCAAg");
	this.shape_1.setTransform(0.0076,-54.7567,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-109.5,34.2,109.5);


(lib.nose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAHQgEgDAAgEQAAgDAEgDQADgDAFAAQAFAAAEADQAEADAAADQAAAEgEADQgEADgFAAQgFAAgDgDg");
	this.shape.setTransform(4.575,-35.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAQQgJgHAAgJIAAAAQAAgIAJgHQAJgGALAAQANAAAIAGQAJAHAAAIIAAAAQAAAJgJAHQgIAGgNAAQgLAAgJgGg");
	this.shape_1.setTransform(-3.925,-35.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BD615B").s().p("AgrAsQgtgiAAgfQAAgjAagJQAPgFAvAAQAwAAAOAFQAbAJAAAjQgBAfgrAiQgXAQgWALQgVgLgWgQg");
	this.shape_2.setTransform(0,-32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BD615B").ss(1.5,1,1).p("AAAhgIAADB");
	this.shape_3.setTransform(0.05,-20.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BD615B").ss(1.5,1,1).p("AhhgTQAjAqA+ACQBBABAhgy");
	this.shape_4.setTransform(0.05,-13.074);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0CBBA").s().p("AioCbQhFhAAAhbQAAhaBFhAQBHhBBhAAQBjAABGBBQBFBAAABaQAABbhFBAQhGBBhjAAQhhAAhHhBg");
	this.shape_5.setTransform(0,-21.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-43.9,47.6,43.9);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C48359").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QA0gzBHAAQBJAAAzAzQAzA0AABHQAABJgzAzQgzAzhJAAQhHAAg0gzg");
	this.shape.setTransform(17.525,17.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,35.1,35.1), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C48359").s().p("Al7F7QididAAjeQAAjdCdieQCeidDdAAQDeAACdCdQCeCeAADdQAADeieCdQidCejeAAQjdAAieiegAlZlZQiQCPAADKQAADLCQCQQCPCPDKAAQDLAACQiPQCPiQAAjLQAAjKiPiPQiQiQjLAAQjKAAiPCQg");
	this.shape.setTransform(53.7,53.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,107.4,107.4), null);


(lib.CompoundPath = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C48359").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQQAACRhmBnQhnBmiRAAQiQAAhnhmgAjVjVQhZBZAAB8QAAB+BZBZQBZBZB8AAQB+AABZhZQBZhZAAh+QAAh8hZhZQhZhZh+AAQh8AAhZBZg");
	this.shape.setTransform(35.025,35.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,70.1,70.1), null);


(lib.eye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgEADAAQAEAAAEAEQADADAAAEQAAAFgDADQgEAEgEAAQgDAAgDgEg");
	this.shape.setTransform(1.65,-0.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAOQgGgGAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAGQgFAGgIgBQgHABgFgGg");
	this.shape_1.setTransform(-2.975,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AguAxQgTgUAAgdQAAgcATgVQATgUAbAAQAbAAAUAUQATAVAAAcQAAAdgTAUQgUAVgbAAQgbAAgTgVg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-7,13.3,14);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BE3624").s().p("AAABsIjbDcIhshsIDbjcIjbjbIBshsIDbDbIDcjbIBsBsIjcDbIDcDcIhsBsg");
	this.shape.setTransform(-0.3437,-45.5418,0.7914,0.7914);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A72B1D").s().p("AgTAMIAAgXIAnAAIAAAXg");
	this.shape_1.setTransform(-25.1337,-62.2202,0.7914,0.7914);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#A72B1D").ss(1,0,1).p("AFIjbIhshsIjcDbIjbjbIhsBsIDbDbIjbDcIBsBsIDbjcIDcDcIBshsIjcjcg");
	this.shape_2.setTransform(-0.3437,-43.959,0.7914,0.7914);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A72B1D").s().p("AAABsIjbDcIhshsIDbjcIjbjbIBshsIDbDbIDcjbIBsBsIjcDbIDcDcIhsBsg");
	this.shape_3.setTransform(-0.3437,-43.959,0.7914,0.7914);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8B502A").s().p("Ah4hfIBAgzICxElg");
	this.shape_4.setTransform(-30.5596,-79.2931,0.7912,0.7912);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8B502A").s().p("AiqhYIFWBmIghBLg");
	this.shape_5.setTransform(39.72,-27.3894,0.7912,0.7912);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8B502A").s().p("Ai9CXIF7lkIk/Gbg");
	this.shape_6.setTransform(-26.8013,-18.0927,0.7912,0.7912);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8B502A").s().p("AEMiSIAgBLIpXDag");
	this.shape_7.setTransform(29.5529,-59.9083,0.7912,0.7912);

	this.instance = new lib.Path();
	this.instance.setTransform(-0.5,-45.5,0.7913,0.7913,0,0,0,17.4,17.4);
	this.instance.alpha = 0.3516;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.CompoundPath();
	this.instance_1.setTransform(-0.4,-45.5,0.7913,0.7913,0,0,0,35,34.9);
	this.instance_1.alpha = 0.3516;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.CompoundPath_1();
	this.instance_2.setTransform(-0.45,-45.4,0.7913,0.7913,0,0,0,53.6,53.7);
	this.instance_2.alpha = 0.3516;
	this.instance_2.compositeOperation = "multiply";

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3CDA4").s().p("AneHfQjGjGAAkZQAAkXDGjHQDHjGEXAAQEZAADGDGQDGDHAAEXQAAEZjGDGQjGDGkZAAQkXAAjHjGg");
	this.shape_8.setTransform(0.3061,-44.6262,0.7913,0.7913);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8B502A").s().p("AgpLxQgZgQgMgBQgJgBgcAAQgXAAgNgDQgLgDgbACQgZAAgNgDQgqgNgdgMQgNgFgUgNIgggUQgOgHgSgNIgegVQgJgGgZgMQgVgKgLgJQgLgJgPgSIgYgdQgKgJgLgWQgMgYgHgJQghgkgOgUQgGgKgZgPQgYgPgGgLQgGgLgEgaQgEgbgEgLQgPgkgKgiQgLghgIgnQgMgxgDgZQgBgNADgYQAEgbAAgKQAAgOAGgXQAIgZABgLQABgMgLgbQgMgbADgMQACgNAVgUQAWgVADgLQADgLAAgbQgBgaAFgMQAQgmAQgeIARghQAKgUAIgNIAUggQAMgVAJgLQAIgKAYgLQAZgNAIgIQAgggAWgSQAJgHAQgWQAPgVALgHQAwghAPgIQAMgGAbABQAcABALgEQAngQAegKQALgDAWgRQAVgPANgDQANgCAYABQAcACAKgBIAlgGQAXgFAPAAQAMAAAXAJQAaAJALABQAMABAbgJQAagIAMACQAOADA7ASQANAEATATQATAVALAEQALAFAdgCQAbgBAMAGQApAWAYAQQALAHAQAUQASAVAIAHQAZATAfAfQAKAKANATIAXAeQAGAHAUAUQARAQAIAMQAHALAFAZQAEAbAFAKQAFAKAUATQARASAFANQAFAMADAYQADAbADAKQADALARAXQAQAVADANQACAMgKAaQgLAbABAMQABAMARAYQAQAYAAANQAAAOgDAXIgFAlQgCANgNAXQgPAYgCALQgCALADAbQADAagEAMQgEANgRATQgSAVgFAKQgEALAAAcQAAAbgGAMQgHAMgNATIgWAfQgIAMgRAQIgbAbQgLANgoAoQgKAKgTANIgeAWQgJAIgMAaQgMAagLAHQgLAIgXAHQgaAJgKAFIghASQgUALgOAGQghANgmAMQgMAEgagDQgbgDgLACQgMACgXASQgXAQgMACQgeADgtAAQgOAAgXgQg");
	this.shape_9.setTransform(-0.1105,-44.9768,0.7913,0.7913);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8B502A").s().p("AhyM+IAA57IDlAAIAAZ7g");
	this.shape_10.setTransform(0.1905,40.0659,0.7914,0.7914);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.8,-105.8,121.5,211.6);


(lib.face = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// nose
	this.instance = new lib.nose("synched",0);
	this.instance.setTransform(-0.05,60.95,1,1,0,0,0,0,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({startPosition:0},0).to({_off:true},1).wait(72));

	// eye
	this.instance_1 = new lib.eye("synched",0);
	this.instance_1.setTransform(-24.35,38.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({startPosition:0},0).to({_off:true},1).wait(72));

	// eye
	this.instance_2 = new lib.eye("synched",0);
	this.instance_2.setTransform(24.3,38.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({startPosition:0},0).to({_off:true},1).wait(72));

	// face
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AmmGdQiviNAAjIQAAhiAvhvQAuhuBShdQBVhiBpg3QByg9B2AAQB3AABxA9QBpA3BWBiQBRBdAvBuQAvBvAABiQAADIivCNQiwCOj3AAQj3AAiviOg");
	this.shape.setTransform(0,34.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(17).to({_off:true},1).wait(72));

	// ear2
	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.setTransform(20.05,-12.1,1,1.1092,0,0,0,-5.4,-31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.1091,rotation:6.3457,x:20.15,y:-12.2},17).to({_off:true},1).wait(72));

	// ear1
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.setTransform(-23.8,-10.7,1,1.0703,0,0,0,4.2,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:4.1,scaleY:1.0702,rotation:6.7042,x:-24.05,y:-10.75},17).to({_off:true},1).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.8,-98.7,119.6,188.3);


(lib.나무팻말 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(0,-29.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({startPosition:0},0).to({y:-189.45},5).to({y:-176.8},2).to({y:-181.2},1).to({_off:true},1).wait(1).to({_off:false,y:-176.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.8,-295.2,121.5,371);


// stage content:
(lib._00_rabbit_wrong = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AorMCQibgihWgvIAAAAQhYgxgBg3IAAAAQAAhFCEg3IAAAAIAAgQIYVAAIAAAUQB5A2gBBCIAAAAIAAAAQAAAxhFAsIAAAAQhEAqh7AhIAAAAQh9AiikASIAAAAQiqATi6AAIAAAAQlFAAj5g2gAMkG9I4VAAImWAAIAAz0MAkPAAAIAAT0g");
	var mask_graphics_18 = new cjs.Graphics().p("AorMCQibgihWgvIAAAAQhYgxgBg3IAAAAQAAhFCEg3IAAAAIAAgQImWAAIAAz0MAkPAAAIAAT0IlkAAIAAAUQB5A2gBBCIAAAAIAAAAQAAAxhFAsIAAAAQhEAqh7AhIAAAAQh9AiikASIAAAAQiqATi6AAIAAAAQlFAAj5g2g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:113.0499,y:83.475}).wait(18).to({graphics:mask_graphics_18,x:113.0499,y:83.475}).wait(1));

	// FlashAICB
	this.instance = new lib.나무팻말("synched",0,false);
	this.instance.setTransform(116,306.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({startPosition:19},0).wait(1));

	// face
	this.instance_1 = new lib.face("synched",0);
	this.instance_1.setTransform(115,241,1,0.8878,0,0,0,0,89.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({startPosition:0},0).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9CCA5C").s().p("Ao/C5QiagihWgwQhZgwAAg3QAAhiEJhFQEKhHF1AAQF3AAEJBHQEJBFAABiIAAAAQAAAwhGAsQhDArh7AgQh+AiijATQiqATi6AAQlFAAj6g2g");
	this.shape.setTransform(115,142.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(19));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(139.5,126.3,66,39.60000000000001);
// library properties:
lib.properties = {
	id: 'F23A5B48556A4DBC85B7948C69BCA30B',
	width: 230,
	height: 230,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F23A5B48556A4DBC85B7948C69BCA30B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;