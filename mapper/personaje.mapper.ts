import Character from "../model/character.model";
import PersonSwapiEntity from "../model/personSwapi.model";

export class CharacterMapper {
    static characterEntityFromObject(person: PersonSwapiEntity) {
        const {
            name,
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,
            birth_year,
            gender,
            homeworld,
            films,
            species,
            vehicles,
            starships,
            created,
            edited,
            url
        } = person;

        return {
           nombre: name,
           altura: +height,
           peso: +mass,
           colorCabello: hair_color,
           colorPiel: skin_color,
           colorOjos: eye_color,
           nacimiento: birth_year,
           genero: gender,
           mundoNatal: homeworld,
           peliculas: films,
           especies: species,
           vehiculos: vehicles,
           navesEstelares: starships,
           creado: created,
           editado: edited,
           url: url
        } as Character;
    }
}