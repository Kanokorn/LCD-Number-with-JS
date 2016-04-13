describe("LCD Number", function() {
    it("should display 1 correct", function() {
        var expectedNumber = [" ", "|", "|", " ", "|", "|", " "];
        var lcd = new LCD("1");
        expect(lcd.display()).toEqual(expectedNumber);
    });

    it("should display 0 correct", function() {
        var expectedNumber = [" -- ", "|  |", "|  |", "    ", "|  |", "|  |", " -- "];
        var lcd = new LCD("0");
        expect(lcd.display()).toEqual(expectedNumber);
    });

    it("should display 2 correct", function() {
        var expectedNumber = [" -- ", "   |", "   |", " -- ", "|   ", "|   ", " -- "];
        var lcd = new LCD("2");
        expect(lcd.display()).toEqual(expectedNumber);
    });

    it("should display 3 correct", function() {
        var expectedNumber = [" -- ", "   |", "   |", " -- ", "   |", "   |", " -- "];
        var lcd = new LCD("3");
        expect(lcd.display()).toEqual(expectedNumber);
    });

    it("should display 4 correct", function() {
        var expectedNumber = ["    ", "|  |", "|  |", " -- ", "   |", "   |", "    "];
        var lcd = new LCD("4");
        expect(lcd.display()).toEqual(expectedNumber);
    });

    it("should display 5 correct", function() {
        var expectedNumber = [" -- ", "|   ", "|   ", " -- ", "   |", "   |", " -- "];
        var lcd = new LCD("5");
        expect(lcd.display()).toEqual(expectedNumber);
    });

    it("should display 6 correct", function() {
        var expectedNumber = [" -- ", "|   ", "|   ", " -- ", "|  |", "|  |", " -- "];
        var lcd = new LCD("6");
        expect(lcd.display()).toEqual(expectedNumber);
    });

    it("should display 7 correct", function() {
        var expectedNumber = [" -- ", "   |", "   |", " ", "   |", "   |", " "];
        var lcd = new LCD("7");
        expect(lcd.display()).toEqual(expectedNumber);
    });

    it("should display 8 correct", function() {
        var expectedNumber = [" -- ", "|  |", "|  |", " -- ", "|  |", "|  |", " -- "];
        var lcd = new LCD("8");
        expect(lcd.display()).toEqual(expectedNumber);
    });

    it("should display 9 correct", function() {
        var expectedNumber = [" -- ", "|  |", "|  |", " -- ", "   |", "   |", " -- "];
        var lcd = new LCD("9");
        expect(lcd.display()).toEqual(expectedNumber);
    });

    it("should display 01 correct", function() {
        var expectedNumber = [" --   ", "|  | |", "|  | |", "      ", "|  | |", "|  | |", " --   "];
        var lcd = new LCD("01");
        expect(lcd.display()).toEqual(expectedNumber);
    });
});
