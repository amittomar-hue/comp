<?php
/**
 * Admin Settings Page — Compunnel Headless Config
 */

add_action('admin_menu', function () {
    add_options_page(
        'Compunnel Headless Settings',
        'Compunnel Settings',
        'manage_options',
        'compunnel-settings',
        'compunnel_settings_page'
    );
});

add_action('admin_init', function () {
    register_setting('compunnel_settings_group', 'compunnel_frontend_url');
    register_setting('compunnel_settings_group', 'compunnel_revalidate_secret');

    add_settings_section('compunnel_main', 'Headless Configuration', null, 'compunnel-settings');

    add_settings_field('frontend_url', 'Frontend URL', function () {
        $val = get_option('compunnel_frontend_url', 'http://localhost:3000');
        echo '<input type="url" name="compunnel_frontend_url" value="' . esc_attr($val) . '" class="regular-text">';
    }, 'compunnel-settings', 'compunnel_main');

    add_settings_field('revalidate_secret', 'Revalidate Secret Token', function () {
        $val = get_option('compunnel_revalidate_secret', '');
        echo '<input type="text" name="compunnel_revalidate_secret" value="' . esc_attr($val) . '" class="regular-text">';
        echo '<p class="description">Used to trigger Next.js ISR cache revalidation on publish.</p>';
    }, 'compunnel-settings', 'compunnel_main');
});

function compunnel_settings_page() {
    ?>
    <div class="wrap">
        <h1>Compunnel Headless Settings</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('compunnel_settings_group');
            do_settings_sections('compunnel-settings');
            submit_button();
            ?>
        </form>
    </div>
    <?php
}

// ─── Trigger Next.js revalidation on post save ────────────────────────────────

add_action('save_post', function ($post_id) {
    if (wp_is_post_revision($post_id) || wp_is_post_autosave($post_id)) return;

    $frontend = get_option('compunnel_frontend_url', 'http://localhost:3000');
    $secret   = get_option('compunnel_revalidate_secret', '');

    if (!$secret) return;

    wp_remote_post("$frontend/api/revalidate", [
        'body'    => json_encode(['secret' => $secret, 'post_id' => $post_id]),
        'headers' => ['Content-Type' => 'application/json'],
        'timeout' => 5,
        'blocking' => false,
    ]);
}, 10, 1);
