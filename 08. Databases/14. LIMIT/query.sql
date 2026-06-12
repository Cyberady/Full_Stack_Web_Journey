/*
	Select the brand, model, color and price from cars
		order the results by the price in descending order
    limit the result to 1
*/

-- SELECT brand, model, color, price FROM cars
--   ORDER BY price DESC
--   LIMIT 1;

/*
	Select the brand, model, color and price from cars
    where the color is a shade of 'red'
    and sold is false 
		order by price
    limit the result to 5
*/

SELECT brand, model, color, price FROM cars
  WHERE color LIKE '%red%'
  AND sold IS FALSE
  ORDER BY price
  LIMIT 5;