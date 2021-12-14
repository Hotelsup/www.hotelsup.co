 <?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */



if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page();
	
}

/**
 * Filter the except length to 20 words.
 *
 * @param int $length Excerpt length.
 * @return int (Maybe) modified excerpt length.
 */
function wpdocs_custom_excerpt_length( $length ) {
    return 40;
}
add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length', 999 );


function my_wp_is_mobile() {

    static $is_mobile;

    if ( isset($is_mobile) )
        return $is_mobile;

    if ( empty($_SERVER['HTTP_USER_AGENT']) ) {
        $is_mobile = false;
    } elseif (
        strpos($_SERVER['HTTP_USER_AGENT'], 'Android') !== false
        || strpos($_SERVER['HTTP_USER_AGENT'], 'Silk/') !== false
        || strpos($_SERVER['HTTP_USER_AGENT'], 'Kindle') !== false
        || strpos($_SERVER['HTTP_USER_AGENT'], 'BlackBerry') !== false
        || strpos($_SERVER['HTTP_USER_AGENT'], 'Opera Mini') !== false ) {
            $is_mobile = true;
    } elseif (strpos($_SERVER['HTTP_USER_AGENT'], 'Mobile') !== false && strpos($_SERVER['HTTP_USER_AGENT'], 'iPad') == false) {
            $is_mobile = true;
    } elseif (strpos($_SERVER['HTTP_USER_AGENT'], 'iPad') !== false) {
        $is_mobile = false;
    } else {
        $is_mobile = false;
    }

    return $is_mobile;
    
}


 
function addscript() {
	
    wp_enqueue_style('bootstrap-css',   'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css');
    wp_enqueue_style('slick_slide',  'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
    wp_enqueue_style('slick_theme',  'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css');
    wp_enqueue_style('mobilemenu_css',   get_stylesheet_directory_uri() .'/plugin/pushy/css/pushy.css');
    wp_enqueue_style('wow_css',  get_stylesheet_directory_uri() . '/assests/css/animate.css');
    wp_enqueue_style('main-css',   get_stylesheet_directory_uri() . '/assests/css/main.css');
 
    wp_enqueue_style('responsive-css',   get_stylesheet_directory_uri() . '/assests/css/responsive.css');


   wp_enqueue_script('jquery_js','https://code.jquery.com/jquery-2.2.4.min.js');
    
	wp_enqueue_script('count_number1', 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js', NULL, 1.0, true);
    wp_enqueue_script('count_number2', 'https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js', NULL, 1.0, true);
   
   wp_enqueue_script('slickjs','https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', NULL, 1.0, true);
 
   wp_enqueue_script('mobilemenu_js',  get_stylesheet_directory_uri() . '/plugin/pushy/js/pushy.min.js', NULL, 1.0, true);
    wp_enqueue_script('wow_js',  get_stylesheet_directory_uri() . '/assests/js/wow.min.js', NULL, 1.0, true);
    wp_enqueue_script('bootstrap_js',  'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js', NULL, 1.0, true);
    wp_enqueue_script('typing',    get_stylesheet_directory_uri() . '/assests/js/typed.min.js', NULL, 1.0, true);
    wp_enqueue_script('counter', get_stylesheet_directory_uri() . '/assests/js/jquery.countup.min.js', NULL, 1.0, true);
    wp_enqueue_script('custom1_js', get_stylesheet_directory_uri() . '/assests/js/jscustom1.js', NULL, 1.0, true);

 
    



    
 
 
     /*  end */


	wp_localize_script('main_js', 'magicalData', array(
		'nonce' => wp_create_nonce('wp_rest'),
		'siteURL' => get_site_url()
	));
	
}

add_action('wp_enqueue_scripts', 'addscript');



function dm_display_wpjm_single_categories () {
    $terms = wp_get_post_terms( get_the_ID(), 'job_listing_category' );
    if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){
        echo '<ul>';
        foreach ( $terms as $term ) {
            echo '<li>' . '<a href="' . esc_url( get_term_link( $term ) ) . '">' . $term->name . '</a></li>';
        }
        echo '</ul>';
    }
}
add_shortcode('list_categories_single', 'dm_display_wpjm_single_categories');

add_theme_support( 'job-manager-templates' );




// redirect after appication

add_action( 'new_job_application', function( $application_id, $job_id ) {
    if ( is_object( $job_id ) ) {
      // We're in WP core's hook.
      return;
    }
    wp_safe_redirect( home_url( '/success-application' ) );
    exit;
  }, 999, 2 );function htdat_job_manager_alerts_alert_schedules ( $schedules ) {
      $schedules['monthly'] = array(
          'interval' => 86400 * 30,
          'display'  => __( 'Monthly', 'wp-job-manager-alerts' )
      );
  
      return $schedules;
  }
  
  add_filter('job_manager_alerts_alert_schedules', 'htdat_job_manager_alerts_alert_schedules');


  add_filter( 'submit_job_form_fields', 'gma_custom_submit_job_form_fields' );

function gma_custom_submit_job_form_fields( $fields ) {
    
 
    unset($fields['company']['company_website']);
    unset($fields['company']['company_tagline']);
    unset($fields['company']['company_video']);
    unset($fields['company']['company_twitter']);
    unset($fields['company']['company_logo']);

    return $fields;
}


add_theme_support( 'job-manager-templates' );




// Add your own function to filter the fields
add_filter( 'submit_job_form_fields', 'custom_submit_job_form_fields' );

// This is your function which takes the fields, modifies them, and returns them
// You can see the fields which can be changed here: https://github.com/mikejolley/WP-Job-Manager/blob/master/includes/forms/class-wp-job-manager-form-submit-job.php
function custom_submit_job_form_fields( $fields ) {

    // Here we target one of the job fields (job_title) and change it's label
    $fields['job']['_company_tagline']['label'] = "Custom Label";

    // And return the modified fields
    return $fields;
}



// Add your own function to filter the fields
add_filter( 'job_manager_job_listing_data_fields', 'custom_job_manager_job_listing_data_fields' );

// This is your function which takes the fields, modifies them, and returns them
// You can see the fields which can be changed here: https://github.com/mikejolley/WP-Job-Manager/blob/master/includes/admin/class-wp-job-manager-writepanels.php
function custom_job_manager_job_listing_data_fields( $fields ) {

    // Here we target one of the job fields (location) and change it's placeholder
    $fields['_company_tagline']['label'] = "Company Type";
    unset($fields['_job_location']);
    unset($fields['_featured']);
    unset($fields['_filled']);
    unset($fields['_field_cfwjm601']);


    // And return the modified fields
    return $fields;
}


add_filter( 'submit_job_form_fields', 'custom_submit_job_form_fields_dm' );

function custom_submit_job_form_fields_dm( $fields ) {
    // in this example, we remove the job_tags field
    unset($fields['job']['job_tags']);

    // And return the modified fields
    return $fields;
}


remove_action('wp_head', 'rel_canonical');




add_filter( 'rest_endpoints', function( $endpoints ){

    if ( isset( $endpoints['/wp/v2/users'] ) ) {

        unset( $endpoints['/wp/v2/users'] );

    }

    if ( isset( $endpoints['/wp/v2/users/(?P<id>[\d]+)'] ) ) {

        unset( $endpoints['/wp/v2/users/(?P<id>[\d]+)'] );

    }

    return $endpoints;

});


