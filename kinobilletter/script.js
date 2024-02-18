let billettene = [];

function visBilletter() {
    let kjøptFilm = document.getElementById("filmer").value;
    let valgteBilletter = document.getElementById("antallBilletter").value;
    let valgtFornavn = document.getElementById("Fornavn").value;
    let valgtEtternavn = document.getElementById("Etternavn").value;
    let valgtTelefonnummer = document.getElementById("Telefonnummer").value;
    let valgtEpost = document.getElementById("Epost").value;

    const billett1 = {
        filmer: kjøptFilm,
        antall: antallBilletter,
        fornavn: gittnavn,
        etternavn: slektsnavn,
        telefonnummer: valgtTelefonnummer,
        epost: Epost
    };

    if(billett1.antall === ""){
        document.getElementById("feilAntall").innerHTML = "Må skrive noe inn i antall";
    } else{
        document.getElementById("feilAntall").innerHTML = "";
    } 
    if(billett1.fornavn === ""){
        document.getElementById("feilFornavn").innerHTML = "Må skrive noe inn i fornavn";
    } else {
        document.getElementById("feilFornavn").innerHTML = "";
    } if(billett1.etternavn === ""){
        document.getElementById("feilEtternavn").innerHTML = "Må skrive noe inn i etternavn";
    } else {
        document.getElementById("feilEtternavn").innerHTML = "";
    }
    if(billett1.telefonnummer === ""){
        document.getElementById("feilTelefonnummer").innerHTML = "Må skrive noe inn i telefonnummer";
    } else {
        document.getElementById("feilTelefonnummer").innerHTML = "";
    }
    if(billett1.epost === ""){
        document.getElementById("feilEpost").innerHTML = "Må skrive noe inn i epost";
    } else {
        document.getElementById("feilEpost").innerHTML = "";
    }

    billettene.push(billett1);
        skrivUt();

        document.getElementById("filmer").value = "";
        document.getElementById("antallBillett").value = "";
        document.getElementById("velgFornavn").value = "";
        document.getElementById("velgEtternavn").value = "";
        document.getElementById("velgTelefonnummer").value = "";
        document.getElementById("velgEpost").value = "";
}

function skrivUt() {
    let ut = "";
    for (let i = 0; i < billettene.length; i++) {
        ut += billettene[i].film + " " + billettene[i].antall + " " + billettene[i].fornavn
                + " " + billettene[i].etternavn + " " + billettene[i].telefonnummer +
                " " + billettene[i].epost + "<br>";
    }
    document.getElementById("utskrift").innerHTML = ut;
}

function slettBillett() {
    billettene = [];
        console.log(billettene);
        skrivUt();
}