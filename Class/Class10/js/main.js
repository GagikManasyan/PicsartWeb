function reverseOdd(str)
{
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) 
    {
        if(words[i].length % 2 != 0)
        {
            words[i] = words[i].split("").reverse().join("");
        }
        
    }
    return words;
}
function checkGame(arr)
{
    if(arr[0] == arr[1])
    {
        return 2;
    }
    else if (arr[0] == "R" && arr[1] == "S")
    {
        return 0;
    }
    else if (arr[0] == "S" && arr[1] == "R")
    {
        return 1;
    }
    else if (arr[0] == "P" && arr[1] == "R")
    {
        return 0;
    }
    else if (arr[0] == "R" && arr[1] == "P")
    {
        return 1;
    }
    else if (arr[0] == "S" && arr[1] == "P")
    {
        return 0;
    }
    else if (arr[0] == "P" && arr[1] == "S")
    {
        return 1;
    }
}
function calculateScore(plays)
{
    let player1_counter = 0;
    let player2_counter = 0;
    for (let i = 0; i < plays.length; i++) 
    {
        if(checkGame(plays[i]) == 2)
        {
            player1_counter++;
            player2_counter++;
        }
        else if (checkGame(plays[i]) == 0)
        {
            player1_counter++;
        }
        else if (checkGame(plays[i]) == 1)
        {
            player2_counter++;
        }
    }
    if(player1_counter > player2_counter)
    {
        return "Abigail wins";
    }
    else if (player1_counter < player2_counter)
    {
        return "Bensen wins";
    }
    else if (player1_counter == player2_counter)
    {
        return "TIE";
    }
    

}
function main ()
{
    

}
main();