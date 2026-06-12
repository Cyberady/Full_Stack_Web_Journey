/*

      Select the brand, model and year from cars table
        order by the brand

*/

-- SELECT brand, model, year FROM cars
--   ORDER BY brand;


/*
for reverse
*/


-- SELECT brand, model, year FROM cars
--   ORDER BY brand DESC;

/*
for another column to sort by
*/

-- SELECT brand, model, year FROM cars
--   ORDER BY brand DESC, year;


/*
    Select brand, model, condition and price from cars
      where the car is not sold
      and the condition is not 5
      order the table by condition in descending order
      and by price in ascending order
*/

SELECT brand, model, condition, price FROM cars
  WHERE sold IS FALSE
  AND condition != 5
  ORDER BY condition DESC, price;