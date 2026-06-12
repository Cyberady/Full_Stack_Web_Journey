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

    Show results where the count is > 1
*/

--  SELECT brand, count(brand), FLOOR(AVG(price)) AS AVG 
--     FROM cars
--     WHERE sold IS FALSE 
--     GROUP BY brand
--     HAVING count(brand) > 1;

/*
    Select:
        * year
        * a count of cars from that year, aliased as a car_count
        * the maximum price
        * the minimum price
    From the table cars
        Where the car has been sold
    group by year
        only show years where more than one car has been sold from that year
    order the result by car_count
*/

SELECT year, 
    count(year) AS car_count, 
    MAX(price), 
    MIN(price)
FROM cars
WHERE sold IS TRUE
GROUP BY year
HAVING count(year) > 1
ORDER BY car_count;