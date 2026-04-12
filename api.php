<?php
// Enable error reporting (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Return JSON
header("Content-Type: application/json");

// --- Database configuration ---
$host = "localhost";                // usually localhost on Namecheap
$user = "jibacnxt_jibawee";        // your full DB username
$pass = "Pumpkin1457!";            // your DB password
$db   = "jibacnxt_artandblog";     // your full DB name

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Get action parameter
$action = $_GET['action'] ?? '';

// --- GET POSTS ---
if ($action === 'getPosts') {
    $result = $conn->query("SELECT * FROM posts ORDER BY id DESC");

    if (!$result) {
        echo json_encode(["error" => "Query failed: " . $conn->error]);
        exit;
    }

    $posts = [];
    while ($row = $result->fetch_assoc()) {
        $posts[] = $row;
    }

    echo json_encode($posts);
    exit;
}

// --- LIKE POST ---
elseif ($action === 'likePost' && isset($_POST['id'])) {
    $id = intval($_POST['id']); // sanitize input

    if ($conn->query("UPDATE posts SET likes = likes + 1 WHERE id=$id")) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["error" => "Update failed: " . $conn->error]);
    }
    exit;
}

// --- INVALID REQUEST ---
else {
    echo json_encode(["error" => "Invalid request"]);
}

// Close connection
$conn->close();
