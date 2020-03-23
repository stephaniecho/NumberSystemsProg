function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);

    while (SignedDecimalInt != 0 ){
     var baseTwoNum = SignedDecimalInt % 2 + baseTwoNum;
     SignedDecimalInt = SignedDecimalInt /2;
   }
   outputValue = SignedDecimalInt;
    //     integerValue = integerValue / UnsignedIntBaseTo
    // }

    var outputValue = "010110101000110110011101";
    var outputValueTwosComplement = "101001010111001001100011";

    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
    return outputValue;
}
