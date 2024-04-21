export class SantoMono {
    id: number;
    name: string;
    description: string;
    birthdate: string;
    image: string;
    powerLever: number;
    meme: string;


    constructor(id: number, name: string, description: string, birthdate: string, image: string,powerLever: number, meme: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.birthdate = birthdate;
        this.image = image;
        this.powerLever = powerLever;
        this.meme = meme;
    }

    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getDescription(): string {
        return this.description;
    }
    getBirthdate(): string {
        return this.birthdate;
    }
    getImage(): string {
        return this.image;
    }
    getPowerLever(): number {
        return this.powerLever;
    }
    getMeme(): string {
        return this.meme;
    }
}