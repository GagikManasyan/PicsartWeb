function pizzaPoints(customers, n, y)
{
    let sorted_customers = [];
    for (customer in customers) 
    {
      if (customers[customer].filter(price => price >= y).length >= n) 
      {
        sorted_customers.push(customer);
      }
    }
    return sorted_customers.sort();
}

function main ()
{
    let customersObj = {
        "Batman":     [22, 30, 11, 17, 15, 52, 27, 12],
        "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
    }
    console.log(pizzaPoints(customersObj, 5, 20));
    console.log(pizzaPoints(customersObj, 3, 10));
    console.log(pizzaPoints(customersObj, 5, 100));
}
main();


