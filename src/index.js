module.exports = function toReadable (number) {
    
        let units = [
          "",
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "ten",
          "eleven",
          "twelve",
          "thirteen",
          "fourteen",
          "fifteen",
          "sixteen",
          "seventeen",
          "eighteen",
          "nineteen",
        ];
        let tenths = [
          "",
          "",
          "twenty",
          "thirty",
          "forty",
          "fifty",
          "sixty",
          "seventy",
          "eighty",
          "ninety",
        ];
        let rest = ["hundred", "thousand", "million"];
        let numberToWord;
      
        let digits;
        digits = number.toString().split("");
        if (digits == 0) {
          numberToWord = "zero";
        } else {
          let count = digits.length;
          switch (count) {
            case 1:
              if (number > 1 || number < 10) {
                numberToWord = units[Number(digits[0])];
              }
              break;
            case 2:
              let ten = Number(digits[0] + digits[1]);
              if (ten < 20) {
                numberToWord = units[number];
              } else {
                numberToWord =
                  tenths[Number(digits[0])] + " " + units[Number(digits[1])];
              }
              break;
            case 3:
              if (number > 99 || number < 1000) {
                let ten = Number(digits[1] + digits[2]);
                if (ten < 20) {
                  numberToWord =
                    units[Number(digits[0])] + " " + rest[0] + " " + units[ten];
                } else {
                  numberToWord =
                    units[Number(digits[0])] +
                    " " +
                    rest[0] +
                    " " +
                    tenths[Number(digits[1])] +
                    " " +
                    units[Number(digits[2])];
                }
              }
              break;
            case 4:
              if (number > 1000 || number < 10000) {
                let ten = Number(digits[2] + digits[3]);
                if (ten <= 20) {
                  numberToWord =
                    units[Number(digits[0])] +
                    " " +
                    rest[1] +
                    " " +
                    units[Number(digits[1])] +
                    " " +
                    rest[0] +
                    " " +
                    units[Number(ten)];
                } else {
                  numberToWord =
                    units[Number(digits[0])] +
                    " " +
                    rest[1] +
                    " " +
                    units[Number(digits[1])] +
                    " " +
                    rest[0] +
                    " " +
                    tenths[Number(digits[2])] +
                    " " +
                    units[Number(digits[3])];
                }
              }
              break;
            default:
              numberToWord = "error";
          }
        }
      
        return numberToWord.trim();
      
      
      console.log(toReadable(30));
      
}
