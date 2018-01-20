var Bar, Baz, Foo, Text, a, append, b;

append = function(ele, txt) {
  var div;
  div = document.createElement('div');
  div.innerHTML = txt;
  return ele.appendChild(div);
};

Text = class Text {
  constructor(name) {
    this.name = name;
  }

  write(label) {
    var str;
    str = `Scripted lorem ipsum text - ${label} - ` + this.name;
    return append(document.body, str);
  }

};

Foo = class Foo extends Text {
  write() {
    return super.write("foo");
  }

};

Bar = class Bar extends Text {
  write() {
    return super.write("barfdsafsadfsdaf");
  }

};

Baz = (function() {
  var bar, foo;

  class Baz {
    write() {
      foo.write();
      return bar.write();
    }

  };

  foo = new Foo("3");

  bar = new Bar("4");

  return Baz;

}).call(this);

a = new Foo("1");

b = new Bar("2");

a.write();

b.write();

document.onreadystatechange = function() {
  var c;
  if (document.readyState === "complete") {
    c = new Baz;
    return c.write();
  }
};
