-- Drop tables if they exist
DROP TABLE IF EXISTS Spins;
DROP TABLE IF EXISTS Prizes;
DROP TABLE IF EXISTS Pubs;

-- Create Pubs table
CREATE TABLE Pubs (
    id SERIAL PRIMARY KEY,
    pub_name TEXT NOT NULL,
    pub_short_name TEXT NOT NULL
);

-- Insert mock data into Pubs table
INSERT INTO Pubs (pub_name, pub_short_name) VALUES
('Pub A', 'PA'),
('Pub B', 'PB'),
('Pub C', 'PC');

-- Create Prizes table
CREATE TABLE Prizes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    date_added DATE DEFAULT CURRENT_DATE,
    status VARCHAR(10) CHECK (status IN ('live', 'paused')),
    payout_frequency FLOAT,
    pub_id INT,
    FOREIGN KEY (pub_id) REFERENCES Pubs(id)
);

-- Insert mock data into Prizes table
INSERT INTO Prizes (name, description, status, payout_frequency, pub_id) VALUES
('Free beer', 'A free pint of beer from our house taps', 'live', 100.50, 1, "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"),
('50% off a meal', 'Half price meals from the menu', 'paused', 75.25, 2, "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"),
('2 for 1 glass of wine', 'On any house wines only', 'live', 50.75, 3, "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"),
('10% off a full priced meal', 'Not available with any other offer', 'live', 50.75, 3, "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"),
('2 for 1 house sprits', 'Between 6 and 10pm', 'live', 50.75, 3, "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png");

-- Create Spins table
CREATE TABLE Spins (
    id SERIAL PRIMARY KEY,
    pub_id INT NOT NULL,
    prize_id INT,
    spin_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pub_id) REFERENCES Pubs(id),
    FOREIGN KEY (prize_id) REFERENCES Prizes(id)
);

-- Insert mock data into Spins table
INSERT INTO Spins (pub_id, prize_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(1, 2),
(2, 1);
