function topNote (array)
{
    let new_students = [];
    let max;
    for (let i = 0; i < array.length; i++) 
    {
        let obj = {};
        max = Math.max(...array[i].notes);
        Object.defineProperty(obj, "name", 
        {
            value: array[i].name,
        });
        Object.defineProperty(obj, 'topGrade', 
        {
            value: max,
        });
        new_students.push(obj);
    }
    return new_students;
    
}
function main ()
{
    const students = 
    [
        { "name": "John",    "notes": [3, 5, 4] },
        { "name": "Max",     "notes": [1, 4, 6] },
        { "name": "Zygmund", "notes": [1, 2, 3] }
    ];
    console.log(topNote(students));
    console.log("done");
}
main();


