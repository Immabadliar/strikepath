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

const AC130J = new Aircraft(
    "AC130J Gunship",
    299,
    164000,
    13830,
    ["105mm", "30mm", "7.62mm", "AGM-176", "AGM-114", "GBU-39"],
    70000,
    3130,
    true,
    ["105mm M102 Howitzer", "30mm GAU-23/A", "7.62mm GAU-21"],
    6
);

const F16C = new Aircraft(
    "F-16C Viper",
    1500, // max speed in knots approx Mach 2
    42000, // max takeoff weight (lbs)
    17000, // weapon load limit (lbs)
    ["AIM-9", "AIM-120", "GBU-12", "AGM-65", "Mk-82"],
    19000, // base weight (lbs)
    8200, // min runway length (ft)
    true,
    ["M61 Vulcan 20mm", "AIM-9 Sidewinder", "AIM-120 AMRAAM"],
    1
);

const A10C = new Aircraft(
    "A-10C II",
    450, // max speed (knots)
    29000, // mtow (lbs)
    16500, // weapon load limit (lbs)
    ["GAU-8/A", "AGM-65", "Hydra 70", "Mk-82", "CBU-87"],
    17000, // base weight (lbs)
    5200, // min runway length (ft)
    true,
    ["GAU-8/A Avenger 30mm", "AGM-65 Maverick", "Hydra 70 Rockets"],
    1
);

const vehicles = { AC130J, F16C, A10C };
export default vehicles;
