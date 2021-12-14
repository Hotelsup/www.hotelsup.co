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
 

	<div id="primary-single-product" >
 
 
		<section id="sp_section1" class="section">

			<div class="container-sm">

				<header id="sq-header">	
					<div id="back_to_products"> <a href="<?php echo get_home_url(); ?>/our-products/savvy/">Back</a></div>


					<h1 class="module_title smaller"><?php the_title();?></h1>
				</header>	

				<div class="row justify-content-between">

					<div class="col-lg-5">

						


							<?php 
							$images = get_field('image_gallery');
							$size = 'full'; // (thumbnail, medium, large, full or custom size)
							if( $images ): ?>
								<div id="single_product_slide" class="single_product_slide">
									<?php foreach( $images as $image_id ): ?>
									 
										

											<div class="item">
												<div class="img"> <?php echo wp_get_attachment_image( $image_id, $size ); ?></div>

											</div>
		
									 
									<?php endforeach; ?>
									</div>
							<?php endif; ?>


					</div>

					<?php if( have_rows('product_detail_box') ): ?>
                          <?php while( have_rows('product_detail_box') ): the_row(); ?>   						
							<div class="col-lg-6 sp_des">
									

									<div>
									<?php the_sub_field('product_description') ; ?>
									</div>

									<div class="py-5">
									<p>Net Weight<?php the_sub_field('net_weight') ; ?></p>
									</div>

									<div class="img_group_logo">
										<img src="<?php the_sub_field('logo_icon') ; ?>" alt="">
									

									</div>
							</div>

							<?php endwhile;  ?>
                      <?php endif; ?>
                                    





				</div>

			</div>
		</section>


		<section id="sp_icon_sets" class="section">
			<div class="container-sm">

				<div class="row">


				
				<?php if( have_rows('icon_set_1') ): ?>
                          <?php while( have_rows('icon_set_1') ): the_row(); ?>   
						  <?php if(get_sub_field('title')) : ?>
						<div class="col-md-6 item">
							<h4> <img src="<?php echo get_stylesheet_directory_uri() ; ?>/assests/img/single_product/icon1.svg" alt="">
							<span><?php the_sub_field('title') ; ?></span>
							</h4>
							<p><?php the_sub_field('description') ; ?></p>

						</div>
						<?php endif; ?>

					<?php endwhile;  ?>
                      <?php endif; ?>
                                    


						
				<?php if( have_rows('icon_set_2') ): ?>
                          <?php while( have_rows('icon_set_2') ): the_row(); ?>   



					 <?php if(get_sub_field('title')) : ?>
							<div class="col-md-6 item">
								<h4> <img src="<?php echo get_stylesheet_directory_uri() ; ?>/assests/img/single_product/icon2.svg" alt="">
									<span><?php the_sub_field('title') ; ?></span>
								</h4>
								<p><?php the_sub_field('description') ; ?></p>

							</div>
					 <?php endif; ?>	

					
					<?php endwhile;  ?>
                      <?php endif; ?>





				</div>

			</div>
		</section>

		<?php if(get_field('image_large')) :?>				
		<section id="sp_step_sets" class="section">
			<div class="container">

				<div class="row">


						<div class="col-lg-6 left-img">
							<?php if(get_field('image_large')) :?>
								<div>
									<img src="<?php the_field('image_large') ; ?>" alt="">
								</div>

							 <?php endif; ?>


						</div>



						<?php if( have_rows('how_to') ): ?>
						<?php while( have_rows('how_to') ): the_row(); ?>   
 

								<div class="col-lg-6 right_text">

										<?php if( get_sub_field('title') ): ?>
										<h2 class="module_title smaller"><?php the_sub_field('title') ; ?></h2>
										<?php endif; ?>
										
										
										<div class="block">
											<?php the_sub_field('list') ; ?>
										</div>



										<?php if( have_rows('step') ) :?>
										<div id="step_blocks"  class="block">

											<h3>directions</h3>

											<?php while( have_rows('step') ):   the_row(); ?>
											
											<h4><?php the_sub_field('title') ; ?></h4>
											<p><?php the_sub_field('text') ; ?>
		</p>
		
											<?php endwhile;  ?>

										</div>
										<?php endif; ?>





								</div>


						<?php endwhile;  ?>
                      <?php endif; ?>



				</div>


			</div>
		</section>
		<?php endif; ?>




		<section id="sp_related_products" class="section">
			<div class="container-sm">

				<h2 class="module_title smaller">RELATED PRODUCTS</h2>
 						

				<?php $categories = get_the_terms($post->ID, 'product_category');
$category_id = $categories[0]->term_id;
$category_name = $categories[0]->name;  ?>

				<div id="sp_related_slide">


				

 	

							<?php



					 
							$terms = get_the_terms( $post->ID , 'product_category', 'string');				
							$args = array(

								'post_type' => 'product',
							 
								'order' => 'ASC',
						 

							 'tax_query' => array(
									array (
										'taxonomy' => 'product_category',
										'field' => 'id',
										'terms' => $category_id,
								 
									 
									)
								), 
								
							);
							$loop = new WP_Query( $args );



								?>
					 
							<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
								<div class="item_p_slide">
									 

									<?php if (get_field('product_image')) : ?>
									<div class="product_img">
										<a title="<?php the_title(); ?>" href="<?php the_permalink(); ?>"><img src="<?php the_field('product_image'); ?>"> </a>
										
									</div>
									<?php endif; ?>


									<div class="product__name">
									<a title="<?php the_title(); ?>" href="<?php the_permalink(); ?>">
										<?php the_title(); ?>
									</a>
									</div>
									 
								</div>
							<?php endwhile; wp_reset_query(); ?>
						 

				</div>


			</div>
		</section>


	 
	</div><!-- #primary -->

 
 
 

<?php get_footer(); ?>
