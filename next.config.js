<?php
/**
 * Compunnel Admin Settings Page
 *
 * Provides a UI to manage site-wide options (frontend URL, contact email, stats, social links)
 * directly from wp-admin without any plugins.
 *
 * File: inc/admin-settings.php
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/* ─── Register menu ─────────────────────────────────────────────────────── */
function compunnel_admin_menu(): void {
    add_menu_page(
        'Compunnel Settings',
        'Compunnel',
        'manage_options',
        'compunnel-settings',
        'compunnel_settings_page',
        'dashicons-superhero-alt',
        2
    );

    add_submenu_page(
        'compunnel-settings',
        'General Settings',
        'General',
        'manage_options',
        'compunnel-settings',
        'compunnel_settings_page'
    );

    add_submenu_page(
        'compunnel-settings',
        'Stats',
        'Stats',
        'manage_options',
        'compunnel-stats',
        'compunnel_stats_page'
    );
}
add_action( 'admin_menu', 'compunnel_admin_menu' );

/* ─── Register settings ──────────────────────────────────────────────────── */
function compunnel_register_settings(): void {
    $options = [
        'compunnel_frontend_url',
        'compunnel_contact_email',
        'compunnel_contact_phone',
        'compunnel_hq_address',
        'compunnel_linkedin_url',
        'compunnel_twitter_url',
        'compunnel_facebook_url',
        'compunnel_youtube_url',
        'compunnel_instagram_url',
        'compunnel_stats',
    ];

    foreach ( $options as $option ) {
        register_setting( 'compunnel_settings_group', $option, [
            'sanitize_callback' => 'compunnel_sanitize_setting',
        ] );
    }
}
add_action( 'admin_init', 'compunnel_register_settings' );

function compunnel_sanitize_setting( $value ) {
    if ( is_array( $value ) ) return $value;
    return sanitize_text_field( $value );
}

/* ─── Settings page HTML ─────────────────────────────────────────────────── */
function compunnel_settings_page(): void {
    if ( ! current_user_can( 'manage_options' ) ) return;

    if ( isset( $_GET['settings-updated'] ) ) {
        add_settings_error( 'compunnel_messages', 'compunnel_saved', 'Settings saved.', 'updated' );
    }
    settings_errors( 'compunnel_messages' );
    ?>
    <div class="wrap">
        <h1>Compunnel Settings</h1>
        <form method="post" action="options.php">
            <?php settings_fields( 'compunnel_settings_group' ); ?>
            <table class="form-table" role="presentation">
                <?php compunnel_field( 'Frontend URL', 'compunnel_frontend_url', 'http://localhost:3000', 'url', 'The URL of the Next.js frontend (used for CORS & redirects).' ); ?>
                <?php compunnel_field( 'Contact Email', 'compunnel_contact_email', 'contact@compunnel.com', 'email', 'Where contact form submissions are emailed.' ); ?>
                <?php compunnel_field( 'Contact Phone', 'compunnel_contact_phone', '+1 (609) 606-9010' ); ?>
                <?php compunnel_field( 'HQ Address', 'compunnel_hq_address', '4390 Route 1 North, Suite 302, Princeton, NJ 08540', 'text', 'Displayed in the footer.' ); ?>
                <tr><th colspan="2"><h2 style="margin:0">Social Links</h2></th></tr>
                <?php compunnel_field( 'LinkedIn URL', 'compunnel_linkedin_url', 'https://www.linkedin.com/company/compunnel-software-group/', 'url' ); ?>
                <?php compunnel_field( 'Twitter/X URL', 'compunnel_twitter_url', 'https://twitter.com/Compunnelinc', 'url' ); ?>
                <?php compunnel_field( 'Facebook URL', 'compunnel_facebook_url', 'https://www.facebook.com/CompunnelInc/', 'url' ); ?>
                <?php compunnel_field( 'YouTube URL', 'compunnel_youtube_url', 'https://www.youtube.com/@CompunnelInc', 'url' ); ?>
                <?php compunnel_field( 'Instagram URL', 'compunnel_instagram_url', 'https://www.instagram.com/compunnel_lnc/', 'url' ); ?>
            </table>
            <?php submit_button( 'Save Settings' ); ?>
        </form>
    </div>
    <?php
}

function compunnel_field( string $label, string $name, string $default = '', string $type = 'text', string $desc = '' ): void {
    $value = esc_attr( get_option( $name, $default ) );
    echo "<tr>
        <th scope='row'><label for='{$name}'>{$label}</label></th>
        <td>
            <input type='{$type}' id='{$name}' name='{$name}' value='{$value}' class='regular-text' />
            " . ( $desc ? "<p class='description'>{$desc}</p>" : '' ) . "
        </td>
    </tr>";
}

/* ─── Stats page HTML ────────────────────────────────────────────────────── */
function compunnel_stats_page(): void {
    if ( ! current_user_can( 'manage_options' ) ) return;

    if ( isset( $_POST['compunnel_save_stats'] ) ) {
        check_admin_referer( 'compunnel_stats_nonce' );
        $stats = [];
        $numbers = $_POST['stat_number'] ?? [];
        $labels  = $_POST['stat_label']  ?? [];
        $icons   = $_POST['stat_icon']   ?? [];

        foreach ( $numbers as $i => $num ) {
            if ( ! empty( $num ) ) {
                $stats[] = [
                    'number' => sanitize_text_field( $num ),
                    'label'  => sanitize_text_field( $labels[ $i ] ?? '' ),
                    'icon'   => sanitize_text_field( $icons[ $i ]  ?? '' ),
                ];
            }
        }

        update_option( 'compunnel_stats', $stats );
        delete_transient( 'compunnel_stats' );
        echo '<div class="updated"><p>Stats saved.</p></div>';
    }

    $stats = get_option( 'compunnel_stats', [
        [ 'number' => '200+',  'label' => 'Enduring client partnerships',           'icon' => 'handshake' ],
        [ 'number' => '23%',   'label' => 'Of Fortune enterprises trust us',         'icon' => 'building' ],
        [ 'number' => '100+',  'label' => 'Successful digital transformations',      'icon' => 'rocket' ],
        [ 'number' => '1200+', 'label' => 'Leadership workshops conducted annually', 'icon' => 'graduation-cap' ],
    ] );
    ?>
    <div class="wrap">
        <h1>Compunnel — Homepage Stats</h1>
        <form method="post">
            <?php wp_nonce_field( 'compunnel_stats_nonce' ); ?>
            <table class="widefat striped">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Label</th>
                        <th>Icon (Lucide name)</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ( $stats as $i => $stat ) : ?>
                    <tr>
                        <td><input type="text" name="stat_number[]" value="<?php echo esc_attr( $stat['number'] ); ?>" class="regular-text" /></td>
                        <td><input type="text" name="stat_label[]"  value="<?php echo esc_attr( $stat['label'] ); ?>"  class="regular-text" /></td>
                        <td><input type="text" name="stat_icon[]"   value="<?php echo esc_attr( $stat['icon'] ); ?>"   class="regular-text" /></td>
                    </tr>
                    <?php endforeach; ?>
                    <!-- Extra empty row -->
                    <tr>
                        <td><input type="text" name="stat_number[]" value="" class="regular-text" placeholder="e.g. 500+" /></td>
                        <td><input type="text" name="stat_label[]"  value="" class="regular-text" placeholder="Label" /></td>
                        <td><input type="text" name="stat_icon[]"   value="" class="regular-text" placeholder="icon-name" /></td>
                    </tr>
                </tbody>
            </table>
            <?php submit_button( 'Save Stats', 'primary', 'compunnel_save_stats' ); ?>
        </form>
    </div>
    <?php
}

/* ─── Register custom post type for contact submissions ─────────────────── */
function compunnel_register_contact_submission_cpt(): void {
    register_post_type( 'contact_submission', [
        'labels'         => compunnel_labels( 'Contact Submission', 'Contact Submissions' ),
        'public'         => false,
        'show_ui'        => true,
        'show_in_menu'   => 'compunnel-settings',
        'supports'       => [ 'title' ],
        'capabilities'   => [
            'create_posts' => 'do_not_allow',
        ],
        'map_meta_cap'   => true,
        'menu_icon'      => 'dashicons-email-alt',
    ] );
}
add_action( 'init', 'compunnel_register_contact_submission_cpt' );

/* ─── Display contact submission meta in admin ────────────────────────── */
function compunnel_contact_meta_box(): void {
    add_meta_box(
        'compunnel_contact_details',
        'Submission Details',
        'compunnel_contact_meta_box_html',
        'contact_submission',
        'normal',
        'high'
    );
}
add_action( 'add_meta_boxes', 'compunnel_contact_meta_box' );

function compunnel_contact_meta_box_html( WP_Post $post ): void {
    $fields = [
        '_contact_name'    => 'Name',
        '_contact_email'   => 'Email',
        '_contact_company' => 'Company',
        '_contact_phone'   => 'Phone',
        '_contact_service' => 'Service Interest',
        '_contact_message' => 'Message',
    ];
    echo '<table class="form-table">';
    foreach ( $fields as $meta_key => $label ) {
        $value = esc_html( get_post_meta( $post->ID, $meta_key, true ) );
        $is_msg = $meta_key === '_contact_message';
        echo "<tr>
            <th>{$label}</th>
            <td>" . ( $is_msg ? "<pre style='white-space:pre-wrap'>{$value}</pre>" : $value ) . "</td>
        </tr>";
    }
    echo '</table>';
}

/* ─── Remove "Add New" for contact submissions ────────────────────────── */
function compunnel_remove_add_new_contact( string $post_type ): void {
    if ( 'contact_submission' === $post_type ) {
        global $wp_post_types;
        if ( isset( $wp_post_types['contact_submission'] ) ) {
            $wp_post_types['contact_submission']->cap->create_posts = 'do_not_allow';
        }
    }
}
add_action( 'current_screen', function() {
    global $pagenow;
    if ( 'post-new.php' === $pagenow && ( $_GET['post_type'] ?? '' ) === 'contact_submission' ) {
        wp_die( 'Contact submissions are created via the REST API only.' );
    }
} );
