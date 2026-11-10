const original = "Aufa&Azzaky=Arief";

const encoded = btoa(original);
console.log(encoded); // Output: QWVmYSZBenpha3k9QXJpZWY=

const decoded = atob(encoded);
console.log(decoded); // Output: Aufa&Azzaky=Arief