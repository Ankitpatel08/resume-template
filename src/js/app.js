import appCss from '../scss/app.scss';
import data from '../data/data.json';
import headerTpl from '../tpl/header.hbs';
import aboutTpl from '../tpl/about.hbs';
import workExpTpl from '../tpl/work-experience.hbs';
import educationTpl from '../tpl/education.hbs';
import personalSkillsTpl from '../tpl/personal-skills.hbs';
import professionalSkillsTpl from '../tpl/professional-skills.hbs';
import awardsTpl from '../tpl/awards.hbs';

export default class application {
    constructor() {
        let self = this;
        this.headerEl = document.querySelector('#header');
        this.aboutEl = document.querySelector('#about');
        this.workExpEl = document.querySelector('#work-experience');
        this.educationEl = document.querySelector('#education');
        this.personalSkillsEl = document.querySelector('#personal-skills');
        this.professionalSkillsEl = document.querySelector('#professional-skills');
        this.awardsEl = document.querySelector('#awards');

        this.headerEl.insertAdjacentHTML('beforeend', headerTpl(data.header));
        this.aboutEl.insertAdjacentHTML('beforeend', aboutTpl(data.about));
        this.workExpEl.insertAdjacentHTML('beforeend', workExpTpl(data.workExperience));
        this.educationEl.insertAdjacentHTML('beforeend', educationTpl(data.education));
        this.personalSkillsEl.insertAdjacentHTML('beforeend', personalSkillsTpl(data.personalSkills));
        this.professionalSkillsEl.insertAdjacentHTML('beforeend', professionalSkillsTpl(data.professionalSkills));
        this.awardsEl.insertAdjacentHTML('beforeend', awardsTpl(data.awards));

    }
}

new application();


