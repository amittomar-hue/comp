<?php
/**
 * Compunnel — wp-config additions
 *
 * Add these constants to your wp-config.php BEFORE the "That's all, stop editing!" line.
 * This file should NOT be placed inside WordPress — it's documentation only.
 */

// ─── Environment ──────────────────────────────────────────────────────────────
define( 'WP_ENV', 'development' ); // or 'production'

// ─── Frontend URL (Next.js) ───────────────────────────────────────────────────
define( 'COMPUNNEL_FRONTEND_URL', 'http://localhost:3000' );
// Production: define( 'COMPUNNEL_FRONTEND_URL', 'https://www.compunnel.com' );

// ─── WordPress URLs ───────────────────────────────────────────────────────────
define( 'WP_HOME',    'http://localhost:8080' );
define( 'WP_SITEURL', 'http://localhost:8080' );

// ─── Security keys (generate at https://api.wordpress.org/secret-key/1.1/salt/) ──
// (replace with your own — these are placeholders)
define( 'AUTH_KEY',         'put your unique phrase here' );
define( 'SECURE_AUTH_KEY',  'put your unique phrase here' );
define( 'LOGGED_IN_KEY',    'put your unique phrase here' );
define( 'NONCE_KEY',        'put your unique phrase here' );
define( 'AUTH_SALT',        'put your unique phrase here' );
define( 'SECURE_AUTH_SALT', 'put your unique phrase here' );
define( 'LOGGED_IN_SALT',   'put your unique phrase here' );
define( 'NONCE_SALT',       'put your unique phrase here' );

// ─── Performance ──────────────────────────────────────────────────────────────
define( 'WP_CACHE',          true );
define( 'COMPRESS_SCRIPTS',  true );
define( 'COMPRESS_CSS',      true );
define( 'WP_POST_REVISIONS', 5 );    // Limit post revisions

// ─── REST API ─────────────────────────────────────────────────────────────────
// REST API is always enabled in this headless setup.
// Uncomment to disable cookie auth for API (use Application Passwords instead):
// define( 'REST_COOKIE_AUTH', false );

// ─── Debug (disable in production) ────────────────────────────────────────────
define( 'WP_DEBUG',         true  );
define( 'WP_DEBUG_LOG',     true  );
define( 'WP_DEBUG_DISPLAY', false );
define( 'SCRIPT_DEBUG',     false );
