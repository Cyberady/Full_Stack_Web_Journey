/*
	Set the sold column to true for the Ford Escort RS2000
*/

-- UPDATE cars SET
--    sold = TRUE
-- WHERE brand = 'Ford'
--    AND model = 'Escort RS2000';

/*
	Update the record for the Aston Martin DB4 with ID 14
		set the condition to 5
		and the price to 465000
*/

-- UPDATE cars SET
--    condition = 5,
--    price = 465000
-- WHERE id = 14;


/*
	Set the condition to 1
      and the price to $10000
   where the car's brand is Porsche
      and sold is false 
*/

UPDATE cars SET
   condition = 1,
   price = 10000
WHERE brand = 'Porsche'
AND sold IS FALSE