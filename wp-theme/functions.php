<?php
/**
 * Compunnel Theme Functions
 * Registers all custom post types, taxonomies, ACF fields, and REST API extensions.
 */

// ─── REST API: allow all origins ──────────────────────────────────────────────
add_action('init', function () {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
});

// ─── Custom Post Types ────────────────────────────────────────────────────────

function compunnel_register_cpts() {

    $cpts = [
        'hero_slides'     => ['Hero Slides',     'Hero Slide',      'dashicons-slides'],
        'site_stats'      => ['Site Stats',       'Site Stat',       'dashicons-chart-bar'],
        'client_logos'    => ['Client Logos',     'Client Logo',     'dashicons-images-alt2'],
        'awards'          => ['Awards',           'Award',           'dashicons-awards'],
        'case_studies'    => ['Case Studies',     'Case Study',      'dashicons-portfolio'],
        'press_releases'  => ['Press Releases',   'Press Release',   'dashicons-megaphone'],
        'service_pages'   => ['Service Pages',    'Service Page',    'dashicons-admin-tools'],
        'industry_pages'  => ['Industry Pages',   'Industry Page',   'dashicons-building'],
        'partner_pages'   => ['Partner Pages',    'Partner Page',    'dashicons-networking'],
        'leadership'      => ['Leadership Team',  'Leader',          'dashicons-groups'],
        'jobs'            => ['Jobs',             'Job',             'dashicons-id'],
        'ventures'        => ['Ventures',         'Venture',         'dashicons-lightbulb'],
    ];

    foreach ($cpts as $slug => [$plural, $singular, $icon]) {
        register_post_type($slug, [
            'labels' => [
                'name'               => $plural,
                'singular_name'      => $singular,
                'add_new'            => "Add New $singular",
                'add_new_item'       => "Add New $singular",
                'edit_item'          => "Edit $singular",
            ],
            'public'              => true,
            'show_in_rest'        => true,
            'supports'            => ['title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'],
            'menu_icon'           => $icon,
            'rest_base'           => $slug,
        ]);
    }
}
add_action('init', 'compunnel_register_cpts');

// ─── Taxonomies ───────────────────────────────────────────────────────────────

function compunnel_register_taxonomies() {
    // Industry taxonomy (shared across services, case studies, jobs)
    register_taxonomy('industry', ['case_studies', 'jobs', 'service_pages'], [
        'labels'       => ['name' => 'Industries', 'singular_name' => 'Industry'],
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite'      => ['slug' => 'industry'],
    ]);

    // Service taxonomy
    register_taxonomy('service_type', ['case_studies', 'press_releases'], [
        'labels'       => ['name' => 'Service Types', 'singular_name' => 'Service Type'],
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite'      => ['slug' => 'service-type'],
    ]);

    // Insight type (blog, ebook, whitepaper, video, webinar, event, infographic)
    register_taxonomy('insight_type', ['post'], [
        'labels'       => ['name' => 'Insight Types', 'singular_name' => 'Insight Type'],
        'hierarchical' => false,
        'show_in_rest' => true,
        'rewrite'      => ['slug' => 'insight-type'],
    ]);
}
add_action('init', 'compunnel_register_taxonomies');

// ─── ACF Field Groups ─────────────────────────────────────────────────────────
// Requires ACF Pro plugin. Fields are registered programmatically so they can
// be version-controlled here rather than in the DB.

add_action('acf/init', function () {

    if (!function_exists('acf_add_local_field_group')) return;

    // Hero Slides
    acf_add_local_field_group([
        'key'      => 'group_hero_slides',
        'title'    => 'Hero Slide Fields',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'hero_slides']]],
        'fields'   => [
            ['key' => 'field_cta_label',           'label' => 'CTA Label',           'name' => 'cta_label',           'type' => 'text'],
            ['key' => 'field_cta_href',            'label' => 'CTA URL',             'name' => 'cta_href',            'type' => 'url'],
            ['key' => 'field_secondary_cta_label', 'label' => 'Secondary CTA Label', 'name' => 'secondary_cta_label', 'type' => 'text'],
            ['key' => 'field_secondary_cta_href',  'label' => 'Secondary CTA URL',   'name' => 'secondary_cta_href',  'type' => 'url'],
        ],
    ]);

    // Site Stats
    acf_add_local_field_group([
        'key'      => 'group_site_stats',
        'title'    => 'Stat Fields',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'site_stats']]],
        'fields'   => [
            ['key' => 'field_stat_value', 'label' => 'Value (e.g. 30+)', 'name' => 'value', 'type' => 'text'],
            ['key' => 'field_stat_icon',  'label' => 'Icon (lucide name)', 'name' => 'icon', 'type' => 'text'],
        ],
    ]);

    // Client Logos
    acf_add_local_field_group([
        'key'      => 'group_client_logos',
        'title'    => 'Client Logo Fields',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'client_logos']]],
        'fields'   => [
            ['key' => 'field_client_url', 'label' => 'Client Website URL', 'name' => 'client_url', 'type' => 'url'],
        ],
    ]);

    // Awards
    acf_add_local_field_group([
        'key'      => 'group_awards',
        'title'    => 'Award Fields',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'awards']]],
        'fields'   => [
            ['key' => 'field_award_year', 'label' => 'Year', 'name' => 'year', 'type' => 'text'],
        ],
    ]);

    // Case Studies
    acf_add_local_field_group([
        'key'      => 'group_case_studies',
        'title'    => 'Case Study Fields',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'case_studies']]],
        'fields'   => [
            ['key' => 'field_cs_industry', 'label' => 'Industry',         'name' => 'industry', 'type' => 'text'],
            ['key' => 'field_cs_service',  'label' => 'Service',          'name' => 'service',  'type' => 'text'],
            ['key' => 'field_cs_results',  'label' => 'Results (one per line)', 'name' => 'results', 'type' => 'textarea'],
        ],
    ]);

    // Service Pages
    acf_add_local_field_group([
        'key'      => 'group_service_pages',
        'title'    => 'Service Page Fields',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'service_pages']]],
        'fields'   => [
            ['key' => 'field_sp_hero_headline',  'label' => 'Hero Headline',              'name' => 'hero_headline',  'type' => 'text'],
            ['key' => 'field_sp_hero_subtext',   'label' => 'Hero Subtext',               'name' => 'hero_subtext',   'type' => 'textarea'],
            ['key' => 'field_sp_stats',          'label' => 'Stats JSON',                 'name' => 'stats',          'type' => 'textarea'],
            ['key' => 'field_sp_features',       'label' => 'Features JSON',              'name' => 'features',       'type' => 'textarea'],
            ['key' => 'field_sp_benefits',       'label' => 'Benefits JSON',              'name' => 'benefits',       'type' => 'textarea'],
            ['key' => 'field_sp_how_it_works',   'label' => 'How It Works JSON',          'name' => 'how_it_works',   'type' => 'textarea'],
            ['key' => 'field_sp_sub_services',   'label' => 'Sub-Services JSON',          'name' => 'sub_services',   'type' => 'textarea'],
        ],
    ]);

    // Industry Pages
    acf_add_local_field_group([
        'key'      => 'group_industry_pages',
        'title'    => 'Industry Page Fields',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'industry_pages']]],
        'fields'   => [
            ['key' => 'field_ip_hero_headline', 'label' => 'Hero Headline',    'name' => 'hero_headline', 'type' => 'text'],
            ['key' => 'field_ip_hero_subtext',  'label' => 'Hero Subtext',     'name' => 'hero_subtext',  'type' => 'textarea'],
            ['key' => 'field_ip_stats',         'label' => 'Stats JSON',       'name' => 'stats',         'type' => 'textarea'],
            ['key' => 'field_ip_challenges',    'label' => 'Challenges JSON',  'name' => 'challenges',    'type' => 'textarea'],
            ['key' => 'field_ip_solutions',     'label' => 'Solutions JSON',   'name' => 'solutions',     'type' => 'textarea'],
        ],
    ]);

    // Leadership
    acf_add_local_field_group([
        'key'      => 'group_leadership',
        'title'    => 'Leader Fields',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'leadership']]],
        'fields'   => [
            ['key' => 'field_leader_job_title', 'label' => 'Job Title', 'name' => 'job_title', 'type' => 'text'],
            ['key' => 'field_leader_linkedin',  'label' => 'LinkedIn URL', 'name' => 'linkedin', 'type' => 'url'],
            ['key' => 'field_leader_order',     'label' => 'Display Order', 'name' => 'order', 'type' => 'number'],
        ],
    ]);

    // Jobs
    acf_add_local_field_group([
        'key'      => 'group_jobs',
        'title'    => 'Job Fields',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'jobs']]],
        'fields'   => [
            ['key' => 'field_job_location',   'label' => 'Location',   'name' => 'location',   'type' => 'text'],
            ['key' => 'field_job_type',       'label' => 'Job Type',   'name' => 'job_type',   'type' => 'select',
             'choices' => ['Full-time' => 'Full-time', 'Part-time' => 'Part-time', 'Contract' => 'Contract', 'Remote' => 'Remote']],
            ['key' => 'field_job_department', 'label' => 'Department', 'name' => 'department', 'type' => 'text'],
            ['key' => 'field_job_apply_url',  'label' => 'Apply URL',  'name' => 'apply_url',  'type' => 'url'],
        ],
    ]);

    // Partner Pages
    acf_add_local_field_group([
        'key'      => 'group_partner_pages',
        'title'    => 'Partner Page Fields',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'partner_pages']]],
        'fields'   => [
            ['key' => 'field_pp_hero_headline',   'label' => 'Hero Headline',      'name' => 'hero_headline',   'type' => 'text'],
            ['key' => 'field_pp_hero_subtext',    'label' => 'Hero Subtext',       'name' => 'hero_subtext',    'type' => 'textarea'],
            ['key' => 'field_pp_offerings',       'label' => 'Offerings JSON',     'name' => 'offerings',       'type' => 'textarea'],
            ['key' => 'field_pp_certifications',  'label' => 'Certifications JSON','name' => 'certifications',  'type' => 'textarea'],
        ],
    ]);
});

// ─── Expose ACF fields in REST API ───────────────────────────────────────────

add_action('rest_api_init', function () {
    $cpts_with_acf = [
        'hero_slides', 'site_stats', 'client_logos', 'awards',
        'case_studies', 'press_releases', 'service_pages', 'industry_pages',
        'partner_pages', 'leadership', 'jobs', 'ventures',
    ];

    foreach ($cpts_with_acf as $cpt) {
        register_rest_field($cpt, 'acf', [
            'get_callback' => function ($post) {
                return function_exists('get_fields') ? get_fields($post['id']) : [];
            },
            'schema' => ['type' => 'object'],
        ]);
    }
});

// ─── Increase REST API per_page max ──────────────────────────────────────────

add_filter('rest_post_query', function ($args, $request) {
    $per_page = $request->get_param('per_page');
    if ($per_page && $per_page > 100) {
        $args['posts_per_page'] = 100;
    }
    return $args;
}, 10, 2);

// ─── Theme support ────────────────────────────────────────────────────────────

add_action('after_setup_theme', function () {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
});

// ─── Featured image in REST API ───────────────────────────────────────────────

add_filter('rest_prepare_post', 'compunnel_add_featured_image_to_rest', 10, 3);
add_filter('rest_prepare_hero_slides', 'compunnel_add_featured_image_to_rest', 10, 3);
add_filter('rest_prepare_case_studies', 'compunnel_add_featured_image_to_rest', 10, 3);
add_filter('rest_prepare_leadership', 'compunnel_add_featured_image_to_rest', 10, 3);
add_filter('rest_prepare_awards', 'compunnel_add_featured_image_to_rest', 10, 3);
add_filter('rest_prepare_jobs', 'compunnel_add_featured_image_to_rest', 10, 3);

function compunnel_add_featured_image_to_rest($response, $post, $request) {
    if ($post->post_type && has_post_thumbnail($post->ID)) {
        $img = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full');
        if ($img) {
            $response->data['featured_image_url'] = $img[0];
        }
    }
    return $response;
}
