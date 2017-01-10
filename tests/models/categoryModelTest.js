var expect = require('chai').expect;
var Category = require('APP/db/models/category');
var db = require ('APP/db');


describe('The `Category` model', function () {

  /**
   * First we clear the database and recreate the tables before beginning a run
   */

  before('wait for the db', () => db.didSync);


  /**
   * Next, we create an (un-saved!) CartProduct instance before every spec
   */
  var name = 'Companion';

  var category;
  beforeEach(function(){
    category = Category.build({
      name
    });
  });

  /**
   * Also, we empty the tables after each spec
   */
  afterEach(function () {
    return (Category.truncate({ cascade: true }))
  });

  describe('attributes definition for Category', function() {

    it('includes `name` field', function () {

      return category.save()
      .then(function (savedCategory) {
        expect(savedCategory.name).to.equal(name);

      });

    });

    describe('`validations for enumerables', function() {
      it('`name` must be one of the enumerables', function () {

        category.name = 'magenta';

        return category.validate()
        .then(function(result) {
          console.log(result.message);
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain('Validation min failed');
        });

      });

    });


  });
})