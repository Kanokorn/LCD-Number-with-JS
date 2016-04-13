describe("LCD Number", function() {
    it("should display 1 correct", function() {
        var expectedNumber = [" ", "|", "|", " ", "|", "|", " "];
        var lcd = new LCD(1);
        expect(lcd.display()).toEqual(expectedNumber);
    });
});
