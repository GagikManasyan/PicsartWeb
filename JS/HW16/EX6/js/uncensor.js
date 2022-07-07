function uncensor(words,vowels)
{
    for (let i = 0; i < vowels.length; i++) {
        for (let i = 0; i < words.length; i++) 
        {
            if(words.includes('*') == true)
            {
                words = words.replace('*',vowels[i]);
            }
        }
    }
    return words;
}
function main ()
{
    console.log(uncensor("Wh*r* d*d my v*w*ls g*?","eeioeo"));
    console.log(uncensor("abcd",""));
    console.log(uncensor("*PP*RC*S*","UEAE"));

    
}
main();


