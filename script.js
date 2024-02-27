let billetter = [];

function visBilletter(){

    let kjøptFilm = document.getElementById("filmer").value;
    let antallBilletter = document.getElementById("antallBilletter").value;
    let gittnavn = document.getElementById("fornavn").value;
    let slektsnavn = document.getElementById("etternavn").value;
    let tlf = document.getElementById("telefon").value;
    let mail = document.getElementById("epost").value;
    let isValid = true;

    const numberRegex = /^\d+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const textRegex = /\d/

    // Nullstill feilmeldinger
    document.getElementById("velgFilmError").textContent = "";
    document.getElementById("fornavnError").textContent = "";
    document.getElementById("antallError").textContent = "";
    document.getElementById("etternavnError").textContent = "";
    document.getElementById("telefonError").textContent = "";
    document.getElementById("epostError").textContent = "";
    
    // Valider valgt film
    console.log(kjøptFilm, kjøptFilm === 'velg-film')
    if(kjøptFilm === 'velg-film'){
        document.getElementById("velgFilmError").textContent = "Må velge en film*";
        document.getElementById("velgFilmError").style.color = "red"; // Endre tekstfargen til rød
        document.getElementById("velgFilmError").style.fontSize = "14px"; // Endre font størrelse
        isValid = false;
    }

    // Valider antall billetter
    if (Number(antallBilletter) === 0 || !numberRegex.test(Number(antallBilletter)))  {
        document.getElementById("antallError").textContent = "Må skrive antall billetter*";
        document.getElementById("antallError").style.color = "red"; // Endre tekstfargen til rød
        document.getElementById("antallError").style.fontSize = "14px"; // Endre font størrelse
        isValid = false;
    }

    // Valider fornavn
    if (gittnavn.trim() === "" || textRegex.test(gittnavn))  {
        document.getElementById("fornavnError").textContent = "Må skrive noe i fornavnet*";
        document.getElementById("fornavnError").style.color = "red"; // Endre tekstfargen til rød
        document.getElementById("fornavnError").style.fontSize = "14px"; // Endre font størrelse
        isValid = false;
    }

    // Valider etternavn
    if (slektsnavn.trim() === "" || textRegex.test(slektsnavn)) {
        document.getElementById("etternavnError").textContent = "Må skrive noe i etternavnet*";
        document.getElementById("etternavnError").style.color = "red"; // Endre tekstfargen til rød
        document.getElementById("etternavnError").style.fontSize = "14px"; // Endre font størrelse
        isValid = false;
    }
    
    // Valider telefonnummer
    if (!numberRegex.test(tlf) || tlf.length !==8) {
        document.getElementById("telefonError").textContent = "Må skrive noe i telefonnummeret*";
        document.getElementById("telefonError").style.color = "red"; // Endre tekstfargen til rød
        document.getElementById("telefonError").style.fontSize = "14px"; // Endre font størrelse
        isValid = false;
    }


    // Valider e-postadresse
   if (mail.trim() === "" || !emailRegex.test(mail)) {
        document.getElementById("epostError").textContent = "Må skrive noe i e-postadressen*";
        document.getElementById("epostError").style.color = "red"; // Endre tekstfargen til rød
        document.getElementById("epostError").style.fontSize = "14px"; // Endre font størrelse
        isValid = false;
    }

    if (!isValid) {
        // Avbryt billettkjøpet hvis validering mislykkes
        return;
    }

    const billett1 = {
        filmer: kjøptFilm,
        antall: antallBilletter,
        fornavn: gittnavn,
        etternavn: slektsnavn,
        telefon: tlf,
        epost: mail
    };

    billetter.push(billett1);
    
    ut();

    document.getElementById("filmer").value = "";
    document.getElementById("antallBilletter").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("epost").value = "";

}

function ut(){
    
    let skrivUt = "<table id='kvittering'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post</th></tr>";
    for(let i = 0; i < billetter.length; i++){
        skrivUt += "<tr>";
        skrivUt += "<td>" + billetter[i].filmer + "</td>";
        skrivUt += "<td>" + billetter[i].antall + "</td>";
        skrivUt += "<td>" + billetter[i].fornavn + "</td>";
        skrivUt += "<td>" + billetter[i].etternavn + "</td>";
        skrivUt += "<td>" + billetter[i].telefon + "</td>";
        skrivUt += "<td>" + billetter[i].epost + "</td>";
        skrivUt += "</tr>";
    }

    skrivUt += "</table>";
    document.getElementById("kjøptBilletter").innerHTML = skrivUt;

}

function slettBilletter(){
    const table = document.getElementById('kvittering')
    billetter = [];
    console.log(billetter);

    if (table) {
        table.parentNode.removeChild(table);
    }
}
