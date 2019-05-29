// -- CREATE TABLE movie (
//     --   movie_id SERIAL, 
//     --   title TEXT, 
//     --   media_type_id INTEGER, 
//     --   FOREIGN KEY (media_type_id) REFERENCES media_type(media_type_id)
//     --   );
      
//     --   SELECT * FROM movie; 
    
//     -- INSERT INTO movie (title, media_type_id) 
//     -- VALUES ('Cinderella', 1); 
    
//     -- ALTER TABLE movie ADD COLUMN genre_id INTEGER REFERENCES genre(genre_id);
    
//     -- UPDATE movie SET genre_id=22 WHERE movie_id=1; 
    
//     -- SELECT album.title, artist.name
//     -- FROM album  
//     -- JOIN artist ON album.artist_id = artist.artist_id; 
    
//     -- SELECT * FROM Track 
//     -- WHERE genre_id IN (SELECT genre_id FROM genre WHERE name = 'Jazz' OR name = 'Blues'); 
    
//     -- UPDATE Employee SET Phone = null WHERE Employee_Id = 1;
    
//     -- SELECT * FROM Employee WHERE Employee_Id = 1; 
    
//     -- SELECT * FROM customer WHERE Company IS null; 
    
//     -- SELECT ar.artist_id, ar.name, COUNT(*)
//     -- FROM artist ar
//     -- JOIN album a ON ar.artist_id = a.artist_id
//     -- GROUP BY ar.artist_id;
    
//     -- SELECT ar.artist_id, ar.name, COUNT(*)
//     -- FROM artist ar
//     -- JOIN album as a ON ar.artist_id = a.artist_id
//     -- group BY ar.artist_id order by ar.artist_id desc;
    
//     -- SELECT * FROM artist ORDER BY artist.artist_id DESC; 
    
//     -- SELECT DISTINCT country FROM customer; 
    
//     -- SELECT * FROM customer WHERE fax IS null; 
//     -- DELETE FROM customer WHERE fax IS null; 
    