
(function () {
	
	'use strict';

	var isMobile = {
		Android: async function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
			var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};
   
	
	// async function sw() {
	// 	 if ('serviceWorker' in navigator){
	  
	// 	   navigator.serviceWorker.register('sw.js');
	// 	   console.log('sw registered')
	// 		}
	// } sw().catch(function () {
	
	// 			console.log('not registered')
			
	// })
  

	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 280, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 280, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 1500) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function () {
		
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "slide",
			easing: "swing",
			direction: "vertical",

			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	// $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	// $(window).resize(function(){
	  	// 	$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	// });

	};

	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};

	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};

	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		counter();
		parallax();
		sliderMain();
		testimonialCarousel();
	
	});
}());



//SPECIFIC SAMPLE VIDEO SHOW
let VideoToggle = async function () {
		let videos = document.querySelectorAll('.video-modal');
		videos.forEach(function (e) {
			let parent = e.parentElement;
		   
			let each = async function () {
				parent.addEventListener('click', function (t) {
				let target = t.target;
				let specifics = target.parentElement
				let specificVideo = target.parentElement.parentElement.childNodes[1]
				let mother = specifics.parentElement
				let grandParent = specificVideo.parentElement.parentElement.childNodes[1]
				let btn = specificVideo.childNodes[3]
				let videocontrol = specificVideo.childNodes[1]
				let targetId = target.id
	
				if (targetId === 'select'){
					if (!specificVideo.classList.contains('.video-modal-show')) {
						specificVideo.classList.add('video-modal-show')
					}
					videocontrol.play()
					mother.classList.add('z-index')
					grandParent.classList.add('video-overlay-show')
				}
					
				//close video button
					async function closebtn() {
						btn.addEventListener('click', function () {
							specificVideo.classList.remove('video-modal-show')
							videocontrol.pause()
							grandParent.classList.remove('video-overlay-show')
							mother.classList.remove('z-index')
						})
						//OVERLAY FUNCTION
			
						grandParent.addEventListener('click', function () {
							specificVideo.classList.remove('video-modal-show')
							videocontrol.pause()
							grandParent.classList.remove('video-overlay-show')
							mother.classList.remove('z-index')
						})
					}closebtn().catch(function () {})
					
			})	
			}
			each().catch(function(){});
		})
}
VideoToggle().catch(function(){})
// LEARNING VIDEO LOGIC(STUDENT LEARNING DESK)
let learningLogic = function () {
	let lessonVideos = document.querySelectorAll('#single-video')
	let videos = document.querySelectorAll('video')
	let playbtns = document.querySelectorAll('.icon-play4')
	let pausebtns = document.querySelectorAll('.icon-pause3')
	let lessons = document.querySelector('.lessons')
	 
	lessonVideos.forEach(function (lesson){
		let video = lesson.querySelector('video')
		let videoPlayer = lesson.querySelector('.video-control')
		let pausebtn = lesson.querySelector('.icon-pause3')
		let playbtn = lesson.querySelector('.icon-play4')
		let overlay = document.querySelector('.lessons-o')
		let cover = lesson.querySelector('.cover')
		let progress = lesson.querySelector('.progress')
		let currenttime = lesson.querySelector('.time-stamp')
		let durationtime = lesson.querySelector('.time-stamp-duration')
		let overlayMessage = document.querySelector('.overlay-message')

		let displayHeight = `20px`
		let displayWidth = `${lesson.clientWidth}px`
		videoPlayer.style.zIndex = 2
		videoPlayer.style.height = displayHeight
		videoPlayer.style.width = displayWidth
		videoPlayer.style.background  = '#342561'
		videoPlayer.style.marginTop = '-46px'
		pausebtn.style.display = 'none'
		overlay.style.width = `${lessons.clientWidth}px`
		overlay.style.height = `${lessons.clientHeight}px`
		overlay.style.display = ``
		cover.style.width = `${video.clientWidth}px`
		cover.style.height = `${video.clientHeight}px`
		cover.style.position = 'absolute'
		cover.style.zIndex = 2
		
		playbtn.addEventListener('click', function () {
			video.play()
			playbtn.style.display = 'none'
			pausebtn.style.display = 'flex'

			//VIDEO PROGRESSS
			video.addEventListener('timeupdate', function () {
				////PROGRESSION
				progress.value = (video.currentTime / video.duration) * 100
				if (video.ended) {
					progress.value = 0
				}
				//hours
				let hours = Math.floor(video.currentTime / 3600)
				if (hours < 10) {
					hours = `0${hours}`
				}
				//minutes
				let mins = Math.floor(video.currentTime / 60)
				if (mins < 10) {
					mins = `0${mins}`
				}
				//seconds
				let secs = Math.floor(video.currentTime % 60 )
				if (secs < 10) {
					secs = `0${secs}`
				}
				// duration 
				let durhours = Math.floor(video.duration / 3600)
				if (durhours < 10) {
					durhours = `0${durhours}`
				}
				let durmins = Math.floor(video.duration / 60)
				if (durmins < 10) {
					durmins =`0${durmins}`
				}
				let dursecs = Math.floor(video.duration % 60)
				if (dursecs < 10) {
					dursecs = `0${dursecs}`
				}

				// ON VIDEO END
				if (video.ended) {
					pausebtn.style.display = 'none'
				}

				// VIDEO TIME STAMPS
				durationtime.textContent =`${durhours}:${durmins}:${dursecs}`
				currenttime.textContent = `${hours}:${mins}:${secs}`
			})
			
			// RANGE ON CHANGE
			progress.addEventListener('change', function () {
				video.currentTime = (progress.value * video.duration) / 100
			})
			videos.forEach(function (video) {
				video.pause()
			})
			if (video.paused) {
				playbtns.forEach(function (btn) {
					btn.style.display = 'flex'
				})
			}
			pausebtns.forEach(function (btn) {
				btn.style.display = 'none'
			})
			
			if (video.play() && (pausebtn.style.display = 'flex')){
				pausebtn.addEventListener('click', function () {
					video.pause()
					playbtn.style.display = 'flex'
					pausebtn.style.display = 'none'
				
				})
			}
			
			
		})
	
	
	})

	// TEACHER VIDEO REVIEW ( VIDEO PLAYER)
	
	let video = document.querySelectorAll('.one-video')
	let Allvideos = document.querySelectorAll('video')
	let Allplaybtns = document.querySelectorAll('.icon-play4')
	let Allpausebtns = document.querySelectorAll('.icon-pause3')


	video.forEach(function (lesson) {
		let cover = lesson.querySelector('.video-cover')
		cover.style.height = `${lesson.clientHeight-80}px`
		cover.style.width = `${lesson.clientWidth}px`
		cover.style.backgroundColor = `transparent`
		cover.style.position = `absolute`
		cover.style.zIndex = 3
		let playbut = lesson.querySelector('.icon-play4')
		let pausebut = lesson.querySelector('.icon-pause3')
		let video = lesson.querySelector('video')
		let move = lesson.querySelector('.move')
		let confirm = lesson.querySelector('.confirm')
		let deleteBtn = lesson.querySelector('.remove-video')
		let Yes = lesson.querySelector('.yes')
		let No = lesson.querySelector('.no')
			
			video.style.width = `${lesson.clientWidth}px`
			playbut.style.display = 'inline'
			pausebut.style.display = 'none'
			confirm.style.width = `${lesson.clientWidth-10}px`
			confirm.style.visibility = `hidden`
		
		playbut.addEventListener('click', function () {

				if (video.play()) {
					Allvideos.forEach(function (videos) {
						video.play()
						videos.pause()
					})
					Allplaybtns.forEach(function (btn) {
						btn.style.display = 'inline'
						playbut.style.display = 'none'
					})
					Allpausebtns.forEach(function (btn) {
						btn.style.display = 'none'
						pausebut.style.display = 'inline'
					})
				}
		
				video.addEventListener('timeupdate', function () {
					if (video.ended) {
						pausebut.style.display = 'none'
						playbut.style.display = 'inline'
					}
					move.value = (video.currentTime / video.duration) * 100
					if (video.ended) {
						move.value = 0
					}
			// 	move.addEventListener('change', function () {
			// 		video.currentTime = (move.value * video.duration) / 100
			// 			})
			})
			
			
			
		})
		pausebut.addEventListener('click', function () {
			video.pause()
			pausebut.style.display = 'none'
			playbut.style.display = 'inline'
		})

		deleteBtn.addEventListener('click', function () {
			confirm.style.visibility = 'visible'
		})
		Yes.addEventListener('click', function () {
			let target = confirm.parentElement
			target.innerHTML = ''
			target.style.display = 'none'
		})
		No.addEventListener('click', function () {
			confirm.style.visibility = 'hidden'
		})
	})
 
}
learningLogic()

// Teacher video panel  expansion and reduction
function expandReduce() {
	let AllSubjects = document.querySelectorAll('.home-display')

	AllSubjects.forEach(function (subject) {
		let Allgrade10Videos = subject.querySelectorAll('#grade-10')
		let Allgrade11Videos = subject.querySelectorAll('#grade-11')
		let Allgrade12Videos = subject.querySelectorAll('#grade-12')

		let Allgrade10btns = subject.querySelectorAll('.grade-10')
		let Allgrade11btns = subject.querySelectorAll('.grade-11')
		let Allgrade12btns = subject.querySelectorAll('.grade-12')
		
	
		Allgrade10btns.forEach(function (btn) {
			btn.style.color = 'white'
			btn.addEventListener('click', function () {
				btn.parentElement.parentElement.childNodes[9].style.display = ''
				btn.parentElement.parentElement.childNodes[11].style.display = 'none'
				btn.parentElement.parentElement.childNodes[13].style.display = 'none'
				btn.parentElement.parentElement.childNodes[6].childNodes[3].style.background ='#131921'
				btn.parentElement.parentElement.childNodes[6].childNodes[5].style.background ='#131921'
				btn.style.background = 'steelblue'

				
				// SCROOL TO HEAD POSITION
				let position = btn.parentElement.parentElement.childNodes[9].offsetTop
				document.documentElement.scrollTo(0, `${position-220}`)
			})
		})
		Allgrade11btns.forEach(function (btn) {
			btn.style.color = 'white'
			btn.addEventListener('click', function () {
				btn.parentElement.parentElement.childNodes[9].style.display = 'none'
				btn.parentElement.parentElement.childNodes[11].style.display = ''
				btn.parentElement.parentElement.childNodes[13].style.display = 'none'
				let color1 = btn.parentElement.parentElement.childNodes[6].childNodes[1]
				color1.style.background = '#131921'
				btn.parentElement.parentElement.childNodes[6].childNodes[5].style.background = '#131921'
				btn.style.background = 'steelblue'
				// SCROOL TO HEAD POSITION
				let position = btn.parentElement.parentElement.childNodes[11].offsetTop
				document.documentElement.scrollTo(0, `${position-220}`)
			})
		})
		
		Allgrade12btns.forEach(function (btn) {
			btn.style.color = 'white'
			btn.addEventListener('click', function () {
				btn.parentElement.parentElement.childNodes[9].style.display = 'none'
				btn.parentElement.parentElement.childNodes[11].style.display = 'none'
				btn.parentElement.parentElement.childNodes[13].style.display = ''
				let color = btn.parentElement.parentElement.childNodes[6].childNodes[1]
				color.style.background = '#131921'
				btn.parentElement.parentElement.childNodes[6].childNodes[3].style.background = '#131921'
				btn.style.background ='steelblue'
				// SCROOL TO HEAD POSITION
				let position = btn.parentElement.parentElement.childNodes[13].offsetTop
				document.documentElement.scrollTo(0, `${position-220}`)
			})
		})
		
		// let CloseAllReviews = VideoReviews10.childNodes[10]
		Allgrade10Videos.forEach(function (grade10Video) {
			grade10Video.style.display = 'none'
			//MONTHS
			let videos = grade10Video.querySelectorAll('video')
			let month1 = grade10Video.querySelectorAll('.month1')
			let month2 = grade10Video.querySelectorAll('.month2')
			let month3 = grade10Video.querySelectorAll('.month3')
			let Seemonth1 = grade10Video.children[2]
			let Seemonth2 = grade10Video.children[3]
			let Seemonth3 = grade10Video.children[4]
			let closeVideosbtn = grade10Video.querySelectorAll('.close-videos')
			
			// SHOW VIDEOS OF EACH MONTH
			month1.forEach(function (month1) {
				month1.style.display = 'none'
				Seemonth1.addEventListener('click', function (btn) {
					month1.style.display = ''
					// let parent = month1.offsetTop
					// document.documentElement.scrollTo(0, `${parent - 280}`)
				})
			})
			
			month2.forEach(function (month2) {
				month2.style.display = 'none'
				Seemonth2.addEventListener('click', function (btn) {
					month2.style.display = ''
					// let parent = month2.offsetTop
					// document.documentElement.scrollTo(0, `${parent - 280}`)
				})
			})
			
			month3.forEach(function (month3) {
				month3.style.display = 'none'
				Seemonth3.addEventListener('click', function (btn) {
					month3.style.display = ''
					// //PAGE SCROLL BACK TO TARGET SUBJECT DISPLAY
					// let parent = month3.offsetTop
					// document.documentElement.scrollTo(0, `${parent- 280}`)
				})
			})
			
		//SHOW VIDEOS Reviews  OF EACH GRADE
			closeVideosbtn.forEach(function (closebtn) {
				closebtn.addEventListener('click', function () {
					
					grade10Video.style.display = 'none'

					month1.forEach(function (month1) {
								month1.style.display = 'none'
			
							})
					month2.forEach(function (month2) {
								month2.style.display = 'none'
			
							})
					month3.forEach(function (month3) {
								month3.style.display = 'none'
			
					})
					
					// STOP VIDEO FROM PLAYING
					videos.forEach(function (video) {
						video.pause()
					})
					//PAGE SCROLL BACK TO TARGET SUBJECT DISPLAY
					let parent = closebtn.parentElement.parentElement.offsetTop
					document.documentElement.scrollTo(0, `${parent- 180}`)
				})
			})

			
		})

			//GRADE 11 VIDEOS 
		Allgrade11Videos.forEach(function (grade11Video) {
			grade11Video.style.display = 'none'
			let videos = grade11Video.querySelectorAll('video')
			let month1 = grade11Video.querySelectorAll('.month1')
			let month2 = grade11Video.querySelectorAll('.month2')
			let month3 = grade11Video.querySelectorAll('.month3')
			let Seemonth1 = grade11Video.children[2]
			let Seemonth2 = grade11Video.children[3]
			let Seemonth3 = grade11Video.children[4]
			let closeVideosbtn = grade11Video.querySelectorAll('.close-videos')
			
			
			/// SHOW VIDEOS OF EACH MONTH
			month1.forEach(function (month1) {
				month1.style.display = 'none'
				Seemonth1.addEventListener('click', function (btn) {
					month1.style.display = ''
					// let parent = month1.offsetTop
					// document.documentElement.scrollTo(0, `${parent - 280}`)
				})
			})

			month2.forEach(function (month2) {
				month2.style.display = 'none'
				Seemonth2.addEventListener('click', function (btn) {
					month2.style.display = ''
					// let parent = month2.offsetTop
					// document.documentElement.scrollTo(0, `${parent - 280}`)
				})
			})
			
			month3.forEach(function (month3) {
				month3.style.display = 'none'
				Seemonth3.addEventListener('click', function (btn) {
					month3.style.display = ''
					// let parent = month3.offsetTop
					// document.documentElement.scrollTo(0, `${parent - 280}`)
				})
			})

			closeVideosbtn.forEach(function (closebtn) {
				closebtn.addEventListener('click', function () {
					
					grade11Video.style.display = 'none'

					month1.forEach(function (month1) {
								month1.style.display = 'none'
			
							})
					month2.forEach(function (month2) {
								month2.style.display = 'none'
			
							})
					month3.forEach(function (month3) {
								month3.style.display = 'none'
			
					})
					// STOP VIDEOS FROM PLAYING 
					videos.forEach(function (video) {
						video.pause()
					})
					//PAGE SCROLL BACK TO TARGET SUBJECT DISPLAY
					let parent = closebtn.parentElement.parentElement.offsetTop
					document.documentElement.scrollTo(0, `${parent- 180}`)
				})
			})
		})
	 // GRADE 12 VIDEOS
		Allgrade12Videos.forEach(function (grade12Video) {
			grade12Video.style.display = 'none'
			let videos = grade12Video.querySelectorAll('video')
			let month1 = grade12Video.querySelectorAll('.month1')
			let month2 = grade12Video.querySelectorAll('.month2')
			let month3 = grade12Video.querySelectorAll('.month3')
			let Seemonth1 = grade12Video.children[2]
			let Seemonth2 = grade12Video.children[3]
			let Seemonth3 = grade12Video.children[4]
			let closeVideosbtn = grade12Video.querySelectorAll('.close-videos')
			
			/// SHOW VIDEOS OF EACH MONTH
			month1.forEach(function (month1) {
				month1.style.display = 'none'
				Seemonth1.addEventListener('click', function () {
					month1.style.display = ''
					// let parent = month1.offsetTop
					// document.documentElement.scrollTo(0, `${parent - 280}`)
				})
			})

			month2.forEach(function (month2) {
				month2.style.display = 'none'
				Seemonth2.addEventListener('click', function () {
					month2.style.display = ''
					// let parent = month2.offsetTop
					// document.documentElement.scrollTo(0, `${parent - 280}`)
				})
			})
			
			month3.forEach(function (month3) {
				month3.style.display = 'none'
				Seemonth3.addEventListener('click', function () {
					month3.style.display = ''
					// let parent = month3.offsetTop
					// document.documentElement.scrollTo(0, `${parent - 280}`)
				})
			})
			// cLOSE BUTTONS
			closeVideosbtn.forEach(function (closebtn) {
				closebtn.addEventListener('click', function () {
					
					grade12Video.style.display = 'none'

					month1.forEach(function (month1) {
								month1.style.display = 'none'
			
							})
					month2.forEach(function (month2) {
								month2.style.display = 'none'
			
							})
					month3.forEach(function (month3) {
								month3.style.display = 'none'
			
					})
					// STOP VIDEOS FROM PLAYING
					videos.forEach(function (video) {
						video.pause()
					})
					//PAGE SCROLL BACK TO TARGET SUBJECT DISPLAY
					let parent = closebtn.parentElement.parentElement.offsetTop
					document.documentElement.scrollTo(0, `${parent- 180}`)
				})
			})
		})
	
	})

}
expandReduce();
	  

	//TEACHERS DASH BOARD FUNCTIONALITY
(async function () {
	let UploadPanel = document.querySelector('.upload')
	let paymentsPanel = document.querySelector('.payments-cnt')
	let listPanel = document.querySelector('.students')
	let HomePanel = document.querySelector('.home-display')
	let Chargepanel = document.querySelector('.charge')
	let mesagespanel = document.querySelector('.msgpanel')
	
	//dash border buttons
	let home = document.querySelector('.dash-home')
	let Payments = document.querySelector('.dash-Payments')
	let Students = document.querySelector('.dash-students')
	let uploadNewLesson = document.querySelector('.upload-lesson')
	let Chargebtn = document.querySelector('.dash-charge-per-month')
	let messages = document.querySelector('.tmsg')

	listPanel.style.display = 'none'
	UploadPanel.style.display = 'none'
	paymentsPanel.style.display = 'none'
	Chargepanel.style.display = 'none'
	mesagespanel.style.display = 'none'
	
	function toggleDash() {
		// displaying the required panel
		//home button
		home.addEventListener('click', function () {
			listPanel.style.display = 'none'
			UploadPanel.style.display = 'none'
			paymentsPanel.style.display = 'none'
			HomePanel.style.display = ''
			Chargepanel.style.display = 'none'
			mesagespanel.style.display = 'none'
		})
		//payments button
		Payments.addEventListener('click', function () {
			listPanel.style.display = 'none'
			UploadPanel.style.display = 'none'
			paymentsPanel.style.display = ''
			HomePanel.style.display = 'none'
			Chargepanel.style.display = 'none'
			mesagespanel.style.display = 'none'
		})
		//messages button
		messages.addEventListener('click', function () {
			listPanel.style.display = 'none'
			UploadPanel.style.display = 'none'
			paymentsPanel.style.display = 'none'
			HomePanel.style.display = 'none'
			Chargepanel.style.display = 'none'
			mesagespanel.style.display = ''
		})
		//students button
		Students.addEventListener('click', function () {
			listPanel.style.display = ''
			UploadPanel.style.display = 'none'
			paymentsPanel.style.display = 'none'
			HomePanel.style.display = 'none'
			Chargepanel.style.display = 'none'
			mesagespanel.style.display = 'none'
		})
		//upload button
		uploadNewLesson.addEventListener('click', function () {
			listPanel.style.display = 'none'
			UploadPanel.style.display = ''
			paymentsPanel.style.display = 'none'
			HomePanel.style.display = 'none'
			Chargepanel.style.display = 'none'
			mesagespanel.style.display = 'none'
		})
		//upload button
		Chargebtn.addEventListener('click', function () {
			listPanel.style.display = 'none'
			UploadPanel.style.display = 'none'
			paymentsPanel.style.display = 'none'
			HomePanel.style.display = 'none'
			Chargepanel.style.display = ''
			mesagespanel.style.display = 'none'
		})
	} toggleDash()


	// PAYMENTS FUNCTIONALITY (TEACHER PANEL)
	
	let monthPayments = document.querySelectorAll('.month-payments')
	let StaticIcon = document.querySelectorAll('.icon-chart-pie')
	let CloseBtn = document.querySelectorAll('.close-static')

	
	monthPayments.forEach(function (month) {
		month.style.display = 'none'
	})
	CloseBtn.forEach(function (btn) {
		btn.style.display = 'none'	
	})
	StaticIcon.forEach(function (icon) {
		icon.addEventListener('click', function (e) {
				e.target.parentElement.parentElement.querySelector('.month-payments').style.display = ''
			e.target.parentElement.parentElement.querySelector('.close-static').style.display = ''
			
			e.target.parentElement.parentElement.querySelector('.close-static').addEventListener('click', function () {
				let parent = e.target.parentElement.parentElement.offsetTop	
				e.target.parentElement.parentElement.querySelector('.month-payments').style.display = 'none'
				e.target.parentElement.parentElement.querySelector('.close-static').style.display = 'none'
				document.documentElement.scrollTo(0, `${parent-200}`)
			})
		})
		
	})

	// TEACHER VIDEO UPLOAD FUNCTIONALITY

	let input = document.getElementById('input')
	input.addEventListener('change', function (event) {
		if (event.target.files.length > 0) {
			let  videosrc = URL.createObjectURL(event.target.files[0])
			let preview = document.getElementById('video-src')
			preview.src = videosrc
		}
	})
})().catch(function(){});


// DYNAMIC TEXT TO ALL PAGES
	(function () {
	//ACADEMY NAME
document.querySelectorAll('.academy-name').forEach(function (e) {
	e.textContent = 'Paclass academy'
})
	// ABOUT TEXT
		document.querySelectorAll('.row-pb-md div p').forEach(function (e) {
			e.textContent = `Paclass is established to make online education and online teaching effective, reliable, informative and interactive by connecting students to qualified educators (Teachers).`
			e.style.color = 'gray'
})
	
	})()

// Student learning desk panel
async function DeskDisDisplay() {
	let QnA = document.querySelector('.answers')
	let Question = document.querySelector('.ask-question')
	QnA.style.display = 'none'
	Question.style.display = 'none'

	// Desk Dashboard buttons
	let homeBtn = document.querySelector('.std-home')
	let QnABtn = document.querySelector('.std-QnA')
	
	homeBtn.style.backgroundColor = 'darkslateblue'
	QnABtn.addEventListener('click', function () {
		document.querySelector('#subject-list-title').style.display = 'none';
		document.querySelector('.subject-display').style.display = 'none';
		Question.style.display = ''
		QnA.style.display = ''
		QnA.style.marginBottom = `${50}px`
		QnABtn.style.backgroundColor = 'darkslateblue'
		homeBtn.style.backgroundColor = 'gray'
	})
	homeBtn.addEventListener('click', function () {
		document.querySelector('#subject-list-title').style.display = '';
		document.querySelector('.subject-display').style.display = '';
		Question.style.display = 'none'
		QnA.style.display = 'none'
		QnABtn.style.backgroundColor = 'gray'
		homeBtn.style.backgroundColor = 'darkslateblue'
	})

	// ASKING A QUESTION
	function ask() {
		let askBtn = document.querySelector('.send-question')
		let InputValue = document.querySelector('.')
	}ask()
} DeskDisDisplay().catch(function(){});
			
// CREATE ACCOUNT SHOW 
async function createAccount() {
	document.querySelector('.create').addEventListener('click', function () {
	document.querySelector('.login-form').style.display = 'none'
	document.querySelector('.forgot-p').style.display = 'none'
	document.querySelector('.create').style.display = 'none'
	document.querySelector('.create-account').style.display = 'block'
})
}createAccount().catch(function(){})
async function resetPassword() {
	document.querySelector('.forgot-p').addEventListener('click', function () {
	document.querySelector('.login-form').style.display = 'none'
	document.querySelector('.forgot-p').style.display = 'none'
	document.querySelector('.create').style.display = 'none'
	document.querySelector('.create-account').style.display = 'none'
	document.querySelector('.show-fg-p').style.display = 'block'	
})
}resetPassword().catch(function(){})
// SHOW LOGIN PANEL

document.querySelectorAll('.dir-btn').forEach(function (e) {
	e.addEventListener('click', function () {
	window.location.replace('login.html')
})
})
document.querySelectorAll('#dir-btn').forEach(function (e) {
	e.addEventListener('click', function () {
	window.location.replace('../login.html')
})
})
document.querySelectorAll('.back-login').forEach(function(e){
e.addEventListener('click', function () {
	window.location.reload()
})
}) 

//	 FLUTTER WAVE PAYMENTS

// -input