/*
    Select the brand, and a count of the brand from cars
        alias the count as brand_count
        group by the brand column
*/

-- SELECT brand, count(brand) AS brand_count FROM cars
--     GROUP BY brand;

/*
	Select the condition, and a count of the condition from cars
		group by the condition column
*/

-- SELECT condition, count(condition) FROM cars
--     GROUP BY condition;

/*
    Select:
      * the brand
      * a count of the brand 
      * and an average of the price for each brand
      * round the average down to the nearest number
      * alias the average as 'AVG' in your output
    From cars where
        the car has not been sold 
    Group the tabel by brand
*/

 SELECT brand, count(brand), FLOOR(AVG(price)) AS AVG 
    FROM cars
    WHERE sold IS FALSE 
    GROUP BY brand;