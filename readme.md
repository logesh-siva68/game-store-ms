# About the Game store

This is for imaginary client who lives in a parallel universe who look for game store like Epic. So I am going to help him to develope the game store. **_Originally I want to learn microservices with node.js nothing much_**

# Tools and Techs

1.Node.js for backend
2.MongoDB and Postgres for Databases
3.Radis / Rabbit MQ for message brokers.
4.Angular for Frontend
4.Docker
5.AWS EC2 and AWS ECR

# user entities

1. name
2. address
3. phone number
4. email
5. gameProfiles
   - games owned
   - most purchased game category - this will be used for show suggestions
   - most searched game category - this will be used for show suggestions
   - wishlists

# game entities

1. game name
2. category
3. publishers
4. released date
5. game variants  
   5.1 variant name
   5.2 variant descriptions
   5.3 variant type
   5.4 price
6. platform
7. status

# orders

1. games
2. user id
3. ordered date
4. order status
5. quantity
6. shipping status
7. shipper name and contact
