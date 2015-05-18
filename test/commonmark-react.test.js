'use strict';

var React = require('react/addons'),
    jsdom = require('mocha-jsdom'),
    expect = require('chai').expect,
    CommonmarkReact = require('../');

var TestUtils = React.addons.TestUtils;

describe('CommonmarkReact', function() {
    jsdom();

    var testText = 'I was rendered using React at ' + (new Date()).toString();

    before('render and locate element', function() {
        this.rendered = TestUtils.renderIntoDocument(
            <CommonmarkReact text={testText} />
        );
    });

    it('should have passed text prop as inner text', function() {
        expect(this.rendered.getDOMNode().innerHTML).to.equal(testText);
    });

    it('should not pass before tests are updated', function() {
        expect(false, 'tests implemented').to.equal(true);
    });
});
