let biletter = [];


function visBilletter(){
    let kjøptFilm = document.getElementById("filmer").value;
    let antallBilletter = document.getElementById("antallBilletter").value;
    let gittnavn = document.getElementById("fornavn").value;
    let slektsnavn = document.getElementById("etternavn").value;
    let tlf = document.getElementById("telefon").value;
    let mail = document.getElementById("epost").value;

    // Nullstill feilmeldinger
    document.getElementById("fornavnError").textContent = "";
    document.getElementById("etternavnError").textContent = "";
    document.getElementById("telefonError").textContent = "";
    document.getElementById("epostError").textContent = "";

    let isValid = true;
    
    // Valider fornavn
    if (gittnavn.trim() === "" || /\d/.test(gittnavn))  {
        document.getElementById("fornavnError").textContent = "Må skrive noe i fornavnet*";
        isValid = false;
    }

    // Valider etternavn
    if (slektsnavn.trim() === "" || /\d/.test(slektsnavn)) {
        document.getElementById("etternavnError").textContent = "Må skrive noe i etternavnet*";
        isValid = false;
    }
    
    // Valider telefonnummer
    if (tlf.trim() === "" || !Number(tlf) || tlf.length !==8) {
        document.getElementById("telefinError").textContent = "Må skrive noe i telefonnummeret*";
        isValid = false;
    }

    // Valider e-postadresse
   if (mail.trim() === "" || !mail.includes("@") || !mail.includes(".")) {
        document.getElementById("epostError").textContent = "Må skrive noe i e-postadressen*";
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
    let skrivUt = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post</th></tr>";
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
    billetter = [];
    console.log(billetter);
    ut();
}