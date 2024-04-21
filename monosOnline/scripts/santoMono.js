var SantoMono = /** @class */ (function () {
    function SantoMono(id, name, description, birthdate, image, powerLever, meme) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.birthdate = birthdate;
        this.image = image;
        this.powerLever = powerLever;
        this.meme = meme;
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
    SantoMono.prototype.getMeme = function () {
        return this.meme;
    };
    return SantoMono;
}());
export { SantoMono };
