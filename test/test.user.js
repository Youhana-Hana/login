var users = require('./../lib/users.js'),
	assert = require('assert'),
	should = require('should')
	mocha = require('mocha'),
	sinon = require('sinon');

describe('users', function() {

 /*before(function(){
        var list = sinon.stub(users, 'list');
	
	list = [
	{ id: 3, username: 'user3', password: 'password1', email: 'email1@mail.com'},
	{ id: 4, username: 'user4', password: 'password2', email: 'email2@mail.com'}
	];

  });
*/
  describe('findById()', function() {
    it('should throw error if user not exists', function() {
	users.findById(10, function(err, user) {
	  if(!err) { should.fail('user is not exist') }
	 });	
     });

    it('should find user if user exists', function() {
	users.findById(1, function(err, user) {
	  if(err) { throw err }
 	  should.exist(user);
	  assert.equal(1, user.id);
	  assert.equal("user1", user.username); 	
	 });	
     });
	
  });

  describe('findByUsername()', function() {
    it('should throw error if user not exists', function() {
	users.findByUsername('notexists', function(err, user) {
	   if(err) { throw err }	  
	   should.not.exist(user);
	 });	
     });

    it('should find user if user exists', function() {
	users.findByUsername('user2', function(err, user) {
	  if(err) { throw err }
 	  should.exist(user);
	  assert.equal(2, user.id);
	  assert.equal("user2", user.username); 	
	 });	
     });
	
  });

  describe('authenticate()', function() {
    it('should return false if invalid user', function() {
	users.authenticate('notexists', '', function(err, user, options) {
	   if(err) { throw err }	  
	   user.should.be.false;
	   options.message.should.equal('unknown user notexists');

	 });	
     });

    it('should return false if password not matching', function() {
	users.authenticate('user1', '', function(err, user, options) {
	   if(err) { throw err }	  
	   user.should.be.false;
	   options.message.should.equal('invalid password');
	 });	
     });
	
    it('should return user autenticated', function() {
	users.authenticate('user1', 'password1', function(err, user, options) {
	   if(err) { throw err }	  
	   should.exist(user);
	   assert.equal(1, user.id);
	   assert.equal("user1", user.username);
	 });	
     });

  });

/*
 after(function(){
 	list.restore();
  });*/
});

