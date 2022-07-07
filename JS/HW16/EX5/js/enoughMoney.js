function checkWallet(money, items)
{
    let purchased_items = [];
    let array = Object.keys(items);
    for (let i = 0; i < array.length; i++) 
    {
        items[array[i]] = parseInt(items[array[i]].replace("$","").replace(",",""),10)
        if(money >= items[array[i]])
        {
            money = money - items[array[i]];
            purchased_items.push(array[i]);
        }
        
    }
    purchased_items.sort();
    return purchased_items;
}
function main ()
{
    store = 
    {
        Apple: "$4",
        Honey: "$3",
        Fan: "$14",
        Bananas: "$4",
        Pan: "$100",
        Spoon: "$2"
    },
    console.log(checkWallet(100, store));
    
}
main();


