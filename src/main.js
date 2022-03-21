var Cars = /** @class */ (function () {
    function Cars(color, engine) {
        this.carColor = color;
        this.carEngine = engine;
    }
    Cars.prototype.getCarColor = function () {
        return 'pink';
    };
    return Cars;
}());
