<?php
/**
 * Custom REST API Endpoints — Compunnel
 *
 * Namespace : compunnel/v1
 * Endpoints :
 *   GET /compunnel/v1/hero-slides
 *   GET /compunnel/v1/stats
 *   GET /compunnel/v1/client-logos
 *   GET /compunnel/v1/awards
 *   GET /compunnel/v1/site-settings
 *   GET /compunnel/v1/navigation
 *   POST /compunnel/v1/contact      (contact form submission)
 *
 * File: inc/api-endpoints.php
 */

if ( ! defined( 'ABSPATH' ) ) exit;

add_action( 'rest_api_init', 'compunnel_register_custom_endpoints' );

function compunnel_register_custom_endpoints(): void {
    $ns = 'compunnel/v1';

    /* ─── Hero Slides ─────────────────────────────────────────────────── */
    register_rest_route( $ns, '/hero-slides', [
        'methods'             => WP_REST_Server::READABLE,
        'callback'            => 'compunnel_get_hero_slides',
        'permission_callback' => '__return_true',
    ] );

    /* ─── Site Stats ──────────────────────────────────────────────────── */
    register_rest_route( $ns, '/stats', [
        'methods'             => WP_REST_Server::READABLE,
        'callback'            => 'compunnel_get_stats',
        'permission_callback' => '__return_true',
    ] );

    /* ─── Client Logos ────────────────────────────────────────────────── */
    register_rest_route( $ns, '/client-logos', [
        'methods'             => WP_REST_Server::READABLE,
        'callback'            => 'compunnel_get_client_logos',
        'permission_callback' => '__return_true',
    ] );

    /* ─── Awards ──────────────────────────────────────────────────────── */
    register_rest_route( $ns, '/awards', [
        'methods'             => WP_REST_Server::READABLE,
        'callback'            => 'compunnel_get_awards',
        'permission_callback' => '__return_true',
    ] );

    /* ─── Site Settings ───────────────────────────────────────────────── */
    register_rest_route( $ns, '/site-settings', [
        'methods'             => WP_REST_Server::READABLE,
        'callback'            => 'compunnel_get_site_settings',
        'permission_callback' => '__return_true',
    ] );

    /* ─── Navigation ──────────────────────────────────────────────────── */
    register_rest_route( $ns, '/navigation', [
        'methods'             => WP_REST_Server::READABLE,
        'callback'            => 'compunnel_get_navigation',
        'permission_callback' => '__return_true',
    ] );

    /* ─── Contact Form ────────────────────────────────────────────────── */
    register_rest_route( $ns, '/contact', [
        'methods'             => WP_REST_Server::CREATABLE,
        'callback'            => 'compunnel_handle_contact',
        'permission_callback' => '__return_true',
        'args'                => [
            'name'    => [ 'required' => true,  'sanitize_callback' => 'sanitize_text_field' ],
            'email'   => [ 'required' => true,  'sanitize_callback' => 'sanitize_email',      'validate_callback' => 'is_email' ],
            'company' => [ 'required' => false, 'sanitize_callback' => 'sanitize_text_field' ],
            'phone'   => [ 'required' => false, 'sanitize_callback' => 'sanitize_text_field' ],
            'message' => [ 'required' => true,  'sanitize_callback' => 'sanitize_textarea_field' ],
            'service' => [ 'required' => false, 'sanitize_callback' => 'sanitize_text_field' ],
        ],
    ] );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HERO SLIDES
   ═══════════════════════════════════════════════════════════════════════════ */
function compunnel_get_hero_slides(): WP_REST_Response {
    $cache_key = 'compunnel_hero_slides';
    $cached    = get_transient( $cache_key );
    if ( $cached !== false ) {
        return rest_ensure_response( $cached );
    }

    $posts = get_posts( [
        'post_type'      => 'hero_slide',
        'post_status'    => 'publish',
        'posts_per_page' => 10,
        'orderby'        => 'menu_order',
        'order'          => 'ASC',
    ] );

    $slides = [];
    foreach ( $posts as $post ) {
        $meta       = get_post_meta( $post->ID );
        $thumb_id   = get_post_thumbnail_id( $post->ID );
        $bg_image   = $thumb_id ? wp_get_attachment_image_url( $thumb_id, 'full' ) : '';

        $slides[] = [
            'id'       => $post->ID,
            'title'    => get_post_meta( $post->ID, '_slide_title', true ) ?: $post->post_title,
            'subtitle' => get_post_meta( $post->ID, '_slide_subtitle', true ) ?: '',
            'cta_text' => get_post_meta( $post->ID, '_slide_cta_text', true ) ?: '',
            'cta_url'  => get_post_meta( $post->ID, '_slide_cta_url', true ) ?: '',
            'bg_image' => get_post_meta( $post->ID, '_slide_bg_image', true ) ?: (string) $bg_image,
        ];
    }

    // Fall back to hard-coded defaults if no slides are in the DB yet
    if ( empty( $slides ) ) {
        $slides = compunnel_default_hero_slides();
    }

    set_transient( $cache_key, $slides, HOUR_IN_SECONDS );
    return rest_ensure_response( $slides );
}

/* ═══════════════════════════════════════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════════════════════════════════════ */
function compunnel_get_stats(): WP_REST_Response {
    $cache_key = 'compunnel_stats';
    $cached    = get_transient( $cache_key );
    if ( $cached !== false ) {
        return rest_ensure_response( $cached );
    }

    // Stats are stored as a serialized option for easy admin editing
    $stats = get_option( 'compunnel_stats', [] );

    if ( empty( $stats ) ) {
        $stats = [
            [ 'number' => '200+',  'label' => 'Enduring client partnerships',          'icon' => 'handshake' ],
            [ 'number' => '23%',   'label' => 'Of Fortune enterprises trust us',        'icon' => 'building' ],
            [ 'number' => '100+',  'label' => 'Successful digital transformations',     'icon' => 'rocket' ],
            [ 'number' => '1200+', 'label' => 'Leadership workshops conducted annually','icon' => 'graduation-cap' ],
        ];
    }

    set_transient( $cache_key, $stats, HOUR_IN_SECONDS );
    return rest_ensure_response( $stats );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CLIENT LOGOS
   ═══════════════════════════════════════════════════════════════════════════ */
function compunnel_get_client_logos(): WP_REST_Response {
    $cache_key = 'compunnel_client_logos';
    $cached    = get_transient( $cache_key );
    if ( $cached !== false ) {
        return rest_ensure_response( $cached );
    }

    $posts = get_posts( [
        'post_type'      => 'client_logo',
        'post_status'    => 'publish',
        'posts_per_page' => 50,
        'orderby'        => 'menu_order',
        'order'          => 'ASC',
    ] );

    $logos = [];
    foreach ( $posts as $post ) {
        $thumb_id = get_post_thumbnail_id( $post->ID );
        $logo_url = $thumb_id ? wp_get_attachment_image_url( $thumb_id, 'full' ) : '';
        if ( ! $logo_url ) {
            $logo_url = get_post_meta( $post->ID, '_logo_url', true );
        }
        if ( $logo_url ) {
            $logos[] = [
                'name'     => $post->post_title,
                'logo_url' => $logo_url,
            ];
        }
    }

    set_transient( $cache_key, $logos, HOUR_IN_SECONDS );
    return rest_ensure_response( $logos );
}

/* ═══════════════════════════════════════════════════════════════════════════
   AWARDS
   ═══════════════════════════════════════════════════════════════════════════ */
function compunnel_get_awards(): WP_REST_Response {
    $cache_key = 'compunnel_awards';
    $cached    = get_transient( $cache_key );
    if ( $cached !== false ) {
        return rest_ensure_response( $cached );
    }

    $posts = get_posts( [
        'post_type'      => 'award',
        'post_status'    => 'publish',
        'posts_per_page' => 20,
        'orderby'        => 'menu_order',
        'order'          => 'ASC',
    ] );

    $awards = [];
    foreach ( $posts as $post ) {
        $thumb_id  = get_post_thumbnail_id( $post->ID );
        $image_url = $thumb_id ? wp_get_attachment_image_url( $thumb_id, 'full' ) : '';
        if ( ! $image_url ) {
            $image_url = get_post_meta( $post->ID, '_award_image_url', true );
        }

        $awards[] = [
            'id'          => $post->ID,
            'title'       => $post->post_title,
            'description' => $post->post_excerpt ?: wp_trim_words( strip_tags( $post->post_content ), 20 ),
            'image_url'   => (string) $image_url,
        ];
    }

    set_transient( $cache_key, $awards, HOUR_IN_SECONDS );
    return rest_ensure_response( $awards );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SITE SETTINGS
   ═══════════════════════════════════════════════════════════════════════════ */
function compunnel_get_site_settings(): WP_REST_Response {
    $settings = [
        'site_name'        => get_bloginfo( 'name' ),
        'site_tagline'     => get_bloginfo( 'description' ),
        'frontend_url'     => get_option( 'compunnel_frontend_url', 'http://localhost:3000' ),
        'contact_email'    => get_option( 'compunnel_contact_email', 'contact@compunnel.com' ),
        'contact_phone'    => get_option( 'compunnel_contact_phone', '+1 (609) 606-9010' ),
        'hq_address'       => get_option( 'compunnel_hq_address', '4390 Route 1 North, Suite 302, Princeton, NJ 08540' ),
        'linkedin_url'     => get_option( 'compunnel_linkedin_url', 'https://www.linkedin.com/company/compunnel-software-group/mycompany/' ),
        'twitter_url'      => get_option( 'compunnel_twitter_url', 'https://twitter.com/Compunnelinc' ),
        'facebook_url'     => get_option( 'compunnel_facebook_url', 'https://www.facebook.com/CompunnelInc/' ),
        'youtube_url'      => get_option( 'compunnel_youtube_url', 'https://www.youtube.com/@CompunnelInc' ),
        'instagram_url'    => get_option( 'compunnel_instagram_url', 'https://www.instagram.com/compunnel_lnc/' ),
    ];

    return rest_ensure_response( $settings );
}

/* ═══════════════════════════════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════════════════════════════ */
function compunnel_get_navigation(): WP_REST_Response {
    $cache_key = 'compunnel_navigation';
    $cached    = get_transient( $cache_key );
    if ( $cached !== false ) {
        return rest_ensure_response( $cached );
    }

    $locations = get_nav_menu_locations();
    $menus     = [];

    foreach ( [ 'primary', 'footer-about', 'footer-services', 'footer-insights' ] as $location ) {
        if ( ! empty( $locations[ $location ] ) ) {
            $menu_id = $locations[ $location ];
            $items   = wp_get_nav_menu_items( $menu_id );
            if ( $items ) {
                $menus[ $location ] = compunnel_format_menu_items( $items );
            }
        }
    }

    set_transient( $cache_key, $menus, HOUR_IN_SECONDS );
    return rest_ensure_response( $menus );
}

/**
 * Build a nested menu tree from a flat WP_Post[] of nav menu items.
 *
 * @param WP_Post[] $items
 * @return array
 */
function compunnel_format_menu_items( array $items ): array {
    $tree  = [];
    $index = [];

    foreach ( $items as $item ) {
        $node = [
            'id'       => (int) $item->ID,
            'label'    => $item->title,
            'url'      => $item->url,
            'target'   => $item->target ?: '_self',
            'parent'   => (int) $item->menu_item_parent,
            'children' => [],
        ];
        $index[ $node['id'] ] = &$node;
        $tree[]               = &$node;
        unset( $node );
    }

    $nested = [];
    foreach ( $tree as &$node ) {
        if ( $node['parent'] && isset( $index[ $node['parent'] ] ) ) {
            $index[ $node['parent'] ]['children'][] = &$node;
        } else {
            $nested[] = &$node;
        }
    }
    unset( $node );

    return $nested;
}

/* ═══════════════════════════════════════════════════════════════════════════
   CONTACT FORM
   ═══════════════════════════════════════════════════════════════════════════ */
function compunnel_handle_contact( WP_REST_Request $request ): WP_REST_Response {
    // Basic honeypot / spam check
    if ( ! empty( $request->get_param( 'website' ) ) ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'Spam detected.' ], 400 );
    }

    $name    = $request->get_param( 'name' );
    $email   = $request->get_param( 'email' );
    $company = $request->get_param( 'company' ) ?: '';
    $phone   = $request->get_param( 'phone' )   ?: '';
    $service = $request->get_param( 'service' ) ?: 'General';
    $message = $request->get_param( 'message' );

    $to      = get_option( 'compunnel_contact_email', 'contact@compunnel.com' );
    $subject = "[Compunnel.com] New enquiry from {$name} — {$service}";

    $body  = "Name:    {$name}\n";
    $body .= "Email:   {$email}\n";
    $body .= "Company: {$company}\n";
    $body .= "Phone:   {$phone}\n";
    $body .= "Service: {$service}\n\n";
    $body .= "Message:\n{$message}\n";

    $headers = [
        "Content-Type: text/plain; charset=UTF-8",
        "Reply-To: {$name} <{$email}>",
    ];

    $sent = wp_mail( $to, $subject, $body, $headers );

    // Store submission as a post for CRM-like tracking
    $post_id = wp_insert_post( [
        'post_type'   => 'contact_submission',
        'post_title'  => "[{$service}] {$name} — " . current_time( 'mysql' ),
        'post_status' => 'private',
        'meta_input'  => [
            '_contact_name'    => $name,
            '_contact_email'   => $email,
            '_contact_company' => $company,
            '_contact_phone'   => $phone,
            '_contact_service' => $service,
            '_contact_message' => $message,
        ],
    ], true );

    if ( $sent ) {
        return rest_ensure_response( [
            'success' => true,
            'message' => 'Thank you! We will be in touch shortly.',
        ] );
    }

    return new WP_REST_Response( [
        'success' => false,
        'message' => 'There was a problem sending your message. Please email us directly at contact@compunnel.com.',
    ], 500 );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CACHE INVALIDATION
   Purge relevant transients when a post is saved / deleted.
   ═══════════════════════════════════════════════════════════════════════════ */
function compunnel_purge_cache( int $post_id ): void {
    $post_type = get_post_type( $post_id );
    $map = [
        'hero_slide'  => 'compunnel_hero_slides',
        'client_logo' => 'compunnel_client_logos',
        'award'       => 'compunnel_awards',
    ];

    if ( isset( $map[ $post_type ] ) ) {
        delete_transient( $map[ $post_type ] );
    }

    // Always flush navigation cache
    delete_transient( 'compunnel_navigation' );
}
add_action( 'save_post',   'compunnel_purge_cache' );
add_action( 'delete_post', 'compunnel_purge_cache' );

/* ═══════════════════════════════════════════════════════════════════════════
   DEFAULT DATA (static fallback when DB is empty)
   ═══════════════════════════════════════════════════════════════════════════ */
function compunnel_default_hero_slides(): array {
    return [
        [
            'id'       => 1,
            'title'    => 'Talent',
            'subtitle' => 'One partner to build, protect, and scale what\'s next.',
            'cta_text' => 'Explore Services',
            'cta_url'  => '/services/talent',
            'bg_image' => 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2026/03/17093035/slide-1-poster-img.webp',
        ],
        [
            'id'       => 2,
            'title'    => 'Ranked Top 50',
            'subtitle' => 'Powered by AI. Driven by People. Built for Impact.',
            'cta_text' => 'Learn More',
            'cta_url'  => '/about-us',
            'bg_image' => 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2026/03/17091657/slide-2-poster.webp',
        ],
        [
            'id'       => 3,
            'title'    => 'Stop Counting Hires,',
            'subtitle' => 'Get the ROI Playbook',
            'cta_text' => 'Download Now',
            'cta_url'  => '/whitepapers/turn-talent-spend-into-measurable-roi',
            'bg_image' => 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2026/03/17091650/slide-3-poster.webp',
        ],
        [
            'id'       => 4,
            'title'    => 'The Future of Cybersecurity',
            'subtitle' => 'Risk and Spend Dynamics 2026',
            'cta_text' => 'Download the Report',
            'cta_url'  => '/report/state-of-cybersecurity-2026',
            'bg_image' => 'https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2026/03/17091653/slide-4-poster.webp',
        ],
    ];
}
