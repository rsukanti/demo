jQuery(function ($) {

  // Testimonial carousel
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    navSpeed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    margin: 10,
    nav: true,
    navText : ['<span class="ti-arrow-right"></span>','<span class="ti-arrow-left"></span>']
  });

  /*------------------------------------------------------------------------------*/
	/* Insights Tabs Section
	/*------------------------------------------------------------------------------*/

	$(document).ready(function () {
		// Map of tab names to corresponding links
		const links = {
			blog: "https://www.extnoc.com/blog/",
			resources: "https://www.extnoc.com/resources/",
			learn: "https://www.extnoc.com/learn/"
		};

		// Handle tab click event
		$(".insights-sec .tab-button").on("click", function () {
			const tabId = $(this).data("tab");

			// Remove active class from all buttons
			$(".insights-sec .tab-button").removeClass("active");
			$(this).addClass("active");

			// Fade out all tab content
			$(".insights-sec .tab-content.active").fadeOut(200, function () {
				// Remove active class from all contents
				$(".insights-sec .tab-content").removeClass("active");

				// Fade in the selected tab content
				$("#" + tabId).fadeIn(200).addClass("active");
			});

			// Update the dynamic link
			$("#current-link")
				.text(`Go to ${$(this).text()}`)
				.attr("href", links[tabId]);

		});
	});

    /*------------------------------------------------------------------
        Year
    ------------------------------------------------------------------*/
	$(function(){
		var theYear = new Date().getFullYear();
		$('#year').html(theYear);
	});



});