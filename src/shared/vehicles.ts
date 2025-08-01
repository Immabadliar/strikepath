import { Workspace } from "@rbxts/services";

class Aircraft {
    name: string;
    max_speed: number;
    mtow: number;
    weapon_limits: number;
    allowed_weapons: string[];
    base_weight: number;
    rwy_length_min: number;
    flaps: boolean;
    guns: string[];
    max_crew: number;

    constructor(name: string, max_speed: number, mtow: number, weapon_limits: number, allowed_weapons: string[], base_weight: number, rwy_length_min: number, flaps: boolean, guns: string[], max_crew: number) {
        this.name = name;
        this.max_speed = max_speed;
        this.mtow = mtow;
        this.weapon_limits = weapon_limits;
        this.allowed_weapons = allowed_weapons;
        this.base_weight = base_weight;
        this.rwy_length_min = rwy_length_min;
        this.flaps = flaps;
        this.guns = guns;
        this.max_crew = max_crew;
    }
}

const AC130J = new Aircraft("AC130J Gunship", 299, 164000, 13830, ["105mm", "30mm", "7.62mm", "AGM-176", "AGM-114", "GBU-39"], 70000, 3130, true, ["105mm M102 Howitzer", "30mm GAU-23/A", "7.62mm GAU-21"], 6);

const vehicles = { AC130J };
export default vehicles;
