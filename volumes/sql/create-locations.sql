CREATE TABLE locations (
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    location_data longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
    created_at datetime NOT NULL DEFAULT current_timestamp(),
    updated_at datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
