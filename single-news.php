<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header(); ?>

 	


            <div id="primary-site"  >

					<section id="s_news_title" class="section" style="background-image: url('https://savvydev.flywheelsites.com/wp-content/uploads/2021/08/shutterstock_1282392631.png');background-size: cover;">
						
                    </section>
					
				
					<section id="single_news" class="section">

                        <div class="container" >
							<div class="news_back_btn">
								<a href="https://savvydev.flywheelsites.com/news-blogs/">Back</a>
							</div>
							
							<div class="news_subject">
								<h2><?php the_title(); ?></h2>
							</div>
							
							<div class="news_date">
								<p>
									<?php the_field('date'); ?>
								</p>
							</div>
							
							<div class="news_address">
								<?php the_field('address'); ?>
							</div>
							
							<div class="news_description">
								<?php the_content();?>
							</div>
							
						</div>

                    </section>
			

                   
              <?php include 'template_part/follow_our_social.php';?>
            </div><!-- #primary -->



<?php 
 

get_footer();
