export default interface Character {
    id?: string;
    nombre: string;
    altura: number;
    peso: number;
    colorCabello: string;
    colorPiel: string,
    colorOjos: string;
    nacimiento: string;
    genero: string;
    mundoNatal: string;
    peliculas: string[];
    especies: string[];
    vehiculos: string[];
    navesEstelares: string[];
    creado: Date;
    editado?: Date;
    url: string;
}