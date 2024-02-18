let billettene = [];
function kjopBillett() {
    let valgtFilm = document.getElementById("filmer").value;
    let valgteBilletter = document.getElementById("antallBillett").value;
    let valgtFornavn = document.getElementById("velgFornavn").value;
    let valgtEtternavn = document.getElementById("velgEtternavn").value;
    let valgtTelefonnummer = document.getElementById("velgTelefonnummer").value;
    let valgtEpost = document.getElementById("velgEpost").value;

    const billett1 = {
        film: valgtFilm,
            antall: valgteBilletter,
            fornavn: valgtFornavn,
            etternavn: valgtEtternavn,
            telefonnummer: valgtTelefonnummer,
            epost: valgtEpost
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