function LCD(number) {
    this.display = display;

    function display() {
        var mapNumberPattern, result;

        mapNumberPattern = {
            "0": [" -- ", "|  |", "|  |", "    ", "|  |", "|  |", " -- "],
            "1": [ ' ', '|', '|', ' ', '|', '|', ' ' ],
            "2": [" -- ", "   |", "   |", " -- ", "|   ", "|   ", " -- "],
            "3": [" -- ", "   |", "   |", " -- ", "   |", "   |", " -- "],
            "4": ["    ", "|  |", "|  |", " -- ", "   |", "   |", "    "],
            "5": [" -- ", "|   ", "|   ", " -- ", "   |", "   |", " -- "],
            "6": [" -- ", "|   ", "|   ", " -- ", "|  |", "|  |", " -- "],
            "7": [" -- ", "   |", "   |", " ", "   |", "   |", " "],
            "8": [" -- ", "|  |", "|  |", " -- ", "|  |", "|  |", " -- "],
            "9": [" -- ", "|  |", "|  |", " -- ", "   |", "   |", " -- "]
        };

        result = mapNumberPattern[number[0]];

        for (var i=1; i < number.length ; i++) {
            result = mergeNumber(result, mapNumberPattern[number[i]]);
        }

        // console.log("\n" + result.join("\n") + "\n");
        return result;
    }

    function mergeNumber(m0, m1) {
        return [
                m0[0]+ " " + m1[0],
                m0[1]+ " " + m1[1],
                m0[2]+ " " + m1[2],
                m0[3]+ " " + m1[3],
                m0[4]+ " " + m1[4],
                m0[5]+ " " + m1[5],
                m0[6]+ " " + m1[6]
        ]
    }
}
