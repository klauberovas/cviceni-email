// console.log('funguju');
// E-mail, pozdravy
// Vytvořte funkci, která vloží do e-mailu rozloučení.
// Vytvořte si repozitář ze šablony cviceni-email se stránkou obsahující šablonu jednoduchého e-mailu.

// Každý e-mail je třeba zakončit zdvořilým pozdravem.

// V souboru index.js vytvořte funkci bez parametrů s názvem goodbye. Tato funkce vloží do odstavce s třídou email__closing rozloučení „Na shledanou“.

// Zavolejte funkci goodbye() na konci souboru index.js. Ověřte, že se na zobrazené stránce správně změnil pozdrav na konci e-mailu.

// Končit e-mail jen slovy „Na shledanou“ je nezdvořilé. Přidejte proto do funkce goodbye parametr představující jméno pisatele e-mailu. Funkce do posledního odstavce vloží koncový pozdrav i se jménem. Příklad použití:

// goodbye('Pavel Ovesný');
// Ve stránce bude

// S pozdravem Pavel Ovesný
const goodbye = (name) => {
  return `S pozdravem ${name}`;
};

// Do souboru index.js přidejte funkci fillSubject s jedním parametrem subject. Tato funkce ze stránky vybere DOM element představující předmět e-mailu a nastaví jeho obsah na řetězec, který přišel v parametru.
// Zavolejte funkci na konci souboru index.js a vykoušejte si nastavit předmět e-mailu na nějaký smysluplný text.
const fillSubject = (subject) => {
  const emailSubjectElm = document.querySelector('.email__subject');
  emailSubjectElm.textContent = `${subject}`;
};
fillSubject('Zájem o pozici Hlavní recepční');

// Napište funkci fillBody s jedním parametrem body, která ze stránky vybere DOM element představující tělo e-mailu a nastaví jeho obsah dle hodnoty parametru.
// Zavolejte funkci na konci souboru index.js a ověřte, že v zobrazené stránce správně změní tělo e-mailu.
// Z předchozího cvičení nám zůstala funkce goodbye. Do funkce fillBody přidejte další parametr s názvem name. Tento parametr bude představovat jméno odesílatele. Funkce vyplní tělo e-mailu a do elementu email__closing vloží pozdrav, který vyrobí pomocí volání funkce goodbye.
const fillBody = (body, name) => {
  const emailBodyElm = document.querySelector('.email__body');
  emailBodyElm.innerHTML = `${body}`;

  const emailClosingElm = document.querySelector('.email__closing');
  emailClosingElm.textContent = goodbye(name);
  // emailClosingElm.textContent = `S pozdravem ${goodbye(name)}`;
};
fillBody(
  `
  <p>reaguji na nabídku práce na pozici Hlavní recepční, kterou Vaše společnost inzerovala 1. 9. 2016 na portálu Jobs.cz. Z nabídek práce v tomto oboru mě zaujala právě ta Vaše, jelikož mě láká práce v dynamickém prostředí nadnárodní společnosti, která nabízí možnost dalšího vzdělávání a profesního růstu. Zároveň věřím, že vzhledem ke svým pracovním zkušenostem a schopnostem splňuji předpoklady pro inzerovanou pozici.</p>

  <p>Absolvovala jsem rekvalifikační kurz Administrativní pracovník, poté jsem v několika firmách vykonávala práci na pozicích asistentka a recepční. Hovořím plynně anglicky, německy a francouzsky, dále brilantně zvládám práci se systémem SAP, který Vaše společnost používá. Mezi mé přednosti patří komunikační a organizační schopnosti, dále pak pečlivost a spolehlivost.</p> 
  
  <p>Více informací o mně naleznete v přiloženém životopisu, případně mě kontaktujte na tomto emailu nebo na níže uvedeném telefonním čísle.</p>`,
  'Šárka Klauberová',
);
