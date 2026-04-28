<?php
/**
 * Compunnel Theme - index.php
 *
 * This is a headless theme; the frontend is served by Next.js.
 * Direct WordPress template requests are redirected to the frontend.
 */

$frontend_url = defined('COMPUNNEL_FRONTEND_URL') ? COMPUNNEL_FRONTEND_URL : 'http://localhost:3000';
wp_redirect( $frontend_url . $_SERVER['REQUEST_URI'], 301 );
exit;
