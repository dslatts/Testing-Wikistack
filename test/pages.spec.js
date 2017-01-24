const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');

const pages = require('../models/');
const Page = pages.Page;

chai.use(spies);

describe('Page object', function(){
  it ('returns a promise from Page.findAll', function(){
    expect(Page.findAll()).to.be.a('object');
  })
})
