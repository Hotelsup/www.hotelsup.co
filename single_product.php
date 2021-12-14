<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header(); ?>

 test

	<div id="primary" <?php astra_primary_class(); ?>>

		<?php astra_primary_content_top(); ?>

		<?php astra_content_loop(); ?>

        <div class="container">

            <h1>Gluten-Free Penne Pasta</h1>

        </div>

		<?php astra_primary_content_bottom(); ?>

	</div><!-- #primary -->

 
 
<?php endif ?>

<?php get_footer(); ?>
