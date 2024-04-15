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
	this.shape.graphics.f("#F68C0F").s().p("AgrFfQgkgCgPhgQgLhLgCixQgBiaAhhgQAjhoA9AEQA+ADASBrQARBjgZCYQgZCYgkBcQgkBfgmAAIgBAAg");
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
	this.shape.graphics.f("#F68C0F").s().p("AgfEAQgkhcgZiYQgZiYARhjQAShrA+gDQA9gEAjBoQAhBggBCaQgCCxgLBLQgPBggkACIgBAAQgmAAgkhfg");
	this.shape.setTransform(0.0074,-59.6543);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AhEIkQg6gEgXiVQgSh3gDkSQgCjxA0iXQA3iiBiAGQBiAGAdCmQAbCbgnDuQgnDtg6CQQg6CUg7AAIgCAAg");
	this.shape_1.setTransform(0.0076,-54.7567,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-109.5,34.2,109.5);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F5C49E").s().p("AB/G2QgxgTgogjQkUjzkQjSIAgggQBLhLAmgkQBEhAAxgqQApgkBMg8IA2goQD7DIDwDTQBZBMAHB3QAIB1hOBZQgqAvg5AaQg3AYg8AAQgzAAgwgRg");
	this.shape.setTransform(7.2811,2.5553,0.0291,0.0291,49.5553);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5C49E").s().p("AkPB9QjyiQjdhwQg1gbglgsQgkgsgRg3QBog8BZgtQBhgyCMg6IA5gWIA3gVIAKgEQJDE5JwHRQg3Aeg5AiIhKAvQgqAbgfAYQhFAvhHA5QgxAnguAoQlMjwlDjFg");
	this.shape_1.setTransform(6.9196,-1.7431,0.0291,0.0291,49.5553);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E96D46").s().p("AlzA3QAkgeA7gvQBFg3BHgxQAfgYAqgbQATgNA2giQA8gkA0gbQBpBOCRByIg3AoQhKA6gqAlQgxAphEBAIhxBvIggAgQiliBiRhog");
	this.shape_2.setTransform(7.2248,0.8715,0.0291,0.0291,49.5553);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E96D46").s().p("AkZBPQAFg4AZgyQA1hpBwglQBwglBpA1QBaAuA+AiIgKADIhwArQiIA3hkA0QhcAuhlA7QgRg0AEg2g");
	this.shape_3.setTransform(6.847,-4.0206,0.0291,0.0291,49.5553);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5C49E").s().p("ACdI8Qg7gbgpgyQkJlAkTkjQhRhWAEh2QADh2BWhRQBXhRB1AEQB2ADBRBWQEmE6ENFDQBMBbgLB2QgLB1haBMQgoAggvARQgvARgxAAQg+AAg5gag");
	this.shape_4.setTransform(6.9282,8.2472,0.0291,0.0291,49.5553);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D55628").s().p("Ar7JWQhIghgchKQgOgmADgoIABgRIAHgbQAKghAQggQAZgxAegnQAlgyA1gwQAdgcBXhOQA0gtBThDQBOg+BIgzQBDgxBfg9QBSgyBYgwQBDgjAUgIIBXgnQAogRAugQQAYgKA8gSQBQgYBRgNQAXgFAxgFIBCgEQAtgBArADIBqCLIgXAEQghADgYAFIgpAJIgWAGIgZAHIg0ASIg4AWQgzAVhJApIhCAmIhDArQhMA1g7AuQgkAchiBVQhIA+g4A4QgkAihVBYIhtB1Qg7BAgkAsQgxA5gjAfQgnAiglAXQgdATgaAMIgPAGIgHACQghAMgiAAQgoAAgngSg");
	this.shape_5.setTransform(5.5548,11.2602,0.0291,0.0291,49.5553);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D55628").s().p("Ax6RDQhSgKg0hBQgtg7ADhJQAAgOAEgYIAIgwIABgBIAGgLIAAgBIAdhWIARgoIAVgqIAXgpQAig9Bdh4IBPhhIBZhlQAXgaBJhMQBRhTAXgUIBuhoIB2hkQArglBQg9IA+gwQAngeAYgRICChZIBBgrIDEh4QAagQAogVIBBgiIB/hDID0hwQAmgQBKgdIDGhKIDShBQBVBVBEBHIkKCGIiwBjIgxAbIgzAdIjWCFIhuBNQhMA0gmAcIiqCBIg4AuIhvBdQgVATggAdIg1AwQhKBDgeAfIhjBjIhcBlQgMANhKBWQhEBRgMAQIiJC3IgdAqIgcApIhlCHIhRBbIAEgJIgBABIgCACIg8A7IgDADQg3AqhCAAQgNAAgOgBg");
	this.shape_6.setTransform(4.5243,5.6552,0.0291,0.0291,49.5553);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D55628").s().p("AlPgTIAngVIBMgjIBLgfQBGgaBKgRIBCgNQAvgHAPgBIAhgBICwCaQgIAEgLACIgeAGQgbADgUAGIghAJIgnAOQgxAUgrAWQglAThCArIg7ApQiQhyhphNg");
	this.shape_7.setTransform(8.6831,1.38,0.0291,0.0291,49.5553);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D55628").s().p("AkSExQg2glgNhBQgDgLAAgJIAAgJIAAgHIACgTQAEghALggQAghiBRhSQAuguA2g0QAzgyBAg4IAjgfQCQBoCmCBIhMBPQhrBxhOBZQhFBPhYAqQgUAJgnAMIgQAEIgHABQgRAEgQAAQguAAgpgcg");
	this.shape_8.setTransform(5.5976,0.7022,0.0291,0.0291,49.5553);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D55628").s().p("Az0OIQg9gQggg1QgQgcgDgdQgCgQAAgaQAAggACgQQAJgzAGgSQAYhYArhNQATgiApg4IBJhcQBnh5BJhIQAggiBGhAIA2gxQAhgdAXgUQBnhYCLhlQBshOCdhfQCehbB4g5QCghLB6grQBkgmCtgvQBlgYAcgGIA+gLQAlgHAXgDQBkgQBzgHIBugEQB+BBB2BDQgQAQgWAEIgoAFQg4AGgqAIIiWAeQhgAXhfAdIgwAQIgyARQg9ghhaguQhqg1hwAkQhxAlg1BqQgZAygEA4QgEA2AQA1QiOBSiTBpQiEBghfBPQh3BjhXBUIhdBdIhWBbQhEBLhNBjIg7BRQgiAugUAYQgxA8gzAuQgQAPgZATIgkAfIgZASIgJAFIAAABQgkAWgoAAQgTAAgTgFg");
	this.shape_9.setTransform(4.7184,-4.0603,0.0291,0.0291,49.5553);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E96A32").s().p("EAvhA7wQuOhww9lQQv7k8u+m9Qu1m5p8nCQy1tTo5vVQpQv/CcwtQBXiiBfiSQFEn3GelBQGNk0HUiGQIxigJ7BgQJmBdKEFGQB/BAB2BEQIOEtH6GyIA0AtICxCaQIbHdHnHsQBUBVBEBHQKFKYHyJ+IBqCLQLuPgFENMQF5PWjYLoQl1BknvAAQljAAmhgzg");
	this.shape_10.setTransform(2.2288,4.2753,0.0291,0.0291,49.5553);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D55628").s().p("EAS4A/AQxxk/yColQxnoYrQonQxitan3vBQoMvoDHv5QBbnPDwnGQBXiiBeiSQFFn3GelBQGNk0HUiGQIwigJ7BgQJnBdKEFGQB/BAB2BEQIOEtH6GyIA0AtICwCaQIbHdHnHsQBVBVBEBHQKEKYHyJ/IBrCLQLuPfFENMQF5PWjZLoQhJD7iNDfQlRIXvWAnQhPAEhSAAQs1AAxuk/g");
	this.shape_11.setTransform(0.8433,4.7821,0.0291,0.0291,49.5553);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#48912E").s().p("ADOJzQgVgGgJgWIgphrIgghEQgag0gNgdIkeo+IgVgrQgLgYgGgQQgZhFAGhGQABgTAGgZIAFgRQAXhCA/geQA+gfBCAXIALAFIATAJQAXAPANANQA4AuAeBGQAIARAJAZIAOAuQAVBDAKAiQAhBxAZBtIAYByIATBxIANBrIAGBiQAABIgBANIgFBDQgIAogFAUQgFASgQAJQgLAHgMAAQgGAAgGgCg");
	this.shape_12.setTransform(3.7719,-11.9243,0.0291,0.0291,49.5553);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#48912E").s().p("AJvM/Ig4gbQgZgOgLgHQgbgQg+gtQgsggg/gzQhOhBgoglQg4gyhHhFQiAh8iFiPQhFhKg7hCQhFhNgzg8Qgyg5g9hJQhEhRgcgmQhIhigfhwQgKglgEgiIgBgbQgBg/ArgtQAsgtA/gBQAZAAASAFIAbAJQAiANAeASQBjA3BOBeQAeAkA9BUQAwA+A1BJIK2OuQAUAaAmAuIA9BDQAZAagBAkQgBAjgbAZQgTASgaAEIgOABQgSAAgRgHg");
	this.shape_13.setTransform(0.9781,-13.5072,0.0291,0.0291,49.5553);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#48912E").s().p("ALwF1IhcgIQhKgIgqgHIiHgVQhLgOhKgPQh4gZgmgJIihgnQhZgWhHgUQhfgZg8gRQhUgYg8gSQhZgagogOQhlgjhNg9QgZgVgUgVIgPgSQgpg7AMhHQAMhHA6gpQAagSAbgIIABAAIAXgEQAdgFAfAAQBjgBBkAjQAnANBWAiICKA3QBgAlDKBTQCuBIB8A0IECBtQBDAbAjAQIBOAfIAvARIAdALQAfALAOAfQAOAegMAfQgJAXgUAOQgVAOgYAAIgWABIhAgBg");
	this.shape_14.setTransform(-2.8449,-12.739,0.0291,0.0291,49.5553);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5CAE40").s().p("Avef5Ql8hnkmi/QkRiyizjvQipjihEj/QhCj4AmjwQCaiyDhhUQDxhZEiAgQgugtg/hPQh/ifhbimQkioUC2mcQBykDDgiqQDwi3ExgbQFVgfFuCqQGaDAGZGuIg4iHQg4ikgDiNQgDjGBph8QCEicEngfQD4gbEWDcQEHDSDiF5QDjF9B7G7QCEHYgVGvQnUCFmNE0QmeFClFH2Qi0EXh8EdQjaAYjZAAQoHAAoJiNg");
	this.shape_15.setTransform(1.2463,-15.2668,0.0291,0.0291,49.5553);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#48912E").s().p("EgIEAmLQo8hvoHktQlejMjfkUQjNj/hNkgQhJkQA0kCQAzj9Chi7QCZiyDihUQDwhZEiAgQgtguhAhPQh/iehaimQkjoUC2mcQBzkDDfiqQDxi3ExgcQFUgfFvCrQGaC/GZGvIg4iIQg5ijgCiNQgDjGBph9QCEibEmggQD4gaEWDcQEIDRDhF6QDjF8B8G7QCDHZgVGuQnUCGmNE0QmeFBlEH3Qi1EXh7EcQiPFKhBFMQiBAKiBAAQlEAAlBg/g");
	this.shape_16.setTransform(0.3243,-14.8998,0.0291,0.0291,49.5553);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-22.2,18.700000000000003,44.4);


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
	this.shape_2.graphics.f("#F68C0F").s().p("AgrAsQgsgiAAgfQAAgiAagKQAOgFAvAAQAxAAANAFQAaAKAAAiQABAfgtAiQgWAQgWALQgVgLgWgQg");
	this.shape_2.setTransform(0,-32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F68C0F").ss(1.5,1,1).p("AAAhgIAADB");
	this.shape_3.setTransform(0.05,-20.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F68C0F").ss(1.5,1,1).p("AhhgTQAjAqA+ACQBBABAhgy");
	this.shape_4.setTransform(0.05,-13.074);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFECD7").s().p("AinCbQhGhAAAhbQAAhaBGhAQBGhBBhAAQBiAABGBBQBGBAAABaQAABbhGBAQhGBBhiAAQhhAAhGhBg");
	this.shape_5.setTransform(0,-21.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-43.9,47.6,43.9);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjPhrIF6g1IAlENIl6A0g");
	mask.setTransform(20.825,16.075);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADADA").s().p("AACAnQgKgQgEgVQgDgWAHgQQAFgIACgCQABgBAAgBQAAAAABAAQAAgBABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABIgCALQgCAQACARQADAPAGATQAFAPgBAAIgBABQgEAAgHgLg");
	this.shape.setTransform(14.5866,20.7263);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DADADA").s().p("AAAAfQgHgPgDgOQgCgQAEgPQAEgMAEABQABABAAAMQAAARACAKIAHAbQADAMgDABIAAABQgDAAgHgKg");
	this.shape_1.setTransform(27.4122,18.7555);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4F4").s().p("AiWBfQgWgSgMgeQAkA9AngaQAlgYgFg2IADAMQAEAOAIAMQAqAxAogbQAkgYgCg3QACAPAGANQA/ArAggzQAfgwgdhCQAjAygMA2QgMAzgoAJQgbAHgTgOIgOgQQAAAMgHANQgOAagiAHQgjAIgVgUIgNgWIgGAWQgOAYgiAHIgIABQgQAAgSgPg");
	this.shape_2.setTransform(21.7048,20.3114);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4F4F4").s().p("AiPCDQgUgQgNgdQgghFApg9QBBhiBwgCQBpgCAyBIQAjAygMA1QgMA0goAJQgbAHgTgOIgOgQQAAAMgHANQgOAagiAHQgjAIgVgUIgNgWIgGAWQgOAYgiAHIgIABQgQAAgRgOg");
	this.shape_3.setTransform(21.1158,16.8113);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(2,2.4,38.2,28.900000000000002), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjPBsIAlkMIF6A1IglEMg");
	mask.setTransform(20.825,16.075);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADADA").s().p("AgNAxQgBgBAFgOQAHgTACgPQACgRgCgQIgCgLQgBgEACgBQAAAAAAAAQABAAAAABQAAAAAAABQABAAABABQACACAFAIQAIAQgEAWQgEAVgJAPQgIAMgEAAIgBgBg");
	this.shape.setTransform(27.0744,20.7098);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DADADA").s().p("AgKApQgCgBADgMIAGgcQACgKABgRQAAgMABgBQADgBAEANQAFAOgDAQQgCAPgIAOQgGAKgDAAIgBAAg");
	this.shape_1.setTransform(14.2663,18.7256);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F4F4").s().p("ABtBtQgigHgOgYIgGgWQgDAMgKAKQgUAVgkgIQgigIgOgaIgGgZQgFAJgJAHQgUAOgbgGQgogKgMgzQgMg2AjgxQgdBCAfAvQAgAzA/grQAGgNACgOQgCA2AkAYQApAcApgxQAMgUADgTQgFA2AlAYQAoAaAjg9QgMAfgWARQgRAOgRAAIgIAAg");
	this.shape_2.setTransform(19.9452,20.2872);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4F4F4").s().p("ABnCQQgigHgOgYIgGgWQgDAMgKAKQgUAVgkgIQgigIgOgaIgHgZQgEAJgKAHQgTAOgbgGQgogKgMg0QgMg1AjgxQAyhIBpACQBwACBBBiQApA8ggBGQgNAcgUAQQgRANgQAAIgIAAg");
	this.shape_3.setTransform(20.5465,16.7863);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(1.5,2.4,38.2,28.900000000000002), null);


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


(lib.carrot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F5C49E").s().p("AB/G2QgxgTgogjQkUjzkQjSIAgggQBLhLAmgkQBEhAAxgqQApgkBMg8IA2goQD7DIDwDTQBZBMAHB3QAIB1hOBZQgqAvg5AaQg3AYg8AAQgzAAgwgRg");
	this.shape.setTransform(-0.7173,7.1871,0.0323,0.0323,-68.7509);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5C49E").s().p("AkPB9QjyiQjdhwQg1gbglgsQgkgsgRg3QBog8BZgtQBhgyCMg6IA5gWIA3gVIAKgEQJDE5JwHRQg3Aeg5AiIhKAvQgqAbgfAYQhFAvhHA5QgxAnguAoQlMjwlDjFg");
	this.shape_1.setTransform(-4.7356,9.8079,0.0323,0.0323,-68.7509);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E96D46").s().p("AlzA3QAkgeA7gvQBFg3BHgxQAfgYAqgbQATgNA2giQA8gkA0gbQBpBOCRByIg3AoQhKA6gqAlQgxAphEBAIhxBvIggAgQiliBiRhog");
	this.shape_2.setTransform(-2.3365,8.1302,0.0323,0.0323,-68.7509);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E96D46").s().p("AkZBPQAFg4AZgyQA1hpBwglQBwglBpA1QBaAuA+AiIgKADIhwArQiIA3hkA0QhcAuhlA7QgRg0AEg2g");
	this.shape_3.setTransform(-6.9275,11.0801,0.0323,0.0323,-68.7509);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5C49E").s().p("ACdI8Qg7gbgpgyQkJlAkTkjQhRhWAEh2QADh2BWhRQBXhRB1AEQB2ADBRBWQEmE6ENFDQBMBbgLB2QgLB1haBMQgoAggvARQgvARgxAAQg+AAg5gag");
	this.shape_4.setTransform(5.0423,4.5308,0.0323,0.0323,-68.7509);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D55628").s().p("Ar7JWQhIghgchKQgOgmADgoIABgRIAHgbQAKghAQggQAZgxAegnQAlgyA1gwQAdgcBXhOQA0gtBThDQBOg+BIgzQBDgxBfg9QBSgyBYgwQBDgjAUgIIBXgnQAogRAugQQAYgKA8gSQBQgYBRgNQAXgFAxgFIBCgEQAtgBArADIBqCLIgXAEQghADgYAFIgpAJIgWAGIgZAHIg0ASIg4AWQgzAVhJApIhCAmIhDArQhMA1g7AuQgkAchiBVQhIA+g4A4QgkAihVBYIhtB1Qg7BAgkAsQgxA5gjAfQgnAiglAXQgdATgaAMIgPAGIgHACQghAMgiAAQgoAAgngSg");
	this.shape_5.setTransform(8.717,4.2866,0.0323,0.0323,-68.7509);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D55628").s().p("Ax6RDQhSgKg0hBQgtg7ADhJQAAgOAEgYIAIgwIABgBIAGgLIAAgBIAdhWIARgoIAVgqIAXgpQAig9Bdh4IBPhhIBZhlQAXgaBJhMQBRhTAXgUIBuhoIB2hkQArglBQg9IA+gwQAngeAYgRICChZIBBgrIDEh4QAagQAogVIBBgiIB/hDID0hwQAmgQBKgdIDGhKIDShBQBVBVBEBHIkKCGIiwBjIgxAbIgzAdIjWCFIhuBNQhMA0gmAcIiqCBIg4AuIhvBdQgVATggAdIg1AwQhKBDgeAfIhjBjIhcBlQgMANhKBWQhEBRgMAQIiJC3IgdAqIgcApIhlCHIhRBbIAEgJIgBABIgCACIg8A7IgDADQg3AqhCAAQgNAAgOgBg");
	this.shape_6.setTransform(3.772,8.2516,0.0323,0.0323,-68.7509);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D55628").s().p("AlPgTIAngVIBMgjIBLgfQBGgaBKgRIBCgNQAvgHAPgBIAhgBICwCaQgIAEgLACIgeAGQgbADgUAGIghAJIgnAOQgxAUgrAWQglAThCArIg7ApQiQhyhphNg");
	this.shape_7.setTransform(-2.6076,6.4341,0.0323,0.0323,-68.7509);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D55628").s().p("AkSExQg2glgNhBQgDgLAAgJIAAgJIAAgHIACgTQAEghALggQAghiBRhSQAuguA2g0QAzgyBAg4IAjgfQCQBoCmCBIhMBPQhrBxhOBZQhFBPhYAqQgUAJgnAMIgQAEIgHABQgRAEgQAAQguAAgpgcg");
	this.shape_8.setTransform(-1.644,9.8128,0.0323,0.0323,-68.7509);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D55628").s().p("Az0OIQg9gQggg1QgQgcgDgdQgCgQAAgaQAAggACgQQAJgzAGgSQAYhYArhNQATgiApg4IBJhcQBnh5BJhIQAggiBGhAIA2gxQAhgdAXgUQBnhYCLhlQBshOCdhfQCehbB4g5QCghLB6grQBkgmCtgvQBlgYAcgGIA+gLQAlgHAXgDQBkgQBzgHIBugEQB+BBB2BDQgQAQgWAEIgoAFQg4AGgqAIIiWAeQhgAXhfAdIgwAQIgyARQg9ghhaguQhqg1hwAkQhxAlg1BqQgZAygEA4QgEA2AQA1QiOBSiTBpQiEBghfBPQh3BjhXBUIhdBdIhWBbQhEBLhNBjIg7BRQgiAugUAYQgxA8gzAuQgQAPgZATIgkAfIgZASIgJAFIAAABQgkAWgoAAQgTAAgTgFg");
	this.shape_9.setTransform(-5.8438,13.1854,0.0323,0.0323,-68.7509);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E96A32").s().p("EAvhA7wQuOhww9lQQv7k8u+m9Qu1m5p8nCQy1tTo5vVQpQv/CcwtQBXiiBfiSQFEn3GelBQGNk0HUiGQIxigJ7BgQJmBdKEFGQB/BAB2BEQIOEtH6GyIA0AtICxCaQIbHdHnHsQBUBVBEBHQKFKYHyJ+IBqCLQLuPgFENMQF5PWjYLoQl1BknvAAQljAAmhgzg");
	this.shape_10.setTransform(3.6314,11.2272,0.0323,0.0323,-68.7509);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D55628").s().p("EAS4A/AQxxk/yColQxnoYrQonQxitan3vBQoMvoDHv5QBbnPDwnGQBXiiBeiSQFFn3GelBQGNk0HUiGQIwigJ7BgQJnBdKEFGQB/BAB2BEQIOEtH6GyIA0AtICwCaQIbHdHnHsQBVBVBEBHQKEKYHyJ/IBrCLQLuPfFENMQF5PWjZLoQhJD7iNDfQlRIXvWAnQhPAEhSAAQs1AAxuk/g");
	this.shape_11.setTransform(4.8584,12.3166,0.0323,0.0323,-68.7509);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#48912E").s().p("ADOJzQgVgGgJgWIgphrIgghEQgag0gNgdIkeo+IgVgrQgLgYgGgQQgZhFAGhGQABgTAGgZIAFgRQAXhCA/geQA+gfBCAXIALAFIATAJQAXAPANANQA4AuAeBGQAIARAJAZIAOAuQAVBDAKAiQAhBxAZBtIAYByIATBxIANBrIAGBiQAABIgBANIgFBDQgIAogFAUQgFASgQAJQgLAHgMAAQgGAAgGgCg");
	this.shape_12.setTransform(-13.0451,18.2595,0.0323,0.0323,-68.7509);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#48912E").s().p("AJvM/Ig4gbQgZgOgLgHQgbgQg+gtQgsggg/gzQhOhBgoglQg4gyhHhFQiAh8iFiPQhFhKg7hCQhFhNgzg8Qgyg5g9hJQhEhRgcgmQhIhigfhwQgKglgEgiIgBgbQgBg/ArgtQAsgtA/gBQAZAAASAFIAbAJQAiANAeASQBjA3BOBeQAeAkA9BUQAwA+A1BJIK2OuQAUAaAmAuIA9BDQAZAagBAkQgBAjgbAZQgTASgaAEIgOABQgSAAgRgHg");
	this.shape_13.setTransform(-13.1217,21.83,0.0323,0.0323,-68.7509);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#48912E").s().p("ALwF1IhcgIQhKgIgqgHIiHgVQhLgOhKgPQh4gZgmgJIihgnQhZgWhHgUQhfgZg8gRQhUgYg8gSQhZgagogOQhlgjhNg9QgZgVgUgVIgPgSQgpg7AMhHQAMhHA6gpQAagSAbgIIABAAIAXgEQAdgFAfAAQBjgBBkAjQAnANBWAiICKA3QBgAlDKBTQCuBIB8A0IECBtQBDAbAjAQIBOAfIAvARIAdALQAfALAOAfQAOAegMAfQgJAXgUAOQgVAOgYAAIgWABIhAgBg");
	this.shape_14.setTransform(-10.3532,25.1684,0.0323,0.0323,-68.7509);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5CAE40").s().p("Avef5Ql8hnkmi/QkRiyizjvQipjihEj/QhCj4AmjwQCaiyDhhUQDxhZEiAgQgugtg/hPQh/ifhbimQkioUC2mcQBykDDgiqQDwi3ExgbQFVgfFuCqQGaDAGZGuIg4iHQg4ikgDiNQgDjGBph8QCEicEngfQD4gbEWDcQEHDSDiF5QDjF9B7G7QCEHYgVGvQnUCFmNE0QmeFClFH2Qi0EXh8EdQjaAYjZAAQoHAAoJiNg");
	this.shape_15.setTransform(-14.9861,22.4954,0.0323,0.0323,-68.7509);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#48912E").s().p("EgIEAmLQo8hvoHktQlejMjfkUQjNj/hNkgQhJkQA0kCQAzj9Chi7QCZiyDihUQDwhZEiAgQgtguhAhPQh/iehaimQkjoUC2mcQBzkDDfiqQDxi3ExgcQFUgfFvCrQGaC/GZGvIg4iIQg5ijgCiNQgDjGBph9QCEibEmggQD4gaEWDcQEIDRDhF6QDjF8B8G7QCDHZgVGuQnUCGmNE0QmeFBlEH3Qi1EXh7EcQiPFKhBFMQiBAKiBAAQlEAAlBg/g");
	this.shape_16.setTransform(-14.1405,23.2047,0.0323,0.0323,-68.7509);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.3,0,44.6,31.8);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(-0.15,-0.4,0.9003,0.9003,0,0,0,21.1,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-15.2,37.5,28.9);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(-0.1,-0.6,0.9002,0.9002,0,0,0,21.2,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-15.3,37.5,28.9);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-0.05,-0.5,0.9004,0.9004,0,0,0,20.8,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-15.1,37.5,29);


(lib.face = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {머리쏙:11,"당근 1":25,"당근 2":34};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// nose
	this.instance = new lib.nose("synched",0);
	this.instance.setTransform(-0.05,60.95,1,1,0,0,0,0,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false},0).wait(48));

	// eye
	this.instance_1 = new lib.eye("synched",0);
	this.instance_1.setTransform(-24.35,38.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgjAAQAEgFAFgGQATgSAZAAQAbAAASASQASARABAYAhRAeIAlAAQABgRAIgNIguAA");
	this.shape.setTransform(-26.025,35.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},50).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({startPosition:0},0).to({_off:true},1).wait(10).to({_off:false},0).wait(50).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false},0).wait(48));

	// eye
	this.instance_2 = new lib.eye("synched",0);
	this.instance_2.setTransform(24.3,38.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({startPosition:0},0).wait(59).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false},0).wait(48));

	// face
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AmmGdQiviNAAjIQAAhiAvhvQAuhuBShdQBVhiBpg3QByg9B2AAQB3AABxA9QBpA3BWBiQBRBdAvBuQAvBvAABiQAADIivCNQiwCOj3AAQj3AAiviOg");
	this.shape_1.setTransform(0,34.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(90).to({_off:true},1).wait(1).to({_off:false},0).wait(48));

	// ear2
	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.setTransform(20.05,-12,1,0.8594,0,0,0,-5.4,-31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({scaleY:0.9507,y:-12.1},0).to({regX:-5.3,scaleX:0.8222,scaleY:1.1757,x:20.1,y:-12.05},1,cjs.Ease.get(1)).to({regX:-5.4,scaleX:1,scaleY:1.1092,x:20.05,y:-12.1},1).to({scaleY:0.9922,y:-12.05},1).to({scaleY:1.1092,y:-12.1},1).wait(17).to({startPosition:0},0).to({rotation:10.9991,y:-12.15},4).to({rotation:-12.6985,y:-12.1},4).to({rotation:0},4).wait(44).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false},0).wait(8).to({scaleY:0.9507},0).to({regX:-5.3,scaleX:0.8222,scaleY:1.1757,x:20.1,y:-12.05},1,cjs.Ease.get(1)).to({regX:-5.4,scaleX:1,scaleY:1.1092,x:20.05,y:-12.1},1).to({scaleY:0.9922,y:-12.05},1).to({scaleY:1.1092,y:-12.1},1).to({scaleY:0.9922,y:-12.05},1).to({scaleY:1.1092,y:-12.1},1).wait(34));

	// ear1
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.setTransform(-23.8,-10.75,1,0.8249,0,0,0,4.2,-30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({regY:-30.6,scaleY:0.9318,y:-10.8},0).to({regX:4.1,regY:-30.4,scaleX:0.7835,scaleY:1.1195,x:-23.9,y:-10.6},1,cjs.Ease.get(1)).to({regX:4.2,regY:-30.5,scaleX:1,scaleY:1.0703,x:-23.8,y:-10.7},1).to({regY:-30.6,scaleY:0.9725,y:-10.75},1).to({regY:-30.5,scaleY:1.0703,y:-10.7},1).wait(19).to({startPosition:0},0).to({scaleY:1.0702,rotation:11.483,x:-23.85,y:-10.75},4).to({rotation:-17.7098,x:-23.8,y:-10.8},4).to({scaleY:1.0703,rotation:0,y:-10.7},4).wait(42).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false},0).wait(8).to({regY:-30.6,scaleY:0.9318,y:-10.8},0).to({regX:4.1,regY:-30.4,scaleX:0.7835,scaleY:1.1195,x:-23.9,y:-10.6},1,cjs.Ease.get(1)).to({regX:4.2,regY:-30.5,scaleX:1,scaleY:1.0703,x:-23.8,y:-10.7},1).to({regY:-30.6,scaleY:0.9725,y:-10.75},1).to({regY:-30.5,scaleY:1.0703,y:-10.7},1).to({regY:-30.6,scaleY:0.9725,y:-10.75},1).to({regY:-30.5,scaleY:1.0703,y:-10.7},1).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.7,-103.2,123.5,192.8);


// stage content:
(lib._06_rabbit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"머리쏙":11};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_13
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(186.05,151.6);
	this.instance._off = true;

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.setTransform(186.05,157.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},18).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},78).to({state:[]},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({_off:true,y:157.45},1).wait(121));

	// Layer_14
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(43.85,152.05);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({y:158.55},1,cjs.Ease.quintInOut).wait(85).to({startPosition:0},0).to({_off:true},1).wait(39));

	// Layer_2
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(176,133.75);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({regX:0.1,rotation:-660.0004,guide:{path:[176.1,133.8,179.8,112.4,196.9,107.1,205.4,104.5,208.5,124,211.6,143.4,209.2,185]}},9).wait(83).to({startPosition:0},0).to({regX:0,rotation:-720,guide:{path:[209.2,185,211.6,143.4,208.5,124,205.4,104.5,196.9,107.1,179.8,112.4,176.1,133.8]}},3).to({_off:true},1).wait(36));

	// 당근
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(49.15,125.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({rotation:-360,guide:{path:[49.3,125.1,48.7,122.8,48,120.4,46,112.7,42.4,105.6,39.6,100.1,35.2,96.2,33.7,94.9,32.2,93.8,25,88.9,22.4,97,19.8,105,24.9,111.4,25.5,112.2,26.2,113,31.4,116.2,33.8,110.9,37,103.7,35.2,96.2,35.1,95.9,35,95.7,29.6,75.4,18.6,57.5,16.5,54.1,13.2,50.2]},alpha:0},11,cjs.Ease.get(1)).wait(118));

	// Layer_16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AorMCQibgihWgvIAAAAQhYgxgBg3IAAAAQAAhFCEg3IAAAAIAAgQImWAAIAAz0MAkPAAAIAAT0IlkAAIAAAUQB5A2gBBCIAAAAIAAAAQAAAxhFAsIAAAAQhEAqh7AhIAAAAQh9AiikASIAAAAQiqATi6AAIAAAAQlFAAj5g2g");
	mask.setTransform(113.0499,83.475);

	// face
	this.instance_5 = new lib.face("synched",0);
	this.instance_5.setTransform(115,151.45);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:89.5,scaleY:0.8878,y:241,startPosition:4},4).to({regX:0.1,regY:89.8,scaleX:0.6857,scaleY:1.1236,x:115.05,y:191.8,startPosition:11},7,cjs.Ease.get(1)).to({regX:0,regY:89.5,scaleX:1,scaleY:0.8878,x:115,y:191.5,startPosition:13},2,cjs.Ease.get(1)).to({scaleX:1.0962,scaleY:0.8402,startPosition:88},75).to({regX:0.2,regY:89.9,scaleX:0.6688,scaleY:1.0139,x:115.15,y:191.9,startPosition:92},3).wait(5).to({regX:0.1,regY:89.7,scaleX:1.1881,scaleY:0.8185,x:115.1,y:241.15,startPosition:96},0).to({regX:0,regY:89.5,scaleX:1,scaleY:0.8878,x:115,y:241,startPosition:98},2).wait(42));

	// 당근
	this.instance_6 = new lib.carrot("synched",0,false);
	this.instance_6.setTransform(169.25,142.9,1,1,0,0,0,0,15.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).to({rotation:360,guide:{path:[169.3,142.9,170.9,136.2,174.7,125.9,182.4,105.2,193.6,87,205.9,67.1,220.8,52.5]},alpha:0},10,cjs.Ease.quadInOut).wait(113));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F68C0F").s().p("Ao/C5QiagihWgwQhZgwAAg3QAAhiEJhFQEKhHF1AAQF3AAEJBHQEJBFAABiIAAAAQAAAwhGAsQhDArh7AgQh+AiijATQiqATi6AAQlFAAj6g2g");
	this.shape.setTransform(115,142.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(140));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(117.7,116.2,125.39999999999999,83.10000000000001);
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