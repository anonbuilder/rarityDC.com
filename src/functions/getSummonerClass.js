import fighterImg from '../img/summoners/fighter.png';
import wizardImg from '../img/summoners/wizard.png';

import barbarianImg from '../img/summoners/barbarian.png';
import bardImg from '../img/summoners/bard.png';

import clericImg from '../img/summoners/cleric.png';
import monkImg from '../img/summoners/monk.png';

import paladinImg from '../img/summoners/paladin.png';
import rangerImg from '../img/summoners/ranger.png';

import emptyImg from '../img/summoners/empty.png';

export function getSummonerClass(classId){
    if (classId === 1) {
        return "Barbarian";//x
    } else if (classId === 2) {
        return "Bard";//x
    } else if (classId === 3) {
        return "Cleric";//x
    } else if (classId === 4) {
        return "Druid";
    } else if (classId === 5) {
        return "Fighter";//x
    } else if (classId === 6) {
        return "Monk";//x
    } else if (classId === 7) {
        return "Paladin";//x
    } else if (classId === 8) {
        return "Ranger";//x
    } else if (classId === 9) {
        return "Rogue";
    } else if (classId === 10) {
        return "Sorcerer";
    } else if (classId === 11) {
        return "Wizard";//x
    }  
}

export function getSummonerImg(classId){
    if (classId === 1) {
        return barbarianImg;
    } else if (classId === 2) {
        return bardImg;
    } else if (classId === 3) {
        return clericImg;
    } else if (classId === 4) {
        return emptyImg;
    } else if (classId === 5) {
        return fighterImg;
    } else if (classId === 6) {
        return monkImg;
    } else if (classId === 7) {
        return paladinImg;
    } else if (classId === 8) {
        return rangerImg;
    } else if (classId === 9) {
        return emptyImg;
    } else if (classId === 10) {
        return emptyImg;
    } else if (classId === 11) {
        return wizardImg;
    }  
}