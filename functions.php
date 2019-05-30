function my_scripts() {
wp_enqueue_style( 'style-name', get_template_directory_uri() . '/css/style.css', array(), '1.0.0', 'all' );
wp_enqueue_script( 'script-name', get_template_directory_uri() . '/js/setting.js', array( 'jquery' ), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'my_scripts' );

//レスポンシブイメージを無効にする
function disable_srcset( $sources ) { return false; }
add_filter( 'wp_calculate_image_srcset', 'disable_srcset' );

<?php

/**
 * ウィジェットエリアを定義します。
 */
register_sidebar(array(

    'name'          => 'デモサイトのサイドバー',
    'id'            => 'primary-widget-area',
    'description'   => 'サイドバーに表示されるウィジェットエリアです。',
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h3 class="widget-title">',
    'after_title'   => '</h3>',

));