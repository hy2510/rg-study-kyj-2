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
	this.shape.graphics.f().s("#D7AB5C").ss(17,1,1).p("AixDcQAdgHApgUQBTgoA+hEQBzh6AZi2");
	this.shape.setTransform(0,-22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-52.5,52.6,61);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgNAMQgHgCgBgGQAAgEAFgFQAGgFAJgCQAHgCAHADQAIADAAAFQABAEgFAFQgGAFgJACIgFABQgFAAgFgCg");
	this.shape.setTransform(-4.7444,-9.8619);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B1B1B").s().p("AhGAqQgegZAAgjQAAgNAFgIIACgDQADgFAJgEQAcgQA1AAQA2AAAcAQQAIADAEAGIACADQAFAIAAANQAAAjgeAZQgdAagqAAQgpAAgdgag");
	this.shape_1.setTransform(0,-6.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-13.5,20.2,13.5);


(lib.ear = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#E8C079").ss(10.9).p("ADHAjQgqhBg8hFQh2iKhUgQQhUgPgZD2QgNB6AEB+g");
	this.shape.setTransform(1.275,-22.5955);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjKgIQAaj2BTAQQBUAQB2CKQA8BFArBBImmC+QgEh+AMh6g");
	this.shape_1.setTransform(0.0015,-24.0209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-53.4,55.7,63);


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

	// mouse
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1B1B1B").ss(3,1,1).p("AhhAlQASgBAbAEQAbAEAOAHQANAIApgDQAJgBAJgCQAagIALgWAhhg4IAAA2");
	this.shape.setTransform(9.525,-33.5467);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1B1B1B").ss(3,1,1).p("ABigkIAAA1QgSAAgbAEQgbADgOAIQgNAIgpgEQgpgEgOgd");
	this.shape_1.setTransform(-10.025,-31.5717);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(21));

	// nose
	this.instance = new lib.nose("synched",0);
	this.instance.setTransform(0,-43.2,1,1,0,0,0,0,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// eye
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAQQgLgHAAgJQAAgIALgGQALgHAOAAQAPAAALAHQALAGAAAIQAAAJgLAHQgLAGgPAAQgOAAgLgGg");
	this.shape_2.setTransform(-20.475,-67.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAKQgDgEAAgGQAAgFADgEQAEgEAFAAQAFAAAEAEQAFAEAAAFQAAAGgFAEQgEAEgFAAQgFAAgEgEg");
	this.shape_3.setTransform(-18.65,-56.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B1B1B").s().p("AgiAjQgOgOAAgVQAAgUAOgOQAPgPATAAQAUAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgUAAQgTAAgPgPg");
	this.shape_4.setTransform(-20,-54.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAQQgLgHAAgJQAAgIALgGQALgHAOAAQAPAAALAHQALAGAAAIQAAAJgLAHQgLAGgPAAQgOAAgLgGg");
	this.shape_5.setTransform(19.575,-67.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAKQgDgEAAgGQAAgFADgEQAEgEAFAAQAFAAAEAEQAFAEAAAFQAAAGgFAEQgEAEgFAAQgFAAgEgEg");
	this.shape_6.setTransform(21.4,-56.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B1B1B").s().p("AgiAjQgOgOAAgVQAAgUAOgOQAPgPATAAQAUAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgUAAQgTAAgPgPg");
	this.shape_7.setTransform(20.05,-54.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#7D7D7D").ss(3,1,1).p("ACmAAIBFAAAjqAAIBFAA");
	this.shape_8.setTransform(0.025,-54.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7D7D7D").s().p("AgiAjQgOgOAAgVQAAgUAOgOQAPgPATAAQAUAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgUAAQgTAAgPgPg");
	this.shape_9.setTransform(-20,-54.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7D7D7D").s().p("AgiAjQgOgOAAgVQAAgUAOgOQAPgPATAAQAUAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgUAAQgTAAgPgPg");
	this.shape_10.setTransform(20.05,-54.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:19.575}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:-20.475}}]}).to({state:[{t:this.shape_8},{t:this.shape_5,p:{x:-20.475}},{t:this.shape_2,p:{x:19.575}}]},19).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_5,p:{x:19.575}},{t:this.shape_9},{t:this.shape_3},{t:this.shape_2,p:{x:-20.475}}]},1).wait(1));

	// Layer_8
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah/HjIhWgNQg1gKgigMQhhgigihWQggg6gBg7QgDh3CagHIBYgCIAigGQAjgJAHgZQACgSALgTQAVglAsgCQAUgCAKgYIAHgYIAPmUIAnAAIABAHIgBAAIAPGNIAHAXQAKAYATADQA3AHARAjQAJASgDAQQADAZAlAKQASAEATABIBYACQCZAHgCB3QgBA7ghA6QghBWhhAiQgiAMg1AKIhWANQg6AFhGAAQhFAAg6gFg");
	this.shape_11.setTransform(0,-47.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(21));

	// Layer_9
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E8C079").s().p("AmcFfQisiJAAjBQAAgPAKgjQAmixCgiHQCqiSDPAAQDGAACmCGQCcB8AxCpIAAgBIAHAcQAIAiAAAUQAADBisCJQirCJjyAAQjxAAiriJg");
	this.shape_12.setTransform(0,-47.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(21));

	// ear
	this.instance_1 = new lib.ear("synched",0);
	this.instance_1.setTransform(25.5,-91.45,1,1,0,0,180,1.2,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

	// ear
	this.instance_2 = new lib.ear("synched",0);
	this.instance_2.setTransform(-25.5,-91.45,1,1,0,0,0,1.2,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-123,117,123.9);


// stage content:
(lib._00_puppy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EAE2C6").ss(14,1,0,4).p("ALfAAI29AA");
	this.shape.setTransform(114.8,215.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(93));

	// face
	this.instance = new lib.face("synched",0);
	this.instance.setTransform(115.5,133.95,1,1,0,0,0,0.5,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({startPosition:0},0).to({regX:0.6,rotation:14.2451,x:115.65},4,cjs.Ease.get(1)).wait(27).to({startPosition:0},0).to({regX:0.5,rotation:-8.7241,x:115.5,y:133.9},5,cjs.Ease.get(1)).wait(24).to({startPosition:0},0).to({rotation:0,y:133.95},3).wait(1));

	// Layer_27
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjMBLIAAgyQAAgoAegeQAcgdAqAAIDRAAQAqAAAdAdQAdAdAAApIAAAyg");
	this.shape_1.setTransform(144.7,202.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8C079").s().p("Ah8HcIAAtTQAAgqAdgdQAdgdAqAAIAxAAQAqAAAdAdQAdAdAAAqIAANTg");
	this.shape_2.setTransform(144.2,161.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjMBLIAAgyQAAgpAdgdQAdgdAqAAIDRAAQAqAAAcAdQAeAeAAAoIAAAyg");
	this.shape_3.setTransform(84.35,202.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8C079").s().p("Ah8HcIAAtTQAAgqAdgdQAdgdAqAAIAxAAQAqAAAdAdQAdAdAAAqIAANTg");
	this.shape_4.setTransform(84.85,161.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBAA60").s().p("AAAABQgBgCAAgBQgBgBAAAAQABABABACQAAAAADAEg");
	this.shape_5.setTransform(114.3059,190.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EBAA60").s().p("AAAABQgBgCAAgBQgBgBAAAAQABABABACQAAAAADAEg");
	this.shape_6.setTransform(114.3059,190.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(93));

	// Layer_41
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ECE5E5").s().p("AjMBLIAAgyQAAgpAdgcQAdgeAqAAIDRAAQAqAAAcAeQAeAdAAAoIAAAyg");
	this.shape_7.setTransform(160.85,202.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ECE5E5").s().p("AjMBLIAAgyQAAgoAdgdQAdgeAqAAIDRAAQApAAAeAeQAdAcAAApIAAAyg");
	this.shape_8.setTransform(68.85,202.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFE8DF").s().p("AgFIxQhrAAhNhMQhMhMAAhsIAApZQAAhXAyhDQAMgPAOgPQBNhMBrAAIALAAQBrAABMBMQAPAPAMAPQAyBDAABXIAAJZQAABshNBMQhMBMhrAAg");
	this.shape_9.setTransform(116.325,135.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(93));

	// Layer_43
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0E0E0E").ss(3,1,1).p("AiLjHIEXAAQBTAAA7A6QA6A7AABSQAABTg6A7Qg7A6hTAAIkXAAQhTAAg7g6Qg6g7AAhTQAAhSA6g7QA7g6BTAAg");
	this.shape_10.setTransform(118.025,195.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D7AB5C").s().p("AiLDIQhTAAg7g6Qg6g7AAhTQAAhSA6g7QA7g6BTAAIEXAAQBTAAA7A6QA6A7AABSQAABTg6A7Qg7A6hTAAg");
	this.shape_11.setTransform(118.025,195.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(93));

	// Layer_38
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D7AB5C").s().p("ABQE7IAAoRQAAhkBkAAIEiAAQBjAAABBkIAAIRgAo5E7IAAoRQAAhkBkAAIEiAAQBkAAAABkIAAIRg");
	this.shape_12.setTransform(114.85,188.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(93));

	// tail
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(178.95,161.8,1,1,0,0,0,0,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(93));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.3,100.7,56,122.2);
// library properties:
lib.properties = {
	id: '3F4BE038CB704E60B3F6B8794BE4207A',
	width: 230,
	height: 230,
	fps: 20,
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
an.compositions['3F4BE038CB704E60B3F6B8794BE4207A'] = {
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