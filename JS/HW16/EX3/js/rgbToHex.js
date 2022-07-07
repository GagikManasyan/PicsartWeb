function ColorToHEX (color)
{
    let result = color.toString(16);
    return result;
}
function RGBtoHEX (red,green,blue)
{
    let result = "#" + ColorToHEX(red) + ColorToHEX(green) + ColorToHEX(blue);
    return result;
}
function main ()
{
    console.log(RGBtoHEX(0, 128, 192));
}
main();


