<?php
/**
 * The header for Astra Theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?><!DOCTYPE html>
<?php astra_html_before(); ?>
<html <?php language_attributes(); ?>>
<head>
<?php astra_head_top(); ?>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="https://gmpg.org/xfn/11">


<?php wp_head(); ?>

<?php astra_head_bottom(); ?>




</head>

<body <?php astra_schema_body(); ?> <?php body_class(); ?>>
<?php astra_body_top(); ?>
<?php wp_body_open(); ?>


		<button class="menu-btn" id="mobile_menu"> </button>

        <!-- Pushy Menu -->
        <nav class="pushy pushy-left" data-focus="#first-link">
            <div class="pushy-content">


				<?php wp_nav_menu( array(
					'menu' => 'main_menu_th',
					'depth'   => 2
				) ); ?>

				 <div id="lange_mobile_bt"> 
				<?php echo do_shortcode('[wpml_language_selector_widget  flags=0 native=1 translated=0]') ; ?>
				</div>
 
            </div>
        </nav>

        <!-- Site Overlay -->
        <div class="site-overlay"></div>




		




<div 
<?php
	echo astra_attr(
		'site',
		array(
			'id'    => 'page',
			'class' => 'hfeed site',
		)
	);
	?>
>
	<a class="skip-link screen-reader-text" href="#content"><?php echo esc_html( astra_default_strings( 'string-header-skip-link', false ) ); ?></a>





		<?php if ( my_wp_is_mobile() ) : ?>

				<div id="logo_mobile"><img width="34" height="42" src="<?php echo get_home_url(); ?>/wp-content/uploads/2021/09/cropped-logo.png" class="custom-logo" alt="Hotels"></div>
	 

		<?php endif; ?>	


		<?php 
			astra_header_before(); 

			astra_header(); 

			astra_header_after();

			astra_content_before(); 
			?>



	<div id="content" class="site-content">
	
		<?php astra_content_top(); ?>
