<?php
/**
 * CORS handling for Compunnel headless WordPress setup.
 * Drop this in mu-plugins/ or require it from functions.php.
 */

add_action('init', 'compunnel_handle_cors', 0);

function compunnel_handle_cors() {
    $allowed_origins = [
        'http://localhost:3000',
        'https://compunnel.com',
        'https://www.compunnel.com',
    ];

    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    if (in_array($origin, $allowed_origins, true)) {
        header("Access-Control-Allow-Origin: $origin");
    } else {
        header('Access-Control-Allow-Origin: *');
    }

    header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Authorization, Content-Type, X-WP-Nonce');

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header('HTTP/1.1 200 OK');
        exit();
    }
}
