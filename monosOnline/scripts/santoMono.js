var SantoMono = /** @class */ (function () {
    function SantoMono(id, name, description, birthdate, image, powerLever) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.birthdate = birthdate;
        this.image = image;
        this.powerLever = powerLever;
    }
    SantoMono.prototype.getId = function () {
        return this.id;
    };
    SantoMono.prototype.getName = function () {
        return this.name;
    };
    SantoMono.prototype.getDescription = function () {
        return this.description;
    };
    SantoMono.prototype.getBirthdate = function () {
        return this.birthdate;
    };
    SantoMono.prototype.getImage = function () {
        return this.image;
    };
    SantoMono.prototype.getPowerLever = function () {
        return this.powerLever;
    };
    return SantoMono;
}());
export { SantoMono };
