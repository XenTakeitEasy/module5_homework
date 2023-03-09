let company = new Map();
company.set("Amalgama", "Ecstas");
company.set("Takeiteasy", "JuJu");
company.set("Lola", "Sense");
for (let item of company){
    console.log(`ключ - ${item[0]}, значение - ${item[1]}`);
}