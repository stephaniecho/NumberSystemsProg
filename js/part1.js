function ConversionPart1() {

    var UnsignedInt = document.getElementById("1_UnsignedInt").value;
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);
    var outputValue = null;
    var num = 0;
    var answer = "";
    for (var i = 0; i < UnsignedInt.length; i++){
      num = num * UnsignedIntBaseFrom;
      num = num + parseInt(UnsignedInt.charAt(i));
    }
    console.log(num);
    while (num > 0 ){
      answer = (num % UnsignedIntBaseTo) + answer;
      num = Math.floor(num / UnsignedIntBaseTo);
    }
    var outputValue = Number(answer);
  // Show the output on the screen
FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);
}
