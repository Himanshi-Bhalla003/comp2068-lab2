var express = require('express');
var router = express.Router();

function calculate(method, x, y){
  if(method == "add"){
    return x+y;
  }
  else if(method == "subtract"){
    return x-y;
  }
  else if(method == "multiply"){
    return x*y;
  }
  else if(method == "divide"){
    return x/y;
  }
  else{
    return "Error"
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.data);

  var method = req.query.method;
  var operation;

  if(method == "add"){
    operation = " + "
  }
  else if(method == "subtract"){
    operation = " - "
  }
  else if(method == "multiply"){
    operation = " * "
  }
  else if(method == "divide"){
    operation = " / "
  }

  // var n1 = data.x;
  var x = Number(req.query.x);
  
  // var n2 = data.y;
  var y = Number(req.query.y);

  var ans = calculate(method, x, y)
  res.send(x + operation + y + " = " + ans.toString());
});

module.exports = router;
