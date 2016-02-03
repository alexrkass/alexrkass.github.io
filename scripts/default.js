var AFRAME = require('aframe');
var AFRAMECORE = require('aframe-core');
var $ = require('jQuery');
var NoClickLookControls = require('aframe-no-click-look-controls');
AFRAMECORE.registerComponent('no-click-look-controls', NoClickLookControls);

var TextComponent = require('aframe-text-component');
AFRAMECORE.registerComponent('text', TextComponent);
