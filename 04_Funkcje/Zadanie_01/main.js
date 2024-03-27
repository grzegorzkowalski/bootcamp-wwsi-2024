function countWord() {
    const text = prompt();
    if (!text) {
        console.log("Tekst nie mam co liczyć.");
        return null;
    }

    const tab = text.split(" ");
    console.log(tab);
    console.log('Tekst: ' + '"' + text + '"' + ' składa się z ' + tab.length + ' wyrazów');
    console.log(`Tekst: "${text}" składa się z ${tab.length} wyrazów`);
}

countWord("Koty to fajne zwierzaki");