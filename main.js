import "./style.css";
import cv from "/cv.json";

const skills = cv.competencespro.map((skill) => {return `<li><img src="icon/check.png" alt="check">${skill}</li>`}).join("")
const langues = cv.langues.map((lang) => {return `<li>${lang}</li>`}).join("")
const centre = cv.centreDInteret.map((int) => {return `<li>${int}</li>`}).join("")
const competences = (comps) => {
    if(comps != null){
        return comps.map((comp) => {return `<li>${comp}</li>`}).join("")
    } else {
        return ""
    }
}
const experiences = cv.experiences.map((exp) => {
    return `
    <div class="section">
        <p><strong>${exp.anneedeb}<img src="icon/prochain.png" alt="fleche-droite">${exp.anneefin}</strong>
        </p>
        <p>${exp.poste}<em class="text-vert"> ${exp.societe}</em></p>

        <ul>
            ${competences(exp.competences ? exp.competences : null)}
        </ul>
    </div>`
}).join("")
const formation = cv.etudeformation.map((form) => {return `<p>
    <strong>
    ${form.anneedeb} <img src="icon/prochain.png" alt="fleche-droite"> ${form.anneefin}
    </strong>
    <em class="text-vert">
        ${form.lieu}
    </em>
</p>
<ul>
    ${competences(form.competences)}
</ul>`}).join("")
const autres = cv.autreexperiences.map((autre) => {return `<li>${autre}</li>`}).join("")

document.querySelector("#app").innerHTML = `
<div class="CV-Conteneur">
<div class="Colonne-Gauche">
    <img class="portrait" src="../images/bandicam_2021-03-13_23-05-00-707.png" alt="Portrait">
    <div class="section">
    <p>
        <img src="./icon/linkedin.png" alt="Icone linkedin"> ${cv.prenom} ${cv.nom}
    </p>
    </div>
    <div class="section">
    <h2>À PROPOS</h2>
    <p>
        ${cv.propos}
    </p>
    </div>
    <div class="section">
    <h2>COMPÉTENCES</h2>
    <ul class="skills">
        ${skills}
    </ul>
    </div>
    <div class="section">
    <h2>Langues</h2>
    <p>
        ${langues}
    </p>
    </div>
    <div class="section">
    <h2>Centre d'intérêt</h2>
    <ul>
        ${centre}
    </ul>
    </div>
</div>
<div class="colonne-droite">
    <div class="header">
    <h1>${cv.prenom} <span class="text-vert text-uppercase">${cv.nom}</span></h1>
    <p>${cv.fonction}</p>
    <ul class="infos">
        <li><img src="icon/e-mail.png" alt="Mail"><a href="mailto:${cv.mail}"> ${cv.mail}</a></li>
        <li><img src="icon/telephone-portable.png" alt="telephone-portable"> ${cv.telephone}</li>
        <li><img src="icon/carte.png" alt="Carte"> ${cv.adresse}</li>
    </ul>
    </div>
    <div class="content">
    <h2>Expériences <span class="text-vert">professionnelles</span></h2>
    ${experiences}
    <div class="section">
        <h1>Études <span class="text-vert">&Formation</span></h1>
        ${formation}
    </div>
    <div class="section" id="autres">
        <h2>Autres <span class="text-vert">Expériences</span></h2>
        <ul>
        ${autres}
        </ul>
    </div>
    </div>
</div>
</div>
`;