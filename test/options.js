/* global describe, it, global */

//'use strict';

require('should');

describe('Options', function(){
    var testData = {
            down: {
                moves: [ 'down' ],
                delta: [ 0.025,0.225,0.675,1.75,2.2,3.4,3.475,4.275,3.65,7.3,6.625,6.075,5.6,5.225,4.875,4.6,4.325,4.191666666666666,4.066666666666666,3.95,3.775,3.65,3.575,3.4,3.3,3.15,3.025,2.925,5.475,2.55,2.45,2.325,2.225,2.091666666666667,1.975,1.85,1.75,1.625,1.525,1.425,1.35,1.25,1.15,1.0416666666666667,0.975,0.9,0.825,0.775,0.675,0.625,0.575,0.5166666666666667,0.475,0.45,0.4,0.375,0.325,0.3,0.275,0.25,0.225,0.2,0.175,0.175,0.15,0.125,0.125,0.1,0.1,0.1,0.075,0.075,0.075,0.05,0.05,0.05,0.05,0.025,0.025,0.025,0.025,0.025,0.025,0.025,0.025,0.025,0.025,0.025,0.025,0.025 ],
                device: 'Mac OSX notebook trackpad'
            },
            twiceDown: {
                moves: [ 'down', 'down' ],
                delta: [0.05,0.425,0.7,1.225,1.5,2.35,1.8,1.675,1.825,2.075,1.85,4.425,4.15,3.9,3.7,3.45,3.25,3.075,2.9,2.775,2.7,2.575,2.425,2.325,2.225,2.091666666666667,1.975,1.85,1.775,1.625,0.025,0.175,0.3,0.425,0.6,1.45,2.05,2.225,2.9,3.025,5.8,5.375,4.9,4.575,4.275,4.025,3.8,3.575,3.45,3.325,3.2,3.075,2.95,2.85,2.725,2.625,2.5,2.4,2.25,2.125,2.025,1.925,1.8,1.675,1.575,1.475,1.375,1.3,1.2,1.1,1,0.925,0.875,0.775,0.725,0.675,0.575,0.5166666666666667,0.5,0.45,0.4,0.375,0.325,0.3,0.275,0.25,0.225,0.2,0.175,0.175,0.15,0.15,0.125,0.125,0.1,0.1,0.1,0.075,0.075,0.075,0.05,0.05,0.05,0.025,0.025,0.025,0.025,0.025,0.025,0.025,0.025,0.025,0.025,0.025,0.025,0.025],
                device: 'Mac OSX notebook trackpad'
            },
            up: {
                moves: [ 'up' ],
                delta: [-0.025,-0.1,-0.2,-0.475,-0.725,-1.4,-1.575,-2.025,-3.225,-3.825,-3.375,-6.55,-5.975,-5.475,-5.1,-4.725,-4.425,-4.15,-3.925,-3.8,-3.675,-3.55,-3.425,-3.325,-3.175,-3.05,-2.95,-2.8,-2.675,-2.6,-2.45,-2.375,-2.225,-2.091666666666667,-1.975,-1.9,-1.775,-1.675,-1.55,-1.45,-1.35,-1.25,-1.15,-1.0416666666666667,-1,-0.9,-0.825,-0.775,-0.7,-0.625,-0.575,-0.5166666666666667,-0.475,-0.45,-0.4,-0.375,-0.325,-0.3,-0.275,-0.25,-0.225,-0.2,-0.175,-0.175,-0.15,-0.125,-0.125,-0.1,-0.1,-0.1,-0.075,-0.075,-0.075,-0.05,-0.05,-0.05,-0.05,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025],
                device: 'Mac OSX notebook trackpad'
            },
            twiceUp: {
                moves: [ 'up', 'up' ],
                delta: [-0.025,-0.15,-0.25,-0.475,-0.75,-0.95,-1.475,-1.575,-2.15,-2.325,-1.975,-1.975,-1.7,-1.6,-0.975,-3.8,-3.6,-3.425,-3.25,-3.075,-2.875,-2.725,-2.6,-2.45,-2.35,-2.225,-2.091666666666667,-2.025,-1.9,-0.05,-0.4,-0.7,-1,-2.05,-2.6,-2.925,-2.575,-3.225,-6.05,-5.575,-5.125,-4.725,-4.45,-4.175,-3.925,-3.675,-3.6,-3.45,-3.325,-3.225,-3.075,-2.975,-2.825,-2.7,-2.625,-2.5,-2.35,-2.25,-2.15,-2.025,-1.9,-1.8,-1.675,-1.575,-1.475,-1.35,-1.25,-1.2,-1.1,-1,-0.925,-0.85,-0.775,-0.725,-0.675,-0.575,-0.5166666666666667,-0.5,-0.45,-0.4,-0.375,-0.325,-0.3,-0.275,-0.25,-0.225,-0.2,-0.175,-0.175,-0.15,-0.15,-0.125,-0.125,-0.1,-0.1,-0.1,-0.075,-0.075,-0.075,-0.05,-0.05,-0.05,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025,-0.025],
                device: 'Mac OSX notebook trackpad'
            }
        },
        currentDeltaArr;

    global.window = {
        addEventListener: function(){}
    };
    
    it('Correct working of option "preventMouse"', function () {
        var prevented = false;

        global.document = {
            addEventListener: function(type, handler){
                handler({
                    deltaY: testData.down.delta,
                    preventDefault: function(){
                        prevented = true;
                    }
                });
            }
        };

        var WheelIndicator = require('../lib/wheel-indicator');

        new WheelIndicator({
            elem: document,
            preventMouse: true
        });

        prevented.should.be.eql(true);

        prevented = true;

        new WheelIndicator({
            elem: document,
            preventMouse: false
        });

        prevented.should.be.eql(true);
    });

    it('Correct working of option "callback"', function () {
        var correctCb = false;

        global.document = {
            addEventListener: function(type, handler){
                handler({
                    deltaY: testData.down.delta
                });
            }
        };

        var WheelIndicator = require('../lib/wheel-indicator');

        new WheelIndicator({
            elem: document,
            callback: function(){
                correctCb = true;
            }
        });

        correctCb.should.be.eql(true);
    });
});
