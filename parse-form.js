/*global ParseForm:true */

ParseForm = function(elem) {
  var self = this;

  if (!elem) return console.error('You must provide an element or selector');
  
  // save dom node if it's not a jquery selector
  if (typeof this.el !== 'string') {
    this.el = elem;
  }

  // cache form jQuery object
  this.$el = $(elem);

  // save each input into array, e.g. [{name: 'email', value:'jdoe@gmail.com'}]
  this.inputs = this.$el.serializeArray();

  // itterate through all inputs and set their 'name' attr to the key & set the
  // input value to the key's value. let's you call form.email to grab value.
  // TODO refactor into for loop
  $.each(this.inputs, function(i, el){
    var name = self.inputs[i].name;
    // save input value, e.g. form.email >>> 'jdoe@gmail.com'
    self[name] = self.inputs[i].value;
    // save jquery cached element, e.g. form.$email
    self['$' + name] = self.$el.find("input:nth-child("+ (i+1) +")");
  });

};

