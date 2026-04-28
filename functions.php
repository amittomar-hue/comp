<?php
/**
 * CORS Configuration for Headless WordPress
 *
 * Allows the Next.js frontend to fetch from the WP REST API
 * without browser CORS errors.
 *
 * File: inc/cors.php
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Add CORS headers to all REST API responses.
 */
function compunnel_add_cors_headers(): void {
    $allowed_origins = compunnel_get_allowed_origins();
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    if ( in_array( $origin, $allowed_origins, true ) ) {
        header( "Access-Control-Allow-Origin: {$origin}" );
    } elseif ( defined( 'WP_ENV' ) && WP_ENV === 'development' ) {
        // In development allow any localhost origin
        if ( str_starts_with( $origin, 'http://localhost' ) ) {
            header( "Access-Control-Allow-Origin: {$origin}" );
        }
    }

    header( 'Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS' );
    header( 'Access-Control-Allow-Credentials: true' );
    header( 'Access-Control-Allow-Headers: Authorization, Content-Type, X-WP-Nonce, X-Requested-With' );
    header( 'Access-Control-Max-Age: 86400' ); // 24 hours
}
add_action( 'rest_api_init', 'compunnel_add_cors_headers' );

/**
 * Handle preflight OPTIONS requests.
 */
function compunnel_handle_preflight(): void {
    if ( 'OPTIONS' === $_SERVER['REQUEST_METHOD'] ) {
        compunnel_add_cors_headers();
        status_header( 200 );
        exit;
    }
}
add_action( 'init', 'compunnel_handle_preflight' );

/**
 * Returns the list of allowed frontend origins.
 */
function compunnel_get_allowed_origins(): array {
    return array_filter( [
        get_option( 'compunnel_frontend_url', '' ),
        defined( 'COMPUNNEL_FRONTEND_URL' ) ? COMPUNNEL_FRONTEND_URL : '',
        'http://localhost:3000',
        'https://www.compunnel.com',
        'https://compunnel.com',
        'https://compunnel.vercel.app',
    ] );
}
